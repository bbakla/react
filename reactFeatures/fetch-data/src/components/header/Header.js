import React, {useState} from "react";

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

        <>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                DataFetchtWithHook
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/fetchWithHooks">
                                    WithoutReducer
                                </DropdownItem>
                                <DropdownItem href="/fetchWithHooksAndReducer">
                                    WithReducer
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                </Collapse>
            </Navbar>

        </>
    );
}
