import styled from "styled-components";

import monaLisa from "../../assets/monalisa02-2048x1152.webp";

export const Container = styled.div`
  background: url(${monaLisa});
  background-position: center;
  background-size: cover;

  height: 28rem;

  @media (max-width: 730px) {
    background-position: bottom;
  }

  @media (max-width: 550px) {
    background-size: 1458px;
    background-position: center;
  }

  @media (max-width: 350px) {
    /* background-image: none; */
    background-size: 1050px;
    background-position: center;
  }
`;
