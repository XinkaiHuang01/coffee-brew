// Coffee Methods Data - All 6 methods
const coffeeMethods = [
    { id: 'pour-over', name: '手冲', icon: '☕', desc: '经典的手冲咖啡，V60滤杯呈现咖啡最纯粹的风味', defaultStages: [
        { name: '闷蒸', time: 30 },
        { name: '第一段注水', time: 30 },
        { name: '第二段注水', time: 30 },
        { name: '第三段注水', time: 30 },
        { name: '滴滤', time: 30 }
    ]},
    { id: 'french-press', name: '法压壶', icon: '🫖', desc: 'Full-bodied immersion brew, rich and bold', defaultStages: [
        { name: '预热', time: 15 },
        { name: '注水', time: 20 },
        { name: '搅拌', time: 10 },
        { name: '浸泡', time: 240 },
        { name: '压滤', time: 30 }
    ]},
    { id: 'aeropress', name: '爱乐压', icon: '💨', desc: 'Quick and versatile, great for espresso-style', defaultStages: [
        { name: '预热', time: 10 },
        { name: '注水搅拌', time: 10 },
        { name: '压滤', time: 30 }
    ]},
    { id: 'clever', name: '聪明杯', icon: '🧠', desc: 'Easy immersion-drip hybrid, perfect for office', defaultStages: [
        { name: '闷蒸', time: 45 },
        { name: '浸泡', time: 90 },
        { name: '过滤', time: 60 }
    ]},
    { id: 'cold-brew', name: '冷萃', icon: '🧊', desc: 'Smooth, low-acidity cold brew concentrate', defaultStages: [
        { name: '冷水注入', time: 60 },
        { name: '冷藏萃取', time: 43200 },
        { name: '过滤', time: 300 }
    ]},
    { id: 'siphon', name: '虹吸壶', icon: '⚗️', desc: 'Elegant vacuum brew, clean and complex', defaultStages: [
        { name: '预热', time: 30 },
        { name: '上水', time: 60 },
        { name: '萃取', time: 90 },
        { name: '移除热源', time: 30 }
    ]}
];

// Default stages for each method
const defaultMethodStages = {
    'pour-over': [
        { name: '闷蒸', time: 30 },
        { name: '第一段注水', time: 30 },
        { name: '第二段注水', time: 30 },
        { name: '第三段注水', time: 30 },
        { name: '滴滤', time: 30 }
    ],
    'french-press': [
        { name: '预热', time: 15 },
        { name: '注水', time: 20 },
        { name: '搅拌', time: 10 },
        { name: '浸泡', time: 240 },
        { name: '压滤', time: 30 }
    ],
    'aeropress': [
        { name: '预热', time: 10 },
        { name: '注水搅拌', time: 10 },
        { name: '压滤', time: 30 }
    ],
    'clever': [
        { name: '闷蒸', time: 45 },
        { name: '浸泡', time: 90 },
        { name: '过滤', time: 60 }
    ],
    'cold-brew': [
        { name: '冷水注入', time: 60 },
        { name: '冷藏萃取', time: 43200 },
        { name: '过滤', time: 300 }
    ],
    'siphon': [
        { name: '预热', time: 30 },
        { name: '上水', time: 60 },
        { name: '萃取', time: 90 },
        { name: '移除热源', time: 30 }
    ]
};

// Community Recipes Database - All Methods
const coffeeRecipes = {
    'pour-over': [
        {
            name: 'James Hoffmann 1杯版',
            source: 'James Hoffmann',
            url: 'https://www.timer.coffee/recipes/v60/james-hoffmann-v60-one-cup-recipe/',
            rating: 5,
            roast: '中烘',
            params: { ratio: '1:16.7', temp: '95', grind: '中细', dose: '15', water: '250' },
            stages: [
                { name: '预湿 50g', time: 10 },
                { name: '旋转', time: 5 },
                { name: '闷蒸', time: 30 },
                { name: '第一段至100g', time: 15 },
                { name: '等待', time: 10 },
                { name: '第二段至150g', time: 10 },
                { name: '等待', time: 10 },
                { name: '第三段至200g', time: 10 },
                { name: '等待', time: 10 },
                { name: '第四段至250g', time: 10 },
                { name: '旋转', time: 5 },
                { name: '滴滤', time: 55 }
            ],
            tips: '轻柔搅拌，最后旋转整平咖啡粉层'
        },
        {
            name: 'James Hoffmann 标准版',
            source: 'James Hoffmann',
            url: 'https://www.timer.coffee/recipes/v60/james-hoffman-v60-recipe/',
            rating: 5,
            roast: '中烘',
            params: { ratio: '1:16.7', temp: '95', grind: '中细', dose: '30', water: '500' },
            stages: [
                { name: '预湿 60g', time: 10 },
                { name: '旋转', time: 10 },
                { name: '闷蒸', time: 25 },
                { name: '第一段至300g', time: 45 },
                { name: '第二段至500g', time: 45 },
                { name: '搅拌', time: 10 },
                { name: '旋转', time: 10 },
                { name: '滴滤', time: 55 }
            ],
            tips: '浅烘用沸水，中烘稍凉。轻柔搅拌，最后 swirl 整平咖啡粉层'
        },
        {
            name: '粕谷哲 4:6 标准版 (1:15)',
            source: 'Tetsu Kasuya (2016世界冠军)',
            url: 'https://honestcoffeeguide.com/brew-recipes/tetsu-kasuya-4-6-method/',
            rating: 5,
            roast: '中烘',
            params: { ratio: '1:15', temp: '93', grind: '中粗', dose: '20', water: '300' },
            stages: [
                { name: '闷蒸 60g', time: 30 },
                { name: '等待', time: 30 },
                { name: '第二段 60g', time: 30 },
                { name: '等待', time: 30 },
                { name: '第三段 90g', time: 30 },
                { name: '等待', time: 30 },
                { name: '第四段 90g', time: 30 },
                { name: '滴滤', time: 25 }
            ],
            tips: '前40%决定甜度，后60%决定浓度。每次注水后等30秒'
        },
        {
            name: '粕谷哲 4:6 清爽版 (1:21)',
            source: 'Tetsu Kasuya',
            url: 'https://unpacking.coffee/recipes/29-tetsu-kasuyas-46-method',
            rating: 5,
            roast: '中烘',
            params: { ratio: '1:21', temp: '92', grind: '中粗', dose: '20', water: '420' },
            stages: [
                { name: '第一段 120g', time: 45 },
                { name: '第二段至240g', time: 45 },
                { name: '第三段至300g', time: 45 },
                { name: '第四段至360g', time: 45 },
                { name: '第五段至420g', time: 45 },
                { name: '滴滤', time: 60 }
            ],
            tips: '更多水量带来更平衡的口感，高酸甜'
        }
    ],
    'french-press': [
        {
            name: '经典法压壶',
            source: 'Standard Recipe',
            rating: 5,
            roast: '中深烘',
            params: { ratio: '1:15', temp: '93', grind: '粗', dose: '30', water: '450' },
            stages: [
                { name: '预热壶', time: 15 },
                { name: '注水', time: 20 },
                { name: '搅拌', time: 10 },
                { name: '浸泡', time: 240 },
                { name: '压滤', time: 30 }
            ],
            tips: '压滤时不要太用力，避免带入细粉'
        },
        {
            name: '浓郁版',
            source: 'Strong Version',
            rating: 4,
            roast: '深烘',
            params: { ratio: '1:12', temp: '95', grind: '中粗', dose: '30', water: '360' },
            stages: [
                { name: '预热', time: 15 },
                { name: '注水搅拌', time: 15 },
                { name: '浸泡', time: 300 },
                { name: '缓慢压滤', time: 45 }
            ],
            tips: '更长的浸泡时间带来更浓郁的口感'
        }
    ],
    'aeropress': [
        {
            name: '经典爱乐压',
            source: 'Standard AeroPress',
            rating: 5,
            roast: '中烘',
            params: { ratio: '1:12', temp: '85', grind: '细', dose: '17', water: '200' },
            stages: [
                { name: '预热', time: 10 },
                { name: '注水搅拌', time: 10 },
                { name: '压滤', time: 30 }
            ],
            tips: '压滤时保持稳定均匀的压力'
        },
        {
            name: '美式咖啡版本',
            source: 'Americano Style',
            rating: 4,
            roast: '中烘',
            params: { ratio: '1:16', temp: '88', grind: '中细', dose: '15', water: '240' },
            stages: [
                { name: '预热', time: 10 },
                { name: '注水', time: 15 },
                { name: '搅拌', time: 5 },
                { name: '压滤', time: 25 }
            ],
            tips: '适合制作较大杯量的咖啡'
        }
    ],
    'clever': [
        {
            name: '标准聪明杯',
            source: 'Standard Clever',
            rating: 5,
            roast: '中烘',
            params: { ratio: '1:15', temp: '93', grind: '中', dose: '20', water: '300' },
            stages: [
                { name: '闷蒸', time: 45 },
                { name: '注水至300g', time: 30 },
                { name: '浸泡', time: 90 },
                { name: '放置杯上过滤', time: 60 }
            ],
            tips: '浸泡时间到后直接放在杯子上过滤'
        }
    ],
    'cold-brew': [
        {
            name: '冷萃 concentrate',
            source: 'Cold Brew Concentrate',
            rating: 5,
            roast: '中深烘',
            params: { ratio: '1:8', temp: '4', grind: '粗', dose: '100', water: '800' },
            stages: [
                { name: '混合', time: 60 },
                { name: '冷藏萃取', time: 43200 },
                { name: '过滤', time: 300 }
            ],
            tips: '使用冷水或冰水，容器密封放冰箱，过滤两次更干净'
        }
    ],
    'siphon': [
        {
            name: '经典虹吸',
            source: 'Classic Siphon',
            rating: 5,
            roast: '中烘',
            params: { ratio: '1:15', temp: '95', grind: '中细', dose: '20', water: '300' },
            stages: [
                { name: '预热', time: 30 },
                { name: '上水', time: 60 },
                { name: '萃取', time: 90 },
                { name: '移除热源', time: 30 }
            ],
            tips: '注意酒精灯火力，太大会影响萃取'
        }
    ]
};

