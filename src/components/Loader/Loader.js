import React, {Component} from 'react';
import style from './index.module.scss';
import { Elastic, TimelineMax } from "gsap/all";

class Loader extends Component {

    //__Refs
    loaderSvg = React.createRef();
    loaderBorder = React.createRef();

    //__GSAP
    tlLoader = new TimelineMax();
    tlPullsate = new TimelineMax({repeat: -1, yoyo: true, delay: 1});

    componentDidMount(){
        this.tlLoader
            .from(this.loaderSvg.current, 1.4, {opacity: 0, y: '-100%', ease: Elastic.easeOut.config(0.3, 0.1)})
            .from(this.loaderBorder.current, 1, {opacity: 0}, "-=0.7");
        this.tlPullsate
            .from(this.loaderBorder.current, 1, {scale: 0.9})

    }

    render () {
        return (
            <div className={style.loader}>
                <div ref={this.loaderBorder} className={style.wrapperBorder}></div>
                <div className={style.loaderWrapper}>
                    <svg ref={this.loaderSvg} xmlns="http://www.w3.org/2000/svg" width="70" height="102.012" viewBox="0 0 70 102.012">
                        <g id="Group_87" data-name="Group 87" transform="translate(-1635 -176)">
                            <g id="Rectangle_165" data-name="Rectangle 165" transform="translate(1635 183)" fill="none" stroke="#3b3b3b" strokeWidth="0.5">
                            <path d="M0,0H59.174a0,0,0,0,1,0,0V91.186a0,0,0,0,1,0,0H15a15,15,0,0,1-15-15V0A0,0,0,0,1,0,0Z" stroke="none"/>
                            <path d="M.5.25H58.674a.25.25,0,0,1,.25.25V90.686a.25.25,0,0,1-.25.25H15A14.75,14.75,0,0,1,.25,76.186V.5A.25.25,0,0,1,.5.25Z" fill="none"/>
                            </g>
                            <g id="Group_54" data-name="Group 54" transform="translate(1632 176)">
                            <g id="Group_72" data-name="Group 72">
                                <text id="R" transform="translate(11.257 67)" fill="#red" fontSize="70" fontFamily="PoiretOne-Regular, Poiret One"><tspan x="0" y="0">R</tspan></text>
                                <path id="Path_231" data-name="Path 231" d="M0,.6H6v2.84H0Z" transform="translate(32 32)" fill="#ededed"/>
                                <text id="T" transform="translate(27.018 87.012)" fill="#3b3b3b" fontSize="72" fontFamily="PoiretOne-Regular, Poiret One"><tspan x="0" y="0">T</tspan></text>
                            </g>
                            <g id="Group_86" data-name="Group 86" transform="translate(-40 13)">
                                <rect id="Rectangle_189" data-name="Rectangle 189" width="14" height="77" transform="translate(99)" fill="#EDEDED"/>
                                <text id="d_e_v_s" data-name="devs" transform="translate(106 18)" fill="#3B3B3B" fontSize="23" fontFamily="PoiretOne-Regular, Poiret One"><tspan x="-6.543" y="0">d</tspan><tspan x="-5.693" y="18">e</tspan><tspan x="-5.669" y="36">v</tspan><tspan x="-3.956" y="54">s</tspan></text>
                            </g>
                            </g>
                        </g>
                        </svg>
                </div>
            </div>
        )
    }
}

export default Loader
