import styles from '../Header/header.module.scss'

export function Header() {

    return (

        <header className={styles.headerContainer}>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />

            <img className={styles.titleImage} src="/code.png" alt="" />
            <p className={styles.title}>Portfolio</p>

            <span>About</span>
            <span>Projects</span>
            <span>Contact Me</span>







        </header>
    )

}