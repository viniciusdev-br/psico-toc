import styled from 'styled-components';


export const Container = styled.header`
    background: var(--background);
`

export const Content = styled.div`
    display: flex;
    
    ul {
        width: 500px;
        display: flex;
        justify-content: space-between;
    }

    li {
        list-style: none;
    }
`