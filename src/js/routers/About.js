import React from 'react'

export default React.createClass({
  render() {
    return (
        <ul role="nav">
          <li><Link to="/" onlyActiveOnIndex>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
          <li><Link to="/payment">payment</Link></li>
        </ul>
    )
  }
})