import { Container, Content, CardStatistic } from "./styles";

import populacaoToc from '../../assets/tresporcento.png'
import moreProblems from '../../assets/seis_oitoporcento.png'
import tryDeath from '../../assets/trinta_e_seis_porcento.png'

export function Statistic() {
    return (
        <Container>
            <Content>
                <h2>Estatísticas</h2>

                <div>
                    <CardStatistic>
                        <img src={populacaoToc} alt="" />    
                        <p>Considerando a população mundial, obtemos um número expressivo de 3% da população que sofre com o TOC</p>
                    </CardStatistic>
                    <CardStatistic>
                        <img src={moreProblems} alt="" />    
                        <p>O Transtorno Obsessivo-Compulsivo na maioria dos casos é apresentado com algum outro tipo de depressão, sendo esses 68% dos casos</p>
                    </CardStatistic>
                    <CardStatistic>
                        <img src={tryDeath} alt="" />    
                        <p>TOC é algo grave que não deve ser ignorado e deve ser tratado o quanto antes, pois em cerca de 36% dos casos já pensaram em se matar</p>
                    </CardStatistic>             
                </div>
            </Content>
        </Container>
    );
}