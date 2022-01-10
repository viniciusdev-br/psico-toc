import styled from 'styled-components';


export const Container = styled.header`
    background: var(--background);
`

export const Content = styled.div`
    display: flex;
    max-width: 1280px;
    justify-content: space-between;
    margin: auto;
    padding: 18px 0px;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
            list-style: none;
            font-size: 18pt;
            margin-left: 25px;

            a {
                text-decoration: none;
                color: var(--textColor);
                margin: auto 0px;

                
            }
            .call-empresa {
                color: var(--background);
                background-color: var(--textColor);
                border: none;
                border-radius: 3px;
                height: 100%;
                font-size: 18pt;
                padding: 5px;
                cursor: pointer;
                transition: 200ms;

                :hover {
                    padding: 8px;
                    color: #FFF;
                }
            }
        }
    }

    
`