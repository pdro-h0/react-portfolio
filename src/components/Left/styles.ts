import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray-800);

  text-align: center;

  padding: 2.4rem;

  margin-top: -20rem;

  position: sticky;
  top: 5px;

  @media (max-width: 768px) {
    position: static;
  }

  border-radius: 10px;

  > img {
    max-width: 9.6rem;

    border-radius: 100%;

    border: 2px solid var(--tertiary-color);
  }

  > a {
    display: inline-block;
    padding: 0.8rem 2.4rem;

    border: none;
    border-radius: 7px;

    color: white;
    text-decoration: none;

    margin: 1.2rem 0;

    background-color: var(--tertiary-color);

    transition: all ease 0.3s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const ListSocial = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  list-style: none;

  > li {
    transition: all ease 0.3s;
    &:hover {
      transform: translateY(-7px);
    }
  }
`;

export const ListTechs = styled.div`
  list-style: none;

  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 1.5rem;

  > li {
    background-color: #343232;
    border-radius: 6px;

    line-height: 0;

    padding: .25rem;

    transition: all ease .2s;

    &:hover{
        background-color: var(--tertiary-color);
    }
  }
`;
