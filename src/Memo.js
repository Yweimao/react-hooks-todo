import React, {Component, PureComponent, memo} from 'react'


// class Text extends PureComponent{
//   // shouldComponentUpdate(nextProps, nextState, nextContext) {
//   //   if (nextProps.name === this.props.name){
//   //     return false
//   //   }else {
//   //     return true
//   //   }
//   // }
//
//   render() {
//     console.log(this.props.name)
//     return(
//       <div>{this.props.name}</div>
//     )
//   }
// }

const Text = memo(function (props) {
  return(
    <div>{props.name}</div>
  )
})

class NewMemo extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'Jack',
      count: 0,
      person: {
        source: 0
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return(
      <div>
        <button type='button' onClick={this.handleClick}>点击一下</button>
        <Text name={this.state.name}></Text>
      </div>
    )
  }
  handleClick = () => {
    // let person = {
    //   source: this.state.person.source + 1
    // }
    // this.setState({
    //   person: Object.assign({},person)
    // })
    this.setState({
      name: this.state.name + 'abc'
    })
    console.log(this.state.person)
  }
}
export default NewMemo
