import styled from '@emotion/styled';
import header from './../../../../shared/assets/landing.jpg';
import theme from './../../../../design-system/config';

export const HeaderWrapper = styled("section")`
    label:HeaderWrapper;
    height: 100vh;
    padding: 20% 0;
    text-align: center;
    background-size: center;
    background-repeat: no-repeat;
    background: url(${header}) fixed;
`;
export const H3 = styled("H3")`
    label: H3;
    font-size: 1.5rem;
    /* color: ${theme.white}; */
`;
export const Title = styled("h1")`
    label: Title;
    font-size: 3rem;
    /* color: ${theme.white}; */
`;
export const LearnMore = styled("button")`
    label: LearnNow;
    font-size: 1.4rem;
    margin-right: 2rem;
    padding: 1rem 2rem;
    border-radius: 5px
    cursor: pointer;
    color: ${theme.secondary};
    background: 1px solid ${theme.white};
    transform: all 0.3s;
    :hover {
    /* color: ${theme.white}; */
    background: ${theme.primary};
    background: 1px solid ${theme.primary};
    }
`;
export const Register = styled("button")`
    label: Register;
    cursor: pointer;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: 5px;
    /* color: ${theme.white}; */
    background: ${theme.primary};
    background: 1px solid ${theme.primary};
    transform: all 0.3s;
    :hover {
    /* color: ${theme.white}; */
    background: ${theme.white};
    background: 1px solid ${theme.primary};
    }
`;