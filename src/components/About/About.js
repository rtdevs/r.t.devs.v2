import React, { Component } from 'react';
import style from './index.module.scss';
import {FiDownload} from 'react-icons/fi';
import VisibilitySensor from 'react-visibility-sensor';
import { TimelineLite, Back } from "gsap/all";
import Guitar from './Guitar/Guitar'; 
import CV from '../../assets/r_t_CV.pdf';
import {webLang} from '../../assets/data/webLang'; 

class About extends Component {

    state = {
        showGuitar: false
    }

    //__Refs
    heading = React.createRef();
    leftSide = React.createRef();
    leftSidePurple = React.createRef();
    leftContent = React.createRef();
    leftContentBottom = React.createRef();
    leftSidePurpleBottom = React.createRef();
    rightContent = React.createRef();

    //__GSAP
    tlAbout = new TimelineLite({paused: true});

    //__DidMount
    componentDidMount(){
        this.tlAbout
            .from(this.heading.current, 0.2, {opacity: 0, y:"-100%", ease: Back.easeOut.config(4)})
            .from([this.leftSide.current, this.leftSidePurple.current, this.leftContent.current], 0.3, {x: '-100%', opacity: 0})
            .from([this.leftSidePurpleBottom.current, this.leftContentBottom.current], 0.3, {x: '-100%', opacity: 0})
            .from(this.rightContent.current, 0.2, {opacity: 0})
    }

    //__Events on visiblilty change
    onVisible = (isVisible) => {
        isVisible && this.tlAbout.play();
        isVisible && this.setState({showGuitar: true});
    }

    render() {
         //__Dest
         const {lang} = this.props;


        return (
           <VisibilitySensor onChange={this.onVisible} partialVisibility='top' minTopValue='300'>
                <section className={style.about} id='about'>
                    <div ref={this.leftSide} className={style.leftSide}></div>
                    <div ref={this.leftSidePurple} className={style.purpleBackLeft}></div>
                    <div ref={this.leftContent} className={style.contentLeft}>
                        <div className={style.headingLeftContainer}>
                            <h3 className={style.headingLeft}>How did he do it</h3>
                            <div className={style.headingLeftBorder}></div>
                        </div>
                        <p className={style.textLeft}>
                            {webLang.about.how[lang]}
                        </p>
                    </div>

                    <div ref={this.leftContentBottom} className={style.contentLeftBottom}>
                        <div className={style.headingLeftBottomContainer}>
                            <h3 className={style.headingLeftBottom}>Before Web Development</h3>
                            <div className={style.headingLeftBottomBorder}></div>
                        </div>
                        <p className={style.textLeftBottom}>
                           {webLang.about.before[lang]}
                        </p>
                        <div className={style.downloadContainer}>
                            <div className={style.downloadHeadingContainer}>
                                <h3 className={style.downloadHeading}>Download CV</h3>
                                <div className={style.downloadHeadingBorder}></div>
                            </div>
                            <div className={style.downloadIcon}><a href={CV} target='_blank' rel="noopener noreferrer"><FiDownload /></a></div>
                        </div>
                    </div>
                    <div ref={this.leftSidePurpleBottom} className={style.purpleBackLeftBottom}></div>

                    <div className={style.rightBottomContent}>
                        <Guitar show={this.state.showGuitar}/>
                    </div>
                    <h2 ref={this.heading} className={style.heading}>Who is he</h2>
                    <div className={style.rightSide}>
                        <div className={style.roundedCornerWrapperTop}>
                            <div className={style.roundedCornerTop}></div>
                        </div>
                        <div className={style.roundedCornerWrapperBottom}>
                            <div className={style.roundedCornerBottom}></div>
                        </div>
                    </div>
                    <div className={style.purpleBackRight}></div>
                    <div ref={this.rightContent} className={style.contentRight}>
                        <div className={style.headingRightContainer}>
                            <h3 className={style.headingRight}>Why should we hire him</h3>
                            <div className={style.headingRightBorder}></div>
                        </div>
                        <p className={style.textRight}>
                           {webLang.about.why[lang]}
                        </p>
                    </div>
                </section>
           </VisibilitySensor>
        );
    }
}

export default About;

