import React from "react";
import "./index.css";

import cookie from "../../assets/cookies.svg"

export default function Section() {

    return (
        <div>
            <section>
                <img class="section__cookies" src={cookie} alt="cookie" />

                <div class="section__h1"> 
                    <h1>Sabores inigualáveis</h1>
                    <p>sinta o cuidado do preparado com ingredientes selecionados</p>
                </div>
            </section>
        </div>
    )
}