const CHART_COLORS = ['#4A2C2A', '#8B5A2B', '#D4A574', '#5D8A66', '#C4875A', '#7B6B63'];

// State
let records = JSON.parse(localStorage.getItem('coffee-records')) || [];
let myRecipes = JSON.parse(localStorage.getItem('my-recipes')) || [];
let currentTimerMethod = null;
let currentRecipe = null;
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let currentStageIndex = 0;
let uploadedImage = null;
let selectedRating = 0;
let paramMode = 'recommended';
let manualStages = [
    { name: '闷蒸', time: 30 },
    { name: '第一段注水', time: 30 },
    { name: '第二段注水', time: 30 },
    { name: '第三段注水', time: 30 },
    { name: '滴滤', time: 30 }
];
let selectedRecordForReplay = null;
let recordFormStages = [];
let currentRecordMethod = 'pour-over';
let recipeFormStages = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRecommendations();
    renderRecipeSelectList();
    renderStagesEditor();
    updateStats();
    renderRecords();
    setupNavigation();
    setupRating();
    setupEventListeners();
    setupRecipeEventListeners();
    switchParamMode('recommended');
    
    // Initialize timer progress circle to empty (offset = circumference = 816)
    const circle = document.querySelector('.timer-progress circle');
    if (circle) {
        circle.style.strokeDashoffset = 816;
    }
});

function setupEventListeners() {
    // Manual params inputs
    if (document.getElementById('manual-dose')) {
        document.getElementById('manual-dose').addEventListener('change', applyManualParamsToTimer);
        document.getElementById('manual-water').addEventListener('change', applyManualParamsToTimer);
        document.getElementById('manual-temp').addEventListener('change', applyManualParamsToTimer);
        document.getElementById('manual-grind').addEventListener('change', applyManualParamsToTimer);
    }
    
    // Modal overlays
    document.getElementById('record-modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeRecordModal();
        }
    });
    
    document.getElementById('record-detail-modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('record-detail-modal')) {
            closeRecordDetail();
        }
    });
}

// Navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
    if (navItems.length === 0) return;
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            if (page) {
                navigateTo(page);
            }
        });
    });
}

function navigateTo(page) {
    if (!page) return;
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById('page-' + page);
    if (!targetPage) return;
    targetPage.classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-item').forEach(n => n.classList.remove('active'));
    
    const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    const mobileNavItem = document.querySelector(`.mobile-nav-item[data-page="${page}"]`);
    if (navItem) navItem.classList.add('active');
    if (mobileNavItem) mobileNavItem.classList.add('active');

    if (page === 'records' || page === 'home') {
        renderRecords();
        updateStats();
    }

    if (page === 'recommendations') {
        renderRecommendations();
    }
    
    if (page === 'timer' && !currentTimerMethod) {
        switchParamMode('recommended');
    }
}

