import React from "react";
import KavinWindow from "./assets/kavinwindow.jpg"
import GithubIcon from "./assets/github-icon.png"
import LinkedinIcon from "./assets/linkedin-icon.png"
import LanguageBox from "../components/LanguageBox";

const Footer = () => {

    const fluentLanguages = ["English", "Tamil"]
    const basicLanguages = ["German", "French"]

    return (
        <section className="fullScreen footerPage">
            <img src={KavinWindow} className="kavinWindowImg" />

            <div className="footerContent">
                <div className="footerDevInfo">
                    <p className="footerTitle">// developed by</p>
                    <p className="footerDevName">Kavin Bharathi</p>
                    <p className="footerText">fullstack + AI&ML developer / designer / tryhard</p>
                    <div className="footerSocials">
                        <img className="footerIcons" src={GithubIcon} />
                        <img className="footerIcons" src={LinkedinIcon} />
                    </div>
                </div>

                <div className="footerLanguagesContainer">
                    <p className="footerTitle">// languages</p>
                    <div className="footerLanguages">
                        <LanguageBox startToken={"fluent {"} content={fluentLanguages} endToken={"}"} color="white"/>
                        <LanguageBox startToken={"basic {"} content={basicLanguages} endToken={"}"} color="grey"/>
                    </div>
                </div>

                <div className="footerPassion">
                    <p className="footerTitle">// passion</p>
                    <p className="footerText">Everything tech, inspired with creative stuff and</p>
                    <p className="footerText">innovative ideas. Interested in photography, music and</p>
                    <p className="footerText">gaming.</p>
                </div>

            </div>
        </section>
    )
}

export default Footer