import React, {useContext} from 'react';
import { SectionContext } from '../../App';

const NavItem = ({ activeStyle, title, Icon, active, id }) => {
    const { handleCurrentSection } = useContext(SectionContext);
    return(
        <div
            className={`flex items-center justify-center sm-w-outer sm-h-outer rounded-full ${active ? activeStyle : 'nav-bg-unactive'} cursor-pointer `}
            title={title}
            onClick={event => {
                event.stopPropagation();
                handleCurrentSection(id);
            }}>
            <Icon width="25" height="25" />
        </div>
    );
}
export default NavItem