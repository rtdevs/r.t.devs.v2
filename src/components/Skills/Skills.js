import React, { Component } from 'react';
import style from './index.module.scss';
import VisibilitySensor from 'react-visibility-sensor';
import { TimelineLite, Back } from "gsap/all";
import Book from './Book/Book';
import {webLang} from '../../assets/data/webLang'; 


class Skills extends Component {

    state = {
        showBook: false
    }

      //__Refs
      heading = React.createRef();
      leftSide = React.createRef();
      leftSidePurple = React.createRef();
      leftContent = React.createRef();
      rightContent = React.createRef();
      book = React.createRef();
  
      //__GSAP
      tlSkills = new TimelineLite({paused: true});
  
      componentDidMount(){
          this.tlSkills
              .from(this.heading.current, 0.2, {opacity: 0, y:"-100%", ease: Back.easeOut.config(4)})
              .from([this.leftSide.current, this.leftSidePurple.current], 0.3, {x: '-100%', opacity: 0})
              .from(this.leftContent.current, 0.2, {opacity: 0})
              .from(this.rightContent.current, 0.2, {opacity: 0})
      }

      onVisible = (isVisible) => {
        isVisible && this.tlSkills.play();
        isVisible && this.setState({showBook: true});
    }

    render() {
        //__Dest
        const {lang} = this.props;
        return (
            <VisibilitySensor onChange={this.onVisible} partialVisibility='top' minTopValue='300'>
                <section className={style.skills} id='skills'>
                   <div ref={this.leftSide} className={style.leftSide}></div>
                   <div ref={this.leftSidePurple} className={style.purpleBackLeft}></div>
                   <div ref={this.leftContent} className={style.contentLeft}>
                        <div className={style.headingLeftContainer}>
                            <h3 className={style.headingLeft}>{webLang.skills.comfortable[lang]}</h3>
                            <div className={style.headingLeftBorder}></div>
                        </div>
                        <ul className={style.listLeft}>
                            <li className={style.listItemLeft}>Html / css</li>
                            <li className={style.listItemLeft}>Sass / less</li>
                            <li className={style.listItemLeft}>BEM Methodology</li>
                            <li className={style.listItemLeft}>JavaScript / jQuery</li>
                            <li className={style.listItemLeft}>ReactJS / Redux </li>
                            <li className={style.listItemLeft}>React Hooks / Context API </li>
                            <li className={style.listItemLeft}>Responsive Design / Layout</li>
                            <li className={style.listItemLeft}>Mobile first approach</li>
                            <li className={style.listItemLeft}>Adobe XD</li>
                        </ul>
                   </div>
                   <h2 ref={this.heading} className={style.heading}>{webLang.skills.heading[lang]}</h2>
                   <div className={style.rightSide}>
                        <div className={style.roundedCornerWrapperTop}>
                            <div className={style.roundedCornerTop}></div>
                        </div>
                        <div className={style.roundedCornerWrapperBottom}>
                            <div className={style.roundedCornerBottom}></div>
                        </div>
                        <Book show={this.state.showBook}/>
                   </div>
                   <div className={style.purpleBackRight}></div>
                   <div ref={this.rightContent} className={style.contentRight}>
                        <div className={style.headingRightContainer}>
                            <h3 className={style.headingRight}>{webLang.skills.limited[lang]}</h3>
                            <div className={style.headingRightBorder}></div>
                        </div>
                        <ul className={style.listRight}>
                            <li className={style.listItemRight}>NodeJS</li>
                            <li className={style.listItemRight}>Mongo DB</li>
                            <li className={style.listItemRight}>Bootstrap / Materialize</li>
                            <li className={style.listItemRight}>Adobe Illustrator</li>
                            <li className={style.listItemRight}>Adobe Photoshop</li>
                            <li className={style.listItemLeft}>GitHub / BitBucket</li>
                        </ul>
                    </div>
                </section>
            </VisibilitySensor>
        );
    }
}

export default Skills;

