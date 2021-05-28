
import styles from '../About/about.module.scss'

export function About() {
    return (
        <div>

            <div className={styles.profileContainer}>
                <img className={styles.profilePicture} src="/pp.jpg" alt="Profile Picture" />
                <p className={styles.profileText}>Opa, tudo bem? Espero que você esteja bem e seja bem vindo ao meu portfólio.
                Primeiramente gostaria de me apresentar para que você conheça um pouco da minha história. Sou nascido e criado na cidade de Guaxupé, interior de minas gerais
                e desde pequeno sempre fui muito interessado por tecnologia e principalmente por computadores, tanto na parte de software como na parte de hardware. No ano
                de 2018 entrei na Unifei-Itabira no curso de Engenharia de Computação e tive meu primeiro contato com a programação. Em 2019 transferi a graduação para o campus
                de Itajubá onde estou até hoje. Durante o ano ingressei em uma equipe de futebol de robôs na subequipe de eletrônica e tive a possibilidade de trabalhar com
                programação embarcarda e desenvolvimento de placas de circuito impresso. No ano de 2020 com o início da quarentena decidi aprofundar meus conhecimentos na área
                de Web Development e comprei um curso da udemy ministrado pela professora Angela Yu, foi então que realmente me apaixonei por esse mundo e decidi aprofundar
                cada vez mais meus conhecimentos. Hoje em dia estudo programação por meio do desenvolvimento de projetos pessoais e de conteúdos online, e também estou a
                procura de experiência profissional em um ambiente corporativo.
                
                </p>

                <div>
                    <h1>My Skills</h1>
                    <ul>
                        <li><img className={styles.iconPicture} src="/html-5.png"/> HTML</li>
                        <li><img className={styles.iconPicture} src="/css.png"/>CSS</li>
                        <li><img className={styles.iconPicture} src="/css.png"/>JavaScript</li>
                        <li><img className={styles.iconPicture} src="/css.png"/>ReactJs</li>
                        <li><img className={styles.iconPicture} src="/css.png"/>TypeScript</li>
                        <li><img className={styles.iconPicture} src="/css.png"/>C</li>
                        <li><img className={styles.iconPicture} src="/css.png"/>C++</li>
                    </ul>
                </div>
            </div>

        </div>



    )
}