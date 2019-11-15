import React from "react";

const Contribute = () => {
  return (
    <div>
      <h2>Github!</h2>
      <div>
        <a
          className="github-button"
          href="https://github.com/izmcm/birolipsum/fork"
          data-size="large"
          data-show-count="true"
          aria-label="Fork izmcm/birolipsum on GitHub"
        >
          Fork
        </a>
        <a
          className="github-button"
          href="https://github.com/izmcm/birolipsum"
          data-size="large"
          data-show-count="true"
          aria-label="Star izmcm/birolipsum on GitHub"
        >
          Star
        </a>
      </div>
      <h3>Pull Requests</h3>
      <ul>
        <li>
          A gente sabe que novas pérolas surgem o tempo todo e gostaríamos de
          manter o nosso dataset atualizado. A forma mais fácil de contribuir é
          adicionando novas citações nele. Pula uma linha e dale a nova pérola
          do teu presidente, bença. Mas lembra que só citações verdadeiras serão
          aceitas.
        </li>
        <li>
          Tem alguma ideia de feature que queria implementar ou problema que tá
          super afim de consertar? Só dale!
        </li>
      </ul>
      <h3>Issue:</h3>
      <ul>
        <li>
          Viu algum problema ou tem alguma sugestão, mas não tá muito na vibe de
          implementar? Abre uma issue que a gente vê isso pra tu!
        </li>
      </ul>
      <h3>Quem fez?</h3>
      <div className="author">
        <table style={{ border: "none" }}>
          <tbody>
            <tr>
              <td>
                <figure style={{ margin: "0%" }}>
                  <img
                    className="avatar"
                    src="https://avatars3.githubusercontent.com/u/27749679?s=400&v=4"
                    alt="Izabella Melo"
                  />
                  <figcaption>
                    <a href="https://github.com/izmcm">Izabella Melo</a>
                  </figcaption>
                </figure>
              </td>
              <td>
                <figure>
                  <img
                    className="avatar"
                    src="https://avatars0.githubusercontent.com/u/18575717?s=400&v=4"
                    alt="Renata Faria"
                  />
                  <figcaption>
                    <a href="https://github.com/xReee">Renata Faria</a>
                  </figcaption>
                </figure>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          e mais uma galera que contribuiu com PR's
          <span role="img" aria-label="heart emoji">
            &#129505;
          </span>
        </p>
        <p>
          e mais outra galera que luta todo dia contra esse (des)governo
          <span role="img" aria-label="heart emoji">
            &#129505;
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contribute;
