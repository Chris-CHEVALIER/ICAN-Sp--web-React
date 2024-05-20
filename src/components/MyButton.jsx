import React from 'react'

export default class MyButton extends React.Component {
  handleClick = () => {
    console.log('Clic !')
  }

  render () {
    return (
      <button style={{ color: this.props.color }} onClick={this.handleClick}>
        {this.props.title} {this.props.icon}
      </button>
    )
  }
}
