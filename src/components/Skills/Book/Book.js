import React, { Component } from 'react';
import style from './index.module.scss';
import {TimelineMax , Linear} from 'gsap/all'; 


class Book extends Component {
    //__Refs
    bookShadow = React.createRef();
    book = React.createRef();
    bookSvg = React.createRef();

    //__GSAP
    tlBook = new TimelineMax ({paused: true });
    tlBookShadow = new TimelineMax({repeat: -1, yoyo: true})

    componentDidMount(){
        this.tlBook.delay(1);
        this.tlBook
            .from(this.bookSvg.current, 1, {autoAlpha: 0})
        this.tlBookShadow
            .to(this.book.current, 3, {y: "-10%", ease: Linear.easeNone})
            .to(this.bookShadow.current, 3, { attr: {stdDeviation: 30, ease: Linear.easeNone}}, '-=3')
    }   


    render() {

        if(this.props.show){
            this.tlBook.play();
        }

        return (
            <div className={style.wrapper}>
            <svg ref={this.bookSvg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1100 500">
            <defs>
                <filter id="bookFilter">  
                    <feGaussianBlur ref={this.bookShadow} stdDeviation='10'/>
                </filter>
            </defs>
            <g id="book" transform="translate(-355.219 -280.797)">
                <path filter='url(#bookFilter)' id="shadow" d="M4518.622,503.4v6.562s102.23,33.922,157.881,64.581,64.722,58.056,64.722,58.056l24.49,15.117s17.611-13.77,73.055,19.156,148.722,112.548,148.722,112.548l305.665-179.348-491.689-277.1Z" transform="translate(-4039 172)" fill="#3B3B3B" stroke="#3B3B3B" strokeWidth="1" opacity='0.8'/>
                <g ref={this.book}>
                <path id="Path_64" data-name="Path 64" d="M4518.622,503.4v6.562s102.23,33.922,157.881,64.581,64.722,58.056,64.722,58.056l24.49,15.117s17.611-13.77,73.055,19.156,148.722,112.548,148.722,112.548l305.665-179.348-491.689-277.1Z" transform="translate(-4010)" fill="#343434" stroke="#707070" strokeWidth="1" opacity="0.996"/>
                <path id="Path_65" data-name="Path 65" d="M4538.836,475.179l-8.48,24.629s123.026,43.987,165.9,73.483,52.824,49.044,52.824,49.044l20.793,13.036s17.1-12.229,62.908,14.744S4990.058,766.71,4990.058,766.71l297.465-173.458-9.337-36.01L4981.366,730.32s-143.851-117.689-176.414-135.975-44.329,0-44.329,0-16.909-38.023-50.857-55.689S4538.836,475.179,4538.836,475.179Z" transform="translate(-4010)" fill="#807b7b"/>
                <path id="Path_66" data-name="Path 66" d="M4836.15,302.262,4539.279,475.218s125.943,41.6,167.826,62.923,53.008,55.532,53.008,55.532l298.766-172.2s2.909-25.5-52.364-55.023S4836.15,302.262,4836.15,302.262Z" transform="translate(-4010)" fill="#f0f0f0"/>
                <path id="Path_67" data-name="Path 67" d="M4981.255,729.414l296.491-172.2s-31.038-22.474-73.143-57.469c-24.826-20.634-58.2-54.216-78.7-66.914-55.1-34.134-68.551-12.154-68.551-12.154l-297.08,172.756s19.059-10.448,51.617,5.9S4981.255,729.414,4981.255,729.414Z" transform="translate(-4010)" fill="#d9d8d8"/>
                <path id="Path_70" data-name="Path 70" d="M4979.743,691.062l314.712-159.449s-66.659,1-108.763-34c-24.826-20.634-39.287-52.087-59.784-64.785-55.1-34.134-68.551-12.154-68.551-12.154L4764.134,578.016s43.584,1.946,76.143,18.3c19.144,9.615,47.691,53.726,81.887,80.98S4979.743,691.062,4979.743,691.062Z" transform="translate(-4006 11)" fill="#4e00ff"/>
                <path id="Path_69" data-name="Path 69" d="M4977.381,694.656l311.7-163.553s-61.286,1.508-103.391-33.487c-24.826-20.634-39.287-52.087-59.784-64.785-55.1-34.134-68.551-12.154-68.551-12.154l-300.1,163.884s50.458-4.6,83.016,11.751c19.144,9.615,47.691,53.726,81.887,80.98S4977.381,694.656,4977.381,694.656Z" transform="translate(-4005 7)" fill="#f4f4f4"/>
                <path id="Path_68" data-name="Path 68" d="M4977.381,694.656l302.533-170.894s-52.118,8.85-94.223-26.145c-24.826-20.634-39.287-52.087-59.784-64.785-55.1-34.134-68.551-12.154-68.551-12.154l-297.08,172.756s47.441-13.473,80,2.879c19.144,9.615,47.691,53.726,81.887,80.98S4977.381,694.656,4977.381,694.656Z" transform="translate(-4010 -2)" fill="#EDEDED"/>
                <path id="Path_72" data-name="Path 72" d="M4836.762,288.8,4544.835,477.985s24.982,10.446,76,31.876c25.41,10.674,91.136,19.521,105.167,26.665,41.882,21.325,31,61.352,31,61.352l301.876-176.4s.938-21.173-54.335-50.694c-45.434-24.265-130.944-56.458-159.649-69.942C4838.923,298.033,4836.762,288.8,4836.762,288.8Z" transform="translate(-4005 -8)" fill="#4e00ff"/>
                <path id="Path_71" data-name="Path 71" d="M4852.093,292.158l-303.8,180.309a603,603,0,0,0,62.641,29.424c34.3,13.686,88.537,12.434,109.436,23.075,41.882,21.325,35.509,72.094,35.509,72.094l303-175.587s2.909-25.5-52.364-55.023S4852.093,292.158,4852.093,292.158Z" transform="translate(-4002 -8)" fill="#EDEDED"/>
                </g>
            </g>
            </svg>
        </div>
        )
    }
}

export default Book;