// Render Recommendations
function renderRecommendations() {
    const grid = document.getElementById('rec-grid');
    if (!grid) return;
    
    let allRecipesHTML = '';
    
    coffeeMethods.forEach(method => {
        const recipes = coffeeRecipes[method.id] || [];
        if (recipes.length === 0) return;
        
        const methodRecipes = recipes.map((recipe, idx) => {
            const stars = '★'.repeat(recipe.rating) + '☆'.repeat(5 - recipe.rating);
            
            return `
                <div class="recipe-card" onclick="showRecipePreview('${method.id}', ${idx})">
                    <div class="recipe-header">
                        <div class="recipe-title">
                            ${recipe.name}
                            <span class="recipe-source">${recipe.source}</span>
                        </div>
                        <div class="recipe-meta">
                            <span class="recipe-rating">${stars}</span>
                        </div>
                    </div>
                    <div class="recipe-body">
                        <div class="recipe-param">
                            <div class="recipe-param-label">粉水比</div>
                            <div class="recipe-param-value">${recipe.params.ratio}</div>
                        </div>
                        <div class="recipe-param">
                            <div class="recipe-param-label">水温</div>
                            <div class="recipe-param-value">${recipe.params.temp}°C</div>
                        </div>
                        <div class="recipe-param">
                            <div class="recipe-param-label">粉量</div>
                            <div class="recipe-param-value">${recipe.params.dose}g</div>
                        </div>
                        <div class="recipe-param">
                            <div class="recipe-param-label">水量</div>
                            <div class="recipe-param-value">${recipe.params.water}ml</div>
                        </div>
                        <div class="recipe-param">
                            <div class="recipe-param-label">研磨度</div>
                            <div class="recipe-param-value">${recipe.params.grind}</div>
                        </div>
                        <div class="recipe-param">
                            <div class="recipe-param-label">烘焙度</div>
                            <div class="recipe-param-value">${recipe.roast || '中烘'}</div>
                        </div>
                        ${recipe.tips ? `
                            <div class="recipe-tips">
                                <div class="recipe-tips-title">💡 冲泡小贴士</div>
                                <div class="recipe-tips-text">${recipe.tips}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        allRecipesHTML += `<p style="font-size:14px; color:var(--text-secondary); margin-bottom:16px; grid-column: 1 / -1;">${method.desc}</p>`;
        allRecipesHTML += methodRecipes;
    });
    
    grid.innerHTML = allRecipesHTML || '<div class="empty-state"><p>暂无推荐配方</p></div>';
}

function showRecipePreview(methodId, recipeIndex) {
    const recipes = coffeeRecipes[methodId];
    if (!recipes || !recipes[recipeIndex]) return;
    
    const recipe = recipes[recipeIndex];
    const method = coffeeMethods.find(m => m.id === methodId);
    
    document.getElementById('preview-title').textContent = recipe.name;
    document.getElementById('preview-source').textContent = recipe.source;
    
    document.getElementById('preview-params').innerHTML = `
        <div class="recipe-preview-param">
            <div class="recipe-preview-param-label">粉水比</div>
            <div class="recipe-preview-param-value">${recipe.params.ratio}</div>
        </div>
        <div class="recipe-preview-param">
            <div class="recipe-preview-param-label">水温</div>
            <div class="recipe-preview-param-value">${recipe.params.temp}°C</div>
        </div>
        <div class="recipe-preview-param">
            <div class="recipe-preview-param-label">粉量</div>
            <div class="recipe-preview-param-value">${recipe.params.dose}g</div>
        </div>
        <div class="recipe-preview-param">
            <div class="recipe-preview-param-label">水量</div>
            <div class="recipe-preview-param-value">${recipe.params.water}ml</div>
        </div>
        <div class="recipe-preview-param">
            <div class="recipe-preview-param-label">研磨度</div>
            <div class="recipe-preview-param-value">${recipe.params.grind}</div>
        </div>
        <div class="recipe-preview-param">
            <div class="recipe-preview-param-label">烘焙度</div>
            <div class="recipe-preview-param-value">${recipe.roast || '中烘'}</div>
        </div>
    `;
    
    if (recipe.tips) {
        document.getElementById('preview-tips-section').style.display = 'block';
        document.getElementById('preview-tips-text').textContent = recipe.tips;
    } else {
        document.getElementById('preview-tips-section').style.display = 'none';
    }
    
    let cumulativeTime = 0;
    document.getElementById('preview-stages').innerHTML = recipe.stages.map(stage => {
        cumulativeTime += stage.time;
        return `
            <div class="recipe-preview-stage">
                <span class="recipe-preview-stage-name">${stage.name}</span>
                <span class="recipe-preview-stage-time">${formatTime(cumulativeTime)}</span>
            </div>
        `;
    }).join('');
    
    document.getElementById('preview-start-btn').onclick = function() {
        closeRecipePreview();
        startWithRecipe(methodId, recipeIndex);
    };
    
    if (recipe.url) {
        document.getElementById('preview-source-btn').style.display = 'inline-flex';
        document.getElementById('preview-source-btn').href = recipe.url;
    } else {
        document.getElementById('preview-source-btn').style.display = 'none';
    }
    
    document.getElementById('recipe-preview-modal').classList.add('active');
}

function closeRecipePreview(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('recipe-preview-modal').classList.remove('active');
}

function startWithRecipe(methodId, recipeIndex, isCommunity = false) {
    let recipe, method;
    
    if (isCommunity) {
        const recipes = coffeeRecipes[methodId];
        if (!recipes || !recipes[recipeIndex]) return;
        recipe = recipes[recipeIndex];
        method = coffeeMethods.find(m => m.id === methodId);
    } else {
        recipe = myRecipes[recipeIndex];
        if (!recipe) return;
        method = coffeeMethods.find(m => m.id === recipe.method);
    }
    
    currentRecipe = recipe;
    currentTimerMethod = { id: methodId, name: method.name, icon: method.icon, ...recipe };
    
    document.getElementById('timer-method-name').textContent = `${method.name} - ${recipe.name}`;
    renderTimerStages(recipe);
    navigateTo('timer');
    
    setTimeout(() => {
        document.getElementById('form-dose').value = recipe.params.dose;
        document.getElementById('form-water').value = recipe.params.water;
        document.getElementById('form-temp').value = recipe.params.temp;
        document.getElementById('form-grind').value = recipe.params.grind;
    }, 100);
    
    showToast(`已选择 ${recipe.name}，点击开始计时`);
}

function renderMyRecipesPage() {
    const container = document.getElementById('my-recipes-page-grid');
    if (!container) return;
    
    let html = '';
    
    // My Recipes Section
    html += `<div class="recipe-section">
        <h3 class="recipe-section-title">📋 我的配方</h3>`;
    
    if (myRecipes.length === 0) {
        html += '<div class="empty-state"><p>暂无配方</p></div>';
    } else {
        const methodGroups = {};
        myRecipes.forEach((recipe, idx) => {
            if (!methodGroups[recipe.method]) {
                methodGroups[recipe.method] = [];
            }
            methodGroups[recipe.method].push({ ...recipe, index: idx });
        });
        
        for (const [methodId, recipes] of Object.entries(methodGroups)) {
            const method = coffeeMethods.find(m => m.id === methodId);
            html += `<div class="recipe-method-group">
                <div class="recipe-method-title">${method?.icon || '☕'} ${method?.name || methodId}</div>`;
            html += recipes.map(r => `
                <div class="recipe-card" onclick="startWithRecipe('${r.method}', ${r.index}, false)">
                    <div class="recipe-header">
                        <div class="recipe-title">${r.name}</div>
                        <button class="recipe-delete-btn" onclick="event.stopPropagation(); deleteMyRecipe(${r.index})">🗑️</button>
                    </div>
                    <div class="recipe-body">
                        <div class="recipe-param"><div class="recipe-param-label">粉水比</div><div class="recipe-param-value">${r.params.ratio || '1:' + Math.round(r.params.water/r.params.dose)}</div></div>
                        <div class="recipe-param"><div class="recipe-param-label">水温</div><div class="recipe-param-value">${r.params.temp}°C</div></div>
                        <div class="recipe-param"><div class="recipe-param-label">粉量</div><div class="recipe-param-value">${r.params.dose}g</div></div>
                        <div class="recipe-param"><div class="recipe-param-label">水量</div><div class="recipe-param-value">${r.params.water}ml</div></div>
                    </div>
                </div>
            `).join('');
            html += '</div>';
        }
    }
    html += '</div>';
    
    // Community Recipes Section (Read-only)
    html += `<div class="recipe-section" style="margin-top: 32px;">
        <h3 class="recipe-section-title">🌟 推荐配方（参考）</h3>`;
    
    coffeeMethods.forEach(method => {
        const recipes = coffeeRecipes[method.id] || [];
        if (recipes.length === 0) return;
        
        html += `<div class="recipe-method-group">
            <div class="recipe-method-title">${method.icon} ${method.name}</div>`;
        html += recipes.slice(0, 2).map((r, idx) => `
            <div class="recipe-card" onclick="startWithRecipe('${method.id}', ${idx}, true)">
                <div class="recipe-header">
                    <div class="recipe-title">${r.name}</div>
                    <span class="recipe-source">${r.source}</span>
                </div>
                <div class="recipe-body">
                    <div class="recipe-param"><div class="recipe-param-label">粉水比</div><div class="recipe-param-value">${r.params.ratio}</div></div>
                    <div class="recipe-param"><div class="recipe-param-label">水温</div><div class="recipe-param-value">${r.params.temp}°C</div></div>
                    <div class="recipe-param"><div class="recipe-param-label">粉量</div><div class="recipe-param-value">${r.params.dose}g</div></div>
                    <div class="recipe-param"><div class="recipe-param-label">水量</div><div class="recipe-param-value">${r.params.water}ml</div></div>
                </div>
            </div>
        `).join('');
        html += '</div>';
    });
    
    html += '</div>';
    
    container.innerHTML = html;
}

function renderRecipeSelectList() {
    const container = document.getElementById('recipe-select-list');
    const recipes = coffeeRecipes['pour-over'] || [];
    
    if (recipes.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">暂无可用配方</p>';
        return;
    }
    
    container.innerHTML = recipes.map((recipe, idx) => {
        const isSelected = currentRecipe && currentRecipe.name === recipe.name;
        return `
            <div class="recipe-select-item ${isSelected ? 'selected' : ''}" onclick="selectRecipe(${idx})">
                <div class="recipe-select-header">
                    <span class="recipe-select-name">${recipe.name}</span>
                    <span class="recipe-select-rating">${'★'.repeat(recipe.rating)}</span>
                </div>
                <div class="recipe-select-params">
                    <span>${recipe.params.dose}g</span>
                    <span>${recipe.params.water}ml</span>
                    <span>${recipe.params.temp}°C</span>
                    <span>${recipe.params.grind}</span>
                </div>
            </div>
        `;
    }).join('');
}

function selectRecipe(recipeIndex) {
    const recipes = coffeeRecipes['pour-over'];
    if (!recipes || !recipes[recipeIndex]) return;
    
    currentRecipe = recipes[recipeIndex];
    currentTimerMethod = { id: 'pour-over', name: '手冲', icon: '☕', ...currentRecipe };
    
    document.getElementById('timer-method-name').textContent = `手冲 - ${currentRecipe.name}`;
    renderTimerStages(currentTimerMethod);
    renderRecipeSelectList();
    
    document.getElementById('manual-dose').value = currentRecipe.params.dose;
    document.getElementById('manual-water').value = currentRecipe.params.water;
    document.getElementById('manual-temp').value = currentRecipe.params.temp;
    document.getElementById('manual-grind').value = currentRecipe.params.grind;
    
    showToast(`已选择 ${currentRecipe.name}`);
}

// Manual params
function renderStagesEditor() {
    const container = document.getElementById('stages-editor-list');
    container.innerHTML = manualStages.map((stage, index) => `
        <div class="stage-editor-item">
            <input type="text" class="form-input stage-editor-name" value="${stage.name}" 
                   onchange="updateStage(${index}, 'name', this.value)" placeholder="阶段名称">
            <input type="number" class="form-input stage-editor-time" value="${stage.time}" 
                   min="1" max="3600" onchange="updateStage(${index}, 'time', this.value)" placeholder="秒">
            <button class="stage-editor-remove" onclick="removeStage(${index})">×</button>
        </div>
    `).join('');
}

function addStage() {
    manualStages.push({ name: '新阶段', time: 30 });
    renderStagesEditor();
    applyManualParamsToTimer();
}

function removeStage(index) {
    if (manualStages.length <= 1) {
        showToast('至少保留一个阶段');
        return;
    }
    manualStages.splice(index, 1);
    renderStagesEditor();
    applyManualParamsToTimer();
}

function updateStage(index, field, value) {
    if (field === 'time') {
        manualStages[index].time = parseInt(value) || 30;
    } else {
        manualStages[index].name = value || '新阶段';
    }
    applyManualParamsToTimer();
}

function applyManualParamsToTimer() {
    const dose = parseInt(document.getElementById('manual-dose').value) || 20;
    const water = parseInt(document.getElementById('manual-water').value) || 300;
    const temp = parseInt(document.getElementById('manual-temp').value) || 92;
    const grind = document.getElementById('manual-grind').value;
    
    currentTimerMethod = {
        id: 'pour-over',
        name: '手冲',
        icon: '☕',
        params: { dose, water, temp, grind, ratio: `1:${Math.round(water/dose)}` },
        stages: [...manualStages]
    };
    
    document.getElementById('timer-method-name').textContent = '手冲 - 自定义参数';
    renderTimerStages(currentTimerMethod);
}

// Timer
function renderTimerStages(method) {
    const container = document.getElementById('timer-stages');
    if (!method) {
        container.innerHTML = '<div class="stage-item"><span class="stage-name">选择配方</span><span class="stage-time">-</span></div>';
        return;
    }
    let cumulativeTime = 0;
    container.innerHTML = method.stages.map((stage, index) => {
        cumulativeTime += stage.time;
        return `
            <div class="stage-item" data-stage="${index}">
                <span class="stage-name">${stage.name}</span>
                <span class="stage-time">${formatTime(cumulativeTime)}</span>
            </div>
        `;
    }).join('');
}

function switchParamMode(mode) {
    paramMode = mode;
    document.getElementById('btn-recommended')?.classList.toggle('active', mode === 'recommended');
    document.getElementById('btn-manual').classList.toggle('active', mode === 'manual');
    document.getElementById('recommended-params-panel')?.classList.toggle('active', mode === 'recommended');
    document.getElementById('manual-params-panel').classList.toggle('active', mode === 'manual');
    
    if (mode === 'manual') {
        renderStagesEditor();
        applyManualParamsToTimer();
    } else {
        renderRecipeSelectList();
    }
}

// Recipes Functions
function renderMyRecipesList() {
    const container = document.getElementById('my-recipe-select-list');
    if (!container) return;
    
    if (myRecipes.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>暂无配方</p><p style="font-size:13px">点击"新建配方"或从记录保存</p></div>';
        return;
    }
    
    const methodGroups = {};
    myRecipes.forEach((recipe, idx) => {
        if (!methodGroups[recipe.method]) {
            methodGroups[recipe.method] = [];
        }
        methodGroups[recipe.method].push({ ...recipe, index: idx });
    });
    
    let html = '';
    for (const [methodId, recipes] of Object.entries(methodGroups)) {
        const method = coffeeMethods.find(m => m.id === methodId);
        html += `<div class="recipe-method-group">
            <div class="recipe-method-title">${method?.icon || '☕'} ${method?.name || methodId}</div>`;
        html += recipes.map(r => `
            <div class="recipe-select-item ${currentRecipe && currentRecipe.name === r.name ? 'selected' : ''}" onclick="selectMyRecipe(${r.index})">
                <div class="recipe-select-header">
                    <span class="recipe-select-name">${r.name}</span>
                    <button class="recipe-delete-btn" onclick="event.stopPropagation(); deleteMyRecipe(${r.index})">🗑️</button>
                </div>
                <div class="recipe-select-params">
                    <span>${r.params.dose}g</span>
                    <span>${r.params.water}ml</span>
                    <span>${r.params.temp}°C</span>
                    <span>${r.params.grind}</span>
                </div>
            </div>
        `).join('');
        html += '</div>';
    }
    
    container.innerHTML = html;
}

function selectMyRecipe(index) {
    const recipe = myRecipes[index];
    if (!recipe) return;
    
    currentRecipe = recipe;
    currentTimerMethod = { 
        id: recipe.method, 
        name: coffeeMethods.find(m => m.id === recipe.method)?.name || recipe.method,
        icon: coffeeMethods.find(m => m.id === recipe.method)?.icon || '☕',
        ...recipe 
    };
    
    document.getElementById('timer-method-name').textContent = `${currentTimerMethod.name} - ${recipe.name}`;
    renderTimerStages(currentTimerMethod);
    renderMyRecipesList();
    
    showToast(`已选择 ${recipe.name}`);
}

function deleteMyRecipe(index) {
    if (confirm('确定要删除这个配方吗？')) {
        myRecipes.splice(index, 1);
        localStorage.setItem('my-recipes', JSON.stringify(myRecipes));
        renderMyRecipesList();
        renderMyRecipesPage();
        showToast('配方已删除');
    }
}

function openSaveRecipeModal(fromRecord = null) {
    const modal = document.getElementById('save-recipe-modal');
    const form = document.getElementById('save-recipe-form');
    
    document.getElementById('save-recipe-from-record').value = fromRecord ? 'true' : '';
    
    if (fromRecord && selectedRecordForReplay) {
        const record = selectedRecordForReplay;
        document.getElementById('recipe-name').value = record.coffee?.name || '';
        document.getElementById('recipe-method').value = record.method || 'pour-over';
        document.getElementById('recipe-dose').value = record.params?.dose || 20;
        document.getElementById('recipe-water').value = record.params?.water || 300;
        document.getElementById('recipe-temp').value = record.params?.temperature || 92;
        document.getElementById('recipe-grind').value = record.params?.grindSize || '中';
        recipeFormStages = record.stages ? [...record.stages] : [...(defaultMethodStages[record.method] || defaultMethodStages['pour-over'])];
    } else if (currentTimerMethod) {
        document.getElementById('recipe-method').value = currentTimerMethod.id || 'pour-over';
        document.getElementById('recipe-dose').value = currentTimerMethod.params?.dose || 20;
        document.getElementById('recipe-water').value = currentTimerMethod.params?.water || 300;
        document.getElementById('recipe-temp').value = currentTimerMethod.params?.temp || 92;
        document.getElementById('recipe-grind').value = currentTimerMethod.params?.grind || '中';
        recipeFormStages = currentTimerMethod.stages ? [...currentTimerMethod.stages] : [...manualStages];
    } else {
        document.getElementById('recipe-method').value = 'pour-over';
        document.getElementById('recipe-dose').value = 20;
        document.getElementById('recipe-water').value = 300;
        document.getElementById('recipe-temp').value = 92;
        document.getElementById('recipe-grind').value = '中';
        recipeFormStages = [...defaultMethodStages['pour-over']];
    }
    
    document.getElementById('recipe-name').value = '';
    renderRecipeStages();
    modal.classList.add('active');
}

function closeSaveRecipeModal() {
    document.getElementById('save-recipe-modal').classList.remove('active');
}

function renderRecipeStages() {
    const container = document.getElementById('recipe-stages-list');
    if (!container) return;
    
    container.innerHTML = recipeFormStages.map((stage, index) => `
        <div class="stage-editor-item">
            <input type="text" class="form-input stage-editor-name" value="${stage.name}" 
                   onchange="updateRecipeStage(${index}, 'name', this.value)" placeholder="阶段名称">
            <input type="number" class="form-input stage-editor-time" value="${stage.time}" 
                   min="1" max="3600" onchange="updateRecipeStage(${index}, 'time', this.value)" placeholder="秒">
            <button class="stage-editor-remove" onclick="removeRecipeStage(${index})">×</button>
        </div>
    `).join('');
}

function updateRecipeStage(index, field, value) {
    if (field === 'time') {
        recipeFormStages[index].time = parseInt(value) || 30;
    } else {
        recipeFormStages[index].name = value || '新阶段';
    }
}

function removeRecipeStage(index) {
    if (recipeFormStages.length <= 1) {
        showToast('至少保留一个阶段');
        return;
    }
    recipeFormStages.splice(index, 1);
    renderRecipeStages();
}

function addRecipeStage() {
    recipeFormStages.push({ name: '新阶段', time: 30 });
    renderRecipeStages();
}

function saveRecipe(e) {
    e.preventDefault();
    
    const recipe = {
        name: document.getElementById('recipe-name').value,
        method: document.getElementById('recipe-method').value,
        params: {
            dose: parseInt(document.getElementById('recipe-dose').value) || 20,
            water: parseInt(document.getElementById('recipe-water').value) || 300,
            temp: parseInt(document.getElementById('recipe-temp').value) || 92,
            grind: document.getElementById('recipe-grind').value || '中',
            ratio: `1:${Math.round((parseInt(document.getElementById('recipe-water').value) || 300) / (parseInt(document.getElementById('recipe-dose').value) || 20))}`
        },
        stages: [...recipeFormStages]
    };
    
    myRecipes.push(recipe);
    localStorage.setItem('my-recipes', JSON.stringify(myRecipes));
    
    closeSaveRecipeModal();
    renderMyRecipesList();
    renderMyRecipesPage();
    showToast('配方已保存');
}

function setupRecipeEventListeners() {
    document.getElementById('btn-new-recipe')?.addEventListener('click', () => openSaveRecipeModal(false));
    document.getElementById('btn-add-my-recipe')?.addEventListener('click', () => openSaveRecipeModal(false));
    document.getElementById('btn-close-save-recipe')?.addEventListener('click', closeSaveRecipeModal);
    document.getElementById('btn-cancel-save-recipe')?.addEventListener('click', closeSaveRecipeModal);
    document.getElementById('save-recipe-modal')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) closeSaveRecipeModal();
    });
    document.getElementById('save-recipe-form')?.addEventListener('submit', saveRecipe);
    document.getElementById('btn-add-recipe-stage')?.addEventListener('click', addRecipeStage);
    document.getElementById('btn-recommended')?.addEventListener('click', () => switchParamMode('recommended'));
    document.getElementById('btn-manual')?.addEventListener('click', () => switchParamMode('manual'));
    
    document.getElementById('btn-save-as-recipe')?.addEventListener('click', () => openSaveRecipeModal(true));
}

