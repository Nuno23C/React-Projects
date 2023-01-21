import React from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0)
        badgeText = "SOLD OUT"
    else if (props.local === "Online")
        badgeText = "ONLINE"

    return(
        <div className="card">
            {
                badgeText &&
                <div className="card-badge">{badgeText}</div>
            }
            <img
                src={props.photo}
                className="card-photo"
            />
            <div className="card-stats">
                <img src="./Images/star.png" className="card-star"/>
                <span>{props.stats.rate}</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="gray">{props.local}</span>
            </div>
            <p className="card-description">{props.description}</p>
            <p className="card-price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}
