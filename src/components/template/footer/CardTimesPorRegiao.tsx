import style from "../../../styles/components/footer/CardTimesPorRegiao.module.css";
import Grupo from "./Grupo";

export default function CardTimePorRegiao(props: any) {

    return (
        <div className={style.regiao}>
            <div>
                <span>{props.regiao}</span>
            </div>
            <div>
                <div>
                    <span>{props.grupo[0].nome}</span>
                </div>
                <div className={style.logo}>
                    <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                </div>
                <div className={style.logo}>
                    <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                </div>
                <div className={style.logo}>
                    <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                </div>
                <div className={style.logo}>
                    <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                </div>
            </div>
            {/* {
                !!props.grupo[1] && (
                    <div>
                        <div>
                            <span>{props.grupo[1]}</span>
                        </div>
                        <div className={style.logo}>
                            <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                        </div>
                        <div className={style.logo}>
                            <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                        </div>
                        <div className={style.logo}>
                            <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                        </div>
                        <div className={style.logo}>
                            <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                        </div>
                    </div>
                )
            } */}

        </div>
    );
}