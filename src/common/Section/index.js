import { StyledSection } from "./styled";

const Section = ({ children, backgroundSection, isScrolled }) => {

    return (
        <StyledSection
            backgroundSection={backgroundSection}
            isScrolled={isScrolled}
        >
            {children}
        </StyledSection>
    );
};

export default Section;