import React from 'react';
import PlayerViews from './PlayerViews.js';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component{
  render() {
    const {content} = this.props;
    return(
      <div className="Deployer">
        Sell An NFT
        {content}
      </div>
    );
  }
}

exports.SetInfo = class extends React.Component {
  render() {
    const {parent, defaultMin, standardUnit} = this.props;
    const min = (this.state || {}).min || defaultMin;
    //const min = this.state.min;
    return(
      <div className='Sale'>
        Enter Minimum Bid
        <br />
        <input 
          type='number'
          placeholder={defaultMin}
          onChange={(e) => this.setState({min: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button className='setinfo'
          onClick={() => parent.setMin(min)}
        >Set Min Bid</button>
      </div>
    )
  }
}

exports.ShowOutcome = class extends React.Component{
  render() {
    const {winAdd, highBid, standardUnit} = this.props;
    return(
      <div className="Sale">
        <h5>Winning Address: {winAdd}</h5>
        <h5>Winning Bid: {highBid} {standardUnit}S</h5>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component{
  render() {
    const {parent, standardUnit} = this.props;
    return(
      <div className="Sale">
        <br />
        <button
          onClick={() => parent.deploy()}
        >Create and deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return(
      <div className="Sale">Deploying...please wait</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard (button){
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }
  render() {
    const {ctcInfoStr, amt} = this.props;
    const {ready} = this.props || {};
    return (
      <div className="Game">
        Current bid: {amt}
        <br />
        <button 
          onClick={(e) => this.copyToClipboard(ctcInfoStr)}
        >Copy Contract Info</button>
      </div>
    );
  }
}
export default exports;