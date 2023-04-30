import { projetos } from "../../data/projetos";

import * as C from "./styles";

export const MyProjects = () => {
  return (
    <C.Main>
    <h2>Projetos</h2>
    <C.Container>
      {projetos.map((projeto) => {
        return (
          <a href={projeto.link} target="_blank" key={projeto.id}>
            <div>
              <h2>{projeto.title}</h2>
              <C.Image className="imagem" src={projeto.image} alt="Imagem do projeto" />
              <p>{projeto.description}</p>
            </div>
          </a>
        );
      })}
    </C.Container>
    </C.Main>
  );
};
