import { NavLink } from "react-router-dom";

interface NavLinkProps {
    to: string;
    text: string;
  }
  
  const NavLinkContent = (props: NavLinkProps) => {
    const {to , text} = props;
    return (
        <li>
            <NavLink to={to} style={({ isActive }) => ({
                color: isActive ? "#fff" : "#7d7d7d",
                background: isActive ? "#000000" : "unset",
                fontWeight: isActive ? "700" : "400",})}>
             {text}
            </NavLink>
      </li>
    );
  };
  
export { NavLinkContent };
  