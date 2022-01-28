import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../../styles/components/TopBar.module.css";

export default class TopBar extends React.Component {
    render(): React.ReactNode {
        return (
            <Navbar className={style.background} expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={require("../../assets/img/brand.png")} alt="" width={40} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className={style.link} to="/news">Notícias</Link>
                            <Link className={style.link} to="/team">Time</Link>
                            <Link className={style.link} to="/schedule">Calendário</Link>
                            <Link className={style.link} to="/media">Mídias</Link>
                            {/* <NavDropdown title="Mídias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Fotos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Vídeos</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}