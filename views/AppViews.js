import React from 'react';
import logo from '../logo.png';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return(
        <div className="App">
        <header className="App-header" id="root">
          <img src={logo} className='App-logo' alt='logo'/>
          <h1>NFT Auction</h1>
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component{
  render() {
    return (
      <div className="Sale">
        Please wait while we connect your account.
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button onClick={() => parent.selectCreator()}>Create + Sell an NFT</button>
        </p>
        <p>
          <button onClick={() => parent.selectBidder()}>Bid on an NFT</button>
        </p>
      </div>
    );
  }
}

exports.Intro = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div className="Sale">
        <h2>Reach NFT Auction</h2>
        <button onClick={() => parent.start()}>Get Started</button>
      </div>
    );
  }
}
export default exports;