import * as C from "./styles";
import { certificados } from "../../data/certificados";

import * as Dialog from "@radix-ui/react-dialog";
import { BiX } from "react-icons/bi";

export const Qualification = () => {
  return (
    <C.Main>
      <h2>Formação</h2>

      <p>
        Sou graduado em Ciência da Computação pelo Centro Universitário Sul de
        Minas (UNIS) 🎓. Além disso me mantenho sempre atualizado com cursos
        online.
      </p>

      <C.Container>
        {certificados.map((certificado) => {
          return (
            <Dialog.Root key={certificado.id}>
              <Dialog.Trigger asChild>
                <div>
                  <C.Image src={certificado.imgUrl} />
                </div>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay asChild>
                  <C.DialogOverlay />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <C.DialogContent>
                    <C.ImageFull src={certificado.imgUrl} />
                    <Dialog.Close asChild>
                      <C.DialogClose aria-label="Close">
                        <BiX />
                      </C.DialogClose>
                    </Dialog.Close>
                  </C.DialogContent>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          );
        })}
      </C.Container>
    </C.Main>
  );
};
