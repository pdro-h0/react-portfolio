import { projetos } from "../../data/projetos";

import * as C from "./styles";

export const MyProjects = () => {
  return (
    <C.Main>
      <h2>Projetos</h2>
      <C.Container>
        {projetos.map((projeto) => {
          return (
            <div key={projeto.id}>
              <div>
                <h2>{projeto.title}</h2>
                <C.Image
                  className="imagem"
                  src={projeto.image}
                  alt="Imagem do projeto"
                />
                <p>{projeto.description}</p>

                <div>
                  <a
                    href={projeto.link.gitHub}
                    className={`github-btn ${
                      projeto.link.gitHub === ""
                        ? "notAllowed-btn"
                        : "github-btn"
                    }`}
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href={projeto.link.site}
                    className={`site-btn ${
                      projeto.link.site === "" ? "notAllowed-btn" : "site-btn"
                    }`}
                    target="_blank"
                  >
                    Acessar Projeto
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </C.Container>
    </C.Main>
  );
};
