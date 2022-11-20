// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  const _currBid = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v284, v285, v286, v287, v288] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v284, v285, v286, v309, v310, v311, v312, v313] = svs;
      return (await ((async () => {
        
        
        return v312;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _min = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v284, v285, v286, v287, v288] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v284, v285, v286, v309, v310, v311, v312, v313] = svs;
      return (await ((async () => {
        
        
        return v286;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _nft = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v284, v285, v286, v287, v288] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v284, v285, v286, v309, v310, v311, v312, v313] = svs;
      return (await ((async () => {
        
        
        return v285;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      currBid: {
        decode: _currBid,
        dom: [],
        rng: ctc2
        },
      min: {
        decode: _min,
        dom: [],
        rng: ctc2
        },
      nft: {
        decode: _nft,
        dom: [],
        rng: ctc1
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v284, v285, v286, v309, v310, v311, v312, v313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v335 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v336 = v335[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v338 = stdlib.gt(v336, v312);
  stdlib.assert(v338, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:45:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v284, v285, v286, v309, v310, v311, v312, v313, v335],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v336, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:44:10:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v351,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v360 = [v310, v312];
      const v361 = await txn1.getOutput('Bidder_bid', 'v360', ctc5, v360);
      
      if (v311) {
        const v632 = v346;
        const v633 = false;
        const v634 = v351;
        const v635 = v348;
        const v637 = stdlib.le(v313, v309);
        if (v637) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v346,
            tok: v285
            });
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: undefined /* Nothing */
          });
        const v638 = v346;
        const v639 = false;
        const v640 = v351;
        const v641 = v348;
        const v643 = stdlib.le(v313, v309);
        if (v643) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v346,
            tok: v285
            });
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn1;
  undefined /* setApiDetails */;
  const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:44:10:spread', stdlib.UInt_max, '0')];
  const v352 = stdlib.gt(v351, v312);
  stdlib.assert(v352, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:45:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v360 = [v310, v312];
  const v361 = await txn1.getOutput('Bidder_bid', 'v360', ctc5, v360);
  if (v165) {
    stdlib.protect(ctc6, await interact.out(v347, v361), {
      at: './index.rsh:44:11:application',
      fs: ['at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:11:function exp)', 'at ./index.rsh:47:15:application call to "notify" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:46:30:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v311) {
    const v632 = v346;
    const v633 = false;
    const v634 = v351;
    const v635 = v348;
    const v637 = stdlib.le(v313, v309);
    if (v637) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v638 = v346;
    const v639 = false;
    const v640 = v351;
    const v641 = v348;
    const v643 = stdlib.le(v313, v309);
    if (v643) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    lenInBlocks: ctc0,
    minBid: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc0]);
  const ctc7 = stdlib.T_Bool;
  
  
  const v277 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:25:69:application',
    fs: ['at ./index.rsh:24:15:application call to [unknown function] (defined at: ./index.rsh:24:19:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v278 = v277.lenInBlocks;
  const v279 = v277.minBid;
  const v280 = v277.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v279, v278],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v285, v286, v287], secs: v289, time: v288, didSend: v35, from: v284 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v285
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v285, v286, v287], secs: v289, time: v288, didSend: v35, from: v284 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v284, v285, v286, v287, v288],
    evt_cnt: 0,
    funcNum: 1,
    lct: v288,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:28:15:decimal', stdlib.UInt_max, '1'), v285]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v296, time: v295, didSend: v42, from: v294 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:28:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v285
        });
      
      const v309 = stdlib.safeAdd(v288, v287);
      const v310 = v284;
      const v311 = true;
      const v312 = v286;
      const v313 = v295;
      const v314 = v288;
      
      if (await (async () => {
        const v328 = stdlib.le(v314, v309);
        
        return v328;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: v285
          });
        if (v311) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v296, time: v295, didSend: v42, from: v294 } = txn2;
  ;
  ;
  const v303 = stdlib.addressEq(v284, v294);
  stdlib.assert(v303, {
    at: './index.rsh:30:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.auctionReady(), {
    at: './index.rsh:31:32:application',
    fs: ['at ./index.rsh:31:32:application call to [unknown function] (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:31:32:application call to "liftedInteract" (defined at: ./index.rsh:31:32:application)'],
    msg: 'auctionReady',
    who: 'Creator'
    });
  
  const v309 = stdlib.safeAdd(v288, v287);
  let v310 = v284;
  let v311 = true;
  let v312 = v286;
  let v313 = v295;
  let v314 = v288;
  
  let txn3 = txn2;
  while (await (async () => {
    const v328 = stdlib.le(v314, v309);
    
    return v328;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v309],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v284, v285, v286, v309, v310, v311, v312, v313],
        evt_cnt: 0,
        funcNum: 4,
        lct: v313,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:57:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v380, time: v379, didSend: v221, from: v378 } = txn5;
          
          ;
          const cv310 = v310;
          const cv311 = v311;
          const cv312 = v312;
          const cv313 = v379;
          const cv314 = v313;
          
          await (async () => {
            const v310 = cv310;
            const v311 = cv311;
            const v312 = cv312;
            const v313 = cv313;
            const v314 = cv314;
            
            if (await (async () => {
              const v328 = stdlib.le(v314, v309);
              
              return v328;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v310,
                tok: v285
                });
              if (v311) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v285
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v284,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v285
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc1, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v380, time: v379, didSend: v221, from: v378 } = txn5;
      ;
      const v381 = stdlib.addressEq(v284, v378);
      stdlib.assert(v381, {
        at: './index.rsh:57:15:dot',
        fs: ['at ./index.rsh:56:36:application call to [unknown function] (defined at: ./index.rsh:56:36:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv310 = v310;
      const cv311 = v311;
      const cv312 = v312;
      const cv313 = v379;
      const cv314 = v313;
      
      v310 = cv310;
      v311 = cv311;
      v312 = cv312;
      v313 = cv313;
      v314 = cv314;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn4;
      undefined /* setApiDetails */;
      const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:44:10:spread', stdlib.UInt_max, '0')];
      const v352 = stdlib.gt(v351, v312);
      stdlib.assert(v352, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:45:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)', 'at ./index.rsh:44:29:application call to [unknown function] (defined at: ./index.rsh:44:29:function exp)'],
        msg: 'bid is too low',
        who: 'Creator'
        });
      ;
      const v360 = [v310, v312];
      await txn4.getOutput('Bidder_bid', 'v360', ctc6, v360);
      if (v311) {
        stdlib.protect(ctc3, await interact.seeBid(v346, v351), {
          at: './index.rsh:52:32:application',
          fs: ['at ./index.rsh:52:32:application call to [unknown function] (defined at: ./index.rsh:52:32:function exp)', 'at ./index.rsh:52:32:application call to "liftedInteract" (defined at: ./index.rsh:52:32:application)', 'at ./index.rsh:46:30:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv310 = v346;
        const cv311 = false;
        const cv312 = v351;
        const cv313 = v348;
        const cv314 = v313;
        
        v310 = cv310;
        v311 = cv311;
        v312 = cv312;
        v313 = cv313;
        v314 = cv314;
        
        txn3 = txn4;
        continue;}
      else {
        ;
        stdlib.protect(ctc3, await interact.seeBid(v346, v351), {
          at: './index.rsh:52:32:application',
          fs: ['at ./index.rsh:52:32:application call to [unknown function] (defined at: ./index.rsh:52:32:function exp)', 'at ./index.rsh:52:32:application call to "liftedInteract" (defined at: ./index.rsh:52:32:application)', 'at ./index.rsh:46:30:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv310 = v346;
        const cv311 = false;
        const cv312 = v351;
        const cv313 = v348;
        const cv314 = v313;
        
        v310 = cv310;
        v311 = cv311;
        v312 = cv312;
        v313 = cv313;
        v314 = cv314;
        
        txn3 = txn4;
        continue;}}
    
    }
  ;
  if (v311) {
    stdlib.protect(ctc3, await interact.showOutcome(v310, v312), {
      at: './index.rsh:63:31:application',
      fs: ['at ./index.rsh:63:31:application call to [unknown function] (defined at: ./index.rsh:63:31:function exp)', 'at ./index.rsh:63:31:application call to "liftedInteract" (defined at: ./index.rsh:63:31:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc3, await interact.showOutcome(v310, v312), {
      at: './index.rsh:63:31:application',
      fs: ['at ./index.rsh:63:31:application call to [unknown function] (defined at: ./index.rsh:63:31:function exp)', 'at ./index.rsh:63:31:application call to "liftedInteract" (defined at: ./index.rsh:63:31:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [`currBid()uint64`, `min()uint64`, `nft()uint64`],
    sigs: [`Bidder_bid(uint64)(address,uint64)`, `currBid()uint64`, `min()uint64`, `nft()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAOAAEFBDAgKAiKw87LCOnQ5+0J6OT9iwFZYaCNBiYCAQAAIjUAMRhBA4MpZEkiWzUBIQdbNQI2GgAXSUEAayI1BCM1BkkhCAxAADNJIQkMQAAWIQkSRDQBJBJEKGRJNQNXWQg1B0IDPSEIEkQ0ASQSRChkSTUDVyAINQdCAydJIQoMQAAWIQoSRDQBJBJEKGRJNQNXKAg1B0IDCoGgm7yBARJENhoBQgB5NhoCFzUENhoDNhoBF0mBAwxAASBJJQxAAF4lEkQkNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/oAEkSc087AyBjT+D0Q0/zEAEkQ0/zQDIQVbNAMhBls0/jQDVzggNANXWAEXNAMhC1syBjQDIQxbQgGVSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yEFWzX+IQZbNf0hBFs1/Fc4IDX7IQtbNfohDFs1+Uk1BTX4gATXkLTdNPhQsDIGNPwMRDT4F0k19zT6DUQ094gCSYAIAAAAAAAAAWg0+zT6FlBQsDT7NPoWUDUHNANXWAEXQQAUNP80/jT9NPwxACI09zIGNPlCAP2xIrIBNPqyCCOyEDT7sgezNP80/jT9NPwxACI09zIGNPlCANlJIwxAAFsjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQVbNf4hBls1/YE4WzX8gASai5F0sCM0/ogBxTT/MQASRDT/NP40/TT8NAMhBFsINP8jNP0yBjT8QgB4SCENiAGHIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEHWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwIQ2IAUyxIrIBIrISJbIQMgqyFDT/shGzMQA0/xZQNP4WUDT9FlAyBhZQKEsBVwBAZ0gjNQEyBjUCQgDDNf81/jX9Nfw1+zX6Nfk1+DX3NP80+g5BADI09zT4FlA0+RZQNPoWUDT7UDT8FlEHCFA0/RZQNP4WUChLAVcAaWdIJDUBMgY1AkIAd7EisgEjshIlshA0+7IUNPiyEbM0/EEAGrEisgEishIlshAyCbIVMgqyFDT4shGzQgAqsSKyATT9sggjshA097IHs7EisgEishIlshAyCbIVMgqyFDT4shGzQgAAMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 105,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T5","name":"v655","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v360","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v650","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"v657","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T2","name":"v664","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T1","name":"v676","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"min","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200188190813803601f1980601f83011683019360018060401b0392848610848711176200039c57808592604097885283396080948591810103126200039757845190848201828110858211176200039c578652805182526020808201516001600160a01b039690939087851685036200039757828201948552888401519089830191825260608095015195858401968752436003558a5195620000a587620003b2565b6000968781528c518d81018181108d821117620003835791898f879382958252828152828c8201528b8401528201528284820152015260049460ff8654166200036c577f6325dde25bfa6ff85dd776156bfdeeefc36ff7c4a07f10fdc0c4fb6b1f92fb9760a08d8f80519133835285518c840152875116908201528751858201528b5187820152a15180159081156200035f575b501562000348573462000331578b51936200015485620003b2565b86850198888a528d8601918983528d848801958b8752878901988c8a5233905251168b5251825251835243855260019b8c8955438d558d519933898c015251168d8a0152519088015251908601525160a085015260a0845260c08401848110878211176200031e57885283519586116200030b57600254908782811c9216801562000300575b83831014620002ed5750601f8111620002a1575b508093601f861160011462000239575050918394918493946200022d575b50501b916000199060031b1c1916176002555b516114b29081620003cf8239f35b0151925038806200020c565b600283528183209493928692918316915b888383106200028657505050106200026c575b505050811b016002556200021f565b015160001960f88460031b161c191690553880806200025d565b8587015188559096019594850194879350908101906200024a565b60028352818320601f870160051c810191838810620002e2575b601f0160051c019087905b828110620002d6575050620001ee565b848155018790620002c6565b9091508190620002bb565b634e487b7160e01b845260229052602483fd5b91607f1691620001da565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8b5163100960cb60e01b8152600c81870152602490fd5b8b5163100960cb60e01b8152600b81870152602490fd5b9050600154143862000139565b8c5163100960cb60e01b8152600a81880152602490fd5b634e487b7160e01b8a52604160045260248afd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b60a081019081106001600160401b038211176200039c5760405256fe60806040526004361015610018575b361561001657005b005b60003560e01c806317b28f08146100e05780631e93b0f1146100d757806347ccca02146100ce578063573b8510146100c557806383230757146100bc578063a1357973146100b3578063ab53f2c6146100aa578063b6279224146100a1578063d3c64a7a146100985763f88979450361000e576100936106b0565b61000e565b50610093610549565b506100936104c1565b5061009361042c565b506100936103cf565b506100936103b0565b5061009361021d565b5061009361017c565b50610093610151565b503461014c57600036600319011261014c576100fa6108b1565b60056000540361013357604060209160c06101246101166107ed565b85808251830101910161091e565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b503461014c57600036600319011261014c576020600354604051908152f35b6001600160a01b031690565b503461014c57600036600319011261014c576101966108b1565b6005600054036101f35760806101ef916101ae6107ed565b80516001600160a01b03916020916101cd91908101830190830161091e565b01511691018190526040516001600160a01b0390911681529081906020820190565b0390f35b60405163100960cb60e01b815260096004820152602490fd5b602090600319011261014c57600490565b5061039861023d61022d3661020c565b6102356108b1565b503690611373565b61025861025361024f60045460ff1690565b1590565b610c34565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159660405180610288843383611391565b0390a1610299600160005414610c54565b6102c86102b66102a76107ed565b602080825183010191016113ab565b915180159081156103a4575b50610c74565b6102d23415610c94565b60208101906102f26102ed6102e78451610170565b33611429565b610cb4565b61030e3360018060a01b036103078451610170565b1614610cd4565b61033f61033661031c6109bb565b9361033061032a8551610170565b8661099f565b51610170565b6020840161099f565b6040810180516040840152610379610370608084019361036585516060830151906113ff565b606087015251610170565b6080850161099f565b600160a08401525160c08301524360e083015251610100820152611069565b60405160008152602090f35b905060015414386102c2565b503461014c57600036600319011261014c576020600154604051908152f35b50604036600319011261014c576103e46108b1565b604051906103f182610750565b6004358252602036602319011261014c576104219160405161041281610778565b60243581526020820152610a1f565b602060405160008152f35b503461014c5760008060031936011261049e5780546104496107ed565b906040519283918252602090604082840152835191826040850152815b83811061048757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610466565b80fd5b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261014c576104d6610898565b506101ef60206104e46108b1565b61053b816040516104f481610778565b60405161050081610778565b80825260043590526040519061051582610750565b600082528582019060405161052981610778565b60008152825260008352519052610a1f565b0151604051918291826104a1565b5061039861055961022d3661020c565b61057061056b61024f60045460ff1690565b610cf4565b7fa02f9e9e84cc99a78168965468765447ea5d90bf01d61078964695bb27c512d4604051806105a0843383611391565b0390a16105b1600560005414610d14565b6105e06105ce6105bf6107ed565b6020808251830101910161091e565b915180159081156106a4575b50610d34565b60e060608201916105f48351431015610d54565b6105fe3415610d74565b61061a3360018060a01b036106138451610170565b1614610d94565b6106226109bb565b926106366106308351610170565b8561099f565b61064f6106466020840151610170565b6020860161099f565b6040820151604085015251606084015261066f6103706080830151610170565b61068861067f60a0830151151590565b151560a0850152565b60c081015160c084015243828401520151610100820152611069565b905060015414386105da565b503461014c57600036600319011261014c576106ca6108b1565b6005600054036106e657606060209160406101246101166107ed565b60405163100960cb60e01b815260086004820152602490fd5b90600182811c9216801561072f575b602083101461071957565b634e487b7160e01b600052602260045260246000fd5b91607f169161070e565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761076b57604052565b610773610739565b604052565b602081019081106001600160401b0382111761076b57604052565b60a081019081106001600160401b0382111761076b57604052565b61010081019081106001600160401b0382111761076b57604052565b601f909101601f19168101906001600160401b0382119082101761076b57604052565b6040519060008260025491610801836106ff565b8083526001938085169081156108775750600114610829575b50610827925003836107ca565b565b6002600090815260008051602061148683398151915294602093509091905b81831061085f57505061082793508201013861081a565b85548884018501529485019487945091830191610848565b905061082794506020925060ff191682840152151560051b8201013861081a565b604051906108a582610750565b60006020838281520152565b604051906108be82610793565b60006080838281526108ce610898565b60208201528260408201528260608201520152565b604051906108f082610778565b816108f9610898565b9052565b51906001600160a01b038216820361014c57565b5190811515820361014c57565b908161010091031261014c5760e060405191610939836107ae565b610942816108fd565b8352610950602082016108fd565b60208401526040810151604084015260608101516060840152610975608082016108fd565b608084015261098660a08201610911565b60a084015260c081015160c0840152015160e082015290565b6001600160a01b039091169052565b506040513d6000823e3d90fd5b6040519061012082016001600160401b03811183821017610a12575b604052816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b610a1a610739565b6109d7565b610a276108e3565b610a3e610a3961024f60045460ff1690565b610db4565b60408051338152835160208083019190915284015151818301529092907f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc190606090a1600090610a916005835414610dd4565b610a996107ed565b93610aae60209586808251830101910161091e565b95610ac483518015908115610c28575b50610df4565b856060880193610ad685514310610e14565b019485515191610aec60c08a0193845110610e34565b610af98751513414610e54565b8760808a0192610b13610b0c8551610170565b825161099f565b845182825101527f216835c7eea22b69307d3475736ebcdcdf48107212d1da49fbb21ab3a8f74e44610b4b82518851918291826104a1565b0390a15191015260a088015115610bd45750509160e093916108279693610b9b610b736109bb565b97610b87610b818851610170565b8a61099f565b610b9381880151610170565b90890161099f565b8085015190870152516060860152610bb6336080870161099f565b60a0850152515160c084015243828401520151610100820152611069565b918480808060e0999795610bf5610bf06108279e9b9951610170565b610170565b905190828215610c1f575bf115610c12575b610b9b610b736109bb565b610c1a6109ae565b610c07565b506108fc610c00565b90506001541438610abe565b15610c3b57565b60405163100960cb60e01b8152600d6004820152602490fd5b15610c5b57565b60405163100960cb60e01b8152600e6004820152602490fd5b15610c7b57565b60405163100960cb60e01b8152600f6004820152602490fd5b15610c9b57565b60405163100960cb60e01b815260106004820152602490fd5b15610cbb57565b60405163100960cb60e01b815260116004820152602490fd5b15610cdb57565b60405163100960cb60e01b815260126004820152602490fd5b15610cfb57565b60405163100960cb60e01b815260196004820152602490fd5b15610d1b57565b60405163100960cb60e01b8152601a6004820152602490fd5b15610d3b57565b60405163100960cb60e01b8152601b6004820152602490fd5b15610d5b57565b60405163100960cb60e01b8152601c6004820152602490fd5b15610d7b57565b60405163100960cb60e01b8152601d6004820152602490fd5b15610d9b57565b60405163100960cb60e01b8152601e6004820152602490fd5b15610dbb57565b60405163100960cb60e01b815260136004820152602490fd5b15610ddb57565b60405163100960cb60e01b815260146004820152602490fd5b15610dfb57565b60405163100960cb60e01b815260156004820152602490fd5b15610e1b57565b60405163100960cb60e01b815260166004820152602490fd5b15610e3b57565b60405163100960cb60e01b815260176004820152602490fd5b15610e5b57565b60405163100960cb60e01b815260186004820152602490fd5b818110610e7f575050565b60008155600101610e74565b610e966002546106ff565b80610e9e5750565b601f8111600114610eb157506000600255565b6002600052610ef690601f0160051c600080516020611486833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610e74565b6000602081208160025555565b60405190610f10826107ae565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b90601f8211610f4e575050565b6108279160026000526020600020906020601f840160051c83019310610f7c575b601f0160051c0190610e74565b9091508190610f6f565b80519091906001600160401b03811161105c575b610fae81610fa96002546106ff565b610f41565b602080601f8311600114610fea5750819293600092610fdf575b50508160011b916000199060031b1c191617600255565b015190503880610fc8565b6002600052601f19831694909190600080516020611486833981519152926000905b87821061104457505083600195961061102b575b505050811b01600255565b015160001960f88460031b161c19169055388080611020565b8060018596829496860151815501950193019061100c565b611064610739565b610f9a565b6101008101516060820180519091116111815761117c61116e9160e061082794611091610f03565b9261109f6106308351610170565b6110af6106466020840151610170565b604082015160408501525160608401526110cf6103706080830151610170565b6110df61067f60a0830151151590565b60c081015160c0840152015160e08201526110fa6005600055565b61110343600155565b6040519283916020830191909160e08061010083019460018060a01b038082511685528060208301511660208601526040820151604086015260608201516060860152608082015116608085015260a0810151151560a085015260c081015160c08501520151910152565b03601f1981018352826107ca565b610f86565b506111b06111926020830151610170565b60808301516001600160a01b03906111a990610170565b169061121d565b60a0810151156111d15750600080556111c96000600155565b610827610e8b565b600080808360c06111e6610bf0849751610170565b91015190828215611214575bf115611207575b600080556111c96000600155565b61120f6109ae565b6111f9565b506108fc6111f2565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526001604480840191909152825261129b9360009384939092918491608081016001600160401b038111828210176112a2575b6040525193165af161128b6112846112af565b8092611313565b50602080825183010191016112fc565b1561014c57565b6112aa610739565b611271565b3d156112f7573d906001600160401b0382116112ea575b604051916112de601f8201601f1916602001846107ca565b82523d6000602084013e565b6112f2610739565b6112c6565b606090565b9081602091031261014c5761131090610911565b90565b1561131b5790565b80511561132a57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561134b5790565b80511561135a57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b919082602091031261014c5760405161138b81610778565b91358252565b6001600160a01b0390911681529051602082015260400190565b908160a091031261014c576080604051916113c583610793565b6113ce816108fd565b83526113dc602082016108fd565b602084015260408101516040840152606081015160608401520151608082015290565b919082019182811161141357821061014c57565b634e487b7160e01b600052601160045260246000fd5b6000611310928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152600160648201526064815261146e81610793565b5193165af161128b61147e6112af565b809261134356fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 6273,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:37:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder_bid": Bidder_bid,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
