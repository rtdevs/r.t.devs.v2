import React, { Component } from 'react';
import style from './index.module.scss';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import Project from './Project/Project';
import {projects} from '../../assets/data/projects';
import {webLang} from '../../assets/data/webLang';            

import VisibilitySensor from 'react-visibility-sensor';
import { TimelineLite, Back } from "gsap/all";

class Projects extends Component {
    state = {
        projects: projects,
        type: 'websites',
        slideAmount: 640
    }

    //__Refs
    heading = React.createRef();
    typeWeb = React.createRef();
    typeApp = React.createRef();
    slider = React.createRef();
    sliderContainer = React.createRef();
    rightSide = React.createRef();
    rightSidePurple = React.createRef();

    
    //__GSAP
    tlSlider = new TimelineLite({paused: true});

    //__DidMount
    componentDidMount(){
        this.tlSlider
            .from(this.heading.current, 0.2, {opacity: 0, y:"-100%", ease: Back.easeOut.config(4)})
            .from(this.typeWeb.current, 0.2, {opacity: 0, x:"-100%",  ease: Back.easeOut.config(2)})
            .from(this.typeApp.current, 0.2, {opacity: 0, x:"100%",  ease: Back.easeOut.config(2)})
            .from([this.rightSide.current, this.rightSidePurple.current, this.sliderContainer.current], 0.3, {x: '100%', opacity: 0});
        if(window.innerWidth < 600){
            this.setState({slideAmount: 320})
        }
    }

    //__Toggle projects type
    changeType = (newType) => {
        this.setState({type: newType});
    }

    // TO DO think about this for cleaner code
    sliderLeft = () => {
        let scrollAmount = 0;
        const slider = this.slider;
        const slideAmount = this.state.slideAmount;
        const slideTimer = setInterval(function(){
            slider.current.scrollLeft -= 50;
            scrollAmount += 50;
            if(scrollAmount >= slideAmount){
                window.clearInterval(slideTimer);
            }
        },20);
    }
    sliderRight = () => {
        let scrollAmount = 0;
        const slider = this.slider;
        const slideAmount = this.state.slideAmount;
        const slideTimer = setInterval(function(){
            slider.current.scrollLeft += 50;
            scrollAmount += 50;
            if(scrollAmount >= slideAmount){
                window.clearInterval(slideTimer);
            }
        },20);
    }

     //__Function to be passed into react-visibility-sensor
    onVisible = (isVisible) => {
        isVisible && this.tlSlider.play();
    }


    render() {
        //__Dest
        const {type, projects} = this.state;
        const {lang} = this.props;

        //__Active classes for types
        const activeWebs = {transform:  'translate(0.2rem, 0.2rem) scaleY(1)'};
        const activeApps = {transform: 'translate(-0.2rem, -0.2rem) scale(1)'};

        const projectsData = projects && projects[type].map((project, i) => {
            return < Project
                        key={i}
                        name={project.projectName}
                        tools={project.projectTools}
                        desc={project.projectDescription}
                        img={project.projectImage}
                        git={project.projectGit}
                        link={project.projectLink}
                        lang={lang}
                    />
        });

        return (
           <VisibilitySensor onChange={this.onVisible} partialVisibility='top' minTopValue='300'>
                <section className={style.projects} id='projects'>
                   <h2 ref={this.heading} className={style.heading}>{webLang.projects.heading[lang]}</h2>
                    <div className={style.types}>
                        <div ref={this.typeWeb} className={style.webs} onClick={() => this.changeType('websites')}>
                            <h3 className={style.headingWebs}>{webLang.projects.websites[lang]}</h3>
                            <div className={style.headingWebsBorder} style={type === 'websites' ? activeWebs : {}}></div>
                        </div>
                        <div ref={this.typeApp} className={style.apps} onClick={() => this.changeType('applications')}>
                            <h3 className={style.headingApps}>{webLang.projects.applications[lang]}</h3>
                            <div className={style.headingAppsBorder} style={type === 'applications' ? activeApps : {}}></div>
                        </div>
                    </div>
                    <div className={style.leftSide}>
                        <div className={style.roundedCornerWrapperTop}>
                            <div className={style.roundedCornerTop}></div>
                        </div>
                        <div className={style.roundedCornerWrapperBottom}>
                            <div className={style.roundedCornerBottom}></div>
                        </div>
                    </div>
                    <div className={style.purpleBackLeft}></div>
                    <div className={style.rightSide} ref={this.rightSide}></div>
                    <div className={style.purpleBackRight} ref={this.rightSidePurple}></div>
                    <div className={style.projectsContainer} ref={this.sliderContainer}>
                        <div className={style.arrowLContainer} onClick={this.sliderLeft}>
                            <div className={style.arrowL}><IoMdArrowDropleft/></div>
                            <div className={style.arrowLBorder}></div>
                        </div>
                        <div className={style.sliderWrapper} ref={this.slider}>
                            <div className={style.projectsSlider}>
                                {projectsData}
                            </div>
                        </div>
                        <div className={style.arrowRContainer} onClick={this.sliderRight}>
                            <div className={style.arrowR}><IoMdArrowDropright/></div>
                            <div className={style.arrowRBorder}></div>
                        </div>
                    </div>
                </section>
           </VisibilitySensor>
        );
    }
}

export default Projects;