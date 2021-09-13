import React, {useContext} from 'react';
import { SectionContext } from '../../App';
import NavItem from './NavItem';

//Icons
import {ReactComponent as PersonIcon} from '../../assets/ico_person.svg';
import {ReactComponent as CodeIcon} from '../../assets/ico_code.svg';
// import {ReactComponent as TaskIcon} from '../../assets/ico_task.svg';
import { ReactComponent as PhoneIcon } from '../../assets/ico_phone.svg';


const Nav = () => {
    const {currentSection} = useContext(SectionContext);
    return (
        <div className="absolute h-screen flex flex-col justify-center items-center column-gap space-y right-0">
            <NavItem
                title="Home"
                Icon={PersonIcon}
                activeStyle="bg-purple nav-border border-purple text-main purple-shadow transition-shadow"
                active={currentSection === 'main'}
                id="main"
            />
            <NavItem
                title="Skills"
                Icon={CodeIcon}
                activeStyle="bg-green nav-border border-green text-main green-shadow transition-shadow"
                active={currentSection === 'skills'}
                id="skills"
            />
            {/* <NavItem title="Projects" Icon={TaskIcon}/> */}
            <NavItem
                title="Contact"
                Icon={PhoneIcon}
                activeStyle="bg-blue nav-border border-blue text-main aqua-shadow transition-shadow"
                active={currentSection === 'contact'}
                id="contact"
            />
        </div>
    );
};
export default Nav;