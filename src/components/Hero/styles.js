import styled from 'styled-components';
import backgroundHeroi from '../../assets/background-hero.png'

export const Container = styled.div`
    width: 100%;

    .backgroundHero {
        background-image: url(${backgroundHeroi});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: top;
        width: 100vw;
        height: 85vh;

        div {
            background: rgba(	209, 255, 255, 0.8);
            width: 46%;
            height: 100%;
            float: right;
            display: flex;
        }
        main {
            background: var(--yellowCard);
            width: 70%;
            margin: auto;
            padding-bottom: 50px;
            color: var(--textColor);
            border-radius: 10px;
            box-shadow: 5px 5px 20px rgba(0,0,0,0.25);

            h2 {
                font-weight: 500;
                font-size: 18pt;
                width: 90%;
                text-align: center;
                margin: auto;
                padding: 20px 0px;
                margin-top: 20px;
            }

            ul {
                width: 90%;
                margin: auto;
                margin-left: 60px;
                margin-top: 40px;
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 45px;
            }
        }
    }
`;

/* export const bgImg = styled.div`
    width: 280px;
    height: 50px;
    background-size: contain;
    background: url(${backgroundHero}); 
`; */