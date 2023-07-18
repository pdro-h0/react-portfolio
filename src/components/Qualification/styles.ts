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

    &:hover{
      scale: 1.1;
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;

  margin-block: 2.4rem;

  @media (max-width: 820px) {
    max-width: 100%;
  }
`;
