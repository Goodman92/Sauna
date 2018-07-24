import React from 'react';
import renderer from 'react-test-renderer';

import {TextField} from 'react-native-material-textfield';
import TextFieldValidator from '../src/components/validator/text-field-validator';
import {shallow} from "enzyme"

describe('TextFieldValidator', () => {

  beforeEach(() => {
    let value = "";

    const validator = {
      required: true,
      minLength: 1,
      maxLength: 15,
    };

    const element = renderer.create(
      <TextFieldValidator validator={validator}>
        <TextField label="" value={value} onChangeText={(val) => value = val}/>
      </TextFieldValidator>).toJSON();
  });

  it('valid', () => {
  });
});



