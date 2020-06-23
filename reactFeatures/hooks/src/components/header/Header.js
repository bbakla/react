import React, {useState} from "react";
//import {NavLink} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export default function Header() {
    const activeStyle = {color: "blue"};

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
       /* <nav>
            <NavLink exact to="/useStates" activeStyle={activeStyle}>UseState</NavLink> {"| "}
            <NavLink exact to="/useEffect" activeStyle={{activeStyle}}>UseEffect</NavLink> {"| "}
            <NavLink exact to="/useContext" activeStyle={{activeStyle}}>UseContext With Context API</NavLink> {"| "}
            <NavLink exact to="/useReducer" activeStyle={{activeStyle}}>Use Reducer
            </NavLink>

        </nav>*/

      <>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/useStates" >UseStates</NavLink>
                        </NavItem>
                            <NavItem>
                            <NavLink href="/useEffect" >UseEffect</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="/useContext" >UseContext</NavLink>
                            </NavItem>
                       {/* <NavItem>
                            <NavLink href="/useReducer" >UseReducer</NavLink>
                        </NavItem>*/}

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                UseReducer
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem  href="/useReducer">
                                    MainPage
                                </DropdownItem>
                                <DropdownItem href="/toDoApp">
                                    ToDoApp
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                </Collapse>
            </Navbar>

        </>
    );
}
