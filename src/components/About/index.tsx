
import styles from '../About/about.module.scss'

export function About() {
    return (
        <div>

            <div className={styles.profileContainer}>
                <img className={styles.profilePicture} src="/pp.jpg" alt="Profile Picture" />
                <p className={styles.profileText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Al</p>


                <h1>My Skills</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>

            </div>

        </div>



    )
}