import React from "react";
import "./index.css";

import iconOrder from "../../assets/iconOrder.svg"
import iconSignOut from "../../assets/iconSignOut.svg"
import iconSearch from "../../assets/iconSearch.svg"
import polygon from "../../assets/polygon.svg"

export default function Navbar() {

    return (
        <div>
            <nav>
                <img src={polygon} alt="polígono" />
                <h1>Food Explorer</h1>

                <img src={iconSearch} alt="ícone de busca" />
            
                <input placeholder="Busque por pratos ou ingredientes"></input>
                       
                <button type="submit">
                        <img src={iconOrder} alt="ícone de pedidos" />
                        Pedidos
                </button>

                <img src={iconSignOut} alt="ícone de sair/logout" />
            </nav>
        </div>
    )
}