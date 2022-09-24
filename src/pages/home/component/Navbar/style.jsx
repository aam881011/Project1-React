import styled from '@emotion/styled';
import theme from './../../../../design-system/config';

export const NavbarWrapper = styled("section")`
    label: NavbarWrapper;
    padding: 1.5rem 0;
    position: fixed;
    width: 100%;
    color: ${theme.white};
    background-color: ${theme.secondary};
`;

export const NavContainer = styled ("div")`
    label: NavContainer; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;  
`; 

export const NavTitle = styled ("span")`
    label: NavTitle; 
    font-size: 1.7rem; 
`;

export const Event = styled ("span")`
    label: Event; 
    color: ${theme.primary}; 
`;
export const Link = styled ("a")`
    label: Link; 
    text-decoration: none;
    font-size: 1rem; 
    color: ${theme.white}; 
`;
export const LinksWrapper = styled ("div")`
    label: LinksWrapper; 
    gap: 2rem;
    display: flex;
    align-items: center;
`;







