import React, { Component } from 'react'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top flex-md-nowrap p-0 shadow text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="hd"
        >
          &nbsp;SUPPLY_CHAIN
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <h6 id="account">{this.props.account}</h6>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;