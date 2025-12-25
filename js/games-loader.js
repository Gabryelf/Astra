const gamesData = [
    // ЭКШЕН ИГРЫ
    {
        id: 'space-shooter',
        title: 'Cosmo Dash',
        category: 'action',
        description: 'Захватывающий космический шутер с волнами врагов и боссами',
        fullDescription: 'Защищайте галактику от вторжения инопланетян! Управляйте космическим кораблём, уничтожайте вражеские волны, собирайте улучшения и сражайтесь с эпическими боссами. Игра с прогрессивной сложностью и системой апгрейдов.',
        image: 'docs/screenshots/space-shooter.jpg',
        path: 'games/action/space_shooter/index.html',
        author: 'GameDeva',
        authorBio: 'Студия разработки космических игр с 2020 года',
        rating: 4.8,
        playtime: '5-10 мин',
        likes: '1.2K',
        plays: '15.7K',
        date: '15.01.2024',
        featured: true,
        new: false,
        controls: [
            { key: 'WASD / Стрелки', action: 'Управление кораблём' },
            { key: 'Пробел', action: 'Огонь' },
            { key: 'Shift', action: 'Ускорение' },
            { key: 'R', action: 'Перезарядка' }
        ],
        tags: ['HTML5', 'Canvas', 'Shooter', 'Космос', 'Экшен'],
        source: 'https://github.com/Gabryelf/Astra/blob/v0.0.1/games/actions/space_shooter_1/index.html',
        demo: '#'
    },
    
    {
        id: 'zombie-runner',
        title: 'Zombie Runner',
        category: 'action',
        description: 'Беги от зомби в постапокалиптическом мире',
        image: 'docs/screenshots/zombie-runner.jpg',
        path: 'games/action/zombie-runner/index.html',
        author: 'Survival Games',
        rating: 4.5,
        playtime: '3-7 мин',
        likes: '890',
        plays: '9.2K',
        date: '10.12.2023'
    },
    
    {
        id: 'ninja-jump',
        title: 'Ninja Jump',
        category: 'action',
        description: 'Платформер про ниндзя с акробатическими трюками',
        image: 'docs/screenshots/ninja-jump.jpg',
        path: 'games/action/ninja-jump/index.html',
        author: 'Jump Masters',
        rating: 4.3,
        playtime: '2-5 мин',
        likes: '750',
        plays: '8.5K',
        date: '05.11.2023'
    },
    
    // АРКАДНЫЕ ИГРЫ
    {
        id: 'retro-arcade',
        title: 'Retro Arcade',
        category: 'arcade',
        description: 'Классическая аркада в стиле 80-х',
        fullDescription: 'Окунитесь в ностальгию с этой ретро-аркадой! Пиксельная графика, 8-битная музыка и классический геймплей. Пройдите 30 уровней, соберите бонусы и установите новый рекорд!',
        image: 'docs/screenshots/retro-arcade.jpg',
        path: 'games/arcade/retro-arcade/index.html',
        author: 'Retro Dev',
        authorBio: 'Любитель ретро-игр и пиксель-арта',
        rating: 4.6,
        playtime: '2-5 мин',
        likes: '890',
        plays: '8.4K',
        date: '20.12.2023',
        featured: true,
        new: true,
        controls: [
            { key: 'Стрелки', action: 'Движение' },
            { key: 'Пробел', action: 'Прыжок' },
            { key: 'A', action: 'Атака' },
            { key: 'P', action: 'Пауза' }
        ],
        tags: ['Аркада', 'Ретро', 'Пиксель-арт', '80-е'],
        source: 'https://github.com/example/retro-arcade'
    },
    
    {
        id: 'bubble-pop',
        title: 'Bubble Pop',
        category: 'arcade',
        description: 'Лопайте пузыри и набирайте очки',
        image: 'docs/screenshots/bubble-pop.jpg',
        path: 'games/arcade/bubble-pop/index.html',
        author: 'Bubble Games',
        rating: 4.2,
        playtime: '1-3 мин',
        likes: '620',
        plays: '7.1K',
        date: '15.10.2023'
    },
    
    // ГОЛОВОЛОМКИ
    {
        id: 'puzzle-master',
        title: 'Puzzle Master',
        category: 'puzzle',
        description: 'Сложные головоломки с красивой графикой',
        fullDescription: 'Более 100 уровней сложности в этой захватывающей головоломке! От простых задач для разминки до сложных логических испытаний. Идеально подходит для развития мышления и логики.',
        image: 'docs/screenshots/puzzle-master.jpg',
        path: 'games/puzzle/puzzle-master/index.html',
        author: 'Brain Games Inc.',
        authorBio: 'Специалисты по обучающим играм и головоломкам',
        rating: 4.9,
        playtime: '10-30 мин',
        likes: '2.1K',
        plays: '12.3K',
        date: '05.01.2024',
        featured: true,
        new: false,
        controls: [
            { key: 'Мышь / Тач', action: 'Перетаскивание элементов' },
            { key: 'R', action: 'Перезапуск уровня' },
            { key: 'H', action: 'Подсказка' },
            { key: 'ESC', action: 'Меню' }
        ],
        tags: ['Головоломка', 'Логика', 'Обучение', 'Мозг'],
        source: 'https://github.com/example/puzzle-master'
    },
    
    // СТРАТЕГИИ
    {
        id: 'chess-pro',
        title: 'Chess Pro',
        category: 'strategy',
        description: 'Классические шахматы с ИИ разной сложности',
        image: 'docs/screenshots/chess-pro.jpg',
        path: 'games/strategy/chess-pro/index.html',
        author: 'Mind Sports',
        rating: 4.7,
        playtime: '10-60 мин',
        likes: '1.5K',
        plays: '11.8K',
        date: '12.11.2023'
    },
    
    // ГОНКИ
    {
        id: 'street-racer',
        title: 'Street Racer',
        category: 'racing',
        description: 'Уличные гонки на спортивных автомобилях',
        image: 'docs/screenshots/street-racer.jpg',
        path: 'games/racing/street-racer/index.html',
        author: 'Racing Team',
        rating: 4.4,
        playtime: '3-8 мин',
        likes: '940',
        plays: '10.2K',
        date: '25.12.2023',
        new: true
    },
    
    // СПОРТ
    {
        id: 'basketball-pro',
        title: 'Basketball Pro',
        category: 'sports',
        description: 'Баскетбольный симулятор с реалистичной физикой',
        image: 'docs/screenshots/basketball-pro.jpg',
        path: 'games/sports/basketball-pro/index.html',
        author: 'Sports Games Studio',
        rating: 4.3,
        playtime: '2-6 мин',
        likes: '780',
        plays: '8.9K',
        date: '08.11.2023'
    },
    
    // КАЗУАЛЬНЫЕ
    {
        id: 'fruit-slice',
        title: 'Fruit Slice',
        category: 'casual',
        description: 'Разрезай летающие фрукты в воздухе',
        image: 'docs/screenshots/fruit-slice.jpg',
        path: 'games/casual/fruit-slice/index.html',
        author: 'Casual Fun',
        rating: 4.1,
        playtime: '1-4 мин',
        likes: '650',
        plays: '7.8K',
        date: '18.10.2023'
    },
    
    // ОБРАЗОВАТЕЛЬНЫЕ
    {
        id: 'math-hero',
        title: 'Math Hero',
        category: 'educational',
        description: 'Изучай математику в игровой форме',
        image: 'docs/screenshots/math-hero.jpg',
        path: 'games/educational/math-hero/index.html',
        author: 'EduGames',
        rating: 4.6,
        playtime: '5-15 мин',
        likes: '920',
        plays: '9.7K',
        date: '30.12.2023',
        new: true
    }
];

