import { ThemeSwitch } from "../common/Header/ThemeSwitch";
import Form from '../features/calculatorForm/Form';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Container from '../common/Container';
import Section from '../common/Section';
import Clock from '../common/Clock'

const Exchange = () => {

  return (
    <Container>
      <Section>
        <Header>
          <Clock />
          <ThemeSwitch />
        </Header>
      </Section>
        <Form />
      <Footer />
    </Container>
  );
}

export default Exchange;