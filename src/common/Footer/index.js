import { StyledAbout, StyledLink, StyledFooter, StyledFooterHeader, StyledFooterWrapper, StyledSocial, StyledSocialList, GithubIcon, LinkedInIcon } from "./styled";

const Footer = () => (
    <StyledFooter>
        <StyledFooterWrapper>
            <StyledAbout>
                {`This project was created during the YouCode course. It covers all the techniques learned in this course. This project is made for practice only, not for profit. Creating web-pages and applications is my passion. If you want to check my work, below you can find more info.`}
            </StyledAbout>
            <StyledFooterHeader>Contact me if my work seems interesting to you!</StyledFooterHeader>
            <StyledLink href="mailto:pkrawczyk@kraviecdev.com">
                pkrawczyk@kraviecdev.com
            </StyledLink>
            <StyledSocialList>
                <StyledSocial>
                    <StyledLink href="https://github.com/kraviecdev">
                        <GithubIcon />
                    </StyledLink>
                </StyledSocial>
                <StyledSocial>
                    <StyledLink href="https://www.linkedin.com/in/patryk-krawczyk-js/">
                        <LinkedInIcon />
                    </StyledLink>
                </StyledSocial>
            </StyledSocialList>
            <StyledAbout>{`Coded by Patryk Krawczyk`} &copy; {2022}</StyledAbout>
        </StyledFooterWrapper>
    </StyledFooter>
);

export default Footer;