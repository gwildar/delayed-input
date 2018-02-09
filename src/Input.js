import React, { Component } from 'react';
import { Input } from 'antd';

export default class DelayedInput extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
    this.delay = this.delay;
    this.valueChange = this.valueChange.bind(this);
  }

  valueChange(e) {
    clearTimeout(this.delay);
    this.delay = setTimeout(() => alert(this.state.value), 3000); 
    this.setState({ value: e.target.value });

  }

  render() {
    return (
      <div>
        <label htmlFor="delayed">Delayed action</label>
        <Input type="text" value={this.state.value} onChange={this.valueChange} id="delayed" />
      </div>
    )
  }
}
