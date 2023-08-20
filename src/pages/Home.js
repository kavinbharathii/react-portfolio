
import React from "react";
import KavinBW from "./assets/kavindpbw.jpg"
import KavinBWnoBG from "./assets/kavindpbw-removebg.png"

const Home = () => {
    return (
        <section className="fullScreen homepage">
            <img className="homeKavinImg" src={KavinBW} />
            <img className="homeKavinImgNoBg" src={KavinBWnoBG} />
            <div className="homeText">K A V I N  B H A R A T H I</div>
        </section>
    )
}

export default Home