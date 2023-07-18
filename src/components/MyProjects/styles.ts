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
  gap: 3.5rem;

  margin-top: 3.5rem;

  @media (max-width: 820px) {
    grid-template-columns: 30rem;
    place-items: center;
    justify-content: center;
  }

  > a {
    > div {
      background-color: var(--gray-800);
      border-radius: 10px;

      padding: 2.4rem;

      min-height: 40rem;

      transition: all ease .4s;

      &:hover{
      transform: translateY(-17px);
    }
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
