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

  onChange(event) {
    const { value } = event.target;
    this.setState({input: value});
  }

  render() {
    return (
        <div>
          <input type={'text'} id={'input'} placeholder={'Input your thing'
          + ' here'} name={'input'} onChange={this.onChange}/>
        </div>
    );
  }
}

export default Random;
