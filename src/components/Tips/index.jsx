import { Container, ContainerCard } from "./styles";
import groups from '../../assets/groups.svg';
import terapeuta from '../../assets/terapeuta.svg';
import medic from '../../assets/medic.svg';

export function Tips() {
    return(
        <Container id="tips">
            <h2>Dicas para dimiuir o TOC</h2>
            <ContainerCard>
                <div>
                    <img src={groups}  alt="Livro"/>
                    <p>– Participar de grupos de autoajuda. Familiares de outros pacientes podem dar dicas valiosas de como lidar com os sintomas e as diferentes situações proporcionadas pelo TOC;
                    </p>
                </div>
                <div>
                    <img src={terapeuta}  alt="Livro"/>
                    <p>- Sempre lembrar as combinações feitas com o terapeuta: “verifique as coisas apenas uma vez”, “vou fechar o registro do chuveiro, pois combinamos um banho de 15 minutos”, “vamos sair no horário marcado, pois não vou esperá-lo mais do que isso”. Seja firme, mas não autoritário;</p>
                </div>
                <div>
                    <img src={medic}  alt="Livro"/>
                    <p>- O tratamento do TOC pode ser realizado com medicamentos antidepressivos, prescritos pelo psiquiatra, mas também deve incluir terapia psicológica, para ajudar a pessoa a desenvolver ferramentas que ajudem a reduzir e/ou eliminar os pensamentos e comportamentos característicos do transtorno.</p>
                </div>
            </ContainerCard>
        </Container>
    );
}