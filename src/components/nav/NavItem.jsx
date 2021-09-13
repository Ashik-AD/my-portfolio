import React, {useContext} from 'react';
import { SectionContext } from '../../App';

const NavItem = ({ activeStyle, title, Icon, active, id }) => {
    const { handleCurrentSection } = useContext(SectionContext);
    return(
        <div
            className={`flex items-center justify-center w-outer h-outer sm-w-outer sm-h-outer rounded-full ${active ? activeStyle : 'nav-bg-unactive'} cursor-pointer `}
            title={title}
            onClick={event => {
                event.stopPropagation();
                handleCurrentSection(id);
            }}>
            <Icon className="nav-size-md sm-nav-outers" />
        </div>
    );
}
export default NavItem