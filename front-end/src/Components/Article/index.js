import React from "react";
import "./index.css";

import unicoPrato from "../../assets/unicoPrato.svg"
import iconHeart from "../../assets/iconHeart.svg"
import iconLess from "../../assets/iconLess.svg"
import iconPlus from "../../assets/iconPlus.svg"

export default function Section() {

    return (
        <div>
            <legend className="tittle_article"> Refeições </legend>
            <article>
                <div className="article__card_top">
                    <img className="article__icon_heart" src={iconHeart} alt="Curtir prato" />
                    <img className="article__unicoPrato" src={unicoPrato} alt="Prato de Exemplo" />
                    <legend> Spaguetti Gambe </legend>
                    <p> Massa fresca com camarões no prato.</p>
                    <p className="article__price"> R$ 10,00</p>
                </div>

                <div className="article__card_bot">
                    <img src={iconLess} alt="Diminuir" />
                    <p> 01</p>
                    <img src={iconPlus} alt="Aumentar" />
                    <button type="submit"> Iniciar</button>
                </div>

            </article>
        </div>
    )
}