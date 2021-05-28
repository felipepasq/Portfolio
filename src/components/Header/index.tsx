import styles from '../Header/header.module.scss'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'




export function Header() {

    return (
        <div className={styles.headerContainer}>
            <Navbar bg="light" expand="lg">
                <img className={styles.titleImage} src="/logoFinal.svg" alt="" />
                <Navbar.Brand href="#home"><h1 className={styles.titleText}>Felipe Pasqua</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"><h4 className={styles.items}>About</h4></Nav.Link>
                        <Nav.Link href="#About"><h4 className={styles.items}>Projects</h4></Nav.Link>
                        <Nav.Link href="#Projects"><h4 className={styles.items}>Contact Me</h4></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}