import React from 'react';
import logo from '../logo.png';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return(
      <div className='background-container'>
        <div className='stars'>
          <div className='twinkling'>
          <img className='img' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
            <div className='clouds'>
              <div className='App'>
                <header className='App-header' id='root'>
                <img src={logo} className='App-logo' alt='logo'/>
                <h2>NFT Auction</h2>
                {content}
                </header>
              </div>
            </div>
          </div>
        </div>
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
        <button onClick={() => parent.start()}>Get Started</button>
      </div>
    );
  }
}
export default exports;