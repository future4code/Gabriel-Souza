import React from "react";

import "./App.css";


function App() {
  
  // Função de alerta de "Video Reproduzindo"
  function reproduzVideo() {
    
    alert("O vídeo está sendo reproduzido")

} // Feche = Função de alerta de "Video Reproduzindo"
  
  return (

      // Div Geral
    <div>
              {/* Div do Site */}
            <div className="tela-inteira">

                        {/* Cabeçalho do Site */}
                      <header>
                            <h1>Lab Tube</h1>
                            <input type="text" placeholder="Busca" id="campoDeBusca"/>
                      </header>{/* Feche = Cabeçalho do Site */}

                        {/* Conteudo Principal */}
                      <main>

                                 {/* Barra de Navegação */}
                              <nav className="menu-vertical">
                                    <ul>
                                        <li className="botoes-meunu-vertical">Início</li>
                                        <li className="botoes-meunu-vertical">Em alta</li>
                                        <li className="botoes-meunu-vertical">Inscrições</li>
                                        <hr></hr>
                                        <li className="botoes-meunu-vertical">Originais</li>
                                        <li className="botoes-meunu-vertical">Histórico</li>
                                    </ul>
                              </nav>{/* Feche = Barra de Navegação */}

                                 {/* Secão de Videos e Fotos */}
                              <section className="painel-de-videos">

                                      <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                                          <img src="https://picsum.photos/400/400?a=1 " alt="" />
                                          <h4>Título do vídeo</h4>
                                      </div>
                                      <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                                          <img src="https://picsum.photos/400/400?a=2 " alt="" />
                                          <h4>Título do vídeo</h4>
                                      </div>
                                      <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                                          <img src="https://picsum.photos/400/400?a=3 " alt="" />
                                          <h4>Título do vídeo</h4>
                                      </div>
                                      <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                                          <img src="https://picsum.photos/400/400?a=4 " alt="" />
                                          <h4>Título do vídeo</h4>
                                      </div>
                                      <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                                          <img src="https://picsum.photos/400/400?a=5 " alt="" />
                                          <h4>Título do vídeo</h4>
                                      </div>
                                      <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                                          <img src="https://picsum.photos/400/400?a=6 " alt="" />
                                          <h4>Título do vídeo</h4>
                                      </div>
                                      <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                                          <img src="https://picsum.photos/400/400?a=7 " alt="" />
                                          <h4>Título do vídeo</h4>
                                      </div>
                                      <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                                          <img src="https://picsum.photos/400/400?a=8 " alt="" />
                                          <h4>Título do vídeo</h4>
                                      </div>

                              </section>{/* Feche = Seção de vídeo e Fotos */}

                      </main>{/* Feche = Conteudo Principal */}

                         {/* Rodapé do Site */}
                      <footer>
                            <h3>Oi! Eu moro no footer!</h3>
                      </footer> {/* Feche = Rodapé do Site */}

            </div>{/* Feche = Div do Site */}

    </div> // Feche = Div Geral

  )
};

export default App;
