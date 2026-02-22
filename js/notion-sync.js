const API_BASE = '/api';
window.useNotion = false;
let notionSyncing = false;

async function checkNotionStatus() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    const data = await res.json();
    return data;
  } catch (e) {
    return { notionConfigured: false };
  }
}

async function fetchNotionRecords() {
  const res = await fetch(`${API_BASE}/records`);
  if (!res.ok) throw new Error('获取失败');
  return res.json();
}

async function createNotionRecord(record) {
  const res = await fetch(`${API_BASE}/records`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  });
  if (!res.ok) throw new Error('创建失败');
  return res.json();
}

async function updateNotionRecord(notionId, record) {
  const res = await fetch(`${API_BASE}/records/${notionId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  });
  if (!res.ok) throw new Error('更新失败');
  return res.json();
}

async function deleteNotionRecord(notionId) {
  const res = await fetch(`${API_BASE}/records/${notionId}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('删除失败');
  return res.json();
}

async function testNotionConfig(apiKey, databaseId) {
  const res = await fetch(`${API_BASE}/test-config`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiKey, databaseId })
  });
  return res.json();
}

function loadFromStorage() {
  return JSON.parse(localStorage.getItem('coffee-records') || '[]');
}

function saveToStorage(records) {
  localStorage.setItem('coffee-records', JSON.stringify(records));
}

async function syncRecords() {
  if (!window.useNotion || notionSyncing) return;
  
  notionSyncing = true;
  updateSyncStatus('syncing');
  
  try {
    const notionRecords = await fetchNotionRecords();
    const localRecords = loadFromStorage();
    
    const merged = mergeRecords(localRecords, notionRecords);
    saveToStorage(merged);
    
    if (typeof renderRecords === 'function') renderRecords();
    if (typeof updateStats === 'function') updateStats();
    
    updateSyncStatus('synced');
    if (typeof showToast === 'function') {
      showToast('✅ 已同步 Notion');
    }
  } catch (e) {
    console.error('同步失败:', e);
    updateSyncStatus('error');
    if (typeof showToast === 'function') {
      showToast('❌ 同步失败: ' + e.message);
    }
  } finally {
    notionSyncing = false;
  }
}

function mergeRecords(local, notion) {
  const merged = [];
  const seen = new Map();
  
  notion.forEach(r => {
    seen.set(r.notionId || r.id, r);
  });
  
  local.forEach(r => {
    if (!r.notionId) {
      seen.set(r.id, r);
    }
  });
  
  return Array.from(seen.values()).sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
}

function updateSyncStatus(status) {
  const indicator = document.getElementById('sync-indicator');
  if (!indicator) return;
  
  indicator.className = 'sync-indicator ' + status;
  
  if (status === 'syncing') {
    indicator.innerHTML = '⟳ 同步中...';
  } else if (status === 'synced') {
    indicator.innerHTML = '✓ 已同步';
  } else if (status === 'error') {
    indicator.innerHTML = '⚠️ 同步失败';
  } else if (status === 'ready') {
    indicator.innerHTML = '○ 就绪';
  } else {
    indicator.innerHTML = '○ 离线';
  }
}

function toggleNotion(enabled) {
  window.useNotion = enabled;
  localStorage.setItem('useNotion', enabled ? 'true' : 'false');
  
  if (enabled) {
    syncRecords();
  } else {
    updateSyncStatus('offline');
  }
}

function openNotionConfig() {
  document.getElementById('notion-config-modal').classList.add('active');
  
  const savedApiKey = localStorage.getItem('notionApiKey') || '';
  const savedDbId = localStorage.getItem('notionDatabaseId') || '';
  
  document.getElementById('config-api-key').value = savedApiKey;
  document.getElementById('config-database-id').value = savedDbId;
  document.getElementById('config-status').className = 'config-status';
  document.getElementById('config-status').textContent = '';
}

function closeNotionConfig() {
  document.getElementById('notion-config-modal').classList.remove('active');
}

