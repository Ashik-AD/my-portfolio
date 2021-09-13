import React from 'react';

const SectionHeader = props => {
    const { text, styles } = props;
    return (
        <div className="section-header w-full">
            <h1 className={styles}>{ text }</h1>
            {props.children}
        </div>
    )
}
export default SectionHeader;