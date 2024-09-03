async function fetchTeamStats() {
    const url = 'https://sport-highlights-api.p.rapidapi.com/football/teams/statistics/115669?fromDate=2024-01-01&timezone=America%2FSao_Paulo';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '854d52dfc6mshd9f4f8c27dcbbe9p18486fjsn64fe1a60f11d',
            'x-rapidapi-host': 'sport-highlights-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const dataStats = await response.json();
        
        // Log dos dados da API
        console.log('Dados da API:', dataStats);

        const firstItem = dataStats[0]; // Acessa o primeiro item do array

        // Log do primeiro item
        console.log('Primeiro item:', firstItem);

        // Dados que serão usados para criar o HTML
        const totalWins = firstItem.total.games.wins;
        const totalLosses = firstItem.total.games.loses;
        const totalDraws = firstItem.total.games.draws;
        const totalGoalsScored = firstItem.total.goals.scored;
        const totalGoalsReceived = firstItem.total.goals.received; // Corrigido para "received"
        
        const homeWins = firstItem.home.games.wins;
        const homeLosses = firstItem.home.games.loses;
        const homeDraws = firstItem.home.games.draws;
        const homeGoalsScored = firstItem.home.goals.scored;
        const homeGoalsReceived = firstItem.home.goals.received; // Corrigido para "received"
        
        const awayWins = firstItem.away.games.wins;
        const awayLosses = firstItem.away.games.loses;
        const awayDraws = firstItem.away.games.draws;
        const awayGoalsScored = firstItem.away.goals.scored;
        const awayGoalsReceived = firstItem.away.goals.received; // Corrigido para "received"

        // Log dos dados usados para criar o HTML
        console.log('Total Wins:', totalWins);
        console.log('Total Losses:', totalLosses);
        console.log('Total Draws:', totalDraws);
        console.log('Total Goals Scored:', totalGoalsScored);
        console.log('Total Goals Received:', totalGoalsReceived);
        
        console.log('Home Wins:', homeWins);
        console.log('Home Losses:', homeLosses);
        console.log('Home Draws:', homeDraws);
        console.log('Home Goals Scored:', homeGoalsScored);
        console.log('Home Goals Received:', homeGoalsReceived);
        
        console.log('Away Wins:', awayWins);
        console.log('Away Losses:', awayLosses);
        console.log('Away Draws:', awayDraws);
        console.log('Away Goals Scored:', awayGoalsScored);
        console.log('Away Goals Received:', awayGoalsReceived);

        // Cria o HTML como uma string
        const htmlContent = `
            <ul>
                <li><h2 class="total">Stats Total</h2></li>
                <li><p>Vitória: ${totalWins}</p></li>
                <li><p>Derrota: ${totalLosses}</p></li>
                <li><p>Empate: ${totalDraws}</p></li>
                <li><h3>Total: ${totalWins + totalLosses + totalDraws}</h3></li>
            </ul>
            <ul>
                <li><h2 class="h2gol">Gols</h2></li>
                <li><p>Gols Pró: ${totalGoalsScored}</p></li>
                <li><p>Gols Contra: ${totalGoalsReceived}</p></li>
                <li><h3>Total: ${totalGoalsScored + totalGoalsReceived}</h3></li>
            </ul>
            <ul>
                <li><h2 class="total">Stats Mandante</h2></li>
                <li><p>Vitória: ${homeWins}</p></li>
                <li><p>Derrota: ${homeLosses}</p></li>
                <li><p>Empate: ${homeDraws}</p></li>
                <li><h3>Total: ${homeWins + homeLosses + homeDraws}</h3></li>
            </ul>
            <ul>
                <li><h2 class="h2gol">Gols</h2></li>
                <li><p>Gols Pró: ${homeGoalsScored}</p></li>
                <li><p>Gols Contra: ${homeGoalsReceived}</p></li>
                <li><h3>Total: ${homeGoalsScored + homeGoalsReceived}</h3></li>
            </ul>
            <ul>
                <li><h2 class="total">Stats Visitante</h2></li>
                <li><p>Vitória: ${awayWins}</p></li>
                <li><p>Derrota: ${awayLosses}</p></li>
                <li><p>Empate: ${awayDraws}</p></li>
                <li><h3>Total: ${awayWins + awayLosses + awayDraws}</h3></li>
            </ul>
            <ul>
                <li><h2 class="h2gol">Gols</h2></li>
                <li><p>Gols Pró: ${awayGoalsScored}</p></li>
                <li><p>Gols Contra: ${awayGoalsReceived}</p></li>
                <li><h3>Total: ${awayGoalsScored + awayGoalsReceived}</h3></li>
            </ul>
        `;

        // Atualiza o conteúdo do contêiner com o HTML gerado
        document.getElementById('stats-container').innerHTML = htmlContent;
        
    } catch (error) {
        console.error('Error:', error);
    }
}

// Chama a função para executar o fetch e atualizar o HTML
fetchTeamStats();
