import { Container, Content } from "./styles";
import  moreSintomas1 from '../../assets/more_sintomas1.png'
import  moreSintomas2 from '../../assets/more_sintomas2.png'

export function MoreSymptoms() {
    return(
        <Container>
            <h2>O sintoma mais conhecido: Organização</h2>
            <Content>
            <div>
                <p>Pessoas com TOC costumam organizar roupas, sapatos, utensílios de cozinha, livros e outros objetos de acordo com o tamanho, cor, ordem alfabética ou outras categorias.<br/><br/>Elas determinam uma série de regras para que a organização corresponda às suas vontades, como objetos com textura, tamanho e aspecto semelhante. Essa obsessão pode levá-las a comprar objetos equivalentes para que eles não causem uma perturbação visual. </p>
                <img src={moreSintomas1} alt="Camisas organizadas por cores" />
            </div>
            <div>
                <img src={moreSintomas2} alt="Lápis organizados por cores" />
                <p>Semelhante ao TOC de ordenação, esse sintoma consiste em organizar objetos de maneira simétrica. Quaisquer vislumbres de assimetria, sejam em elementos que podem ser “consertados” ou não, causam aflição. </p>
            </div>
            </Content>
        </Container>
    )
}