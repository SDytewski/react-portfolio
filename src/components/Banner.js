import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header20.png"



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [  "Web Developer", "UI/UX developer", "Front-End Developer" ];
    const period = 2000;
    const [number, setNumber] = useState(0);
    
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
        return () => { clearInterval(ticker) };
      }, [text])
   
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
      
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
          } else {
            setIndex(prevIndex => prevIndex + 1);
          }
        }
    
        const increase = () => {
          setNumber(number+1)
        }

        function decrease(){
          setNumber(number-1)
        }

       
    
    return (
        <section className="banner mt-5 mb-5 pt-5 pb-5" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Steven Dytewski
                        </span>
                        <h1>{`Hi! I'm Steve `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "UI/UX developer", "Front-End Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a web developer that specializes in UI/UX development. Experience includes working with projects with cross browser functionality for multiple devices. I have certifcation in Full Stack Web Development using Front-end technologies.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </Col>
                        <Col className="pt-5" xs={12} md={3} xl={3}>
                        <img src={headerImg} alt="Header Img"/>
                        </Col>
                </Row>
          {/* {number}
            <button onClick={increase}>Increase</button>
            <button onClick={() => decrease()}>Decrease</button> */}
            
            </Container>

        </section>
    )

}
