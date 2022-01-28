import style from "../styles/pages/Home.module.css"

export default function Home() {
    return (
        <div>
            <div className={style.thumbImages}>
                <div>
                    <img src={require("../assets/img/thumb1.jpg")} alt="" width="100%"/>
                </div>
                <div>
                    <img src={require("../assets/img/thumb2.jpg")} alt="" width="100%" />
                </div>
                <div>
                    <img src={require("../assets/img/thumb3.jpg")} alt="" width="100%" />
                </div>
            </div>
        </div>
    );
}