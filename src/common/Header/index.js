import { StyledHeader, Wrapper } from "./styled";

const Header = ({ children }) => {

    return (
        <StyledHeader >
            <Wrapper>
                {children}
            </Wrapper>
        </StyledHeader>
    );
};

export default Header;