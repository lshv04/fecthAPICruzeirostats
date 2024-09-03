async function fetchTeamStats() {
  const url =
    "https://sport-highlights-api.p.rapidapi.com/football/teams/statistics/115669?fromDate=2024-01-01&timezone=America%2FSao_Paulo"; // ID do Cruzeiro e data ajustada
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "854d52dfc6mshd9f4f8c27dcbbe9p18486fjsn64fe1a60f11d",
      "x-rapidapi-host": "sport-highlights-api.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const dataStats = await response.json(); // Convertendo o resultado para JSON
    console.log("Stats:", dataStats); // Logando o objeto com o nome "Stats"

    const firstItem = dataStats[0];
    
// stats total

    document.getElementById(
      "total-wins-seriea"
    ).textContent = `Vitória: ${firstItem.total.games.wins}`;
    document.getElementById(
      "total-loss-seriea"
    ).textContent = `Derrota: ${firstItem.total.games.loses}`;
    document.getElementById(
      "total-draw-seriea"
    ).textContent = `Empate: ${firstItem.total.games.draws}`;
    // Calcula o total e atualiza o HTML
    const totalseriea =
      firstItem.total.games.wins +
      firstItem.total.games.loses +
      firstItem.total.games.draws;
    document.getElementById("total-Seriea").textContent = `Total: ${totalseriea}`;


    document.getElementById(
        "total-golpro-seriea"
      ).textContent = `Gol pró: ${firstItem.total.goals.scored}`;
      document.getElementById(
        "total-golcontra-seriea"
      ).textContent = `Gol contra: ${firstItem.total.goals.received}`;

    
      // Calcula o total e atualiza o HTML
      const totalgolseriea  =
      firstItem.total.goals.scored +
      firstItem.total.goals.received;
       
      document.getElementById("total-gols-Seriea").textContent = `Total: ${totalgolseriea}`;



// stats mandante

document.getElementById(
    "total-wins-home-seriea"
  ).textContent = `Vitória: ${firstItem.home.games.wins}`;
  document.getElementById(
    "total-loses-home-seriea"
  ).textContent = `Derrota: ${firstItem.home.games.loses}`;
  document.getElementById(
    "total-draw-home-seriea"
  ).textContent = `Empate: ${firstItem.home.games.draws}`;
  // Calcula o total e atualiza o HTML
  const totalhomeseriea =
  firstItem.home.games.wins +
  firstItem.home.games.loses +
  firstItem.home.games.draws;
  document.getElementById("total-home-Seriea").textContent = `Total: ${totalhomeseriea}`;


  document.getElementById(
      "total-golpro-home-seriea"
    ).textContent = `Gol pró: ${firstItem.home.goals.scored}`;
    document.getElementById(
      "total-golcontra-home-seriea"
    ).textContent = `Gol contra: ${firstItem.home.goals.received}`;

  
    // Calcula o total e atualiza o HTML
    const totalgolhomeseriea  =
    firstItem.home.goals.scored +
    firstItem.home.goals.received;
     
    document.getElementById("total-gols-home-Seriea").textContent = `Total: ${totalgolhomeseriea}`;

// stats visitante

document.getElementById(
    "total-wins-away-seriea"
  ).textContent = `Vitória: ${firstItem.away.games.wins}`;
  document.getElementById(
    "total-loses-away-seriea"
  ).textContent = `Derrota: ${firstItem.away.games.loses}`;
  document.getElementById(
    "total-draw-away-seriea"
  ).textContent = `Empate: ${firstItem.away.games.draws}`;
  // Calcula o total e atualiza o HTML
  const totalawayseriea =
  firstItem.away.games.wins +
  firstItem.away.games.loses +
  firstItem.away.games.draws;
  document.getElementById("total-away-Seriea").textContent = `Total: ${totalawayseriea}`;


  document.getElementById(
      "total-golpro-away-seriea"
    ).textContent = `Gol pró: ${firstItem.away.goals.scored}`;
    document.getElementById(
      "total-golcontra-away-seriea"
    ).textContent = `Gol contra: ${firstItem.away.goals.received}`;

  
    // Calcula o total e atualiza o HTML
    const totalgolawayseriea  =
    firstItem.away.goals.scored +
    firstItem.away.goals.received;
     
    document.getElementById("total-gols-away-Seriea").textContent = `Total: ${totalgolawayseriea}`;

  } catch (error) {
    console.error("Error:", error);
  }
}

// Chama a função para executar o fetch
fetchTeamStats();
