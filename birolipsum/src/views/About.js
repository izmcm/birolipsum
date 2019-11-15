import React from "react";

const About = () => {
  return (
    <>
      <div>
        <h2>O que é isso?</h2>
        <p>
          Birolipsum é um gerador de Lorem Ipsum com citações do (infelizmente)
          presidente do Brasil, Jair Bolsonaro (ou Biroliro para os íntimos).
        </p>
        <h4>Mas, antes de tudo, o que é Lorem Ipsum?</h4>
        <p style={{ fontStyle: "italic" }}>
          "[...] lorem ipsum é um texto utilizado para preencher o espaço de
          texto em publicações (jornais, revistas, e sites) e testar aspectos
          visuais (cores, fontes etc.), com a finalidade de verificar o layout,
          a tipografia e formatação antes de utilizar conteúdo real." -{" "}
          <a target="blank" href="https://pt.wikipedia.org/wiki/Lorem_ipsum">
            Wikipédia
          </a>
        </p>
        <h4>
          E porque usar um lorem ipsum qualquer quando você pode militar com
          citações do presidente enquanto faz seu trabalho???
        </h4>
        <h2>Como usar?</h2>
        <p>
          A parte mais legal é que você não precisa instalar nada! Basta entrar
          em <a href="index.html">Gerador</a>, colocar a quantidade de
          parágrafos que você quer e clicar em <b>Gerar</b>.
          <h4>Mais fácil de lidar que o governo, né?</h4>
        </p>
      </div>
    </>
  );
};

export default About;
