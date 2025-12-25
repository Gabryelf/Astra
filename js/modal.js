// modal.js - Управление модальными окнами

let currentModal = null;

// Инициализация модальных окон
function initModals() {
    // Закрытие модального окна при клике на фон
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCurrentModal();
            }
        });
    });
    
    // Закрытие при нажатии ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && currentModal) {
            closeCurrentModal();
        }
    });
}

// Показать модальное окно игры
function showGameModal(gameId) {
    const modal = document.getElementById('gameModal');
    const game = getGameById(gameId);
    
    if (!game) {
        console.error('Игра не найдена:', gameId);
        return;
    }
    
    // Заполняем данные игры
    document.getElementById('modalGameTitle').textContent = game.title;
    document.getElementById('modalGameTitle').dataset.path = game.path;
    document.getElementById('modalGameCategory').textContent = game.category;
    document.getElementById('modalGameDescription').textContent = game.description;
    document.getElementById('modalGameRating').innerHTML = `<i class="fas fa-star"></i> ${game.rating}`;
    document.getElementById('modalGameTime').innerHTML = `<i class="fas fa-clock"></i> ${game.playtime}`;
    document.getElementById('modalGameLikes').textContent = game.likes;
    document.getElementById('modalGamePlays').textContent = game.plays;
    document.getElementById('modalGameDate').textContent = game.date;
    
    // Изображение
    const gameImage = document.getElementById('modalGameImage');
    gameImage.style.backgroundImage = `url('${game.image}')`;
    
    // Бейджи
    const badgesContainer = document.getElementById('modalGameBadges');
    badgesContainer.innerHTML = '';
    
    if (game.featured) {
        badgesContainer.innerHTML += `<span class="modal-game-badge" style="background: #ff4757; color: white;">
            <i class="fas fa-crown"></i> Рекомендуем
        </span>`;
    }
    
    if (game.new) {
        badgesContainer.innerHTML += `<span class="modal-game-badge" style="background: #00d2d3; color: white;">
            <i class="fas fa-bolt"></i> НОВИНКА
        </span>`;
    }
    
    // Детали
    document.getElementById('modalGameDetails').innerHTML = game.details || 
        `<p>${game.fullDescription || 'Подробная информация об игре...'}</p>`;
    
    // Управление
    const controls = game.controls || [
        { key: 'WASD / Стрелки', action: 'Движение' },
        { key: 'Пробел', action: 'Прыжок / Выстрел' },
        { key: 'ESC', action: 'Пауза / Меню' }
    ];
    
    const controlsContainer = document.getElementById('modalGameControls');
    controlsContainer.innerHTML = controls.map(control => `
        <div class="control-item">
            <span class="control-key">${control.key}</span>
            <span class="control-action">${control.action}</span>
        </div>
    `).join('');
    
    // Автор
    document.getElementById('modalAuthorName').textContent = game.author || 'Неизвестный автор';
    document.getElementById('modalAuthorBio').textContent = game.authorBio || 'Автор этой замечательной игры.';
    
    // Теги
    const tagsContainer = document.getElementById('modalGameTags');
    tagsContainer.innerHTML = game.tags ? game.tags.map(tag => 
        `<span class="game-tag">${tag}</span>`
    ).join('') : '<span class="game-tag">HTML5</span><span class="game-tag">JavaScript</span><span class="game-tag">Canvas</span>';
    
    // Ссылки
    if (game.source) {
        document.getElementById('modalGameSource').href = game.source;
        document.getElementById('modalGameSource').style.display = 'inline-flex';
    } else {
        document.getElementById('modalGameSource').style.display = 'none';
    }
    
    if (game.demo) {
        document.getElementById('modalGameDemo').href = game.demo;
        document.getElementById('modalGameDemo').style.display = 'inline-flex';
    } else {
        document.getElementById('modalGameDemo').style.display = 'none';
    }
    
    // Показываем модальное окно
    openModal('gameModal');
}

