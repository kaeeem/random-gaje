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
    if(input !== '') {
      randomList.push(input);
      this.setState({
        input: '',
        randomList,
      });
    }
  };

  render() {
    const { input, randomList } = this.state;
    return (
        <div>
          <div style={{ margin: 'auto', padding: 20 }}>
            <input type={'text'} id={'input'} placeholder={'Input your thing'
            + ' here'} name={'input'} size={'20'} value={input} onChange={this.onChange}/>
            <button id={'submit'} onClick={this.onClick}>Submit</button>
          </div>
          <text id={'random-list-length'}>
            {`Total object to be randomized: ${randomList.length}`}
          </text>
        </div>
    );
  }
}

export default Random;
