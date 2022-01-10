import { Description } from './components/Description';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InWork } from './components/InWork';
import { MoreSymptoms } from './components/MoreSymptoms';
import { Statistic } from './components/statistic';

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
      <GlobalStyle/>
    </>
  );
}

export default App;
