import React, {useContext} from 'react';
import { SectionContext } from '../../App';

import { ReactComponent as IconArrowUp } from '../../assets/arrow_down.svg'

const Arrow = ({ id, styles }) => {
    const { handleCurrentSection } = useContext(SectionContext);
    return(
        <span
            className="fixed bottom-2 arrow-center"
            onClick={eve => {
                eve.stopPropagation();
                handleCurrentSection(id);
            }}
        >
            <IconArrowUp className={`${styles} arrow-size`}/>
        </span>
    )
}
export default Arrow;