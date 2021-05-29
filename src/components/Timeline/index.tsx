import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../Timeline/timeline.module.scss'


export function Timeline() {


    return (
        <div className={styles.wrapper}>


            <h1>A peek at my story</h1>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=" Setembro 1998"
                    iconStyle={{ background: 'rgb(152, 75, 67)', color: '#fff' }}
                    style={{
                        marginBottom: '15rem',
                        marginTop: '8rem'
                    }}

                >
                    <h3 className="vertical-timeline-element-title">Nascimento</h3>
                    <h4 className="vertical-timeline-element-subtitle">Guaxupé, MG</h4>



                </VerticalTimelineElement>

                <VerticalTimelineElement

                    className="vertical-timeline-element--work"
                    date="Abril 2018"
                    iconStyle={{ background: 'rgb(152, 75, 67)', color: '#fff' }}
                    style={{ marginBottom: '12rem' }}

                >

                    <h3 className="vertical-timeline-element-title">Ingresso na universidade</h3>
                    <h4 className="vertical-timeline-element-subtitle">Itabira, MG</h4>
                    <p>Entrada na Universidade Federal de Itajubá - Campus Itabira no curso de Engenharia de Computação.</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Fevereiro 2019"
                    iconStyle={{ background: 'rgb(152, 75, 67)', color: '#fff' }}
                    style={{ marginBottom: '12rem' }}

                >
                    <h3 className="vertical-timeline-element-title">Transferência</h3>
                    <h4 className="vertical-timeline-element-subtitle">Itajubá, MG</h4>
                    <p>
                        Mudança para o campus Itajubá da Universidade Federal de Itajubá.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Março 2019"
                    iconStyle={{ background: 'rgb(152, 75, 67)', color: '#fff' }}
                    style={{ marginBottom: '12rem' }}


                >
                    <h3 className="vertical-timeline-element-title">Robok</h3>
                    <h4 className="vertical-timeline-element-subtitle">Itajubá, MG</h4>
                    <p>
                        Entrada para a equipe de futebol de robôs Robok, na subequipe de eletrônica.
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Abril 2020"
                    iconStyle={{ background: 'rgb(152, 75, 67)', color: '#fff' }}
                    style={{ marginBottom: '12rem' }}


                >
                    <h3 className="vertical-timeline-element-title">Estudos Web Development</h3>
                    <h4 className="vertical-timeline-element-subtitle">Itajubá, MG</h4>
                    <p>
                        Com a chegada quarentena, decidi aprofundar meus conhecimentos na area de web development focando principalmente no front end.
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Abril 2021"
                    iconStyle={{ background: 'rgb(152, 75, 67)', color: '#fff' }}
                    style={{ marginBottom: '10rem' }}


                >
                    <h3 className="vertical-timeline-element-title">Curso Web Development</h3>
                    <h4 className="vertical-timeline-element-subtitle">Remoto</h4>
                    <p>
                        Conclusão do curso The Complete 2021 Web Development Bootcamp, ministrado pela professora Angela Yu.
                    </p>
                </VerticalTimelineElement>





            </VerticalTimeline>
        </div >
    )

}