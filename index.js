import React from 'react';
import AppViews from './views/AppViews.js';
import DeployerViews from './views/DeployerViews.js';
import AttacherViews from './views/AttacherViews.js';
import {renderDOM, renderView} from './views/render.js';
import './index.css';
import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
const stdlib = loadStdlib(process.env);

import { ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: 'TestNet',
  MyAlgoConnect
}));
const {standardUnit} = stdlib;
const defaults = {defaultFundAmt: '10', defaultMin: '5', standardUnit};
const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount(){
    //const acc = await stdlib.getDefaultAccount();
    this.setState({view: 'Intro'});
  }
  async start() {this.setState({view: 'DeployerOrAttacher'}); }
  async selectCreator() {
    const acc = await stdlib.newAccountFromMnemonic('order benefit case nothing critic bridge fresh young oval weasel lizard prosper aware trick blame coast shaft brother blade quick liberty skirt pizza abandon prosper');
    const ctc = acc.contract(backend)
    this.setState({view: 'Wrapper', ContentView: Creator, ready: 'false', acc, ctc});
  }
  selectBidder(){
    this.setState({view: 'Wrapper', ContentView: Bidder});
  }
  render() {return renderView(this, AppViews); }
}

class Creator extends React.Component{
  constructor(props){
    super(props);
    this.state = {view: 'SetInfo'};
  }
  setMin(min) {this.setState({view: 'Deploy', min}); }
  async deploy() {
    //const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying'});
    this.min = stdlib.parseCurrency(this.state.min);
    backend.Creator(this.props.ctc, this);
    const ctcInfoStr = JSON.stringify(await this.props.ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }
  async getSale() {
    const theNFT = await stdlib.launchToken(this.props.acc, "ReachNFT", "RNFT", {supply: 1});
    const params = {
      nftId: theNFT.id,
      minBid: stdlib.parseCurrency(this.state.min),
      lenInBlocks: 100,
    };
    this.setState({amt: 0})
    return params;
  }
  auctionReady() {
    this.setState({ready: 'true'});
    console.log(this.props.ctc);
    console.log('Auction Ready');
  }
  seeBid(ad, am) {
    const addr = stdlib.formatAddress(ad);
    const amt = stdlib.formatCurrency(am);
    this.setState({view: 'WaitingForAttacher', addr, amt});
  }
  showOutcome(addr, amt){
    this.setState({
      view: 'ShowOutcome', 
      winAdd: stdlib.formatAddress(addr), 
      highBid: stdlib.formatCurrency(amt)})
  }
  render() {return renderView(this, DeployerViews); }
}

class Bidder extends React.Component{
  constructor(props){
    super(props);
    this.state = {view: 'Attach'};
  }
  async attach(ctcInfoStr){
    const acc = await stdlib.getDefaultAccount();
    const ctc2 = acc.contract(backend, JSON.parse(ctcInfoStr));
    const tBid = await ctc2.v.min();
    const mBid = stdlib.formatCurrency(stdlib.bigNumberToNumber(tBid[1]));
    const tId = await ctc2.v.nft();
    const nId = stdlib.bigNumberToNumber(tId[1]);
    const tcBid = await ctc2.v.currBid();
    const cBid = stdlib.formatCurrency(stdlib.bigNumberToNumber(tcBid[1]));
    this.setState({view: 'Bid', ctc2: ctc2, mBid, nId, cBid});
  }
  async bidFunc() {
    const tctc = this.state.ctc2;
    const bid = stdlib.parseCurrency(this.state.bid);
    const [add, b] = await tctc.apis.Bidder.bid(bid);
    this.setState({
      view: 'WaitingForTurn',
      addr: stdlib.formatAddress(add),
      bid: stdlib.formatCurrency(b) });
  }
  async setBid(bid){
    this.setState({view: 'WaitingForTurn', bid});
  }
  render() {return renderView(this, AttacherViews); }
}
renderDOM(<App />);