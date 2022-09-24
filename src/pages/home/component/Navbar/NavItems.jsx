import { useLocation } from "react-router-dom";
import links from "./Links";
import NavLinks from "./NavLinks";
import theme from './../../../../design-system/config';
export default function NavItems() {
  const items = links();
  const route = useLocation();
  
  return items.map((link, index) => {
    return (
      <NavLinks
        color={route.pathname=== link.navLink? theme.active: theme.white}
        navLink={link.navLink}
        navText={link.navText}
        key={index}
      />
    );
  });
}
