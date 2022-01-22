import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import style from "../../styles/components/TopBar.module.css";

export default class TopBar extends React.Component {
    render(): React.ReactNode {
        return (
            <Navbar className={style.background} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={require("../../assets/img/brand.png")} alt="" width={40}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Notícias</Nav.Link>
                            <Nav.Link href="#link">Time</Nav.Link>
                            <Nav.Link href="#link">Calendário</Nav.Link>
                            <NavDropdown title="Mídias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Fotos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Vídeos</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}