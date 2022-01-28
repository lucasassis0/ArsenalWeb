import style from "../../../styles/components/footer/OutrosLinks.module.css";

export default function OutrosLinks() {
    return (
        <div className={style.linksContainer}>
            <div className={style.linksContent}>
                <span className={style.title}>BFA</span>
                <div>
                    <a href="https://www.ligabfa.com/acesso" target="_blank" rel="noreferrer">Acesso</a>
                </div>
                <div>
                    <a href="https://www.ligabfa.com/feminino" target="_blank" rel="noreferrer">Feminino</a>
                </div>
                <div>
                    <a href="https://www.ligabfa.com/norte" target="_blank" rel="noreferrer">Norte</a>
                </div>
            </div>
            <div className={style.linksContent}>
                <span className={style.title}>Federação</span>
                <div>
                    <a href="https://cbfabrasil.com.br/" target="_blank" rel="noreferrer">CBFA</a>
                </div>
                <div>
                    <a href="https://www.facebook.com/cbfaoficial/" target="_blank" rel="noreferrer">Brasil Onças</a>
                </div>
                <div>
                    <a href="https://cbfabrasil.com.br/category/flag-football/" target="_blank" rel="noreferrer">Flag Football</a>
                </div>
            </div>
            <div className={style.linksContent}>
                <span className={style.title}>Portais</span>
                <div>
                    <a href="https://futebolamericanobrasil.com/" target="_blank" rel="noreferrer">FABR</a>
                </div>
                <div>
                    <a href="https://www.salaooval.com.br/" target="_blank" rel="noreferrer">Salão Oval</a>
                </div>
                <div>
                    <a href="https://www.theplayoffs.com.br/tag/fabr/" target="_blank" rel="noreferrer">The Playoffs</a>
                </div>
            </div>
        </div>
    );
}