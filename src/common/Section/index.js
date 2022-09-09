import { StyledSection } from "./styled";

const Section = ({ children, backgroundSection, isScrolled }) => {

    return (
        <StyledSection
            isScrolled={isScrolled}
        >
            {children}
        </StyledSection>
    );
};

export default Section;