


![Blue Futuristic Technology Presentation (27)](https://github.com/user-attachments/assets/8b0fa5bf-fd4e-45da-a7ef-39b2dfab481c)



# Projeto Pessoal -  Sport Highlights Cruzeiro - 14

Este projeto é um site de portfólio pessoal desenvolvido com o objetivo de praticar o consumo de API utilizando o site [Highlightly](https://highlightly.net/). O foco do projeto foi criar uma página que trouxesse as informações mais importantes do Cruzeiro Esporte Clube dos últimos 5 jogos, além de um agregado anual das informações. Para chegar no resultado esperado, fiz 3 fetch API diferentes com dezenas de endpoints trabalhados e adicionados à página dinamicamente.  


Para deixar a página com navegabilidade agradável, usei o modal do Bootstrap, adicionado a cada card de partida individual. O modal abre uma página com 16 endpoints diferentes, fornecendo diversos dados sobre o jogo para cada time envolvido.  

Utilizei o media query para criar um card completamente diferente para telas menores, sem perder a qualidade das informações.  



## ✔️ Técnicas e tecnologias utilizadas  
**HTML5**: Para a marcação semântica do conteúdo.  
**CSS3**: Para estilização e layout,     
**Bootstrap**: Para criação de grids e componentes.      
**Funções**: Criação de funções de cores e fontes para padronização e melhor manutenção do código.      
**Media Query** : Criado múltiplos níveis para responsividade perfeita em múltiplas telas.  
**Javascript**  : Consumir o conteúdo da API,manipular html e adicionar dinamicamente seus respectivos end-points.   

**Principais desafios**:

Integrar o modal Bootstrap com o ID de cada partida. Para conseguir colocar um modal diferente em cada card, eu precisava primeiro acessar o endpoint "match-id" da API "last-five-games". Esse número foi utilizado para preencher o campo "id" do botão do modal de cada card e o corpo do modal, integrando a solução. Depois disso, utilizei esse número para buscar informações de cada partida individual na API "statistics" para alimentar cada modal com as informações corretas de cada partida.

Calls limitadas. A API utilizada é uma API paga, e o plano básico gratuito é extremamente limitado. Com poucas movimentações, a franquia diária acabava, e eu me via obrigado a trabalhar sem as informações necessárias.





![image](https://github.com/user-attachments/assets/6e239e31-856b-4083-b8c1-e99c06bd62da)  
![image](https://github.com/user-attachments/assets/520b3e2c-4949-4236-bf62-52fab2046f56)  
![image](https://github.com/user-attachments/assets/a274251c-2082-483d-acae-3bc793bc5303)  
![image](https://github.com/user-attachments/assets/9a392e60-31cc-4f10-8df2-2f06138e8c98)  
![image](https://github.com/user-attachments/assets/7bec6d21-072a-489a-ac60-18921f3f77d5)  








https://github.com/user-attachments/assets/932b8410-8f89-4eeb-81a0-8f268d1e241f



      
## 📁 Acesso ao projeto  

[Veja o projeto final do curso em funcionamento](https://lshv04.github.io/fecthAPICruzeirostats-14/).  





Neste repositório você tem acesso a todo o material produzido no projeto.



