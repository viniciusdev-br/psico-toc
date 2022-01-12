import { Container, Content, CardStatistic } from "./styles";

import imgExample from '../../assets/statistic_example.png'

export function Statistic() {
    return (
        <Container>
            <Content>
                <h2>Estatísticas</h2>

                <div>
                    <CardStatistic>
                        <img src={imgExample} alt="" />    
                        <p>Lorem ipsum senectus iaculis phasellus, in aliquam suscipit class, nec etiam hendrerit. faucibus sed suspendisse quisque eleifend quis sem  tempor pretium non,</p>
                    </CardStatistic>
                    <CardStatistic>
                        <img src={imgExample} alt="" />    
                        <p>Lorem ipsum senectus iaculis phasellus, in aliquam suscipit class, nec etiam hendrerit. faucibus sed suspendisse quisque eleifend quis sem  tempor pretium non,</p>
                    </CardStatistic>
                    <CardStatistic>
                        <img src={imgExample} alt="" />    
                        <p>Lorem ipsum senectus iaculis phasellus, in aliquam suscipit class, nec etiam hendrerit. faucibus sed suspendisse quisque eleifend quis sem  tempor pretium non,</p>
                    </CardStatistic>             
                </div>
            </Content>
        </Container>
    );
}