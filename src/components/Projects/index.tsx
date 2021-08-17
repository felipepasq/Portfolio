
import styles from '../Projects/projects.module.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link';


export function Projects() {

    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Projects</h1>
                <div className={styles.cardContainer}>
                    <Container>
                        <div className={styles.firstRow}>
                            <Row xs={1} md={2} lg={3}>
                                <Col>
                                    <a href="https://github.com/felipepasq/front-end-test">
                                        <Card style={{
                                            width: '18rem',
                                            height: '19rem'
                                        }}>
                                            <Card.Body>
                                                <Card.Title
                                                    style={{
                                                        marginTop: '5rem'
                                                    }}
                                                >PontoComic</Card.Title>
                                                <Card.Text>
                                                    Teste técnico realizado para uma empresa, cujo objetivo
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>

                                <Col>
                                    <a href="https://www.twitch.tv/gaules">
                                        <Card style={{
                                            width: '18rem',
                                            height: '19rem'
                                        }}>
                                            <Card.Body>
                                                <Card.Title
                                                    style={{
                                                        marginTop: '5rem'
                                                    }}
                                                >Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>

                                <Col>
                                    <a href="https://www.twitch.tv/gaules">
                                        <Card style={{
                                            width: '18rem',
                                            height: '19rem'
                                        }}>
                                            <Card.Body>
                                                <Card.Title
                                                    style={{
                                                        marginTop: '5rem'
                                                    }}
                                                >Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )

}