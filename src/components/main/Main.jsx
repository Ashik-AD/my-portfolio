import React from 'react';

import { ReactComponent as Blob } from '../../assets/blob.svg';

const Main = () => {
    
    return (
        <section className="w-full h-screen bg-main py-2 sm-py-5 px-3 sm-px-5">
            <article className="logo w-full flex items-center content-center sm-content-left font-semibold cursor-pointer">
                <span className="brackets text-purple text-20">{'{'}</span>
                <span className="text-main text-18">Ashik Dhimal</span>
                <span className="brackets text-purple text-20">{'}'}</span>
            </article>
            <div className="blob-wrapper absolute center-element">
                <Blob className="sm-blob-h sm-blob-w"/>
            </div>
            <div className="absolute h-screen top-0 flex flex-col justify-center text-main space-y-2 sm-space-y sm-pt-10 line-h-1">
                <span className="text-35 sm-text-80 font-bold">HI i'm a</span>
                <div className="flex flex-col text-30 sm-text-70 ml-30 sm-ml-70 line-h-1">
                    <span>front-end</span>
                    <span>developer</span>
                </div>
                <span className="text-30 sm-text-40 font-semibold">From Nepal.</span>

            <span>
                <button className="nav-border border-purple bg-purple text-main text-15 sm-text-20 py-1 px-2 sm-px-4 font-semibold rounded-md cursor-pointer hover-purple">Contact Me</button>
            </span>
            </div>
        </section>
    )
}

export default Main;