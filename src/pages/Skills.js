import React from "react";
import SkillsBox from "../components/SkillsBox";

const Skills = () => {

    const languages = ["Python", "Javascript", "Rust", "Processing", "TypeScript"]
    const techStacks = ["Django", "Next.js", "React", "Node.js", "Express"]
    const tools = ["Figma", "Firebase", "Numpy", "Supabase", "Tensorflow"]
    const softSkills = ["Logical Reasoning", "Practical Thinking", "Leadership Skills", "Communication", "Adaptability"]

    return (
        <section className="fullScreen skillsPage">
            <div className="skillsSkillBoxesContainer">
                <SkillsBox startToken={"Languages(){"}    content={languages}         endToken={"}"}/>
                <SkillsBox startToken={"<TechStacks"}       content={techStacks}        endToken={"/>"}/>
                <SkillsBox startToken={"[Tools"}            content={tools}             endToken={"]"}/>
                <SkillsBox startToken={"`${Skills"}         content={softSkills}        endToken={"}`"}/>
            </div>
        </section>
    )
}

export default Skills