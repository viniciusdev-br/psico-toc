import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1280px;
    background-color: #FFF;
    margin: auto;
    margin-top: 48px;

    .cardDescription {
        display: flex;    
        align-items: center;
        margin-bottom: 40px;
        color: var(--textColor);

        h3 {
            font-size: 36pt;
            font-weight: 500;
            text-align: center;
        }

        div {
            display: flex;
            flex-direction: column;
            width: 641px;
            font-size: 16pt;
            margin-left: 17px;
        }
    }
    .cardDescriptionRevert {
        display: flex;    
        align-items: center;
        margin-bottom: 40px;
        color: var(--textColor);

        h3 {
            font-size: 36pt;
            text-align: center;
            font-weight: 500;
        }

        div {
            display: flex;
            flex-direction: column;
            width: 641px;
            font-size: 16pt;
            margin-right: 17px;

            p {
                text-align: right;
            }
        }
    }
`;