function startTimer() {
    if (!currentTimerMethod) {
        startWithRecipe('pour-over', 0);
        return;
    }
    
    if (timerRunning) return;
    
    timerRunning = true;
    document.getElementById('btn-start').style.display = 'none';
    document.getElementById('btn-pause').style.display = 'inline-flex';
    document.querySelector('.timer-display').classList.add('timer-active');
    
    const stages = currentTimerMethod.stages;
    const totalTime = stages.reduce((a, s) => a + s.time, 0);
    const circumference = 2 * Math.PI * 130;
    
    timerInterval = setInterval(() => {
        timerSeconds++;
        
        // Calculate current stage
        let elapsed = 0;
        for (let i = 0; i < stages.length; i++) {
            if (timerSeconds <= elapsed + stages[i].time) {
                currentStageIndex = i;
                break;
            }
            elapsed += stages[i].time;
        }
        
        // Update display
        document.getElementById('timer-display').textContent = formatTime(timerSeconds);
        document.getElementById('timer-stage-display').textContent = stages[currentStageIndex].name;
        
        // Update progress - offset starts at circumference (empty) and decreases to 0 (full)
        const progress = (timerSeconds / totalTime) * 100;
        const offset = circumference - (progress / 100) * circumference;
        document.querySelector('.timer-progress circle').style.strokeDashoffset = offset;
        
        // Update stage highlights
        document.querySelectorAll('.stage-item').forEach((item, index) => {
            item.classList.remove('active', 'completed');
            if (index < currentStageIndex) {
                item.classList.add('completed');
            } else if (index === currentStageIndex) {
                item.classList.add('active');
            }
        });
        
        // Timer complete
        if (timerSeconds >= totalTime) {
            completeTimer();
        }
    }, 1000);
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('btn-start').style.display = 'inline-flex';
    document.getElementById('btn-pause').style.display = 'none';
    document.querySelector('.timer-display').classList.remove('timer-active');
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 0;
    currentStageIndex = 0;
    
    document.getElementById('timer-display').textContent = '00:00';
    document.getElementById('timer-stage-display').textContent = currentTimerMethod ? currentTimerMethod.stages[0].name : '准备开始';
    
    // Reset progress circle to empty (offset = circumference = 816)
    const circumference = 2 * Math.PI * 130;
    document.querySelector('.timer-progress circle').style.strokeDashoffset = circumference;
    
    if (currentTimerMethod) {
        renderTimerStages(currentTimerMethod);
    }
}

