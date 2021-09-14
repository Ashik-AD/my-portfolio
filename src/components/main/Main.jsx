import React, {useContext} from 'react';
import { SectionContext } from '../../App';

import { ReactComponent as Blob } from '../../assets/blob.svg';
import Arrow from '../arrows/Arrow';

const Main = ({ slideDirection, isVisible, prevSlideIndex, index }) => {
    const { handleCurrentSection } = useContext(SectionContext);
    return(
        <section className={`${prevSlideIndex !== 0 ? slideDirection : ''} ${isVisible ? 'zindex-above-all' : 'neg-zindex-2'} fixed  w-full h-screen bg-main px-3 sm-px-5 top-0`}
        style={prevSlideIndex === index ? {zIndex: '-1'} : null}
        >
            <div className="container">
                <article className="logo w-full flex items-center content-center sm-content-left font-semibold cursor-pointer py-2 sm-py-5">
                    <span className="brackets text-purple text-20">{'{'}</span>
                    <span className="text-main text-18">Ashik Dhimal</span>
                    <span className="brackets text-purple text-20">{'}'}</span>
                </article>
                <div className="blob-wrapper absolute h-screen w-full top-0 flex items-center content-center">
                    <Blob className="sm-blob-h sm-blob-w opacity-8"/>
                </div>
                <div className="absolute h-screen top-0 flex flex-col justify-center text-main space-y-2 sm-space-y sm-pt-10 line-h-1 zindex-above-all">
                    <span className="text-35 sm-text-80 font-bold">HI i'm a</span>
                    <div className="flex flex-col text-30 sm-text-70 ml-30 sm-ml-70 line-h-1">
                        <span>front-end</span>
                        <span>developer</span>
                    </div>
                    <span className="text-30 sm-text-40 font-semibold">From Nepal.</span>
                    <span>
                        <button className="nav-border border-purple bg-purple text-main text-15 sm-text-20 py-1 px-2 sm-px-4 font-semibold rounded-md cursor-pointer hover-purple zindex-above-all"
                        onClick={() => handleCurrentSection(3)}
                        >Contact Me</button>
                    </span>
                </div>
                <Arrow id={2} styles="fill-purple cursor-pointer" />
            </div>
        </section>
    );
}
export default Main;