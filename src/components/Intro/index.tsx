import styles from '../Intro/intro.module.scss'
import Particles from 'react-particles-js';

export function Intro() {

    return (
        <div>
            <Particles params={{
                particles: {
                    number: {
                        value: 100,
                    }
                }
            }
            }
            />
        </div>

    );





}

