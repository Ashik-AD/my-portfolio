import React from 'react';
import SectionHeader from '../header/SectionHeader';

import {ReactComponent as IconHtml } from '../../assets/ico_html.svg'
import {ReactComponent as IconCss } from '../../assets/ico_css.svg'
import {ReactComponent as IconJs } from '../../assets/ico_js.svg'
import {ReactComponent as IconReact } from '../../assets/ico_react.svg'
import {ReactComponent as IconNode } from '../../assets/ico_node.svg'
import {ReactComponent as IconTs } from '../../assets/ico_ts.svg'
import Arrow from '../arrows/Arrow';


const Skills = () => {
    const skillList = [
        {
            level: 'Expert',
            TechIcon: IconHtml
        },
        {
            level: 'Expert',
            TechIcon: IconCss
        },
        {
            level: 'Advance',
            TechIcon: IconJs
        },
        {
            level: 'Intermediate',
            TechIcon: IconReact
        },
        {
            level: 'Intermediate',
            TechIcon: IconNode
        },
        {
            level: 'Intermediate',
            TechIcon: IconTs
        },
    ];

    return(
        <section className="w-screen h-screen sec_skills flex flex-col bg-black">
            <div className="container">
                <SectionHeader
                    text="~/my/skills"
                    styles="text-30 text-green font-regular py-3 sm-py-10"
                />
                <div className="skill-card grid grid-col-2 sm-grid-col-3 row-gap w-90 sm-py-10 sm-w-half md-w-80 xl-w-half">
                    {skillList.map((skill, index) =>(
                    <div className="flex flex-col items-center" key={index}>
                        <skill.TechIcon width="70" height="70"/>
                        <span className="text-green sm-text-18 mt-1">{ skill.level}</span>
                    </div>
                    )) }
                </div>
                <Arrow id="contact" styles="fill-green cursor-pointer" />
            </div>
        </section>
    );
}
export default Skills;