import React from 'react';

// ====================================================
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

// =====================================================

import GlobalStyle from './components/GlobalStyle/Global';
// =====================================================

function App() {
  
  return (

    <div className="global">

      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/86306877?v=4" 
          nome="Gabriel Silva" 
          descricao="Ola, eu sou o Gabriel é irei falar um pouco sobre mim entâo vamos lá: Eu tenho 23 anos e sou Paraibano. Sou apaixonado por
          programação embora de muita raiva. Atualmente estou estudando na instituição Labenu para conseguir realizar o meu sonho que é sí torna
          um programador profissional para desenvolver varios softwares que possam ajudar varias pessoa ao redor do mundo."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">

        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_200_200/0/1625764040369?e=2159024400&v=beta&t=DaEt8zHiC8zdubNgX4nXLCf1nodEy1kEGy-KyYbyoKY" 
          nome="Labenu" 
          descricao="Mim formando na instituição Labenu para ter uma experiência de um verdadeiro profissional" 
        />
        
        <CardGrande 
          imagem="https://thumbs.dreamstime.com/z/selo-do-defeito-no-branco-fundo-sinal-etiqueta-da-142305556.jpg" 
          nome="Defeitos" 
          descricao="Meus defeitos são nenhum kkkkkk brincadeira. Impaciência: Acaba mim atrapalhando um pouco. É parda de foco: é uma vantagem e desvantagem que eu considero.
           Cada dia vou tentando melhorar esses defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>

        <a href="https://github.com/GabrielSS187">
        <ImagemButton 
          imagem ="https://www.pngitem.com/pimgs/m/35-351826_linkedin-icon-png-transparent-background-linkedin-logo-png.png" 
          texto="linkedin" 
        /> 
        </a>    

        <a href="https://www.linkedin.com/in/gabriel-silva-souza-47a220216/">
        <ImagemButton 
          imagem ="http://pngimg.com/uploads/github/github_PNG28.png" 
          texto="GitHub"
        />  
        </a>

      </div>

      <GlobalStyle />

    </div>
  );
}

export default App;
