
import styles from '../About/about.module.scss'
import Link from 'next/link';

export function About() {
    return (
        <div>
            
            <div className={styles.profileContainer}>
                <img className={styles.profilePicture} src="/pp.jpg" alt="Profile Picture" />
                <p className={styles.profileText}>Opa, tudo bem? Espero que você esteja bem e seja bem vindo ao meu portfólio.
                Primeiramente gostaria de me apresentar para que você conheça um pouco da minha história. Sou nascido e criado na cidade de Guaxupé, interior de minas gerais
                e desde pequeno sempre fui muito interessado por tecnologia e principalmente por computadores, tanto na parte de software como na parte de hardware. Tenho como
                hobbie de jogar jogos online como Cs, Valorant, Pubg e Sea of Thieves. Gosto muito de praticar exercícios físicos e fazer um churrasquinho no fim de semana 🍺.
                
                </p>

                <div>
                    <h1>My Skills</h1>
                    <ul>
                        <li><img className={styles.iconPicture} src="/html-5.png" /> HTML</li>
                        <li><img className={styles.iconPicture} src="/css.png" />CSS</li>
                        <li><img className={styles.iconPicture} src="/css.png" />JavaScript</li>
                        <li><img className={styles.iconPicture} src="/css.png" />ReactJs</li>
                        <li><img className={styles.iconPicture} src="/css.png" />TypeScript</li>
                        <li><img className={styles.iconPicture} src="/css.png" />C</li>
                        <li><img className={styles.iconPicture} src="/css.png" />C++</li>
                    </ul>
                </div>
            </div>
            
        </div>



    )
}