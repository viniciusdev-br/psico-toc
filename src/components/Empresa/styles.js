import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1280px;
    margin: auto;
    
    img {
        width: 1280px;
    }

    div {
        display: flex;
        background-color: var(--blue);

        img {
            width: 50%;
        }
    }
`

export const LeftFild = styled.div`
    background-color: var(--blue);
    width: 50%;
    z-index: 0;
    display: flex;
    flex-direction: column;
    color: #FFF;
    padding-right: 30px;

    h2 {
        text-align: center;
        font-weight: 500;
        font-size: 26pt;
        margin-top: 67px;
    }

    ul {
        margin-left: 59px;
        font-size: 18pt;
        margin-top: 20px;

        li {
            margin-bottom: 26px;
        }
    }
`

/* export const RightFild = styled.div`
    border-top: 465px solid var(--blue);
    //border-left: 50px solid transparent;
    border-left: 120px solid transparent;
    height: 0;
    width: 54%;
    display: flex;
    flex-direction: column;
    color: #FFF;

    h2 {
        text-align: center;
        font-weight: 500;
        font-size: 26pt;
        margin-top: 67px;
        margin-bottom: 26px;
    }

    ul {
        margin-left: 59px;
        font-size: 18pt;

        li {
            margin-bottom: 26px;
        }
    }
` */

/* export const Banner = styled.div`
    border-top: 465px solid var(--blue);
    border-left: 120px solid transparent;
    height: 0;
    width: 45%;
    display: flex;
    flex-direction: column;
    color: #FFF;

    h2 {
        text-align: center;
        font-weight: 500;
        font-size: 26pt;
        margin-top: -407px;
        margin-bottom: 26px;
    }

    ul {
        //margin-left: 59px;
        font-size: 18pt;

        li {
            margin-bottom: 26px;
        }
    }
`; */