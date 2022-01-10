import { Container } from "./styles";
import imgWork from '../../assets/in_work.png'

export function InWork() {
    return(
        <Container>
            <h2>No trabalho</h2>
            <img src={imgWork} alt="Pessoa no trabalho" />
            <p>
            No ambiente de trabalho o TOC consegue roubar a produtividade de uma pessoa, não é incomum o portador ter dificuldades para entregar uma tarefa ou relatório, por exemplo. Isso ocorre porque a pessoa normalmente desenvolve características perfeccionistas, inflexibilidade, auto criticas, autoritarismo e dificuldade em lidar com a frustração e incerteza.<br/><br/>
            </p>
            <p>Com o surgimento de tais características relacionadas ao transtorno, a pessoa possui uma tendência maior a demorar muito mais tempo em suas atividades, em relação aos seus colegas de trabalho. Isso porque a pessoa acaba tentando realizar todas as tarefas com perfeição, revisando diversas vezes ou refazendo a tarefa inúmeras vezes.<br/><br/></p>
            <p>
            A pessoa com o transtorno no ambiente de trabalho, pode, por exemplo, demorar dias para concluir uma planilha ao invés de algumas horas como os seus colegas, isso acontece devido à necessidade de que a planilha esteja perfeita ou também a necessidade de checagem, alinhamento e rituais diversos durante o processo. 
            </p>
        </Container>
    );
}