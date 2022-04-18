import styled from 'styled-components'

export const Container = styled.header`

background: var(--blue-dark);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #ffffff;
        background: var(--shape);
        border: 0;
        padding: 0rem 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        color: var(--blue-dark);
        font-weight: 600;
        
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }

    }


    img{

    }

`;

