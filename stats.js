async function fetchTeamStats() {
  const url =
    "https://sport-highlights-api.p.rapidapi.com/football/teams/statistics/115669?fromDate=2024-01-01&timezone=America%2FSao_Paulo";
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
    const dataStats = await response.json();

    // Log dos dados da API
    console.log("Dados da API:", dataStats);

    // Processamento para o primeiro item
    const firstItem = dataStats[0];
    console.log("Primeiro item:", firstItem);

    const totalWins1 = firstItem.total.games.wins;
    const totalLosses1 = firstItem.total.games.loses;
    const totalDraws1 = firstItem.total.games.draws;
    const totalGoalsScored1 = firstItem.total.goals.scored;
    const totalGoalsReceived1 = firstItem.total.goals.received;

    const homeWins1 = firstItem.home.games.wins;
    const homeLosses1 = firstItem.home.games.loses;
    const homeDraws1 = firstItem.home.games.draws;
    const homeGoalsScored1 = firstItem.home.goals.scored;
    const homeGoalsReceived1 = firstItem.home.goals.received;

    const awayWins1 = firstItem.away.games.wins;
    const awayLosses1 = firstItem.away.games.loses;
    const awayDraws1 = firstItem.away.games.draws;
    const awayGoalsScored1 = firstItem.away.goals.scored;
    const awayGoalsReceived1 = firstItem.away.goals.received;

    // HTML para o primeiro item
    const htmlContent1 = `
            <ul>
                <li><h2 class="total">Stats Total</h2></li>
                <li><p>Vitória: ${totalWins1}</p></li>
                <li><p>Derrota: ${totalLosses1}</p></li>
                <li><p>Empate: ${totalDraws1}</p></li>
                <li><h3>Total: ${
                  totalWins1 + totalLosses1 + totalDraws1
                }</h3></li>
            </ul>
            <ul>
                <li><h2 class="h2gol">Gols</h2></li>
                <li><p>Gols Pró: ${totalGoalsScored1}</p></li>
                <li><p>Gols Contra: ${totalGoalsReceived1}</p></li>
                <li><h3>Total: ${
                  totalGoalsScored1 + totalGoalsReceived1
                }</h3></li>
            </ul>
            <ul>
                <li><h2 class="total">Stats Mandante</h2></li>
                <li><p>Vitória: ${homeWins1}</p></li>
                <li><p>Derrota: ${homeLosses1}</p></li>
                <li><p>Empate: ${homeDraws1}</p></li>
                <li><h3>Total: ${homeWins1 + homeLosses1 + homeDraws1}</h3></li>
            </ul>
            <ul>
                <li><h2 class="h2gol">Gols</h2></li>
                <li><p>Gols Pró: ${homeGoalsScored1}</p></li>
                <li><p>Gols Contra: ${homeGoalsReceived1}</p></li>
                <li><h3>Total: ${
                  homeGoalsScored1 + homeGoalsReceived1
                }</h3></li>
            </ul>
            <ul>
                <li><h2 class="total">Stats Visitante</h2></li>
                <li><p>Vitória: ${awayWins1}</p></li>
                <li><p>Derrota: ${awayLosses1}</p></li>
                <li><p>Empate: ${awayDraws1}</p></li>
                <li><h3>Total: ${awayWins1 + awayLosses1 + awayDraws1}</h3></li>
            </ul>
            <ul>
                <li><h2 class="h2gol">Gols</h2></li>
                <li><p>Gols Pró: ${awayGoalsScored1}</p></li>
                <li><p>Gols Contra: ${awayGoalsReceived1}</p></li>
                <li><h3>Total: ${
                  awayGoalsScored1 + awayGoalsReceived1
                }</h3></li>
            </ul>
        `;

    // Cria o HTML para o segundo item
    const secondItem = dataStats[1];
    console.log("Segundo item:", secondItem);

    const totalWins2 = secondItem.total.games.wins;
    const totalLosses2 = secondItem.total.games.loses;
    const totalDraws2 = secondItem.total.games.draws;
    const totalGoalsScored2 = secondItem.total.goals.scored;
    const totalGoalsReceived2 = secondItem.total.goals.received;

    const homeWins2 = secondItem.home.games.wins;
    const homeLosses2 = secondItem.home.games.loses;
    const homeDraws2 = secondItem.home.games.draws;
    const homeGoalsScored2 = secondItem.home.goals.scored;
    const homeGoalsReceived2 = secondItem.home.goals.received;

    const awayWins2 = secondItem.away.games.wins;
    const awayLosses2 = secondItem.away.games.loses;
    const awayDraws2 = secondItem.away.games.draws;
    const awayGoalsScored2 = secondItem.away.goals.scored;
    const awayGoalsReceived2 = secondItem.away.goals.received;

    // HTML para o segundo item
    const htmlContent2 = `
            <ul>
                <li><h2 class="total">Stats Total</h2></li>
                <li><p>Vitória: ${totalWins2}</p></li>
                <li><p>Derrota: ${totalLosses2}</p></li>
                <li><p>Empate: ${totalDraws2}</p></li>
                <li><h3>Total: ${
                  totalWins2 + totalLosses2 + totalDraws2
                }</h3></li>
            </ul>
            <ul>
                <li><h2 class="h2gol">Gols</h2></li>
                <li><p>Gols Pró: ${totalGoalsScored2}</p></li>
                <li><p>Gols Contra: ${totalGoalsReceived2}</p></li>
                <li><h3>Total: ${
                  totalGoalsScored2 + totalGoalsReceived2
                }</h3></li>
            </ul>
            <ul>
                <li><h2 class="total">Stats Mandante</h2></li>
                <li><p>Vitória: ${homeWins2}</p></li>
                <li><p>Derrota: ${homeLosses2}</p></li>
                <li><p>Empate: ${homeDraws2}</p></li>
                <li><h3>Total: ${homeWins2 + homeLosses2 + homeDraws2}</h3></li>
            </ul>
            <ul>
                <li><h2 class="h2gol">Gols</h2></li>
                <li><p>Gols Pró: ${homeGoalsScored2}</p></li>
                <li><p>Gols Contra: ${homeGoalsReceived2}</p></li>
                <li><h3>Total: ${
                  homeGoalsScored2 + homeGoalsReceived2
                }</h3></li>
            </ul>
            <ul>
                <li><h2 class="total">Stats Visitante</h2></li>
                <li><p>Vitória: ${awayWins2}</p></li>
                <li><p>Derrota: ${awayLosses2}</p></li>
                <li><p>Empate: ${awayDraws2}</p></li>
                <li><h3>Total: ${awayWins2 + awayLosses2 + awayDraws2}</h3></li>
            </ul>
            <ul>
                <li><h2 class="h2gol">Gols</h2></li>
                <li><p>Gols Pró: ${awayGoalsScored2}</p></li>
                <li><p>Gols Contra: ${awayGoalsReceived2}</p></li>
                <li><h3>Total: ${
                  awayGoalsScored2 + awayGoalsReceived2
                }</h3></li>
            </ul>
        `;
    // Cria o HTML para o terceiro item
    const thirdItem = dataStats[2];
    console.log("Terceiro item:", thirdItem);

    const totalWins3 = thirdItem.total.games.wins;
    const totalLosses3 = thirdItem.total.games.loses;
    const totalDraws3 = thirdItem.total.games.draws;
    const totalGoalsScored3 = thirdItem.total.goals.scored;
    const totalGoalsReceived3 = thirdItem.total.goals.received;

    const homeWins3 = thirdItem.home.games.wins;
    const homeLosses3 = thirdItem.home.games.loses;
    const homeDraws3 = thirdItem.home.games.draws;
    const homeGoalsScored3 = thirdItem.home.goals.scored;
    const homeGoalsReceived3 = thirdItem.home.goals.received;

    const awayWins3 = thirdItem.away.games.wins;
    const awayLosses3 = thirdItem.away.games.loses;
    const awayDraws3 = thirdItem.away.games.draws;
    const awayGoalsScored3 = thirdItem.away.goals.scored;
    const awayGoalsReceived3 = thirdItem.away.goals.received;

    // HTML para o terceiro item
    const htmlContent3 = `
    <ul>
        <li><h3 class="total">Stats Total</h3></li>
        <li><p>Vitória: ${totalWins3}</p></li>
        <li><p>Derrota: ${totalLosses3}</p></li>
        <li><p>Empate: ${totalDraws3}</p></li>
        <li><h3>Total: ${totalWins3 + totalLosses3 + totalDraws3}</h3></li>
    </ul>
    <ul>
        <li><h3 class="h3gol">Gols</h3></li>
        <li><p>Gols Pró: ${totalGoalsScored3}</p></li>
        <li><p>Gols Contra: ${totalGoalsReceived3}</p></li>
        <li><h3>Total: ${totalGoalsScored3 + totalGoalsReceived3}</h3></li>
    </ul>
    <ul>
        <li><h3 class="total">Stats Mandante</h3></li>
        <li><p>Vitória: ${homeWins3}</p></li>
        <li><p>Derrota: ${homeLosses3}</p></li>
        <li><p>Empate: ${homeDraws3}</p></li>
        <li><h3>Total: ${homeWins3 + homeLosses3 + homeDraws3}</h3></li>
    </ul>
    <ul>
        <li><h3 class="h3gol">Gols</h3></li>
        <li><p>Gols Pró: ${homeGoalsScored3}</p></li>
        <li><p>Gols Contra: ${homeGoalsReceived3}</p></li>
        <li><h3>Total: ${homeGoalsScored3 + homeGoalsReceived3}</h3></li>
    </ul>
    <ul>
        <li><h3 class="total">Stats Visitante</h3></li>
        <li><p>Vitória: ${awayWins3}</p></li>
        <li><p>Derrota: ${awayLosses3}</p></li>
        <li><p>Empate: ${awayDraws3}</p></li>
        <li><h3>Total: ${awayWins3 + awayLosses3 + awayDraws3}</h3></li>
    </ul>
    <ul>
        <li><h3 class="h3gol">Gols</h3></li>
        <li><p>Gols Pró: ${awayGoalsScored3}</p></li>
        <li><p>Gols Contra: ${awayGoalsReceived3}</p></li>
        <li><h3>Total: ${awayGoalsScored3 + awayGoalsReceived3}</h3></li>
    </ul>
`;

    // Atualiza o conteúdo do contêiner com os HTMLs gerados
    document.getElementById("stats-container-1").innerHTML = htmlContent1;
    document.getElementById("stats-container-2").innerHTML = htmlContent2;
    document.getElementById("stats-container-3").innerHTML = htmlContent3;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}

// Chama a função para buscar os dados e atualizar o HTML
fetchTeamStats();
