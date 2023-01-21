import React from "react";
import NavBar from "./Components/Nav-bar";
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"

export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div>
            <NavBar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
