import React from 'react';
import PlayerViews from './PlayerViews.js';

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
    // implement current bid here
    const {standardUnit, parent, defaultMin} = this.props;
    const {disabled} = this.state || {};
    const min = (this.state || {}).min || defaultMin;
    const bid = (this.state || {}).bid || defaultMin;
    return (
      <div className="Sale">
        <br /> NFT ID: 
        <br /> Min bid: {min} {standardUnit}S
        <br /> Current Bid: {bid} {standardUnit}S
        <br />
        <input 
          type='number'
          placeholder={min}
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