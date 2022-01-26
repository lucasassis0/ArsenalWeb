import React from "react";
import { Button } from "react-bootstrap";
import style from "../../styles/components/Footer.module.css";

export default class Footer extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.header}>
                        <Button className={style.menuButton}>Links Arsenal</Button>
                        <Button className={style.menuButton}>Times BFA</Button>
                        <Button className={style.menuButton}>Outros Links</Button>
                    </div>
                    <div className={style.linksContainer}>
                        <div className={style.linksContent}>
                            <span className={style.title}>Mídias Sociais</span>
                            <div>
                                <a href="https://www.instagram.com/cuiabaarsenal/">Instagram</a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/cuiabaarsenal">Facebook</a>
                            </div>
                            <div>
                                <a href="https://twitter.com/CuiabaArsenal">Twitter</a>
                            </div>
                        </div>
                        <div className={style.linksContent}>
                            <span className={style.title}>Mídias Sociais</span>
                            <div>
                                <a href="https://www.instagram.com/cuiabaarsenal/">Instagram</a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/cuiabaarsenal">Facebook</a>
                            </div>
                            <div>
                                <a href="https://twitter.com/CuiabaArsenal">Twitter</a>
                            </div>
                        </div>
                        <div className={style.linksContent}>
                            <span className={style.title}>Mídias Sociais</span>
                            <div>
                                <a href="https://www.instagram.com/cuiabaarsenal/">Instagram</a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/cuiabaarsenal">Facebook</a>
                            </div>
                            <div>
                                <a href="https://twitter.com/CuiabaArsenal">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.footer}>
                    <div className={style.logoThumb}>
                        <img src={require("../../assets/img/brand.png")} alt="" width={70} />
                    </div>
                    <div className={style.copyright}>
                        <small>&copy; Copyright 2022, Lucas Assis</small>
                    </div>
                </div>
            </div>
        );
    }
}