import styles from '../Intro/intro.module.scss'
import Particles from 'react-particles-js';

export function Intro() {

    return (
        <div className={styles.introContainer}>
            <div className={styles.animatedBackground}>
                <Particles params={{
                    particles: {
                        number: {
                            value: 100,
                        }

                    }
                }
                }
                />
                <div>
                    <h1>Felipe Pasqua</h1>
                    <h2>Front End Developer</h2>
                </div>
            </div>

        </div>

    );





}

