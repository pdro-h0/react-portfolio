import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  margin-top: 3.5rem;

  > h2 {
    color: var(--tertiary-color);
    margin-bottom: 1rem;
  }

  > p {
    margin-bottom: 1.5rem;

    > .laranjaa {
      color: #e24c25;
      font-size: 1.8rem;
    }

    > .css {
      color: #0276bb;
      font-size: 1.8rem;
    }

    > .js {
      color: #e9d54c;
      font-size: 1.8rem;
    }

    > .ts {
      color: #0076c6;
      font-size: 1.8rem;
    }

    > .react {
      color: #5ED4F3;
      font-size: 1.8rem;
    }
    >.git{
      color: #E94D2E;
      font-size: 1.8rem;
    }
  }
  @media (max-width:320px){
    p{
      text-align: center;
    }
  }
`;
