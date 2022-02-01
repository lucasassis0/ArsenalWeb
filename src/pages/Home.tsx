import { Carousel } from "react-bootstrap";
import style from "../styles/pages/Home.module.css"
import { BsNewspaper, BsPlayCircle, BsCardImage } from "react-icons/bs";

export default function Home() {
    return (
        <div>
            <div className={style.thumbImages}>
                <div>
                    <img src={require("../assets/img/thumb1.jpg")} alt="" width="100%" />
                </div>
                <div>
                    <img src={require("../assets/img/thumb2.jpg")} alt="" width="100%" />
                </div>
                <div>
                    <img src={require("../assets/img/thumb3.jpg")} alt="" width="100%" />
                </div>
            </div>
            <div className={style.latestContainer}>
                <div className={style.carouselContainer}>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block"
                                src={require("../assets/img/thumb1.jpg")}
                                alt="First slide"
                                // width={600}
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block"
                                src={require("../assets/img/thumb2.jpg")}
                                alt="Second slide"
                                // width={600}
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block"
                                src={require("../assets/img/thumb1.jpg")}
                                alt="Third slide"
                                // width={600}
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={style.cardsContainer}>
                    <div className={style.header}>
                        <div className={style.latestTab}>Últimas notícias</div>
                    </div>
                    <div className={style.content}>
                        <div className={style.cardNews}>
                            <div>
                                <BsNewspaper />
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, omnis.</span>
                            </div>
                        </div>
                        <div className={style.cardNews}>
                            <div>
                                <BsPlayCircle />
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque delectus doloremque saepe, facere at sed?</span>
                            </div>
                        </div>
                        <div className={style.cardNews}>
                            <div>
                                <BsCardImage />
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam reprehenderit porro doloremque necessitatibus dolorum excepturi aut incidunt! Veniam, vitae.</span>
                            </div>
                        </div>
                        <div className={style.cardNews}>
                            <div>
                                <BsNewspaper />
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, omnis.</span>
                            </div>
                        </div>
                        <div className={style.cardNews}>
                            <div>
                                <BsPlayCircle />
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque delectus doloremque saepe, facere at sed?</span>
                            </div>
                        </div>
                        <div className={style.cardNews}>
                            <div>
                                <BsCardImage />
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam reprehenderit porro doloremque necessitatibus dolorum excepturi aut incidunt! Veniam, vitae.</span>
                            </div>
                        </div>
                        <div className={style.cardNews}>
                            <div>
                                <BsNewspaper />
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, omnis.</span>
                            </div>
                        </div>
                        <div className={style.cardNews}>
                            <div>
                                <BsPlayCircle />
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque delectus doloremque saepe, facere at sed?</span>
                            </div>
                        </div>
                        <div className={style.cardNews}>
                            <div>
                                <BsCardImage />
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam reprehenderit porro doloremque necessitatibus dolorum excepturi aut incidunt! Veniam, vitae.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}