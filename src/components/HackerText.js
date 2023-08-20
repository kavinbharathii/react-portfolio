import React from "react";
import { useState } from "react";

const HackerText = ({ textString }) => {

    const [text, setText] = useState(textString)
    const alphas = "abcdefghijklmnopqrstuvwxyz@#$%&*"

    const hackerize = () => {
        let iterations = 0

        const interval = setInterval(() => {
            let newText = text.split("").map((letter, index) => {
                    if (index < iterations) {
                        return textString[index]
                    }
                    return alphas[Math.floor(Math.random() * alphas.length)]
                })
                .join("")

            setText(newText)

            if (iterations >= text.length) {
                clearInterval(interval)
            }
            iterations += 1 / 2

        }, 50)

        setText(textString)
    }

    return (
        <h1 className="mazeText" onMouseEnter={hackerize}>{text}</h1>
    )
}

export default HackerText