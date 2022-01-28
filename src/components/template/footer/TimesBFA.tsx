import style from "../../../styles/components/footer/TimesBFA.module.css";

export default function TimesBFA() {
    // const regioes = [
    //     {
    //         regiao: {
    //             nomeRegiao: 'Nordeste',
    //             grupos: [
    //                 {
    //                     nome: 'Grupo Norte',
    //                     numeroTimes: 4
    //                 },
    //                 {
    //                     nome: 'Grupo Sul',
    //                     numeroTimes: 4
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         regiao: {
    //             nomeRegiao: 'Centro-Oeste',
    //             grupos: [
    //                 {
    //                     nome: 'Grupo Centro',
    //                     numeroTimes: 4
    //                 },
    //                 {
    //                     nome: 'Grupo Oeste',
    //                     numeroTimes: 4
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         regiao: {
    //             nomeRegiao: 'Sudeste',
    //             grupos: [
    //                 {
    //                     nome: 'Grupo A',
    //                     numeroTimes: 5
    //                 },
    //                 {
    //                     nome: 'Grupo B',
    //                     numeroTimes: 5
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         regiao: {
    //             nomeRegiao: 'Sul',
    //             grupos: [
    //                 {
    //                     nome: '',
    //                     numeroTimes: 7
    //                 }
    //             ]
    //         }
    //     }
    // ]

    const tamanhoIcone = 40;
    return (
        <div className={style.container}>
            <div className={style.regiao}>
                {/* <CardTimePorRegiao regiao={regioes[0].regiao.nomeRegiao} grupos={regioes[0].regiao.grupos} /> */}
                <div>
                    <span className={style.nomeRegiao}>Nordeste</span>
                </div>
                <div className={style.grupos}>
                    <div className={style.grupo}>
                        <div className={style.nomeGrupo}>
                            <span>Grupo Norte</span>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/cearacacadores/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Nordeste/Grupo-Norte/ce_ceara_cacadores_icon.png")} alt="Ceará Caçadores" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://bullsfa.com.br/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Nordeste/Grupo-Norte/rn_bulls_potiguares.png")} alt="Bulls Potiguares" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.instagram.com/p/CYJ6JfwNu1O/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Nordeste/Grupo-Norte/rn_natal_scorpions.png")} alt="Natal Scorpions" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/UfersaPetroleiros/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Nordeste/Grupo-Norte/rn_ufersa_petroleiros.png")} alt="UFERSA Petroleiros" width={tamanhoIcone} />
                            </a>
                        </div>
                    </div>
                    <div className={style.grupo}>
                        <div className={style.nomeGrupo}>
                            <span>Grupo Sul</span>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.instagram.com/cavalariafa/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Nordeste/Grupo-Sul/ba_cavalaria_2_julho.png")} alt="Cavalaria 2 de Julho" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.instagram.com/p/CYmijwrv3Oh/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Nordeste/Grupo-Sul/pb_joao_pessoa_espectros.png")} alt="JP Espectros" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.recifemariners.com.br/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Nordeste/Grupo-Sul/pe_recife_mariners.png")} alt="Recife Mariners" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/RecifePirates/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Nordeste/Grupo-Sul/pe_recife_pirates.png")} alt="Recife Pirates" width={tamanhoIcone} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.regiao}>
                <div>
                    <span className={style.nomeRegiao}>Centro-Oeste</span>
                </div>
                <div className={style.grupos}>
                    <div className={style.grupo}>
                        <div className={style.nomeGrupo}>
                            <span>Grupo Centro</span>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/brasiliatemplarios/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Centro-Oeste/Grupo-Centro/df_brasilia_templarios.png")} alt="Brasília Templários" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/leoesFA/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Centro-Oeste/Grupo-Centro/df_leoes_de_juda.png")} alt="Leões de Juda" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/TubaroesDoCerrado/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Centro-Oeste/Grupo-Centro/df_tubaroes_do_cerrado.png")} alt="Tubarões do Cerrado" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/cgpredadores/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Centro-Oeste/Grupo-Centro/ms_campo_grande_predadores.png")} alt="CG Predadores" width={tamanhoIcone} />
                            </a>
                        </div>
                    </div>
                    <div className={style.grupo}>
                        <div className={style.nomeGrupo}>
                            <span>Grupo Oeste</span>
                        </div>
                        <div className={style.logo}>
                            <a href="#">
                                <img src={require("../../../assets/img/BFA-2019/Centro-Oeste/Grupo-Oeste/mt_cuiaba_arsenal.png")} alt="Cuiabá Arsenal" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/RondonopolisHawks/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Centro-Oeste/Grupo-Oeste/mt_rondonopolis_hawks.png")} alt="Rondonópolis Hawks" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/SinopCoyotes/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Centro-Oeste/Grupo-Oeste/mt_sinop_coyotes.png")} alt="Sinop Coyotes" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/SorrisoHornets.FA/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Centro-Oeste/Grupo-Oeste/mt_sorriso_hornets.png")} alt="Sorriso Hornets" width={tamanhoIcone} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className={style.regiao}>
                <div>
                    <span className={style.nomeRegiao}>Sudeste</span>
                </div>
                <div className={style.grupos}>
                    <div className={style.grupo}>
                        <div className={style.nomeGrupo}>
                            <span>Grupo A</span>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.galofutebolamericano.com.br/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-A/mg_galo_futebol_americano.png")} alt="Galo FA" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.flamengoimperadores.com.br/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-A/rj_flamengo_imperadores.png")} alt="Flamengo Imperadores" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/MacaeOilers/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-A/rj_macae_oilers.png")} alt="Macaé Oilers" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.salaooval.com.br/times/challengers-fa/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-A/sp_challengers_fa.png")} alt="Challengers FA" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="http://portuguesa.com.br/site/category/futebol-americano/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-A/sp_portuguesa_fa.png")} alt="Portuguesa FA" width={tamanhoIcone} />
                            </a>
                        </div>
                    </div>
                    <div className={style.grupo}>
                        <div className={style.nomeGrupo}>
                            <span>Grupo B</span>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.facebook.com/tritoes/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-B/es_tritoes_fa.png")} alt="Tritões FA" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://americalocomotiva.com.br/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-B/mg_america_locomotiva.png")} alt="América Locomotiva" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.vascoalmirantes.com.br/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-B/rj_vasco_almirantes.png")} alt="Vasco Almirantes" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://www.corinthians.com.br/clube/modalidades/competitivas/futebol-americano" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-B/sp_corinthians_steamrollers.png")} alt="Corinthians Steamrollers" width={tamanhoIcone} />
                            </a>
                        </div>
                        <div className={style.logo}>
                            <a href="https://spstorm.com.br/" target="_blank" rel="noreferrer">
                                <img src={require("../../../assets/img/BFA-2019/Sudeste/Grupo-B/sp_sao_paulo_storm.png")} alt="SP Storm" width={tamanhoIcone} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.regiao}>
                <div>
                    <span className={style.nomeRegiao}>Sul</span>
                </div>
                <div className={style.grupo}>
                    <div className={style.nomeGrupo}>
                        <span>Grupo A</span>
                    </div>
                    <div className={style.logo}>
                        <a href="https://coritiba.com.br/editorialistagem/178" target="_blank" rel="noreferrer">
                            <img src={require("../../../assets/img/BFA-2019/Sul/Grupo-A/pr_coritiba_crocodiles.png")} alt="Coritiba Crocodiles" width={tamanhoIcone} />
                        </a>
                    </div>
                    <div className={style.logo}>
                        <a href="http://paranahp.com.br/" target="_blank" rel="noreferrer">
                            <img src={require("../../../assets/img/BFA-2019/Sul/Grupo-A/pr_parana_hp.png")} alt="Paraná HP" width={tamanhoIcone} />
                        </a>
                    </div>
                    <div className={style.logo}>
                        <a href="https://smsoldiers.com/" target="_blank" rel="noreferrer">
                            <img src={require("../../../assets/img/BFA-2019/Sul/Grupo-A/rs_santa_maria_soldiers.png")} alt="SM Soldiers" width={tamanhoIcone} />
                        </a>
                    </div>
                    <div className={style.logo}>
                        <a href="https://www.facebook.com/gasparblackhawks/" target="_blank" rel="noreferrer">
                            <img src={require("../../../assets/img/BFA-2019/Sul/Grupo-A/sc_black_hawks.png")} alt="Black Hawks" width={tamanhoIcone} />
                        </a>
                    </div>
                    <div className={style.logo}>
                        <a href="" target="_blank" rel="noreferrer">
                            <img src={require("../../../assets/img/BFA-2019/Sul/Grupo-A/sc_jaragua_breakers.png")} alt="Jaraguá Breakers" width={tamanhoIcone} />
                        </a>
                    </div>
                    <div className={style.logo}>
                        <a href="https://www.facebook.com/BreakersFootballTeam/" target="_blank" rel="noreferrer">
                            <img src={require("../../../assets/img/BFA-2019/Sul/Grupo-A/sc_sao_jose_istepos.png")} alt="SJ Istepôs" width={tamanhoIcone} />
                        </a>
                    </div>
                    <div className={style.logo}>
                        <a href="https://www.gorex.com.br/" target="_blank" rel="noreferrer">
                            <img src={require("../../../assets/img/BFA-2019/Sul/Grupo-A/sc_timbo_rex.png")} alt="Timbó Rex" width={tamanhoIcone} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}