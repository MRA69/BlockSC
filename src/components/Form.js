import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div id='content'>
        <h1 class='neon'>Create Asset</h1>
        <p class='tex'>You must create a new asset before you can track it.</p>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.assetName.value
          this.props.createAsset(name)
        }}>
          <div className='form-group mr-sm-2'>
            <input
              id='bord'
              type='text'
              ref={(input) => { this.assetName = input }}
              className='form-control'
              placeholder='Asset Name'
              required />
          </div>
          <div class='ct-btn'>
            <button type='submit' class='first message-form__button'>A<span class="second">D</span>D A<span class="second">S</span>S<span class="second">E</span>T</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;