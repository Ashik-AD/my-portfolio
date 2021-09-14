import React from 'react';

import { ReactComponent as IconChat } from '../../assets/ico_chat.svg';
import { ReactComponent as IconSlack } from '../../assets/ico_slack.svg';
import { ReactComponent as IconTwitter } from '../../assets/ico_twitter.svg';
import { ReactComponent as IconInstagram } from '../../assets/ico_instagram.svg';

const SocialLinks = ({ rootStyle, iconStyle }) => {
    const links = [
        {
            lnk: 'https://bit.ly/3hwMmD7',
            title: 'Messenger',
            icon: IconChat,
        },
        {
            lnk: '',
            title: 'Slack',
            icon: IconSlack,
        },
        {
            lnk: '',
            title: 'Twitter',
            icon: IconTwitter,
        },
        {
            lnk: '',
            title: 'Instagram',
            icon: IconInstagram,
        },
    ]
    return (
        <div className={`${rootStyle}`}>
            {
                links.map((link, index) => (
                    <a href={link.lnk} target="__blank" className={`${iconStyle} mx-1 sm-mx-2`} title={link.title} key={index}>
                        <link.icon className="social-icon-size"/>
                    </a>
                ))
            }
        </div>
    )
}
export default SocialLinks;