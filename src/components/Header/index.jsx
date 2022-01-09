import { Container, Content } from "./styles";
import logoImg from '../../assets/logo-ufpa.svg'

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo da universidade"/>
                <ul>
                    <li><a href="#">Definição</a></li>
                    <li><a href="#">Dicas</a></li>
                    <li><button>Papel da empresa</button></li>
                </ul>
            </Content>
        </Container>
    );
}