function completeTimer() {
    pauseTimer();
    document.getElementById('timer-display').textContent = '完成!';
    document.getElementById('timer-stage-display').textContent = '冲泡完成';
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {}
    
    window.completedStages = currentTimerMethod ? [...currentTimerMethod.stages] : [];
    
    setTimeout(() => {
        openRecordModal();
        if (currentTimerMethod) {
            document.getElementById('form-method-select').value = currentTimerMethod.id || 'pour-over';
            currentRecordMethod = currentTimerMethod.id || 'pour-over';
            document.getElementById('form-dose').value = currentTimerMethod.params.dose;
            document.getElementById('form-water').value = currentTimerMethod.params.water;
            document.getElementById('form-temp').value = currentTimerMethod.params.temp;
            document.getElementById('form-grind').value = currentTimerMethod.params.grind;
            document.getElementById('form-time').value = timerSeconds;
            recordFormStages = [...(currentTimerMethod.stages || [])];
            renderRecordStages();
        }
        
        if (paramMode === 'manual') {
            setTimeout(() => {
                if (confirm('是否将此配方保存为我的配方？')) {
                    openSaveRecipeModal(false);
                }
            }, 500);
        }
    }, 1000);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Records
function renderRecords() {
    const recentContainer = document.getElementById('recent-records');
    const allContainer = document.getElementById('all-records');
    
    const sortedRecords = [...records].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (records.length === 0) {
        const empty = `
            <div class="empty-state">
                <div class="empty-icon">☕</div>
                <h3 class="empty-title">还没有记录</h3>
                <p class="empty-desc">开始你的第一杯咖啡记录吧</p>
                <button class="btn btn-primary" onclick="openRecordModal()">添加记录</button>
            </div>
        `;
        recentContainer.innerHTML = empty;
        allContainer.innerHTML = empty;
        return;
    }
    
    const recent = sortedRecords.slice(0, 3);
    
    const renderCard = (record) => {
        const method = coffeeMethods.find(m => m.id === record.method) || { icon: '☕', name: record.method };
        return `
            <div class="record-card" onclick="showRecordDetail('${record.id}')">
                <div class="record-image">
                    ${record.image ? `<img src="${record.image}" alt="Coffee">` : method.icon}
                </div>
                <div class="record-content">
                    <div class="record-header">
                        <div class="record-method">
                            <div class="record-method-icon">${method.icon}</div>
                            <span class="record-method-name">${method.name}</span>
                        </div>
                        <span class="record-date">${formatDate(record.date)}</span>
                    </div>
                    ${record.coffee?.name ? `<div class="record-coffee">☕ ${record.coffee.name}</div>` : ''}
                    <div class="record-params">
                        <span>${record.params.dose}g</span>
                        <span>${record.params.water}ml</span>
                        <span>${record.params.temperature}°C</span>
                    </div>
                    <div class="record-notes">${record.taste.notes || '无备注'}</div>
                </div>
                <div class="record-actions" onclick="event.stopPropagation()">
                    <button class="record-action" onclick="editRecord('${record.id}')" title="编辑">✏️</button>
                    <button class="record-action" onclick="deleteRecord('${record.id}')" title="删除">🗑️</button>
                </div>
                <div class="record-rating">${'★'.repeat(record.taste.rating)}${'☆'.repeat(5 - record.taste.rating)}</div>
            </div>
        `;
    };
    
    recentContainer.innerHTML = recent.map(renderCard).join('');
    allContainer.innerHTML = sortedRecords.map(renderCard).join('');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' }) + ' ' + 
           date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}

// Record Modal
function openRecordModal(recordId = null) {
    const modal = document.getElementById('record-modal');
    const form = document.getElementById('record-form');
    
    if (recordId) {
        const record = records.find(r => r.id === recordId);
        if (record) {
            document.getElementById('modal-title').textContent = '编辑记录';
            document.getElementById('record-id').value = record.id;
            document.getElementById('form-method-select').value = record.method || 'pour-over';
            currentRecordMethod = record.method || 'pour-over';
            document.getElementById('form-dose').value = record.params.dose;
            document.getElementById('form-water').value = record.params.water;
            document.getElementById('form-temp').value = record.params.temperature;
            document.getElementById('form-grind').value = record.params.grindSize;
            document.getElementById('form-roast').value = record.params.roast || '中烘';
            document.getElementById('form-time').value = record.params.brewTime;
            document.getElementById('form-coffee-name').value = record.coffee?.name || '';
            document.getElementById('form-notes').value = record.taste.notes || '';
            selectedRating = record.taste.rating || 0;
            uploadedImage = record.image || null;
            
            if (uploadedImage) {
                document.getElementById('preview-img').src = uploadedImage;
                document.getElementById('image-preview').style.display = 'block';
                document.getElementById('image-upload').style.display = 'none';
            }
            
            updateRatingDisplay();
            recordFormStages = record.stages ? [...record.stages] : [...(defaultMethodStages[currentRecordMethod] || defaultMethodStages['pour-over'])];
            renderRecordStages();
        }
    } else {
        document.getElementById('modal-title').textContent = '添加记录';
        form.reset();
        document.getElementById('record-id').value = '';
        document.getElementById('form-method-select').value = currentRecordMethod;
        selectedRating = 0;
        uploadedImage = null;
        document.getElementById('image-preview').style.display = 'none';
        document.getElementById('image-upload').style.display = 'block';
        updateRatingDisplay();
        
        recordFormStages = [...(defaultMethodStages[currentRecordMethod] || defaultMethodStages['pour-over'])];
        renderRecordStages();
    }
    
    modal.classList.add('active');
}

function closeRecordModal() {
    document.getElementById('record-modal').classList.remove('active');
}

function renderRecordStages() {
    const container = document.getElementById('record-stages-list');
    if (!container) return;
    
    container.innerHTML = recordFormStages.map((stage, index) => `
        <div class="record-stage-item">
            <input type="text" class="form-input record-stage-name" value="${stage.name}" 
                   onchange="updateRecordStage(${index}, 'name', this.value)" placeholder="阶段名称">
            <input type="number" class="form-input record-stage-time" value="${stage.time}" 
                   min="1" onchange="updateRecordStage(${index}, 'time', this.value)" placeholder="秒">
            <button type="button" class="record-stage-remove" onclick="removeRecordStage(${index})">×</button>
        </div>
    `).join('');
}

function updateRecordStage(index, field, value) {
    if (field === 'time') {
        recordFormStages[index].time = parseInt(value) || 30;
    } else {
        recordFormStages[index].name = value || '新阶段';
    }
}

function removeRecordStage(index) {
    if (recordFormStages.length <= 1) {
        showToast('至少保留一个阶段');
        return;
    }
    recordFormStages.splice(index, 1);
    renderRecordStages();
}

function addRecordStage() {
    recordFormStages.push({ name: '新阶段', time: 30 });
    renderRecordStages();
}

function handleRecordMethodChange() {
    const methodSelect = document.getElementById('form-method-select');
    if (methodSelect) {
        currentRecordMethod = methodSelect.value;
        recordFormStages = [...(defaultMethodStages[currentRecordMethod] || defaultMethodStages['pour-over'])];
        renderRecordStages();
    }
}

function saveRecord(e) {
    e.preventDefault();
    
    const methodId = document.getElementById('form-method-select') ? document.getElementById('form-method-select').value : 'pour-over';
    
    const record = {
        id: document.getElementById('record-id').value || Date.now().toString(),
        date: new Date().toISOString(),
        method: methodId,
        coffee: {
            name: document.getElementById('form-coffee-name').value || '',
            roaster: '',
            origin: '',
            roastDate: ''
        },
        params: {
            dose: parseInt(document.getElementById('form-dose').value) || 20,
            water: parseInt(document.getElementById('form-water').value) || 300,
            ratio: '',
            temperature: parseInt(document.getElementById('form-temp').value) || 92,
            grindSize: document.getElementById('form-grind').value || '中',
            roast: document.getElementById('form-roast').value || '中烘',
            brewTime: parseInt(document.getElementById('form-time').value) || 0
        },
        taste: {
            rating: selectedRating,
            flavor: '',
            aroma: '',
            body: '',
            acidity: '',
            aftertaste: '',
            notes: document.getElementById('form-notes').value || ''
        },
        image: uploadedImage || '',
        stages: recordFormStages || window.completedStages || []
    };
    
    window.completedStages = [];
    recordFormStages = [];
    
    const existingIndex = records.findIndex(r => r.id === record.id);
    if (existingIndex >= 0) {
        record.notionId = records[existingIndex].notionId;
        records[existingIndex] = record;
    } else {
        records.push(record);
    }
    
    localStorage.setItem('coffee-records', JSON.stringify(records));
    
    if (window.useNotion && record.notionId) {
        window.updateNotionRecord(record.notionId, record).catch(err => {
            console.error('Notion 同步失败:', err);
        });
    } else if (window.useNotion) {
        window.createNotionRecord(record).then(notionRecord => {
            record.notionId = notionRecord.notionId;
            localStorage.setItem('coffee-records', JSON.stringify(records));
        }).catch(err => {
            console.error('Notion 创建失败:', err);
            window.showToast('❌ Notion 同步失败: ' + err.message);
        });
    }
    
    closeRecordModal();
    renderRecords();
    updateStats();
    showToast('保存成功');
}

function editRecord(id) {
    openRecordModal(id);
}

function deleteRecord(id) {
    if (confirm('确定要删除这条记录吗？')) {
        const record = records.find(r => r.id === id);
        records = records.filter(r => r.id !== id);
        localStorage.setItem('coffee-records', JSON.stringify(records));
        
        if (typeof window.useNotion !== 'undefined' && window.useNotion && record && record.notionId) {
            window.deleteNotionRecord(record.notionId).catch(err => {
                console.error('Notion 删除失败:', err);
            });
        }
        
        renderRecords();
        updateStats();
        showToast('删除成功');
    }
}

// Rating
function setupRating() {
    const ratingContainer = document.getElementById('form-rating');
    ratingContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('rating-star')) {
            selectedRating = parseInt(e.target.dataset.value);
            updateRatingDisplay();
        }
    });
}

