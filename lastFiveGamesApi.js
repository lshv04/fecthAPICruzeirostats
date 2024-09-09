async function fetchTeamStatistics() {
  const urlLastFiveGames =
    "https://football-highlights-api.p.rapidapi.com/last-five-games?teamId=115669"; // ID atualizado para o Cruzeiro

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "854d52dfc6mshd9f4f8c27dcbbe9p18486fjsn64fe1a60f11d",
      "x-rapidapi-host": "football-highlights-api.p.rapidapi.com",
    },
  };

  try {
    // Fetch para últimos cinco jogos
    const responseLastFiveGames = await fetch(urlLastFiveGames, options);
    if (!responseLastFiveGames.ok) {
      throw new Error(`HTTP error! Status: ${responseLastFiveGames.status}`);
    }
    const dataLastFiveGames = await responseLastFiveGames.json();
    console.log("Last Five Games:", dataLastFiveGames);

    // Adiciona o HTML ao container
    const container = document.querySelector("#game-container");
    const containerMobile = document.querySelector("#game-container-mobile");

    container.innerHTML = "";
    containerMobile.innerHTML = "";

    // Gera o HTML para cada jogo
    dataLastFiveGames.forEach((game) => {
      const matchid = game.id;

      const homeTeamName = game.homeTeam.name || "Mandante";
      const awayTeamName = game.awayTeam.name || "Visitante";
      const leagueLogo = game.league.logo || "default-league-logo.png";
      const gameDate = new Date(game.date).toLocaleDateString() || "Data";
      const currentScore = game.state.score.current || "0 - 0";
      const homeTeamLogo = game.homeTeam.logo || "default-team-logo.png";
      const awayTeamLogo = game.awayTeam.logo || "default-team-logo.png";

      const gameHTML = `
                
                <div class="col-12 league g-0 cell">
                    <img src="${leagueLogo}" class="img-fluid" alt="Imagem oficial da liga">
                </div>
                <div class="col-12 col-md-4 g-0 cell">
                    <h2>Mandante</h2>
                    <div class="gridscore">
                        <h3>${homeTeamName}</h3>
                        <img src="${homeTeamLogo}" class="img-fluid" style="height: 50px;" alt="Escudo do time mandante">
                    </div>
                </div>
                <div class="col-12 col-md-4 score g-0 cell">
                    <p>${gameDate}</p>
                    <p class="currentscore">${currentScore}</p>
                    <button type="button" class="btn btn-primary gamestats" data-bs-toggle="modal" data-bs-target="#${matchid}">
    Game stats
  </button>
                </div>
                <div class="col-12 col-md-4 g-0 cell">
                    <h2>Visitante</h2>
                    <div class="gridscore">
                        <img src="${awayTeamLogo}" class="img-fluid" style="height: 50px;" alt="Escudo do time visitante">
                        <h3>${awayTeamName}</h3>
                    </div>
                </div>
                <div class="sticker g-0">
                    <a href="https://www.linkedin.com/in/leandrohosken/" target="_blank">LinkedIn</a>
                    <a href="https://lshv04.github.io/CV/" target="_blank">CV</a>
                    <a href="https://github.com/lshv04" target="_blank">Github</a>
                    <a href="https://wa.me/5531987670611" target="_blank">WhatsApp</a>
                    <a href="mailto:lshv04@gmail.com" target="_blank">Email</a>
                </div>
            `;

      const gameHTMLMobile = `
                <div class="col-12 cardmobile">
                    <p class="datemobile">${gameDate}</p>
                    <div class="painelmobile">
                        <div>
                            <p class="text-center">L</p>
                            <img src="${leagueLogo}" alt="Imagem da liga">
                        </div>
                        <div>
                            <p class="text-center">M</p>
                            <img src="${homeTeamLogo}" alt="Escudo mandante">
                        </div>
  
                        <p class="scoremobile">${currentScore}</p>
                        <div>
                            <p class="text-center">v</p>
                            <img src="${awayTeamLogo}" alt="Escudo visitante">
                        </div>
                    </div>
     
                </div>
                                  <button type="button" class="btn btn-primary gamestats" data-bs-toggle="modal" data-bs-target="#${matchid}">
    Game stats
  </button>
                <div class="sticker g-0 stickermobile">
                    <a href="https://www.linkedin.com/in/leandrohosken/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a href="https://lshv04.github.io/CV/" target="_blank"><i class="bi bi-file-earmark-person"></i></a>
                    <a href="https://github.com/lshv04" target="_blank"><i class="bi bi-github"></i></a>
                    <a href="https://wa.me/5531987670611" target="_blank"><i class="bi bi-whatsapp"></i></a>
                    <a href="mailto:lshv04@gmail.com" target="_blank"><i class="bi bi-envelope"></i></a>
                </div>
            `;

      container.innerHTML += gameHTML;
      containerMobile.innerHTML += gameHTMLMobile;
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Chama a função para buscar os últimos cinco jogos
fetchTeamStatistics();
