import { Container, Content } from "./styles";
import logoImg from '../../assets/logo-ufpa.svg'

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo da universidade"/>
                <ul>
                    <li><a href="#description">Definição</a></li>
                    <li><a href="#tips">Dicas</a></li>
                    <li><a href="#empresa" className="call-empresa">Papel da empresa</a></li>
                </ul>
            </Content>
        </Container>
    );
}