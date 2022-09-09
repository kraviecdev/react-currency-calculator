import { StyledHeader, Wrapper } from "./styled";

const Header = ({ children, isScrolled }) => {

    return (
        <StyledHeader 
            isScrolled={isScrolled}
        >
            <Wrapper>
                {children}
            </Wrapper>
        </StyledHeader>
    );
};

export default Header;