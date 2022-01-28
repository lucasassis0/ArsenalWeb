import style from "../../../styles/components/footer/LinksArsenal.module.css";

export default function LinksArsenal() {
    return (
        <div className={style.linksContainer}>
            <div className={style.linksContent}>
                <span className={style.title}>Cuiabá Arsenal</span>
                <div>
                    <a href="https://www.shoparsenal.com.br/" target="_blank" rel="noreferrer">Loja Oficial</a>
                </div>
                <div>
                    <a href="#">Parceiros</a>
                </div>
                <div>
                    <a href="#">Fale Conosco</a>
                </div>
            </div>
            <div className={style.linksContent}>
                <span className={style.title}>Sobre Nós</span>
                <div>
                    <a href="#">Notícias</a>
                </div>
                <div>
                    <a href="#">História</a>
                </div>
                <div>
                    <a href="#">Equipe</a>
                </div>
            </div>
            <div className={style.linksContent}>
                <span className={style.title}>Mídias Sociais</span>
                <div>
                    <a href="https://www.instagram.com/cuiabaarsenal/" target="_blank" rel="noreferrer">Instagram</a>
                </div>
                <div>
                    <a href="https://www.facebook.com/cuiabaarsenal" target="_blank" rel="noreferrer">Facebook</a>
                </div>
                <div>
                    <a href="https://twitter.com/CuiabaArsenal" target="_blank" rel="noreferrer">Twitter</a>
                </div>
            </div>
        </div>
    );
}