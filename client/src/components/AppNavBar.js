import React, { Component } from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap";


 class AppNavBar extends Component {
    
    
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    wrapper = React.createRef();
    
    
    render() {
       
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Todo App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse ref={this.wrapper} isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <NavLink href="https://twitter.com/d_oyeyipo">
                                    Twitter 
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
                </Navbar>
            </div>
        )
    }
}


export default AppNavBar;

