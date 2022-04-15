import React, { Component } from 'react';

const STATUSES = ['CREATED', 'SENT', 'RECEIVED']

class Main extends Component {

  render() {
    return (
      <div id='content'>
        <br></br><br></br>
        <h1 class="asshd">{this.props.name}</h1>
        <table className='table'>
          <thead class="tr">
            <tr>
              <th scope='col' class="thhd">Status</th>
              <th scope='col' class="thhd">Custodian</th>
              <th scope='col' class="thhd">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6 class='nl-butt'>{STATUSES[this.props.status]}</h6>
              </td>

              <td className='text-muted'>
                <p class='td'>{this.props.custodian}</p>
              </td>
              <td>
                <a class='hell'
                  href={`http://localhost:3000?address=${this.props.contractAddress}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Share
                </a>
                &nbsp;
                <a class='hell'
                  onClick={() => {
                    let recipient = window.prompt('Who would you like to send the asset to?')
                    this.props.sendAsset(recipient)
                  }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Send
                </a>
                &nbsp;
                <a class='hell'
                  onClick={() => this.props.receiveAsset() } >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  Receive
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <p class="NeonLightText">History</p>
        <br></br>
        <table className='table'>
          <thead class="tr">
            <tr>
              <th scope='col' class="thhd">Account</th>
              <th scope='col' class="thhd">Custodian</th>
            </tr>
          </thead>
          <tbody>
            { this.props.actions.map((action, key) => {
              return(
                <tr key={key}>
                  <td class='td'><small>{action.returnValues.account}</small></td>
                  <td class='td'><small>{action.returnValues.custodian}</small></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;