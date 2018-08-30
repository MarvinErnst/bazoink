import React from 'react'
import Link, {push} from 'gatsby-link'
import {Spring} from 'react-spring'


class IndexPage extends React.Component {
 constructor() {
   super()
   this.state = {
    list: [
      'Priscilla',
      'Yvonne',
      'Trisha'
    ],
    animate: false
  }
 }
 componentWillUnmount() {
   return false;
 }

  render() {
    const {list} = this.state;
    return (
      <div>
      <Spring
        from={{width: '0%'}}
        to={{
          width: this.state.animate ? '100%' : '0%',
        }}
        onRest={ () => {
          push(this.state.link)
        }}

      >
          {styles => <div className="hider" style={styles} />}
      </Spring>
      <div onClick={() => {
        var arr = this.state.list;
        arr.push(Math.random() * 50000000);
        this.setState({
          list: arr
        })
      }}>

        <p>Welcome to your new Gatsby site.</p>
        <p>Eum velit qui voluptate et autem error maiores aliquam. Repellat blanditiis qui tempore ratione qui eligendi non magni. Dignissimos ipsa cumque veniam. Est voluptas voluptas.

Dolore magni error est unde odio atque quis. Saepe quam magnam libero non et tempore dolores. Repellat quam corporis non incidunt facere cumque. Id recusandae quidem autem commodi ex sit. Est quidem eaque dolores accusantium eveniet magni non.

Eaque veritatis autem qui neque nihil deserunt. Quae quo cumque minima dolorem impedit aut hic. Animi error magni asperiores in mollitia. Quod vel sit accusantium quae iure. Ullam ut occaecati sunt placeat repellendus optio quaerat..</p>
        <button onClick={() => {
          this.setState({
            link: '/page-2',
            animate: true
          })
        }}>
        Go to page 2
        </button>
      </div>
      </div>
    )
  }
}
export default IndexPage
