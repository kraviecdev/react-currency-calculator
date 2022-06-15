import { ThemeSwitch } from "../common/Header/ThemeSwitch";
import Form from '../features/calculator/Form';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Container from '../common/Container';
import Section from '../common/Section';
import Board from '../features/historical/Board';

const Exchange = () => {

  return (
    <Container>
      <Section>
        <Header>
          <ThemeSwitch />
        </Header>
      </Section>
      <Form />
      <Section backgroundSection={true}>
        <Board />
      </Section>
      <Footer />
    </Container>
  );
}

export default Exchange;