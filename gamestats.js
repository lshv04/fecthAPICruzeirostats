async function fetchLastFiveGames() {
  const url = "https://football-highlights-api.p.rapidapi.com/last-five-games?teamId=115669";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "854d52dfc6mshd9f4f8c27dcbbe9p18486fjsn64fe1a60f11d",
      "x-rapidapi-host": "football-highlights-api.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const container = document.querySelector("#modalgamestats");

    for (const game of result) {
      const id = game.id;
      const stats = await fetchStatisticsById(id);

      if (stats && stats.length > 0) {
        const homeTeamStats = stats[0]?.statistics || [];
        const awayTeamStats = stats[1]?.statistics || [];
      

        // Verificação para time mandante
        const chuteAoAlvopercent = homeTeamStats[0]?.value === undefined ? "N/A" : homeTeamStats[0].value;
        const chuteAoAlvo = homeTeamStats[1]?.value === undefined ? "N/A" : homeTeamStats[1].value;
        const chuteForadoAlvo = homeTeamStats[2]?.value === undefined ? "N/A" : homeTeamStats[2].value;
        const chuteBloqueado = homeTeamStats[3]?.value === undefined ? "N/A" : homeTeamStats[3].value;
        const chuteDentroDaArea = homeTeamStats[4]?.value === undefined ? "N/A" : homeTeamStats[4].value;
        const chuteForaDaArea = homeTeamStats[5]?.value === undefined ? "N/A" : homeTeamStats[5].value;
        const faltas = homeTeamStats[6]?.value === undefined ? "N/A" : homeTeamStats[6].value;
        const laterais = homeTeamStats[7]?.value === undefined ? "N/A" : homeTeamStats[7].value;
        const escanteios = homeTeamStats[8]?.value === undefined ? "N/A" : homeTeamStats[8].value;
        const posseDeBola = homeTeamStats[9]?.value === undefined ? "N/A" : homeTeamStats[9].value;
        const cartaoAmarelo = homeTeamStats[10]?.value === undefined ? "N/A" : homeTeamStats[10].value;
        const cartaoVermelho = homeTeamStats[11]?.value === undefined ? "N/A" : homeTeamStats[11].value;
        const defesaDoGoleiro = homeTeamStats[12]?.value === undefined ? "N/A" : homeTeamStats[12].value;
        const passesTotais = homeTeamStats[13]?.value === undefined ? "N/A" : homeTeamStats[13].value;
        const passesCertos = homeTeamStats[14]?.value === undefined ? "N/A" : homeTeamStats[14].value;
        const passesErrados = homeTeamStats[15]?.value === undefined ? "N/A" : homeTeamStats[15].value;

        const logoMandante = stats[0].team.logo;
       

        // Verificação para time visitante
        const chuteAoAlvopercent2 = awayTeamStats[0]?.value === undefined ? "N/A" : awayTeamStats[0].value;
        const chuteAoAlvo2 = awayTeamStats[1]?.value === undefined ? "N/A" : awayTeamStats[1].value;
        const chuteForadoAlvo2 = awayTeamStats[2]?.value === undefined ? "N/A" : awayTeamStats[2].value;
        const chuteBloqueado2 = awayTeamStats[3]?.value === undefined ? "N/A" : awayTeamStats[3].value;
        const chuteDentroDaArea2 = awayTeamStats[4]?.value === undefined ? "N/A" : awayTeamStats[4].value;
        const chuteForaDaArea2 = awayTeamStats[5]?.value === undefined ? "N/A" : awayTeamStats[5].value;
        const faltas2 = awayTeamStats[6]?.value === undefined ? "N/A" : awayTeamStats[6].value;
        const laterais2 = awayTeamStats[7]?.value === undefined ? "N/A" : awayTeamStats[7].value;
        const escanteios2 = awayTeamStats[8]?.value === undefined ? "N/A" : awayTeamStats[8].value;
        const posseDeBola2 = awayTeamStats[9]?.value === undefined ? "N/A" : awayTeamStats[9].value;
        const cartaoAmarelo2 = awayTeamStats[10]?.value === undefined ? "N/A" : awayTeamStats[10].value;
        const cartaoVermelho2 = awayTeamStats[11]?.value === undefined ? "N/A" : awayTeamStats[11].value;
        const defesaDoGoleiro2 = awayTeamStats[12]?.value === undefined ? "N/A" : awayTeamStats[12].value;
        const passesTotais2 = awayTeamStats[13]?.value === undefined ? "N/A" : awayTeamStats[13].value;
        const passesCertos2 = awayTeamStats[14]?.value === undefined ? "N/A" : awayTeamStats[14].value;
        const passesErrados2 = awayTeamStats[15]?.value === undefined ? "N/A" : awayTeamStats[15].value;
       
        const logoVisitante = stats[1].team.logo;

        // Cria o HTML para cada item
        const itemHTML = `
          <div>
            <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">Estatísticas do jogo</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="gamestatsmodal">
                      <div class="gamestatsmodalitens">
                        <img src="${logoMandante}" class="img-fluid" style="height: 50px;" alt="">
                        <ul>
                          <li>% Chutes no alvo: ${chuteAoAlvopercent}</li>
                          <li>Chutes no alvo: ${chuteAoAlvo}</li>
                          <li>Chutes fora do alvo: ${chuteForadoAlvo}</li>
                          <li>Chutes bloqueados: ${chuteBloqueado}</li>
                          <li>Chutes dentro da área: ${chuteDentroDaArea}</li>
                          <li>Chutes fora da área: ${chuteForaDaArea}</li>
                          <li>Faltas: ${faltas}</li>
                          <li>Laterais: ${laterais}</li>
                          <li>Escanteio: ${escanteios}</li>
                          <li>Posse de bola: ${posseDeBola}</li>
                          <li>Cartão amarelo: ${cartaoAmarelo}</li>
                          <li>Cartão vermelho: ${cartaoVermelho}</li>
                          <li>Defesas do Goleiro: ${defesaDoGoleiro}</li>
                          <li>Passes totais: ${passesTotais}</li>
                          <li>Passes certos: ${passesCertos}</li>
                          <li>Passes errados: ${passesErrados}</li>
                        
                        </ul>
                      </div>
                      <div class="gamestatsmodalitens">
                        <img src="${logoVisitante}" class="img-fluid" style="height: 50px;" alt="">
                        <ul>
                          <li>% Chutes no alvo: ${chuteAoAlvopercent2}</li>
                          <li>Chutes no alvo: ${chuteAoAlvo2}</li>
                          <li>Chutes fora do alvo: ${chuteForadoAlvo2}</li>
                          <li>Chutes bloqueados: ${chuteBloqueado2}</li>
                          <li>Chutes dentro da área: ${chuteDentroDaArea2}</li>
                          <li>Chutes fora da área: ${chuteForaDaArea2}</li>
                          <li>Faltas: ${faltas2}</li>
                          <li>Laterais: ${laterais2}</li>
                          <li>Escanteio: ${escanteios2}</li>
                          <li>Posse de bola: ${posseDeBola2}</li>
                          <li>Cartão amarelo: ${cartaoAmarelo2}</li>
                          <li>Cartão vermelho: ${cartaoVermelho2}</li>
                          <li>Defesas do Goleiro: ${defesaDoGoleiro2}</li>
                          <li>Passes totais: ${passesTotais2}</li>
                          <li>Passes certos: ${passesCertos2}</li>
                          <li>Passes errados: ${passesErrados2}</li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        container.innerHTML += itemHTML;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

// Função auxiliar para buscar estatísticas pelo ID
async function fetchStatisticsById(id) {
  const url = `https://football-highlights-api.p.rapidapi.com/statistics/${id}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '854d52dfc6mshd9f4f8c27dcbbe9p18486fjsn64fe1a60f11d',
      'x-rapidapi-host': 'football-highlights-api.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  return response.json();

}

fetchLastFiveGames();
