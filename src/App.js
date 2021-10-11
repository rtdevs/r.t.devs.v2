import React, { Component } from 'react';
// import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import style from './index.module.scss';
import {Link} from 'react-scroll';
import {webLang} from './assets/data/webLang'; 
import axios from 'axios' 

//__This needs to be added for gsap to work after build, Also can try to use TweenMax instead of TimelineLite
import CSSPlugin from 'gsap/CSSPlugin';
import AttrPlugin from 'gsap/AttrPlugin';
import Loader from './components/Loader/Loader';
const C = CSSPlugin; 
const Attr = AttrPlugin;

class App extends Component {
  state = {
    lang: '',
    loading: false,
    mobileNav: false
  }

  componentDidMount(){
    this.getUserLang();

    // On mobile versions close menu on any click on the document except the menu logo
    if(window.innerWidth <= 900){
      document.addEventListener('click',(e) => {
        if(e.target.id === 'lang'){
          return
        } else if(e.target.id !== 'mobileMenu'){
          this.setState({mobileNav: false})
        }

      })
    }
    
  }

  // Fetch data using users ip to set language
  getUserLang = async () => {
    this.setState({loading: true});
    try{
      const res = await axios.get('https://ipapi.co/json/')
      if(res.data.country === 'NO'){
        this.setState({lang: 'no', loading: false});
      } else {
        this.setState({lang: 'en', loading: false});
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  // Change language
  changeLang = (lang) => {
    this.setState({lang});
  };

  // Mobile nav menu click event
  openNav = () => {
    this.setState({mobileNav: !this.state.mobileNav});
  };

  render() {
    //_Dest
    const {lang, loading, mobileNav} = this.state;

    //__Language active and simple class names
    const acitveLangClass = [style.lang, style.activeLang].join(' ');

    //__Active mobile menu classes

    const activeMobileMenuLogo = [style.mobileMenuLogo, style.menuLogo].join(' ');
    const activeMobileNav = [style.mobileNav, style.nav].join(' ');
    const activeMobileNavWrapper = [style.mobileNavWrapper, style.navWrapper].join(' ');

    // Display loader while fetching ip for language
    if(loading) {
      return <Loader />
    } else {
      return (
        <div  className={style.App}>
          <div className={style.navContainer}>
              <div className={mobileNav ? activeMobileNavWrapper : style.navWrapper}>
                  <nav className={mobileNav ? activeMobileNav : style.nav}>
                    <Link 
                      offset={-140} 
                      to='home' 
                      smooth={true} 
                      spy={true}>
                        <div className={style.logo}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="102.012" viewBox="0 0 70 102.012">
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
                                  <text id="d_e_v_s" data-name="devs" transform="translate(106 18)" fill="#3b3b3b" fontSize="23" fontFamily="PoiretOne-Regular, Poiret One"><tspan x="-6.543" y="0">d</tspan><tspan x="-5.693" y="18">e</tspan><tspan x="-5.669" y="36">v</tspan><tspan x="-3.956" y="54">s</tspan></text>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                    </Link>
                    <div className={style.navigation}>
                        <ul className={style.list}>
                            <Link className={style.navLink} offset={-40} to='skills' smooth={true} spy={true}>
                              {webLang.nav.skills[lang]}
                            </Link>
                            <Link className={style.navLink} offset={-40} to='projects' smooth={true} spy={true}>
                              {webLang.nav.projects[lang]}
                            </Link>
                            <Link className={style.navLink} offset={-40} to='about' smooth={true} spy={true}>
                              {webLang.nav.about[lang]}
                            </Link>
                            <Link className={style.navLink} to='contacts' smooth={true} spy={true}>
                              {webLang.nav.contacts[lang]}
                            </Link>
                        </ul>
                    </div>
                    <div className={style.langWrapper}>
                      <div 
                        id='lang'
                        className={lang === 'en' ? acitveLangClass : style.lang} 
                        onClick={() => this.changeLang('en')}>EN</div>
                      <div 
                        id='lang'
                        className={lang === 'no' ? acitveLangClass : style.lang} 
                        onClick={() => this.changeLang('no')}>NO</div>
                    </div>
                  </nav>
                  <div className={mobileNav ? activeMobileMenuLogo : style.menuLogo} onClick={this.openNav} id='mobileMenu'>
                      <div className={style.logoLine} id='mobileMenu'></div>
                      <div className={style.logoLine} id='mobileMenu'></div>
                      <div className={style.logoLine} id='mobileMenu'></div>
                  </div>
              </div>
          </div>
            <Header lang={lang}/>
            <Skills lang={lang}/>
            <Projects lang={lang}/>
            <About lang={lang}/>
            <Contacts lang={lang}/>
        </div>
      );
    }
  }
}

export default App;
