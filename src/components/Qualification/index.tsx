import * as C from "./styles";
import { certificados } from "../../data/certificados";

export const Qualification = () => {
  return (
    <C.Main>
      <h2>Formação</h2>

      <p>
        Atualmente estou no 8° período de Ciência da Computação no Centro
        Universitário Sul de Minas (UNIS) 🎓. Além disso me mantenho sempre
        atualizado com cursos online.
      </p>

      <C.Container>
        {certificados.map((certificado) => {
          return (
            <div key={certificado.id}>
              <C.Image src={certificado.imgUrl} />
            </div>
          );
        })}
      </C.Container>
    </C.Main>
  );
};
