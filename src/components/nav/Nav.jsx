import React, {useContext} from 'react';
import { SectionContext } from '../../App';
import NavItem from './NavItem';

//Icons
import {ReactComponent as PersonIcon} from '../../assets/ico_person.svg';
import {ReactComponent as CodeIcon} from '../../assets/ico_code.svg';
// import {ReactComponent as TaskIcon} from '../../assets/ico_task.svg';
import { ReactComponent as PhoneIcon } from '../../assets/ico_phone.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrow_up.svg';


const Nav = () => {
    const { currentSectionIndex, handleCurrentSection } = useContext(SectionContext);
    return (
        <div className="absolute h-screen flex flex-col justify-center items-center column-gap space-y right-0 z-above-all">
            <NavItem
                title="Home"
                Icon={PersonIcon}
                activeStyle="bg-purple nav-border border-purple text-main purple-shadow transition-shadow"
                active={currentSectionIndex === 1}
                id={1}
            />
            <NavItem
                title="Skills"
                Icon={CodeIcon}
                activeStyle="bg-green nav-border border-green text-main green-shadow transition-shadow"
                active={currentSectionIndex === 2}
                id={2}
            />
            {/* <NavItem title="Projects" Icon={TaskIcon}/> */}
            <NavItem
                title="Contact"
                Icon={PhoneIcon}
                activeStyle="bg-blue nav-border border-blue text-main aqua-shadow transition-shadow"
                active={currentSectionIndex === 3}
                id={3}
            />
            {
                currentSectionIndex > 1 ? (
                    <span onClick={eve => {
                        eve.stopPropagation();
                        handleCurrentSection(currentSectionIndex - 1);
                    }}>
                         <ArrowUp className={`${currentSectionIndex === 2 ? 'fill-green' : currentSectionIndex === 3 ? 'fill-blue' : 'fill-purple'} cursor-pointer` } height="40" />
                    </span>
                ) : null
            }
        </div>
    );
};
export default Nav;