import React from 'react'
import Link, {push} from 'gatsby-link'
import {
  Spring,
  AnimatedValue,
   Transition,
   animated,
    Trail,
    interpolate,
    TimingAnimation,
     controller as spring
} from 'react-spring';
const animation = new AnimatedValue(0)
const show = (daata) => spring(animation, { to: window.innerWidth }).start((fata) => {
  push(daata)
});
const hide = () => spring(animation, { to: 0 }).start()

class SecondPage extends React.Component {

  constructor() {
    super()
    hide()
  }

  render() {

    return (
      <div style={{background: 'red'}}>
       <animated.div className="hider" style={{width:animation}} />

     <header id="intro" class="mentions-header"><h1 class="mentions-h1">Contrat<span class="contrat-utilisation-title-mobileportrait"> d'utilisation</span></h1><div class="mentions-description-container"><div class="mentions-description-line-container"><div className="mentions-description-line"></div></div><div className="mentions-description">Mis à jour le 10 août 2017</div></div><div className="mentions-header-line-container"><div data-ix="mentionsheader-line" className="mentions-header-line" style="width: 100%; transition: width 2000ms ease 0s;"></div></div><div data-ix="opacity0-initial-2" className="mentions-header-wrapper" style="display: none; opacity: 0;"></div></header>



      <button to="/" onClick={(e) => {show('/')}}>
        Go back to the homepage
      </button>
    </div>
    )
  }
}
export default SecondPage
