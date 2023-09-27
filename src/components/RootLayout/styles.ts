import styled from 'styled-components'

export const Container = styled.div`
    max-width: 112rem;
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 350px 1fr;


    gap: 3.2rem;
    align-items: flex-start;
    @media (max-width: 768px){
        grid-template-columns: 100%;
    }
`