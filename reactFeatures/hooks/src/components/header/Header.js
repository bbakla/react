import React, {useState} from "react";
//import {NavLink} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {Route, Switch} from "react-router-dom";
import ObjectStateVariable from "../useState/ObjectStateVariable";
import InputForm from "../useState/InputForm";
import ArrayStates from "../useState/ArrayStates";
import CountClicker from "../useState/CountClicker";

export default function Header() {
   // const activeStyle = {color: "blue"};

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

    <>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                UseState
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem  href="/useStates/objectstate">Object states</DropdownItem>
                                <DropdownItem  href="/useStates/arraystate">ArrayState</DropdownItem>
                                <DropdownItem  href="/useStates/inputform">Input form</DropdownItem>
                                <DropdownItem  href="/useStates/countclicker">Counter click</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

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
                                <DropdownItem  href="/useReducer">MainPage</DropdownItem>
                                <DropdownItem href="/toDoApp">ToDoApp</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                </Collapse>
            </Navbar>

        </>
    );
}
