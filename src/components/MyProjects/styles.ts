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

  @media (max-width: 920px) {
    grid-template-columns: 30rem;
    place-items: center;
    justify-content: center;
  }

  > div {
    > div {
      background-color: var(--gray-800);
      border-radius: 10px;

      padding: 2.4rem;

      min-height: 40rem;

      transition: all ease 0.4s;
      > p {
        margin-bottom: 1.5rem;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.5rem 1rem;

        @media (max-width: 1100px) {
          justify-content: center;
        }

        > a {
          padding: 0.5rem 2.4rem;

          border-radius: 7px;

          transition: all ease 0.4s;

          :hover {
            transform: translateY(-6px);
          }
        }
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
