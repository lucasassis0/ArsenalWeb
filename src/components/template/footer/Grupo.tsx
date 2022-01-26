import style from "../../../styles/components/footer/CardTimesPorRegiao.module.css";

export default function Grupo(props: any) {

    return (
        <div>
            <div>
                <span>{props.grupo}</span>
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
    );
}