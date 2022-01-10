import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    background: var(--yellowStatistic);
    margin-top: 30px;
`;

export const Content = styled.section`
    max-width: 1280px;
    margin: auto;
    padding-bottom: 50px;
    
    h2 {
        font-size: 36pt;
        font-weight: 500;
        text-align: center;
        margin-bottom: 20px;
        padding-top: 70px;
    }

    div {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

export const CardStatistic = styled.div`
    width: 339px;
    background: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 14px;
    margin-bottom: 20px;

    p {
        font-size: 18pt;
        text-align: center;
    }
`