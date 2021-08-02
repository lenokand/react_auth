import React, { Component } from 'react'

const send = (<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6187 7.13944L2.78746 0.155459C2.07838 -0.138796 1.27731 -0.00935135 0.696907 0.493107C0.116505 0.995647 -0.126249 1.76995 0.0634561 2.51382L1.56158 8.38882H8.89661C9.23414 8.38882 9.50782 8.66246 9.50782 9.00002C9.50782 9.33755 9.23418 9.61123 8.89661 9.61123H1.56158L0.0634561 15.4862C-0.126249 16.2301 0.116464 17.0044 0.696907 17.5069C1.27849 18.0104 2.07965 18.1382 2.7875 17.8445L19.6187 10.8606C20.385 10.5426 20.861 9.8297 20.861 9.00002C20.861 8.17035 20.385 7.45736 19.6187 7.13944Z" fill="#FF5F46"/>
</svg>)

export default class ChatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('Сообщение ' + this.state.value);
        event.preventDefault();
      }
      render() {
        return (
          <form onSubmit={this.handleSubmit}  className="chat-form">


                            <input placeholder="Напишите сообщение..." value={this.state.value} onChange={this.handleChange} />
                            <button type="submit"> {send}  </button>
                       

            
          </form>
        );
      }
}
