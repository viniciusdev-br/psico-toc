import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1280px;
    margin: auto;

    h2 {
        text-align: center;
        color: #FFF;
        font-weight: 500;
        font-size: 33pt;
        background-color: var(--green);
        border-radius: 13px;
        margin-top: 30px;
        margin-bottom: 72px;
        padding: 46px 0px;
    }
`;

export const ContainerCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    div {
        background: var(--green);
        width: 273px;
        color: #FFF;
        border-radius: 10px;
        text-align: center;

        img {
            width: 132px;
        }
    }
`;