import style from "../../../styles/components/footer/TimesBFA.module.css";
import CardTimePorRegiao from "./CardTimesPorRegiao";

export default function TimesBFA() {
    const regioes = [
        {
            regiao: {
                nomeRegiao: 'Nordeste',
                grupos: [
                    {
                        nome: 'Grupo Norte',
                        numeroTimes: 4
                    },
                    {
                        nome: 'Grupo Sul',
                        numeroTimes: 4
                    }
                ]
            }
        },
        {
            regiao: {
                nomeRegiao: 'Centro-Oeste',
                grupos: [
                    {
                        nome: 'Grupo Centro',
                        numeroTimes: 4
                    },
                    {
                        nome: 'Grupo Oeste',
                        numeroTimes: 4
                    }
                ]
            }
        },
        {
            regiao: {
                nomeRegiao: 'Sudeste',
                grupos: [
                    {
                        nome: 'Grupo A',
                        numeroTimes: 5
                    },
                    {
                        nome: 'Grupo B',
                        numeroTimes: 5
                    }
                ]
            }
        },
        {
            regiao: {
                nomeRegiao: 'Sul',
                grupos: [
                    {
                        nome: '',
                        numeroTimes: 7
                    }
                ]
            }
        }
    ]
    return (
        <div className={style.container}>
            <div className={style.regiao}>
                {/* <CardTimePorRegiao regiao={regioes[0].regiao.nomeRegiao} grupos={regioes[0].regiao.grupos} /> */}
                <div>
                    <span className={style.nomeRegiao}>Nordeste</span>
                </div>
                <div className={style.grupo}>
                    <div>
                        <span>Grupo Norte</span>
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
                <div className={style.grupo}>
                    <div>
                        <span>Grupo Sul</span>
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
            </div>
            <div className={style.regiao}>
                <div>
                    <span className={style.nomeRegiao}>Centro-Oeste</span>
                </div>
                <div className={style.grupo}>
                    <div>
                        <span>Grupo Centro</span>
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
                <div className={style.grupo}>
                    <div>
                        <span>Grupo Oeste</span>
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
            </div>
            <div className={style.regiao}>
                <div>
                    <span className={style.nomeRegiao}>Sudeste</span>
                </div>
                <div className={style.grupo}>
                    <div>
                        <span>Grupo A</span>
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
                    <div className={style.logo}>
                        <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                    </div>
                </div>
                <div className={style.grupo}>
                    <div>
                        <span>Grupo B</span>
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
                    <div className={style.logo}>
                        <img src={require("../../../assets/img/brand.png")} alt="" width={30} />
                    </div>
                </div>
            </div>
            <div className={style.regiao}>
                <div>
                    <span className={style.nomeRegiao}>Sul</span>
                </div>
                <div className={style.grupo}>
                    <div>
                        <span>Grupo A</span>
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
            </div>
        </div>
    );
}