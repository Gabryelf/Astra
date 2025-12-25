// games-loader.js
const gamesData = {
    "games": [
        {
            "id": 1,
            "title": "Space Shooter",
            "category": "action",
            "description": "Уничтожай вражеские корабли в космосе",
            "image": "docs/screenshots/space-shooter.jpg",
            "path": "games/action/space-shooter/index.html",
            "author": "GameDev Studio",
            "rating": 4.5
        },
        {
            "id": 2,
            "title": "Zombie Runner",
            "category": "action",
            "description": "Беги от зомби и собирай аптечки",
            "image": "docs/screenshots/zombie-runner.jpg",
            "path": "games/action/zombie-runner/index.html",
            "author": "Runner Games",
            "rating": 4.2
        },
        {
            "id": 3,
            "title": "Retro Arcade",
            "category": "arcade",
            "description": "Классическая аркада в стиле 80-х",
            "image": "docs/screenshots/retro-arcade.jpg",
            "path": "games/arcade/retro-arcade/index.html",
            "author": "Retro Dev",
            "rating": 4.8
        }
        // Добавьте больше игр
    ]
};

function loadGames(filter = 'all') {
    const container = document.getElementById('games-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredGames = filter === 'all' 
        ? gamesData.games 
        : gamesData.games.filter(game => game.category === filter);
    
    filteredGames.forEach(game => {
        const gameCard = document.createElement('a');
        gameCard.href = game.path;
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-thumbnail">
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <div class="game-meta">
                    <span class="game-category">${game.category}</span>
                    <div class="game-rating">
                        <i class="fas fa-star"></i> ${game.rating}
                    </div>
                </div>
            </div>
        `;
        
        // Добавляем кнопку "Назад" внутри игры
        if (game.path.includes('index.html')) {
            gameCard.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = game.path;
                // Добавим localStorage для отслеживания последней позиции
                localStorage.setItem('lastVisited', window.location.pathname);
            });
        }
        
        container.appendChild(gameCard);
    });
}

// Функция для добавления кнопки "Назад в меню" в играх
function addBackButton() {
    // Добавьте этот код в каждую игру (можно через шаблон)
    const backButton = `
        <div style="position: fixed; top: 20px; left: 20px; z-index: 1000;">
            <a href="/" class="btn btn-secondary" style="text-decoration: none;">
                <i class="fas fa-arrow-left"></i> Назад в меню
            </a>
        </div>
    `;
    
    // В каждой игре добавьте:
    // document.body.insertAdjacentHTML('afterbegin', backButton);
}

// Инициализация фильтров
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            button.classList.add('active');
            // Загружаем игры с выбранным фильтром
            const filter = button.dataset.filter;
            loadGames(filter);
        });
    });
    
    // Загружаем все игры по умолчанию
    loadGames();
});
