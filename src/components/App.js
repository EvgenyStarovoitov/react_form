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

import './App.css';

const propTypes = {
  initialName: PropTypes.string
};

const options = [
  { value: '01', text: 'Служба безопасности' },
  { value: '02', text: 'Топ Менеджмент' },
  { value: '03', text: 'Старовойтов И.А.' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleCheckAnonim = this.handleCheckAnonim.bind(this);
  }

  handleCheckAnonim() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const hidden = this.state.checked ? ' App_hidden' : '';

    return (
      <div className='App'>
        <div>
          <div className='App__row App__row_centre'>
            <Heading size='s'>Ваше обращение</Heading>
          </div>
          <div className='App__row'>
            <Checkbox
              text='Анонимное сообщение'
              checked={this.state.checked}
              onChange={this.handleCheckAnonim}
            />
          </div>
          <div className='App__row'>
            <Select
              size='m'
              mode='radio'
              options={options}
              placeholder='К кому ваше обращение'
              width='available'
            />
          </div>
          <div className='App__row'>
            <Input
              size='m'
              placeholder='Ваше ФИО'
              width='available'
              className={hidden}
            />
          </div>
          <div className='App__row'>
            <PhoneInput
              size='m'
              placeholder='Телефон(375 00 000 00 00)'
              width='available'
              className={hidden}
            />
          </div>
          <div className='App__row'>
            <EmailInput
              size='m'
              placeholder='Введите Ваш e-mail'
              width='available'
              className={hidden}
            />
          </div>
          <div className='App__row'>
            <Textarea
              size='m'
              width='available'
              autosize='true'
              minRows={4}
            />
          </div>
          <div className='App__row'>
            <Attach
              size='s'
              // width='available'
              buttonContent=''
            />
          </div>
          <div className='App__row'>
            <Button
              size='m'
              width='available'
              text='Отправить'
            />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
