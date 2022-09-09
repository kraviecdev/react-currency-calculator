import { useState, useEffect } from "react";
import { ThemeSwitch } from "../common/Header/ThemeSwitch";
import Form from '../features/calculatorForm/Form';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Container from '../common/Container';
import Section from '../common/Section';
import Clock from '../common/Clock'

const Exchange = () => {

  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const updetaScrollPositon = () => {
      setIsScrolled(window.pageYOffset);
    };
    
    window.addEventListener("scroll", updetaScrollPositon);

    updetaScrollPositon();

    return () => window.removeEventListener('scroll', updetaScrollPositon);
  }, []);

  return (
    <Container>
      <Section 
      isScrolled={isScrolled}
      >
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