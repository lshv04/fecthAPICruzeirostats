async function fetchTeamStatistics() {
    const urlStats = 'https://football-highlights-api.p.rapidapi.com/teams/statistics/115669?timezone=America%2FSao_Paulo&fromDate=2024-01-01';
    const urlLastFiveGames = 'https://football-highlights-api.p.rapidapi.com/last-five-games?teamId=115669'; // ID atualizado para o Cruzeiro

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '854d52dfc6mshd9f4f8c27dcbbe9p18486fjsn64fe1a60f11d',
            'x-rapidapi-host': 'football-highlights-api.p.rapidapi.com'
        }
    };

    try {
        // Fetch para estatísticas do time
        const responseStats = await fetch(urlStats, options);
        if (!responseStats.ok) {
            throw new Error(`HTTP error! Status: ${responseStats.status}`);
        }
        const dataStats = await responseStats.json();
        console.log('Team Statistics:', dataStats);

        // Fetch para últimos cinco jogos
        const responseLastFiveGames = await fetch(urlLastFiveGames, options);
        if (!responseLastFiveGames.ok) {
            throw new Error(`HTTP error! Status: ${responseLastFiveGames.status}`);
        }
        const dataLastFiveGames = await responseLastFiveGames.json();
        console.log('Last Five Games:', dataLastFiveGames);

        // Adiciona o HTML ao container
        const container = document.querySelector("#game-container");
        container.innerHTML = '';

        // Acessa o array e suas propriedades
        dataLastFiveGames.forEach((game) => {
            const homeTeamName = game.homeTeam.name; // Acessa o nome do time mandante
            const awayTeamName = game.awayTeam.name; // Acessa o nome do time visitante
            const leagueLogo = game.league.logo; // Acessa o logo da liga
            const gameDate = new Date(game.date).toLocaleDateString(); // Formata a data
            const currentScore = game.state.score.current; // Acessa o score atual
            const homeTeamLogo = game.homeTeam.logo; // Acessa o logo do time mandante
            const awayTeamLogo = game.awayTeam.logo; // Acessa o logo do time visitante
            const countryLogo = game.country.logo; // Acessa o logo do país

            const gameHTML = `
                <div class="col-12 league g-0 cell">
                    <img src="${leagueLogo}" class="img-fluid" alt="Imagem oficial da liga">
                </div>
                <div class="col-12 col-md-4 g-0 cell">
                    <h2 class="">Mandante</h2>
                    <div class="gridscore ">
                        
                        <h3 class="">${homeTeamName || 'Mandante'}</h3>
                        <img src="${homeTeamLogo || 'default-team-logo.png'}" class="img-fluid" style="height: 50px;" alt="Escudo do time mandante">
                    </div>
                </div>
                <div class="col-12 col-md-4 score g-0 cell">
                    <p>${gameDate || 'Data'}</p>
                    <p class="currentscore">${currentScore || '0 - 0'}</p> <!-- Exibe o score atual -->
                </div>
                <div class="col-12 col-md-4 g-0 cell">
                    <h2 class="">Visitante</h2>
                    <div class="gridscore">
                        <img src="${awayTeamLogo || 'default-team-logo.png'}" class="img-fluid" style="height: 50px;" alt="Escudo do time visitante">
                        <h3 class="">${awayTeamName || 'Visitante'}</h3>
                        
                    </div>
                </div>
                    <div class="sticker  g-0">
                <a href="https://www.linkedin.com/in/leandrohosken/" target="_blank">LinkedIn</a>
                <a href="https://lshv04.github.io/CV/" target="_blank">CV</a>
                <a href="https://github.com/lshv04" target="_blank">Github</a>
                <a href="https://wa.me/5531987670611" target="_blank">WhatsApp</a>
                <a href="mailto:lshv04@gmail.com" target="_blank">Email</a>
            </div>
            `;

            container.innerHTML += gameHTML;
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

// Chama a função para buscar as estatísticas e últimos cinco jogos
fetchTeamStatistics();
