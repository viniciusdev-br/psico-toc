import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    margin: auto;
    margin-top: 80px;
    background: var(--lightGreen);
    padding-top: 60px;

    h2 {
        text-align: center;
        font-size: 36pt;
        margin-bottom: 40px;
    }
`

export const Content = styled.div`
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        margin-bottom: 100px;

        p {
            font-size: 20pt;
        }

        img {
            border-radius: 20px;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
        }

        :first-child {
            align-items: center;
        }

        :last-child {
            p {
                margin-left: 40px;
            }
        }
    }

`