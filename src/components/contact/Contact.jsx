import React from 'react';
import SectionHeader from '../header/SectionHeader';
import SocialLinks from '../social-links/SocialLinks';

const Contact = () => (
    <section className="contact h-screen w-screen bg-deep-blue">
        <div className="container px-3 sm-px-0">
            <div className=" w-full h-screen flex flex-col justify-center items-center space-y">
                <div className="sec_header">
                    <SectionHeader text="Just drope me a mail" styles="text-blue font-medium text-35 md-text-50 lg-text-60 xl-text-60">
                        <h3 className="text-15 sm-text-25 text-main text-center font-semibold pt-5">
                            dev.ashikdhimal@gmail.com
                        </h3>
                    </SectionHeader>
                </div>
                <div className="contact_opt flex flex-col jsutify-center items-center space-y-2">
                    <div className="text-blue">
                        <span className="text-35 sm-text-70 font-medium">OR,</span>
                        <span className="text-18 sm-text-30"> catch me up here :)</span>
                    </div>
                    <SocialLinks />
                </div>
            </div>
        </div>
    </section>
)
export default Contact;