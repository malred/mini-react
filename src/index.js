import React from './react';
class SubCounter {
  componentWillMount() {
    console.log('child组件将要挂载');
  }
  componentDidMount() {
    console.log('child组件挂载完成');
  }
  render() {
    return `<div>123</div>`
  }
}
// 类组件rc
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 }
  }
  componentWillMount() {
    console.log('parent组件将要挂载');
  }
  componentDidMount() {
    console.log('parent组件挂载完成');
  }
  render() {
    return <div>
      <div>{this.state.number}</div>
      <SubCounter></SubCounter>
    </div>
  }
}
class Counter1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        age: 10,
        name: 'malred'
      }
    }
  }
  render() {
    return `<div>${this.state.data.name}-${this.state.data.age}</div>`
  }
}
class zuhe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <Counter></Counter>
      <Counter1></Counter1>
      <button>{this.props.name}</button>
    </div>
  }
}
// <div name="xxx">hello<span>123</span></div>
// let element = React.createElement('div', { name: 'xxx' }, 'hello', React.createElement('button', {
//   'onClick': ()=>{
//     console.log(123);
//   }
// }, '123'))
// console.log(element instanceof Element); 校验类型

// jsx语法 -> 虚拟dom 对象 类
// React.render(element, document.getElementById('root'))
// React.render(<Counter name="zf"></Counter>, document.getElementById('root'))
React.render(
  React.createElement(zuhe, {
    name: 'zf'
  }),
  document.getElementById('root'))