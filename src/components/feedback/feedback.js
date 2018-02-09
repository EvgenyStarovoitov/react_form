import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Heading from 'arui-feather/heading';
import Checkbox from 'arui-feather/checkbox';
import Select from 'arui-feather/select';
import Input from 'arui-feather/input';
import PhoneInput from 'arui-feather/phone-input';
import EmailInput from 'arui-feather/email-input';
import Textarea from 'arui-feather/textarea';
import Attach from 'arui-feather/attach';
import Button from 'arui-feather/button';

import './feedback.css';

const propTypes = {
  initialName: PropTypes.string,
  options: PropTypes.array
};

const initialState = {
  checked: false,
  contacts: '',
  name: '',
  phoneNumber: '',
  email: '',
  message: ''
};

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      contacts: '',
      name: '',
      phoneNumber: '',
      email: '',
      message: ''
    };
    this.handleCheckAnonim = this.handleCheckAnonim.bind(this);
    this.handleContacts = this.handleContacts.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.hideElem = this.hideElem.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleClickButtonSend = this.handleClickButtonSend.bind(this);
  }

  handleCheckAnonim() {
    this.setState({
      checked: !this.state.checked
    });
  }

  handleContacts(val) {
    this.setState({ contacts : this.props.options[val].text });
  }

  handleName(val) {
    this.setState({ name : val });
  }

  handlePhoneNumber(val) {
    this.setState({ phoneNumber : val });
  }

  handleEmail(val) {
    this.setState({ email : val });
  }

  handleMessage(val) {
    this.setState({ message : val });
  }

  handleClickButtonSend() {
    console.log(JSON.stringify(this.state));
  }

  handleState() {
    this.setState(initialState);
  }

  hideElem() {
    return this.className + (this.state.checked ? ' feedback_hidden' : '');
  }

  render() {
    return (
      <div className='feedback'>
        <div>
          <div className='feedback__row feedback__row_centre'>
            <Heading size='s'>Ваше обращение</Heading>
          </div>
          <div className='feedback__row'>
            <Checkbox
              text='Анонимное сообщение'
              checked={this.state.checked}
              onChange={this.handleCheckAnonim}
            />
          </div>
          <div className='feedback__row'>
            <Select
              size='m'
              mode='radio'
              options={this.props.options}
              placeholder='К кому ваше обращение'
              width='available'
              onChange={this.handleContacts}
            />
          </div>
          <div className={`feedback__row${  this.hideElem()}`}>
            <Input
              size='m'
              placeholder='Ваше ФИО'
              label='ФИО'
              width='available'
              onChange={this.handleName}
            />
          </div>
          <div className={`feedback__row${  this.hideElem()}`}>
            <PhoneInput
              size='m'
              placeholder='Телефон(375 00 000 00 00)'
              label='Телефон'
              width='available'
              onChange={this.handlePhoneNumber}
            />
          </div>
          <div className={`feedback__row${  this.hideElem()}`}>
            <EmailInput
              size='m'
              placeholder='Введите Ваш e-mail'
              label='Ваш e-mail'
              width='available'
              onChange={this.handleEmail}
            />
          </div>
          <div className='feedback__row'>
            <Textarea
              size='m'
              width='available'
              autosize
              minRows={4}
              onChange={this.handleMessage}
            />
          </div>
          <div className='feedback__row feedback__row_space-between'>
            <Attach
              size='s'
              buttonContent=''
            />
            <Button
              size='s'
              text='Очистить'
              onClick={this.handleState}
            />
          </div>
          <div className='feedback__row'>
            <Button
              size='m'
              width='available'
              text='Отправить'
              onClick={this.handleClickButtonSend}
            />
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = propTypes;

export default Feedback;
