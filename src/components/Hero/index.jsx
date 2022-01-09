import { Container } from "./styles";

export function Hero() {
    return(
    <Container>
        <div className="backgroundHero">
            <div className="container-card-intro">
                <main className="card-intro">
                    <h2>Entenda mais sobre o <b>Transtorno Obsessivo Compulsivo</b></h2>
                    <ul>
                        <li>Definição;</li>
                        <li>O que sua empresa pode fazer;</li>
                        <li>Dicas;</li>
                        <li>Estartísticas;</li>
                        <li>como buscar ajuda.</li>
                    </ul>
                </main>
            </div>
        </div>
    </Container>
    );
    
}