import { Container, ContainerCard } from "./styles";
import ImgBookTips from '../../assets/book_tips.svg';

export function Tips() {
    return(
        <Container id="tips">
            <h2>Dicas para dimiuir o TOC</h2>
            <ContainerCard>
                <div>
                    <img src={ImgBookTips}  alt="Livro"/>
                    <p>Tudo que eu quero é ser feliz, viver tranquilamente sem ter que me matar de prova , é, e poder trabalhar e saber que o dev tem seu lugar. Tudo que eu quero é ser feliz, viver tranquilamente sem ter que me matar de prova , é, e poder trabalhar e saber que o dev tem seu lugar</p>
                </div>
                <div>
                    <img src={ImgBookTips}  alt="Livro"/>
                    <p>Tudo que eu quero é ser feliz, viver tranquilamente sem ter que me matar de prova , é, e poder trabalhar e saber que o dev tem seu lugar. Tudo que eu quero é ser feliz, viver tranquilamente sem ter que me matar de prova , é, e poder trabalhar e saber que o dev tem seu lugar</p>
                </div>
                <div>
                    <img src={ImgBookTips}  alt="Livro"/>
                    <p>Tudo que eu quero é ser feliz, viver tranquilamente sem ter que me matar de prova , é, e poder trabalhar e saber que o dev tem seu lugar. Tudo que eu quero é ser feliz, viver tranquilamente sem ter que me matar de prova , é, e poder trabalhar e saber que o dev tem seu lugar</p>
                </div>
            </ContainerCard>
        </Container>
    );
}