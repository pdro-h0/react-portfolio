import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    gap: 0 5rem;

    padding: .8rem 2.4rem;
    background-color: var(--gray-800);

    margin: 0%;

    >.link{
        position: relative;

        &::after{
            position: absolute;
            bottom: -1px;
            left: 0;

            content: '';
            height: 2.5px;
            width: 0%;

            background-color: var(--tertiary-color);

            transition: all ease .3s;

        }

        &:hover::after{
            width: 100%;
        }
    }
`