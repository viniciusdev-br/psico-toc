import { Container } from "./styles";
import description1 from '../../assets/description1.png'

export function Description() {
    return (
        <Container>
            <div className="cardDescription" id="description"> 
                <img src={description1} alt="Imagem de apoio para o texto sobre TOC" />
                <div>
                    <h3>O que é TOC</h3>
                    <p>O TOC é um transtorno mental caracterizado pela presença de obsessões, compulsões ou ambas. As obsessões são pensamentos, impulsos ou imagens indesejáveis e involuntários, que invadem a consciência causando acentuada ansiedade ou desconforto e obrigando o indivíduo a executar rituais ou compulsões que são atos físicos ou mentais realizados em resposta às obsessões, com a intenção de afastar ameaças (contaminação, a casa incendiar), prevenir possíveis falhas ou simplesmente aliviar um desconforto físico.</p>
                </div>
            </div>
            <div className="cardDescriptionRevert">
                <div>
                    <h3>Simtomas</h3>
                    <p>Uma das características intrigantes do TOC é a diversidade dos seus sintomas (medos de contaminação/lavagens, dúvidas excessivas seguidas de verificações, preocupação exagerada com ordem/simetria ou exatidão, pensamentos de conteúdo inaceitável (violência, sexuais, ou blasfemos), compulsão por armazenar objetos sem utilidade e dificuldade em descarta-los - ou colecionismo). Um mesmo indivíduo pode apresentar uma diversidade de sintomas, embora geralmente exista um que predomine.</p>
                </div>
                <img src={description1} alt="Imagem de apoio para o texto sobre TOC" />
            </div>
            
        </Container>
    );
}