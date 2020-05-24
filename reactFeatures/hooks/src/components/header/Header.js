import React from "react";
import {NavLink} from "react-router-dom";

export default function Header() {
    const activeStyle = {color: "blue"};
return(
  <nav>
      <NavLink exact to="/useStates" activeStyle={activeStyle}>UseState</NavLink> {"| "}
      <NavLink exact to="/useEffect" activeStyle={{activeStyle}}>UseEffect</NavLink> {"| "}
      <NavLink exact to="/useContext" activeStyle={{activeStyle}}>UseContext With Context API</NavLink>

  </nav>
);
}
