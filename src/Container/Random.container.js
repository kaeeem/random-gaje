import React from "react";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomList: [],
      input: '',
      randomResult: '',
    }
  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState({input: value});
  };

  onClick = () => {
    const { randomList, input } = this.state;
    if(input !== '') {
      randomList.push(input);
      this.setState({
        input: '',
        randomList,
      });
    }
  };

  randomize = () => {
    const { randomList } = this.state;
    if(randomList.length > 0) {
      const max = randomList.length;
      const rand = Math.random() * (max);
      const randomResult = randomList[Math.floor(rand)];
      this.setState({randomResult});
    }
  };

  render() {
    const { input, randomList, randomResult } = this.state;
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
          <div style={{ margin: 'auto', padding: 20 }}>
            <button id={'submit-random'} onClick={this.randomize}>RANDOM</button>
          </div>
          <div style={{ margin: 'auto', padding: 20 }}>
            <h1 id={'random-result'}>{`RESULT: ${randomResult}`}</h1>
          </div>
        </div>
    );
  }
}

export default Random;
