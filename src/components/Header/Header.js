import React, { Component } from 'react';
import style from './index.module.scss';
import { Back, TimelineMax } from "gsap/all";
import {webLang} from '../../assets/data/webLang'; 



class Header extends Component {
    //__Refs
    rightSide = React.createRef();
    rightSidePurple = React.createRef();
    name = React.createRef();
    surName = React.createRef();
    svg = React.createRef();
    descTop = React.createRef();
    descBottom = React.createRef();

    //__GSAP
    tlHeader = new TimelineMax();

    //__DidMount
    componentDidMount(){
        this.tlHeader
            .from([this.rightSide.current, this.rightSidePurple.current], 0.4, {x: '100%'})
            .from(this.svg.current, 0.2, {opacity: 0})
            .fromTo(this.svg.current, 2, {strokeDashoffset: 800, scale: 1.2}, {strokeDashoffset: 0, scale: 1})
            .from(this.name.current, 0.2, {opacity: 0, y:"-100%", ease: Back.easeOut.config(4)}, "-=1.8")
            .from(this.surName.current, 0.2, {opacity: 0, y:"100%", ease: Back.easeOut.config(4)}, "-=1.6")
            .from(this.descTop.current, 0.2, {y:'-100%', opacity:0, ease: Back.easeOut.config(4)}, '-=1.2')
            .from(this.descBottom.current, 0.2, {y:'100%', opacity:0, ease: Back.easeOut.config(4)},'-=1')
    }


