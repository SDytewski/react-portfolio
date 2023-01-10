import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"


export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Steven Dytewski
                        </span>
                        <h1>{`Hi! I'm Steve`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "UI/UX developer", "Front-End Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                        <img src={headerImg} alt="Header Img"/>
                        </Col>
                </Row>

            </Container>

        </section>
    )

}