async function saveNotionConfig() {
  const apiKey = document.getElementById('config-api-key').value.trim();
  const databaseId = document.getElementById('config-database-id').value.trim();
  
  if (!apiKey || !databaseId) {
    document.getElementById('config-status').textContent = '请填写 API Key 和数据库 ID';
    document.getElementById('config-status').className = 'config-status error';
    return;
  }
  
  // 保存到 localStorage
  localStorage.setItem('notionApiKey', apiKey);
  localStorage.setItem('notionDatabaseId', databaseId);
  
  document.getElementById('config-status').textContent = '正在测试连接...';
  document.getElementById('config-status').className = 'config-status';
  
  try {
    // 先测试配置
    const testRes = await testNotionConfig(apiKey, databaseId);
    
    if (testRes.success) {
      // 发送到服务器保存配置
      await fetch(`${API_BASE}/save-config`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey, databaseId })
      });
      
      document.getElementById('config-status').textContent = '✅ 连接成功';
      document.getElementById('config-status').className = 'config-status success';
      
      closeNotionConfig();
      
      // 更新状态为就绪
      updateSyncStatus('ready');
      
      // 如果同步开关打开，重新同步
      if (window.useNotion) {
        syncRecords();
      }
    } else {
      document.getElementById('config-status').textContent = '❌ ' + testRes.message;
      document.getElementById('config-status').className = 'config-status error';
    }
  } catch (e) {
    document.getElementById('config-status').textContent = '❌ 连接失败: ' + e.message;
    document.getElementById('config-status').className = 'config-status error';
  }
}

function initNotionSync() {
  const saved = localStorage.getItem('useNotion');
  window.useNotion = saved === 'true';
  
  const toggle = document.getElementById('notion-toggle');
  if (toggle) {
    toggle.checked = window.useNotion;
    toggle.addEventListener('change', (e) => {
      const hasConfig = localStorage.getItem('notionApiKey') && localStorage.getItem('notionDatabaseId');
      
      if (e.target.checked) {
        if (!hasConfig) {
          // 有配置但服务器未保存，显示离线状态
          localStorage.setItem('useNotion', 'true');
          window.useNotion = true;
          updateSyncStatus('offline');
          return;
        }
      }
      toggleNotion(e.target.checked);
    });
  }
  
  const configBtn = document.getElementById('btn-open-config');
  if (configBtn) {
    configBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openNotionConfig();
    });
  }
  
  const closeBtn = document.getElementById('btn-close-config');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeNotionConfig);
  }
  
  const modal = document.getElementById('notion-config-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        closeNotionConfig();
      }
    });
  }
  
  const saveBtn = document.getElementById('btn-save-config');
  if (saveBtn) {
    saveBtn.addEventListener('click', saveNotionConfig);
  }
  
  // 检查服务器状态和本地配置
  checkNotionStatus().then(status => {
    const hasLocalConfig = localStorage.getItem('notionApiKey') && localStorage.getItem('notionDatabaseId');
    
    if (status.notionConfigured) {
      if (window.useNotion) {
        updateSyncStatus('ready');
        syncRecords();
      } else {
        updateSyncStatus('ready');
      }
    } else if (hasLocalConfig) {
      // 本地有配置但服务器未配置，显示就绪状态（等待用户保存配置到服务器）
      updateSyncStatus('ready');
    } else {
      updateSyncStatus('offline');
    }
  });
}

// 导出到 window
window.checkNotionStatus = checkNotionStatus;
window.fetchNotionRecords = fetchNotionRecords;
window.createNotionRecord = createNotionRecord;
window.updateNotionRecord = updateNotionRecord;
window.deleteNotionRecord = deleteNotionRecord;
window.syncRecords = syncRecords;
window.toggleNotion = toggleNotion;
window.initNotionSync = initNotionSync;
window.openNotionConfig = openNotionConfig;
window.closeNotionConfig = closeNotionConfig;
window.saveNotionConfig = saveNotionConfig;