// Показать модальное окно категории
function showCategoryModal(categoryId) {
    const modal = document.getElementById('categoryModal');
    const category = getCategoryById(categoryId);
    
    if (!category) {
        console.error('Категория не найдена:', categoryId);
        return;
    }
    
    // Заполняем данные категории
    document.getElementById('categoryModalTitle').textContent = category.name;
    document.getElementById('categoryModalDescription').textContent = category.description;
    
    // Иконка
    const iconElement = document.getElementById('categoryModalIcon');
    iconElement.innerHTML = `<i class="${category.icon}"></i>`;
    iconElement.style.background = `linear-gradient(135deg, ${category.color1 || '#6c5ce7'}, ${category.color2 || '#a29bfe'})`;
    
    // Статистика
    document.getElementById('categoryGamesCount').textContent = category.gameCount;
    document.getElementById('categoryTotalPlays').textContent = category.totalPlays;
    document.getElementById('categoryAvgRating').textContent = category.avgRating;
    
    // Игры категории
    const gamesContainer = document.getElementById('categoryGamesList');
    const categoryGames = getGamesByCategory(categoryId);
    
    gamesContainer.innerHTML = categoryGames.map(game => `
        <div class="category-game-item" onclick="showGameModal('${game.id}')">
            <div class="category-game-image" style="background-image: url('${game.image}')"></div>
            <div class="category-game-info">
                <h4>${game.title}</h4>
                <div class="category-game-rating">
                    <i class="fas fa-star"></i> ${game.rating}
                </div>
                <small>${game.playtime}</small>
            </div>
        </div>
    `).join('');
    
    // Показываем модальное окно
    openModal('categoryModal');
}

// Открыть модальное окно
function openModal(modalId) {
    closeCurrentModal();
    
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    currentModal = modalId;
    
    // Анимация появления
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Закрыть текущее модальное окно
function closeCurrentModal() {
    if (!currentModal) return;
    
    const modal = document.getElementById(currentModal);
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }, 300);
    }
    
    currentModal = null;
}

// Закрыть модальное окно игры
function closeGameModal() {
    closeCurrentModal();
}

// Закрыть модальное окно категории
function closeCategoryModal() {
    closeCurrentModal();
}

// Функции для работы с данными (заглушки, нужно реализовать в games-loader.js)
function getGameById(gameId) {
    // Реализовать в games-loader.js
    return window.gamesData?.find(g => g.id === gameId) || null;
}

function getCategoryById(categoryId) {
    const categories = {
        action: {
            id: 'action',
            name: 'Экшен',
            description: 'Стрелялки, драки, платформеры. Быстрый темп, адреналин и экшен!',
            icon: 'fas fa-fighter-jet',
            gameCount: '23',
            totalPlays: '256K',
            avgRating: '4.5'
        },
        arcade: {
            id: 'arcade',
            name: 'Аркады',
            description: 'Классические аркадные игры, ретро и современные вариации',
            icon: 'fas fa-ghost',
            gameCount: '18',
            totalPlays: '189K',
            avgRating: '4.4'
        },
        // ... другие категории
    };
    
    return categories[categoryId] || null;
}

function getGamesByCategory(categoryId) {
    // Реализовать в games-loader.js
    return window.gamesData?.filter(g => g.category === categoryId).slice(0, 6) || [];
}

// Функции для кнопок в модальном окне
function addToFavorites() {
    const gameTitle = document.getElementById('modalGameTitle').textContent;
    alert(`Игра "${gameTitle}" добавлена в избранное!`);
    // Реализовать сохранение в localStorage
}

function shareGame() {
    const gameTitle = document.getElementById('modalGameTitle').textContent;
    if (navigator.share) {
        navigator.share({
            title: gameTitle,
            text: `Попробуй игру "${gameTitle}" на GameHub!`,
            url: window.location.href
        });
    } else {
        alert(`Ссылка на игру "${gameTitle}" скопирована в буфер обмена!`);
        // Реализовать копирование ссылки
    }
}
