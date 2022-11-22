import React from 'react';
import PlayerViews from './PlayerViews.js';
import logo from '../Flemish_Clone_0503.png';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component{
  render(){
    const {content} = this.props;
    return(
      <div className='Attacher'>
        Bid on NFT
        {content}
      </div>
    );
  }
}
exports.Attach = class extends React.Component{
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div className="Sale">
        Please paste the contract info to bid on:
        <br />
        <textarea 
          spellCheck='false'
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Show Auction Info</button>
      </div>
    );
  }
}
exports.Attaching = class extends React.Component {
  render() {
    return (
      <div className="Sale">
        Attaching, please wait...
      </div>
    );
  }
}
exports.Bid = class extends React.Component {
  render() {
    const {standardUnit, parent, mBid, nId, cBid} = this.props;
    const {disabled} = this.state || {};
    const bid = (this.state || {}).bid || 0;
    return (
      <div className="Sale" >
        <img className="nftimg" src={logo}></img> 
        <br /> ASA ID: {nId}
        <br /> Min bid: {mBid} {standardUnit}S
        <br /> Current Bid: {cBid} {standardUnit}S
        <br />
        <input 
          type='number'
          placeholder={cBid}
          onChange={(e) => this.setState({bid: e.currentTarget.value})}
        /> {standardUnit}S
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.setBid(bid);
          }}
        >Bid</button>
      </div>
    );
  }
}
exports.WaitingForTurn = class extends React.Component{
  render() {
    const {parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div className='Sale'>
        Waiting for the results...
        <br />Consider a higher bid...
        <br />
      <button
        disabled={disabled}
        onClick={() => {
          this.setState({disabled: true})
          parent.bidFunc()
        }}
      >Send it!</button>
      </div>
    );
  }
}
export default exports;