import React, { Fragment } from 'react'
import Link, { push } from 'gatsby-link'
import Header from '../components/header';
import Content from '../components/content';
import Gallery from '../components/gallery';
import { Main, P } from '../styles/generals';
import {
  AnimatedValue,
  animated,
  controller as spring
} from 'react-spring';

/** Animations */
const animation = new AnimatedValue(0);
const show = (daata) => spring(animation, { to: window.innerWidth }).start((fata) => {
  push(daata);
});
const hide = () => spring(animation, { to: 0 }).start();

class SecondPage extends React.Component {

  constructor() {
    super();
    this.state = {
      title: 'About our team',
      subtitle: 'Dolore magni error est unde odio atque quis',
      text: `<p>Eum velit qui voluptate et autem error maiores aliquam. Repellat blanditiis qui tempore ratione qui eligendi non magni. Dignissimos ipsa cumque veniam. Est voluptas voluptas. Dolore magni error est unde odio atque quis. Saepe quam magnam libero non et tempore dolores.</p>
      <p>
      Repellat quam corporis non incidunt facere cumque. Id recusandae quidem autem commodi ex sit. Est quidem eaque dolores accusantium eveniet magni non. Eaque veritatis autem qui neque nihil deserunt. Quae quo cumque minima dolorem impedit aut hic. Animi error magni asperiores in mollitia. Quod vel sit accusantium quae iure. Ullam ut occaecati sunt placeat repellendus optio quaerat..</p>`
    }
    hide();
  }

  render() {
    const { title, subtitle, text } = this.state;
    return (
      <div>
        <animated.div className="hider" style={{ width: animation }} />
        <Content
          left={
            (
              <Fragment>
                <Header title={title} subtitle={subtitle} />
                <Main dangerouslySetInnerHTML={{ __html: text }} />
              </Fragment>
            )
          }
          right={
            <Gallery />
          }
        />
        <p>

        </p>

      </div >
    )
  }
}
export default SecondPage
