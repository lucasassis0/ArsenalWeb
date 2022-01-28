import { useState } from "react"
import { Button } from "react-bootstrap";
import style from "../../../styles/components/footer/Footer.module.css";
import OutrosLinks from "./OutrosLinks";
import LinksArsenal from "./LinksArsenal";
import TimesBFA from "./TimesBFA";

export default function Footer() {
    const [linksArsenal, setLinksArsenal] = useState(true);
    const [times, setTimes] = useState(false);
    const [outros, setOutros] = useState(false);

    const alteraMenuSelecionado = (menu: string) => {
        switch (menu) {
            case 'linksArsenal':
                setLinksArsenal(true);
                setTimes(false);
                setOutros(false);
                break;
            case 'times':
                setLinksArsenal(false);
                setTimes(true);
                setOutros(false);
                break;
            case 'outros':
                setLinksArsenal(false);
                setTimes(false);
                setOutros(true);
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <div className={style.container}>
                <div className={style.header}>
                    <Button className={linksArsenal ? style.menuButtonSelected : style.menuButton} onClick={() => alteraMenuSelecionado('linksArsenal')}>Links Arsenal</Button>
                    <Button className={times ? style.menuButtonSelected : style.menuButton} onClick={() => alteraMenuSelecionado('times')}>BFA Elite</Button>
                    <Button className={outros ? style.menuButtonSelected : style.menuButton} onClick={() => alteraMenuSelecionado('outros')}>Outros Links</Button>
                </div>
                {linksArsenal && (<LinksArsenal />)}
                {times && (<TimesBFA />)}
                {outros && (<OutrosLinks />)}
            </div>
            <div className={style.footer}>
                <div className={style.logoThumb}>
                    <img src={require("../../../assets/img/brand.png")} alt="" width={70} />
                </div>
                <div>
                    <small>&copy; Copyright 2022, Lucas Assis</small>
                </div>
            </div>
        </div>
    );
}