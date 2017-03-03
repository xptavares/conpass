import React from 'react'

export default React.createClass({
  render() {
    return <img src={ 'assets/' + this.props.to} role="presentation" className={this.props.className} height={this.props.height} width={this.props.width}/>
  }
})
