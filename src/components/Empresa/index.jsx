import {Container, LeftFild} from "./styles";
import empresa1 from '../../assets/empresa1.png';
import empresa2 from '../../assets/empresa2.png';

export function Empresa() {
    return(
        <Container id="empresa">

            <div>
                <LeftFild>
                    <h2>O que a empresa pode fazer</h2>
                    <ul>
                        <li>Realizar palestras com a equipe a respeito do TOC;</li>
                        <li>Oferecer sessões com psicologo aos funcionarios;</li>
                        <li>Aplicar no mínimo 3 exemplos de comportamento operante no site</li>
                    </ul>
                </LeftFild>
                <img src={empresa1} alt="Pessoas se ajudando" />
            </div>

            <div>
                <img src={empresa2} alt="Pessoas se ajudando" />
                <LeftFild>
                    <ul>
                        <li>Realizar palestras com a equipe a respeito do TOC;</li>
                        <li>Oferecer sessões com psicologo aos funcionarios;</li>
                        <li>Aplicar no mínimo 3 exemplos de comportamento operante no site</li>
                    </ul>
                </LeftFild>
            </div>
            
        </Container>
    )
}