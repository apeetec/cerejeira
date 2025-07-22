import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Componentes
import Navbar from "./componentes/Navbar";
import Slider from "./componentes/Slider";
// Imagens 
function App() {


  return (
  <>
    <Navbar/>
    {/* Corpo do site */}
    <main>
      <section className="lancamento scrollspy" id="lancamento">
          <article className="display-grid two-columns">
            <div>
                <img loading="lazy" width="100%" height="100%" src="./img/webp/renders/fachada_externa.webp" alt="Render do empreendimento"/>
            </div>
            <div className="contact space-top-bottom">
              <div className="container">
                <small>
                  LANÇAMENTO EM SUMARÉ
                </small>
              <div className="bar">                 
              </div>
                <p>
                    Cadastre-se e fique por dentro das novidades
                </p>
                <div className="contact-box">
                  {/* <!-- Aqui vai o formulário --> */}
                </div>
              </div>
            </div>
          </article>
      </section>
      {/* <!-- Implantação --> */}
<section className="implatacao scrollspy space-top-bottom" id="implantacao">
  <article className="container">
    <div className="display-grid two-columns">
      <div>
          <header className="center-align">
              <h1 className="titulo">
                  Implantação
              </h1>
          </header>
          <figure>
              <img className="materialboxed" src="./img/webp/novos_renders/implantacao_com_fundo_webp_reduzido.webp" alt="Mapa do estacionamento"/>
          </figure>
      </div>
      <div className="box">
          <div className="container">
              <div className="content">
                  <h2 className="titulo">
                      Muitas possibilidades no seu condomínio
                  </h2>
                  <div className="bar"></div>
                  <ul>
                      <li><b>01</b><span>Portaria</span></li>
                      <li><b>02</b><span>Copa e banheiros para funcionário</span></li>
                      <li><b>03</b><span>Espaço para encomendas</span></li>
                      <li><b>04</b><span>Lixeira</span></li>
                      <li><b>05</b><span>Hall social</span></li>
                      <li><b>06</b><span>Elevador</span></li>
                      <li><b>07</b><span>Vagas para visitante</span></li>
                      <li><b>08</b><span>Playground</span></li>
                      <li><b>09</b><span>Academia</span></li>
                      <li><b>10</b><span>Salão de Jogos </span></li>
                      <li><b>11</b><span>Espaço gourmet</span></li>
                      <li><b>12</b><span>Quiosque com churrasqueiras</span></li>
                      <li><b>13</b><span>Piscina</span></li>
                      <li><b>14</b><span>Bicicletário</span></li>
                      <li><b>15</b><span>Ducha escocesa</span></li>                                            
                  </ul>
              </div>
          </div>
      </div>
    </div>
    <div className="sua-vida-mais-eco">
      <h2>
          Sua vida mais Eco começa aqu
      </h2>
      <div className="bar"></div>
      <ul className="display-flex">
          <li>
              <img src="./img/webp/icons/new_icons/Prancheta_2013.webp" alt=""/>
              <span>
                  ILUMINAÇÃO DAS ÁREAS COMUNS EM LED
              </span>
          </li>
          <li>
              <img src="./img/webp/icons/new_icons/Prancheta_2015.webp" alt=""/>
              <span>
                  RESERVATÓRIO DE REÚSO DAS ÁGUAS PLUVIAIS
              </span>
          </li>
          <li>
              <img src="./img/webp/icons/new_icons/Prancheta_2014.webp" alt=""/>
              <span>
                  BACIAS SANITÁRIAS COM DUPLO ACIONAMENTO
              </span>
          </li>
          <li>
              <img src="./img/webp/icons/new_icons/Prancheta_2016.webp" alt=""/>
              <span>
                  ELEVADOR ECOEFICIENTE
              </span>
          </li>
          <li>
              <img src="./img/webp/icons/new_icons/Prancheta_2017.webp" alt=""/>
              <span>
                  FECHAMENTO AUTOMÁTICO NA ÁREA COMUM
              </span>
          </li>
      </ul>
    </div>
  </article>
</section>
      <section className="conjunto scrollspy" id="infraestrutura">
        <article className="display-grid two-columns" id="vida">
            <div>
                <figure>
                    <img className="responsive-img" src="./img/webp/novos_renders/Ecovila_Cerejeira_Fachada_Not_HR_20.webp" alt="Render da portaria"/>
                </figure>
            </div>
            <div className="green">
                <div className="container">
                    <div className="content">
                        <header>
                            <h1 className="titulo white-text">
                                Por uma vida mais prática e única
                            </h1>
                        </header>
                        <p className="white-text">
                            Imagine o final de um dia de trabalho cheio, aquela data
                            de aniversário aguardada ou um domingo de sol. 
                            <br/>
                            <br/>
                                No Eco Vila Cerejeira, você conta com academia para se
                            exercitar, espaço gourmet para se divertir, churrasqueiras
                            para celebrar e uma bela piscina para relaxar. 
                        </p>
                    </div>
                </div>
            </div>
        </article>
      </section>
      
    </main>
  </>
  )
}

export default App
