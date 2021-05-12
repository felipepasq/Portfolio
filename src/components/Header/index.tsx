import styles from '../Header/header.module.scss'
import { Container, Row, Col } from 'react-bootstrap'




export function Header() {

    return (

        <header className={styles.headerContainer}>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet" />



            <img className={styles.titleImage} src="/programas.png" alt="" />
            <p className={styles.title}>Felipe Pasqua</p>

            <span>About</span>
            <span>Projects</span>
            <span>Contact Me</span>







        </header>
    )

}