import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component{
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">{content}</div>
    );
  }
}

exports.Done = class extends React.Component{
  render(){
    //const {outcome} = this.props;
    return(
      <div className="Sale">
      </div>
    );
  }
}

exports.Timeout = class extends React.Component{
  render() {
    return(
      <div className='Game'>
        There's been a timeout. Someone took too long...
      </div>
    );
  }
}

export default exports;