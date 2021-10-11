import React, { Component } from 'react';
import style from './index.module.scss';
import {FaLinkedin, FaFacebookSquare, FaMobileAlt, FaRegEnvelope, FaSkype, FaMapMarkedAlt} from 'react-icons/fa';
import VisibilitySensor from 'react-visibility-sensor';
import { TimelineLite, Back } from "gsap/all";
import {webLang} from '../../assets/data/webLang'; 

class Contacts extends Component {

    //__Refs
    heading = React.createRef();
    icon1 = React.createRef();
    icon2 = React.createRef();
    icon3 = React.createRef();
    icon4 = React.createRef();
    icon5 = React.createRef();
    icon6 = React.createRef();
    rightSide = React.createRef();
    rightSidePurple = React.createRef();
    rightContent = React.createRef();

    //_GSAP
    tlContacts = new TimelineLite({paused: true});

    //__DidMount
    componentDidMount(){
        this.tlContacts
        .from(this.heading.current, 0.2, {opacity: 0, y:"-100%", ease: Back.easeOut.config(4)})
        .staggerFrom([this.icon1.current, this.icon2.current, this.icon3.current, this.icon4.current, this.icon5.current, this.icon6.current], 0.5, {opacity: 0}, 0.1)
        .from([this.rightSide.current, this.rightSidePurple.current, this.rightContent.current], 0.3, {x: '-100%', opacity: 0}, '-=0.2')
    }

     //__Function to be passed into react-visibility-sensor
     onVisible = (isVisible) => {
        isVisible && this.tlContacts.play();
    }

    render() {
        //__Dest
        const {lang} = this.props;

        return (
            <VisibilitySensor onChange={this.onVisible} partialVisibility='top' minTopValue='300'>
                <footer className={style.contacts} id='contacts'>
                    <h2 ref={this.heading} className={style.heading}>{webLang.contacts.heading[lang]}</h2>
                    <div className={style.leftSide}>
                    <div className={style.roundedCornerWrapper}>
                        <div className={style.roundedCorner}></div>
                    </div>
                    </div>
                    <div className={style.purpleBackLeft}></div>
                    <div className={style.leftContent}>
                        <div ref={this.icon1} className={style.contactsItem}>
                            <div className={style.itemLogo}><a href="tel:+47-465-08761"><FaMobileAlt/></a></div>
                            <p className={style.itemText}>+47 465 08761</p>
                        </div>
                        <div ref={this.icon2} className={style.contactsItem}>
                            <div className={style.itemLogo}><a href="mailto:rtdevs@protonmail.com"><FaRegEnvelope/></a></div>
                            <p className={style.itemText}>rtdevs@protonmail.com</p>
                        </div>
                        <div ref={this.icon3} className={style.contactsItem}>
                            <div className={style.itemLogo}><a href="https://www.linkedin.com/in/robertas-tamulionis-86b81884" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></div>
                            <p className={style.itemText}></p>
                        </div>
                        <div ref={this.icon4} className={style.contactsItem}>
                            <div className={style.itemLogo}><a href="skype:robke_t?call"><FaSkype/></a></div>
                            <p className={style.itemText}>robke_t</p>
                        </div>
                        <div ref={this.icon5} className={style.contactsItem}>
                            <div className={style.itemLogo}><a href="https://goo.gl/maps/EoRg21GnUavYL2cZ7" target="_blank" rel="noopener noreferrer"><FaMapMarkedAlt/></a></div>
                            <p className={style.itemText}>Son, Norway</p>
                        </div>
                        <div ref={this.icon6} className={style.contactsItem}>
                            <div className={style.itemLogo}><a href="https://www.facebook.com/The.Robertas.Tamulionis" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a></div>
                            <p className={style.itemText}></p>
                        </div>
                    </div>
                    <div ref={this.rightSide} className={style.rightSide}>
                        <div ref={this.rightContent} className={style.creditsContainer}>
                            <h4 className={style.credits}>Designed & developed by R/T/devs</h4>
                            <div className={style.creditsBorder}></div>
                        </div>
                    </div>
                    <div ref={this.rightSidePurple} className={style.purpleBackRight}></div>
                </footer>
            </VisibilitySensor>
        );
    }
}

export default Contacts;