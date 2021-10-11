import React from 'react';
import style from './index.module.scss';
import { FaGithub, FaLink} from 'react-icons/fa';

const Project = (props) => {
    const projectTemplate = 
    <div className={style.project}>
        <div className={style.projectInfo}>
            <p className={style.name}>{props.name}</p>
            <p className={style.tools}>{props.tools}</p>
            <p className={style.desc}>{props.desc[props.lang]}</p>
            <div className={style.iconContainer}>
                <a className={style.git} href={props.git} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                <div className={style.line}></div>
                {props.link && <a className={style.link} href={props.link} target="_blank" rel="noopener noreferrer"><FaLink/></a>}
                
            </div>
        </div>
        <div className={style.projectInfoPurpleBack}></div>
        <div className={style.imgContainer}>
            <img src={props.img} alt={props.name}/>
            <div className={style.imgOverlay}></div>
        </div>
        <div className={style.imgContainerPurpleBack}></div>
    </div>

    return (
        <React.Fragment>
            {projectTemplate}
        </React.Fragment>
    );
};

export default Project;