function updateRatingDisplay() {
    document.querySelectorAll('#form-rating .rating-star').forEach((star, index) => {
        if (index < selectedRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Image Upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const formData = new FormData();
    formData.append('image', file);
    
    fetch('/api/upload', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.url) {
            uploadedImage = data.url;
            document.getElementById('preview-img').src = uploadedImage;
            document.getElementById('image-preview').style.display = 'block';
            document.getElementById('image-upload').style.display = 'none';
        }
    })
    .catch(err => {
        console.error('上传图片失败:', err);
        showToast('上传图片失败');
    });
}

function removeImage() {
    uploadedImage = null;
    document.getElementById('form-image').value = '';
    document.getElementById('image-preview').style.display = 'none';
    document.getElementById('image-upload').style.display = 'block';
}

// Record Detail
function showRecordDetail(recordId) {
    const record = records.find(r => r.id === recordId);
    if (!record) return;
    
    selectedRecordForReplay = record;
    
    const method = coffeeMethods.find(m => m.id === record.method) || { icon: '☕', name: record.method };
    document.getElementById('detail-method-icon').textContent = method.icon;
    document.getElementById('detail-method-name').textContent = method.name;
    
    const coffeeEl = document.getElementById('detail-coffee');
    if (record.coffee?.name) {
        coffeeEl.textContent = '☕ ' + record.coffee.name;
        coffeeEl.style.display = 'block';
    } else {
        coffeeEl.style.display = 'none';
    }
    
    const date = new Date(record.date);
    document.getElementById('detail-date').textContent = date.toLocaleDateString('zh-CN', { 
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' 
    });
    
    document.getElementById('detail-params').innerHTML = `
        <div class="record-detail-param">
            <div class="record-detail-param-label">粉量</div>
            <div class="record-detail-param-value">${record.params.dose}g</div>
        </div>
        <div class="record-detail-param">
            <div class="record-detail-param-label">水量</div>
            <div class="record-detail-param-value">${record.params.water}ml</div>
        </div>
        <div class="record-detail-param">
            <div class="record-detail-param-label">水温</div>
            <div class="record-detail-param-value">${record.params.temperature}°C</div>
        </div>
        <div class="record-detail-param">
            <div class="record-detail-param-label">研磨度</div>
            <div class="record-detail-param-value">${record.params.grindSize}</div>
        </div>
        <div class="record-detail-param">
            <div class="record-detail-param-label">时长</div>
            <div class="record-detail-param-value">${formatTime(record.params.brewTime)}</div>
        </div>
        <div class="record-detail-param">
            <div class="record-detail-param-label">评分</div>
            <div class="record-detail-param-value">${record.taste.rating > 0 ? '★'.repeat(record.taste.rating) : '-'}</div>
        </div>
    `;
    
    const stagesSection = document.getElementById('detail-stages-section');
    const stagesContainer = document.getElementById('detail-stages');
    if (record.stages && record.stages.length > 0) {
        stagesSection.style.display = 'block';
        let cumulativeTime = 0;
        stagesContainer.innerHTML = record.stages.map(stage => {
            cumulativeTime += stage.time;
            return `
                <div class="record-detail-stage">
                    <span class="record-detail-stage-name">${stage.name}</span>
                    <span class="record-detail-stage-time">${formatTime(cumulativeTime)}</span>
                </div>
            `;
        }).join('');
    } else {
        stagesSection.style.display = 'none';
    }
    
    const notesSection = document.getElementById('detail-notes-section');
    const notesContainer = document.getElementById('detail-notes');
    if (record.taste.notes) {
        notesSection.style.display = 'block';
        notesContainer.textContent = record.taste.notes;
    } else {
        notesSection.style.display = 'none';
    }
    
    document.getElementById('record-detail-modal').classList.add('active');
}

function closeRecordDetail(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('record-detail-modal').classList.remove('active');
    selectedRecordForReplay = null;
}

function replayTimerFromRecord() {
    if (!selectedRecordForReplay) return;
    
    const record = selectedRecordForReplay;
    closeRecordDetail();
    navigateTo('timer');
    
    setTimeout(() => {
        if (record.stages && record.stages.length > 0) {
            currentTimerMethod = {
                id: record.method,
                name: coffeeMethods.find(m => m.id === record.method)?.name || record.method,
                icon: coffeeMethods.find(m => m.id === record.method)?.icon || '☕',
                params: record.params,
                stages: record.stages
            };
        } else {
            const defaultStages = [
                { name: '闷蒸', time: 30 },
                { name: '第一段注水', time: 30 },
                { name: '第二段注水', time: 30 },
                { name: '滴滤', time: 30 }
            ];
            currentTimerMethod = {
                id: record.method,
                name: coffeeMethods.find(m => m.id === record.method)?.name || record.method,
                icon: coffeeMethods.find(m => m.id === record.method)?.icon || '☕',
                params: record.params,
                stages: defaultStages
            };
        }
        
        document.getElementById('timer-method-name').textContent = currentTimerMethod.name + ' - 重播';
        document.getElementById('manual-dose').value = record.params.dose;
        document.getElementById('manual-water').value = record.params.water;
        document.getElementById('manual-temp').value = record.params.temperature;
        document.getElementById('manual-grind').value = record.params.grindSize;
        
        switchParamMode('manual');
        manualStages = [...currentTimerMethod.stages];
        renderStagesEditor();
        renderTimerStages(currentTimerMethod);
        
        showToast('已加载记录参数，开始计时吧');
    }, 300);
}

function editRecordFromDetail() {
    if (!selectedRecordForReplay) return;
    const recordId = selectedRecordForReplay.id;
    closeRecordDetail();
    editRecord(recordId);
}

// Stats
function updateStats() {
    document.getElementById('stat-total').textContent = records.length;
    
    if (records.length > 0) {
        // Favorite method
        const methodCounts = {};
        records.forEach(r => {
            methodCounts[r.method] = (methodCounts[r.method] || 0) + 1;
        });
        const favorite = Object.entries(methodCounts).sort((a, b) => b[1] - a[1])[0];
        if (favorite) {
            const method = coffeeMethods.find(m => m.id === favorite[0]);
            document.getElementById('stat-favorite').textContent = method ? method.name : favorite[0];
        }
        
        // Average rating
        const ratings = records.filter(r => r.taste.rating > 0).map(r => r.taste.rating);
        if (ratings.length > 0) {
            const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
            document.getElementById('stat-rating').textContent = avg.toFixed(1);
        }
        
        // This week
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        const weekCount = records.filter(r => new Date(r.date) > weekAgo).length;
        document.getElementById('stat-week').textContent = weekCount;
    } else {
        document.getElementById('stat-favorite').textContent = '-';
        document.getElementById('stat-rating').textContent = '-';
        document.getElementById('stat-week').textContent = '0';
    }

    renderDashboardCharts();
}

function renderDashboardCharts() {
    renderMethodDonut();
    renderWeeklyBar();
    renderRatingBars();
}

function chartEmpty(message) {
    return `<div class="chart-empty"><div class="chart-empty-icon">☕</div><div>${message}</div></div>`;
}

function renderMethodDonut() {
    const container = document.getElementById('chart-method-donut');
    if (records.length === 0) {
        container.innerHTML = chartEmpty('暂无数据，开始记录你的第一杯咖啡吧');
        return;
    }

    const counts = {};
    records.forEach(r => { counts[r.method] = (counts[r.method] || 0) + 1; });
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const total = records.length;
    const cx = 80, cy = 80, r = 60, inner = 40;

    let paths = '';
    let startAngle = 0;
    entries.forEach(([methodId, count], i) => {
        const slice = (count / total) * Math.PI * 2;
        const endAngle = startAngle + slice;
        const largeArc = slice > Math.PI ? 1 : 0;
        const x1 = cx + r * Math.cos(startAngle);
        const y1 = cy + r * Math.sin(startAngle);
        const x2 = cx + r * Math.cos(endAngle);
        const y2 = cy + r * Math.sin(endAngle);
        const ix1 = cx + inner * Math.cos(endAngle);
        const iy1 = cy + inner * Math.sin(endAngle);
        const ix2 = cx + inner * Math.cos(startAngle);
        const iy2 = cy + inner * Math.sin(startAngle);

        if (entries.length === 1) {
            paths += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${CHART_COLORS[i % CHART_COLORS.length]}" />`;
            paths += `<circle cx="${cx}" cy="${cy}" r="${inner}" fill="white" />`;
        } else {
            paths += `<path d="M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${inner} ${inner} 0 ${largeArc} 0 ${ix2} ${iy2} Z" fill="${CHART_COLORS[i % CHART_COLORS.length]}" />`;
        }
        startAngle = endAngle;
    });

    const legend = entries.map(([methodId, count], i) => {
        const method = coffeeMethods.find(m => m.id === methodId);
        const name = method ? method.icon + ' ' + method.name : methodId;
        const pct = Math.round(count / total * 100);
        return `<div class="donut-legend-item">
            <span class="donut-legend-dot" style="background:${CHART_COLORS[i % CHART_COLORS.length]}"></span>
            <span class="donut-legend-label">${name}</span>
            <span class="donut-legend-value">${count} (${pct}%)</span>
        </div>`;
    }).join('');

    container.innerHTML = `
        <div class="donut-chart-container">
            <svg class="donut-svg" width="160" height="160" viewBox="0 0 160 160">
                ${paths}
                <text x="${cx}" y="${cy - 4}" text-anchor="middle" class="donut-center-text" font-size="24">${total}</text>
                <text x="${cx}" y="${cy + 14}" text-anchor="middle" class="donut-center-label">总冲泡</text>
            </svg>
            <div class="donut-legend">${legend}</div>
        </div>`;
}

function renderWeeklyBar() {
    const container = document.getElementById('chart-weekly-bar');
    if (records.length === 0) {
        container.innerHTML = chartEmpty('暂无数据，开始记录你的第一杯咖啡吧');
        return;
    }

    const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const today = new Date();
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        days.push(d);
    }

    const dayCounts = days.map(d => {
        const ds = d.toDateString();
        return records.filter(r => new Date(r.date).toDateString() === ds).length;
    });
    const maxCount = Math.max(...dayCounts, 1);

    const svgW = 280, svgH = 180, padTop = 10, padBottom = 30, padLeft = 10, padRight = 10;
    const chartH = svgH - padTop - padBottom;
    const barW = (svgW - padLeft - padRight) / 7;
    const gap = barW * 0.25;
    const actualBarW = barW - gap;

    let bars = '';
    dayCounts.forEach((count, i) => {
        const barH = maxCount > 0 ? (count / maxCount) * chartH : 0;
        const x = padLeft + i * barW + gap / 2;
        const y = padTop + chartH - barH;
        const color = count > 0 ? CHART_COLORS[1] : 'rgba(74,44,42,0.08)';
        const rx = Math.min(4, actualBarW / 2);

        bars += `<rect class="bar-chart-bar" x="${x}" y="${y}" width="${actualBarW}" height="${Math.max(barH, 2)}" rx="${rx}" fill="${color}" />`;
        if (count > 0) {
            bars += `<text class="bar-chart-value" x="${x + actualBarW / 2}" y="${y - 4}" text-anchor="middle">${count}</text>`;
        }
        const dayLabel = dayNames[days[i].getDay()];
        bars += `<text class="bar-chart-label" x="${x + actualBarW / 2}" y="${svgH - 8}" text-anchor="middle">${dayLabel}</text>`;
    });

    container.innerHTML = `
        <div class="bar-chart-container">
            <svg class="bar-chart-svg" viewBox="0 0 ${svgW} ${svgH}">
                <line x1="${padLeft}" y1="${padTop + chartH}" x2="${svgW - padRight}" y2="${padTop + chartH}" stroke="rgba(74,44,42,0.08)" stroke-width="1" />
                ${bars}
            </svg>
        </div>`;
}

