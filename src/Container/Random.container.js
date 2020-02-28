import React from "react";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomList: [],
      input: '',
      isLoading: false,
      randomResult: '',
    }
  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState({input: value});
  };

  onClick = () => {
    let { randomList, input } = this.state;
    randomList.push(input);
    this.setState({
      input: '',
      randomList,
    });
  };

  render() {
    const { input } = this.state;
    return (
        <div>
          <input type={'text'} id={'input'} placeholder={'Input your thing'
          + ' here'} name={'input'} value={input} onChange={this.onChange}/>
          <button id={'submit'} onClick={this.onClick}>Submit</button>
        </div>
    );
  }
}

export default Random;
