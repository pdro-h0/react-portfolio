import styled from "styled-components";

export const Main = styled.main`
  margin-top: 3.5rem;
  padding-bottom: 3rem;

  > h2 {
    color: var(--tertiary-color);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 3.5rem;

  margin-top: 3.5rem;
  transition: all ease 0.1s;

  &:hover :not(:hover) {
    opacity: 0.3;
  }

  @media (max-width: 820px) {
    grid-template-columns: 30rem;
    place-items: center;
    justify-content: center;
  }

  > div {
    transition: all ease 0.2s;

    &:hover {
      scale: 1.1;
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;

  margin-block: 2.4rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 820px) {
    max-width: 100%;
  }
`;

export const DialogOverlay = styled.div`
  background-color: black;
  opacity: 60%;
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContent = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vw;
  height: 95vh;
  padding: 20px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: 4px;
    height: 75vh;
    width: 90vw;
  }

  @media (max-width: 430px) {
    padding: 4px;
    height: 75vh;
    width: 90vw;
  }

  @media (max-width: 430px) {
    padding: 4px;
    height: 55vh;
    width: 90vw;
  }
`;

export const ImageFull = styled.img`
  height: 100%;
  width: 100%;
`;

export const DialogClose = styled.button`
  font-family: inherit;
  outline: none;
  border-radius: 100%;
  border: 1px solid transparent;
  height: 40px;
  width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--tertiary-color);
  background-color: white;
  font-size: 90px;
  position: absolute;
  top: -14px;
  right: -12px;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
`;
