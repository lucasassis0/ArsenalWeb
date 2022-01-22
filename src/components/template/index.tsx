import React from "react";
import TopBar from "./TopBar";
import style from "../../styles/components/AppTemplate.module.css";

export default class AppTemplate extends React.Component {
    render(): React.ReactNode {
        return (
            <div className={style.header}>
                {/* <div className="thumb">
                    <img src={require("../../assets/img/thumb1.jpg")} alt="" width={"50%"} height={250} />
                    <img src={require("../../assets/img/thumb2.jpg")} alt="" width={"50%"} height={250} />
                </div> */}
                <div className={style.logoThumb}>
                    <img src={require("../../assets/img/logo-thumb.png")} alt="" width={250} />
                </div>
                <TopBar />
            </div>
        );
    }
}