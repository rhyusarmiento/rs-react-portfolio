import React from 'react'
import aboutPhoto from './../../../static/assets/images/prom-stairs.jpg'

export default function() {
    return (
        <div className="content-page-wrapper">
        <div
            className="left-column"
            style={{
                background: `url(${aboutPhoto}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        />
        <div className="right-column">
            I even make code feel some type of way
        </div>
        </div>
    );
}