function renderRatingBars() {
    const container = document.getElementById('chart-rating-bars');
    if (records.length === 0) {
        container.innerHTML = chartEmpty('暂无数据，开始记录你的第一杯咖啡吧');
        return;
    }

    const ratingCounts = [0, 0, 0, 0, 0];
    records.forEach(r => {
        const rating = r.taste?.rating;
        if (rating >= 1 && rating <= 5) ratingCounts[rating - 1]++;
    });
    const maxCount = Math.max(...ratingCounts, 1);

    const gradients = [
        '#C4875A',
        '#D4A574',
        '#8B5A2B',
        '#5D8A66',
        '#4A2C2A'
    ];

    const bars = [5, 4, 3, 2, 1].map(star => {
        const count = ratingCounts[star - 1];
        const pct = maxCount > 0 ? (count / maxCount) * 100 : 0;
        return `<div class="rating-bar-row">
            <span class="rating-bar-label">${'★'.repeat(star)}</span>
            <div class="rating-bar-track">
                <div class="rating-bar-fill" style="width:${pct}%;background:${gradients[star - 1]}"></div>
            </div>
            <span class="rating-bar-count">${count}</span>
        </div>`;
    }).join('');

    container.innerHTML = `<div class="rating-bars-container">${bars}</div>`;
}

// Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);

// Export functions to window for HTML onclick handlers
window.navigateTo = navigateTo;
window.showToast = showToast;
window.openRecordModal = openRecordModal;
window.closeRecordModal = closeRecordModal;
window.editRecord = editRecord;
window.deleteRecord = deleteRecord;
window.showRecordDetail = showRecordDetail;
window.closeRecordDetail = closeRecordDetail;
window.replayTimerFromRecord = replayTimerFromRecord;
window.editRecordFromDetail = editRecordFromDetail;
window.handleImageUpload = handleImageUpload;
window.removeImage = removeImage;
window.saveRecord = saveRecord;
window.closeRecipePreview = closeRecipePreview;
window.handleRecordMethodChange = handleRecordMethodChange;
window.addRecordStage = addRecordStage;
window.startTimer = startTimer;
window.pauseTimer = pauseTimer;
window.resetTimer = resetTimer;
window.switchParamMode = switchParamMode;
window.addStage = addStage;

}
