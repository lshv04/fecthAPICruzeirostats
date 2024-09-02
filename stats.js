async function fetchTeamStats() {
const url = 'https://sport-highlights-api.p.rapidapi.com/football/teams/statistics/115669?fromDate=2024-01-01&timezone=America%2FSao_Paulo'; // ID do Cruzeiro e data ajustada
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
        const dataStats = await response.json(); // Convertendo o resultado para JSON
        console.log('Stats:', dataStats); // Logando o objeto com o nome "Stats"
    } catch (error) {
        console.error('Error:', error);
    }
}

// Chama a função para executar o fetch
fetchTeamStats();
