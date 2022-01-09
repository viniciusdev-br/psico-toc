import { Container, Content } from "./styles";
import logoImg from '../../assets/logo-ufpa.svg'

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo da universidade"/>
                <ul>
                    <li>Definição</li>
                    <li>Dicas</li>
                    <li><button>Papel da empresa</button></li>
                </ul>
            </Content>
        </Container>
    );
}