// Экспортируем данные в глобальную область видимости
window.gamesData = gamesData;

// Загрузка игр на главной странице
function loadGames(filter = 'all') {
    const container = document.getElementById('games-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    let filteredGames = gamesData;
    
    // Применяем фильтры
    if (filter !== 'all') {
        switch(filter) {
            case 'new':
                filteredGames = gamesData.filter(game => game.new);
                break;
            case 'popular':
                filteredGames = gamesData.filter(game => game.plays && parseInt(game.plays) > 10000);
                break;
            case 'featured':
                filteredGames = gamesData.filter(game => game.featured);
                break;
            default:
                filteredGames = gamesData.filter(game => game.category === filter);
        }
    }
    
    // Сортируем по популярности
    filteredGames.sort((a, b) => {
        const playsA = parseInt(a.plays) || 0;
        const playsB = parseInt(b.plays) || 0;
        return playsB - playsA;
    });
    
    // Отображаем игры
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-card-inner">
                <div class="game-card-header">
                    <div class="game-image" style="background-image: url('${game.image}')">
                        ${game.new ? '<span class="game-badge new">НОВИНКА</span>' : ''}
                        ${game.featured ? '<span class="game-badge featured">ТОП</span>' : ''}
                    </div>
                    <div class="game-play-overlay" onclick="openGameModal('${game.id}')">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="game-card-body">
                    <div class="game-title-row">
                        <h3 class="game-title">${game.title}</h3>
                        <div class="game-rating">
                            <i class="fas fa-star"></i> ${game.rating}
                        </div>
                    </div>
                    <p class="game-description">${game.description}</p>
                    <div class="game-meta">
                        <span class="game-category">${getCategoryName(game.category)}</span>
                        <span class="game-playtime">
                            <i class="fas fa-clock"></i> ${game.playtime}
                        </span>
                    </div>
                </div>
                <div class="game-card-footer">
                    <button class="btn btn-sm btn-primary" onclick="openGameModal('${game.id}')">
                        <i class="fas fa-info-circle"></i> Подробнее
                    </button>
                    <button class="btn btn-sm btn-outline" onclick="window.location.href='${game.path}'">
                        <i class="fas fa-play"></i> Играть
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(gameCard);
    });
    
    // Если нет игр после фильтрации
    if (filteredGames.length === 0) {
        container.innerHTML = `
            <div class="no-games">
                <i class="fas fa-gamepad"></i>
                <h3>Игры не найдены</h3>
                <p>Попробуйте выбрать другую категорию или фильтр</p>
                <button class="btn btn-primary" onclick="loadGames('all')">
                    Показать все игры
                </button>
            </div>
        `;
    }
}

// Получение названия категории по ID
function getCategoryName(categoryId) {
    const categories = {
        action: 'Экшен',
        arcade: 'Аркада',
        puzzle: 'Головоломка',
        strategy: 'Стратегия',
        racing: 'Гонки',
        sports: 'Спорт',
        casual: 'Казуальная',
        educational: 'Образовательная'
    };
    
    return categories[categoryId] || categoryId;
}

// Инициализация фильтров
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            // Загружаем игры с выбранным фильтром
            const filter = this.dataset.filter;
            loadGames(filter);
            
            // Прокрутка к играм
            document.getElementById('all-games').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Загружаем все игры по умолчанию
    loadGames();
});

// Функции для модальных окон (связь с modal.js)
function getGameById(gameId) {
    return gamesData.find(game => game.id === gameId) || null;
}

function getGamesByCategory(categoryId) {
    return gamesData.filter(game => game.category === categoryId).slice(0, 6);
}
