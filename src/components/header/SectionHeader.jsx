import React from 'react';

const SectionHeader = props => {
    const { text, styles } = props;
    return (
        <div className="section-header flex flex-col">
            <h1 className={`sm-text-60 ${styles}`}>{ text }</h1>
            {props.children}
        </div>
    )
}

export default SectionHeader;