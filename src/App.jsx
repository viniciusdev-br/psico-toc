import { Description } from './components/Description';
import { Empresa } from './components/Empresa';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InWork } from './components/InWork';
import { MoreSymptoms } from './components/MoreSymptoms';
import { Statistic } from './components/statistic';
import { Tips } from './components/Tips';

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <MoreSymptoms />
      <InWork />
      <Statistic />
      <Empresa />
      <Tips />
      <GlobalStyle/>
    </>
  );
}

export default App;