    render() {
        //__Dest
        const {lang} = this.props;

        return (
            <header onMouseMove={this.mouseMoveHandler} className={style.header} id='home'>
                <div className={style.leftSide}>
                    <div className={style.roundedCornerWrapper}>
                        <div className={style.roundedCorner}></div>
                    </div>
                </div>
                <div className={style.purpleBackLeftTop}></div>
                <div className={style.purpleBackLeft}></div>
                <div className={style.contentLeft}>
                    <div ref={this.descTop} className={style.top}>
                        <h3 className={style.dev}>{webLang.header.quote_1[lang]}</h3>
                        <div className={style.devBorder}></div>
                    </div>
                    <div ref={this.descBottom} className={style.bottom}>
                        <h3 className={style.des}>{webLang.header.quote_2[lang]}</h3>
                        <div className={style.desBorder}></div>
                    </div>
                </div>
                <div ref={this.rightSide} className={style.rightSide}></div>
                <div ref={this.rightSidePurple} className={style.purpleBackRight}></div>
                <div className={style.contentRight}>
                    <h1 ref={this.name} className={style.name}>Robertas</h1>
                    <div className={style.portrait}>
                        <svg ref={this.svg} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                                <path id="Path_27" dataname="Path 27" d="M269.583,152.225a112.979,112.979,0,0,1-3.993,13.855c-2.237,5.774-11.993,12.1-11.993,12.1s-20.351,10.2-31.63,17.644-13.487,12.145-13.487,12.145a38.339,38.339,0,0,1-2.912,8.309,87.886,87.886,0,0,1-5.763,9.727,36.154,36.154,0,0,0,2.641-7.094,55.57,55.57,0,0,0,1.268-8.527s-5.447,6.525-17.4,16.765-30.4,24.2-30.4,24.2l-26.907,4.474s.694,12.08-2.794,18.985-12.963,12.916-14.871,16.291,5.657,26.653,2.845,51.185-13.865,46.524-13.865,46.524,24.586-5.369,57.764-23.125c2.82-1.509,5.661-3.081,8.738-4.83.65-.37,4.091-6.868,5.693-13.046,1.936-7.465,2.032-10.239,2.032-10.239s1.6,2.645,1.369,9.251a44.551,44.551,0,0,1-1.369,9.577s53.835-35.589,58.484-38.611c10.943-7.114,27.266-8.77,27.266-8.77a135.413,135.413,0,0,0,3.27-41.426c-1.814-22.56-7.315-27.168-6.583-45.856.374-9.555,10.682-30.566,10.756-37.776C267.957,163.375,269.583,152.225,269.583,152.225Z" fill="none" stroke="#000" strokeWidth="1"/>
                                <path className={style.pathFill}  id="Path_24" dataname="Path 24" d="M294.086,168l-5.141,3.612s-49.7-4.6-83.748,0-53.647,17.411-53.647,17.411a39.066,39.066,0,0,0-1.113-6.3c-.982-4.018-2.815-9.775-2.815-9.775s8.265-2.433,48.251-3.757S294.086,168,294.086,168Z" transform="translate(-1 0.692)" fill="#fff" stroke="#000" strokeWidth="1"/>
                                <path id="Path_25" dataname="Path 25" d="M150.959,205.656a117.475,117.475,0,0,0-.543-18.489,50.221,50.221,0,0,0-3.781-14.106,45.708,45.708,0,0,0-12.1-1.7,85.958,85.958,0,0,0-14.709,1.7s-1.146,3.627.889,12.373,7.417,21.044,7.417,21.044a28.415,28.415,0,0,0,11.1,2.537C145.149,209.014,150.959,205.656,150.959,205.656Z" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1"/>
                                <path id="Path_26" dataname="Path 26" d="M109.328,198.25a78.346,78.346,0,0,1-5.854-16.2,113.884,113.884,0,0,1-2.36-19.145l15.548,9.539a17.757,17.757,0,0,1,1.142,5.9,34.88,34.88,0,0,1-.768,6.511,34.615,34.615,0,0,1-2.672,6.3A49.483,49.483,0,0,1,109.328,198.25Z" fill="none" stroke="#000" strokeWidth="1"/>
                                <path className={style.pathFill} id="Path_28" dataname="Path 28" d="M119.675,231.941s-4.749,3.6-6.943,8.3c-2.5,5.347-2.5,12.212-1.652,13.609,1.522,2.495,11.569.286,21.731,3.829,3.274,5.442,13.4,8.495,23,11.278,21.29,6.171,44.814,0,44.814,0s-17.649.906-28.852-2.351a37.837,37.837,0,0,1-17.111-10.152,53.692,53.692,0,0,1-6.875-9.739,19.807,19.807,0,0,1-1.6-10.4,36.923,36.923,0,0,0-11.949-4.376A57.3,57.3,0,0,0,119.675,231.941Z" fill="#fff" stroke="#000" strokeWidth="1"/>
                                <path id="Path_29" dataname="Path 29" d="M115.72,188.763a62.672,62.672,0,0,1-5.438,9.3c-1.924,2.755-4.558,6.746-6.824,9.541-5.934,7.316-6.424,9.95-6.165,11.708.531,3.609,8.36,9.118,20.572,10.8,7.5,1.03,14.328-.378,21.006-1.234s1.224-6.816,1.224-6.816" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_30" dataname="Path 30" d="M116.176,225.573s7.662-2.835,12.669-2.835,7.357,2.835,7.357,2.835" transform="translate(1)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_31" dataname="Path 31" d="M101.046,163.088a28.78,28.78,0,0,0,6.415-.547A17.213,17.213,0,0,0,112.7,159.9a2.36,2.36,0,0,1,.034-.453c.009-.316-1.09-7.282-.584-12.152.823-4.6,4.562-18.331,9.416-26.824,2.185-3.822,2.774-14.962,6.777-27.545A147.547,147.547,0,0,1,138.32,69.5s9.157-22.032,33.171-36.081S234.377,13.3,234.377,13.3s27.149-3.056,49.51,0A135.72,135.72,0,0,1,323.82,25.522a26.431,26.431,0,0,1,5.888,4.856c1.3,1.425,6.955,11.74,12.055,17.988s14.866,13.619,14.866,13.619,8.532,10.515,11.9,23.158,3.481,28.384,3.481,28.384" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_32" dataname="Path 32" d="M227.053,363.268s.555-4.136-4.01-10.884-14.681-16.352-14.681-16.352" transform="matrix(0.978, 0.208, -0.208, 0.978, 83.407, -43.838)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_33" dataname="Path 33" d="M389.308,312.2s-2.565-10.561-6.269-20.631a212.049,212.049,0,0,0-8.548-19.646s-55.444,20.288-99.585,51.133-83.445,71.963-83.445,71.963,4.675,2.219,12.135,13.008,16.918,33.888,16.918,33.888" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_34" dataname="Path 34" d="M208.436,459.58s-7.867-25.6-15.3-40.922S178.693,398.3,178.693,398.3s9.464-10.121,20.818-20.393,30.329-25.131,30.329-25.131" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_35" dataname="Path 35" d="M288.209,367.787s-42.295,39.92-70.309,77.832-48.826,88.887-48.826,88.887" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_36" dataname="Path 36" d="M144.9,175.085a45.554,45.554,0,0,1,2.3,6.676,74.34,74.34,0,0,1,1.473,8.048" transform="matrix(0.999, 0.035, -0.035, 0.999, 6.457, -5.012)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_37" dataname="Path 37" d="M133.827,173.579a29.276,29.276,0,0,1,4.584,0,20.815,20.815,0,0,1,5.1,1.321,41.412,41.412,0,0,1,1.632,4.53c.6,2.152,1.083,4.751,1.083,4.751" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_38" dataname="Path 38" d="M133.123,171.487s3.047.933,3.754,1.153S140.222,174,140.222,174a22.1,22.1,0,0,1,1.634,3.7c.426,1.527.769,3.372.769,3.372" transform="translate(21.594 -29.069) rotate(14)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_39" dataname="Path 39" d="M117.176,254.411a18.426,18.426,0,0,1,.682-6.073,13.5,13.5,0,0,1,1.571-3.825" transform="translate(-2 1)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_41" dataname="Path 41" d="M117.217,265.749a35.257,35.257,0,0,1,1.65-13.029c2.236-6.457,3.8-8.207,3.8-8.207" transform="translate(-121.543 310.486) rotate(-74)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_42" dataname="Path 42" d="M117.2,259.811a25.049,25.049,0,0,1,1.206-9.386c1.634-4.651,2.777-5.912,2.777-5.912" transform="matrix(0.982, -0.191, 0.191, 0.982, -29.983, 15.224)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_40" dataname="Path 40" d="M117.161,249.979a11.768,11.768,0,0,1,.324-3.354,8.1,8.1,0,0,1,.746-2.112" transform="translate(0 5.432)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_43" dataname="Path 43" d="M127.189,378.589a157.82,157.82,0,0,0,8.387-33.377c2.324-17.964.908-38.48.908-38.48" transform="translate(-18 -4)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_44" dataname="Path 44" d="M246.157,306.965s10.58-17.36,9.8-39.109c-.721-18.776-7.488-31.139-5.132-45.186,1.924-11.474,16.716-36.38,16.716-36.38" transform="translate(-5 3)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_45" dataname="Path 45" d="M253.146,249.866a22.115,22.115,0,0,1-6.079-16.608c.313-5.327,3.8-16.031,5.026-23.525,1.125-6.871-8.054-23.211-8.054-23.211" transform="matrix(0.921, 0.391, -0.391, 0.921, 88.944, -5.025)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_46" dataname="Path 46" d="M108.262,362.676c5.106-6.786,9.839-5.439,20.589-13.141,4.7-3.366,21.035-22.262,21.035-22.262" transform="matrix(0.809, -0.588, 0.588, 0.809, -192.487, 155.527)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_47" dataname="Path 47" d="M117.283,146.706a26.544,26.544,0,0,0-2,10.149,59.962,59.962,0,0,0,2,13.116" transform="matrix(0.656, 0.755, -0.755, 0.656, 243.922, -3.629)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_48" dataname="Path 48" d="M115.363,146.706a5.029,5.029,0,0,0-.857,2.439,4.856,4.856,0,0,0,.857,2.408" transform="matrix(-0.848, -0.53, 0.53, -0.848, 162.204, 414.558)" fill="none" stroke="#000" strokeWidth="1"/>
                                <path id="Path_17" dataname="Path 17" d="M168.873,536.46" transform="translate(-102)" fill="none" stroke="#000" strokeWidth="1"/>
                        </svg>
                    </div>
                    <h1 ref={this.surName} className={style.surname}>Tamulionis</h1>
                </div>
            </header>
        );
    }
}

export default Header;