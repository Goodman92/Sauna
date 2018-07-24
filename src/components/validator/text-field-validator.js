import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import PropTypes from 'prop-types';


class TextFieldValidator extends React.Component {
  state = {
    dirty: false
  };

  defaultOnChange = null;
  defaultOnChangeText = null;
  defaultOnBlur = null;

  constructor(props) {
    super(props);
    this.validator = props.validator;
  }

  stashDefaultBehaviors = (element) => {
    const {props} = element;

    this.defaultOnChange = props.onChange;
    this.defaultOnChangeText = props.onChangeText;
    this.defaultOnBlur = props.onBlur;
  };

  onChange = (value) => {
    this._onAction(this.defaultOnChange, value);
  };

  onChangeText = (value) => {
    this._onAction(this.defaultOnChangeText, value);
  };

  onBlur = (value) => {
    this._onAction(this.defaultOnBlur, value);
  };

  getErrorAttributes = (value) => {
    let errorMsg = null;
    const {dirty} = this.state;

    if (this.validator.custom)
      errorMsg = this.validator.custom(value);

    if (dirty && this.validator.minLength && value.length < this.validator.minLength)
      errorMsg = 'This field can\'t be less than :length character(s)'.replace(':length', this.validator.minLength);

    if (dirty && this.validator.maxLength && value.length > this.validator.maxLength)
      errorMsg = 'This field can\'t be more than :length character(s)'.replace(':length', this.validator.maxLength);

    if (dirty && this.validator.required && this._isEmpty(value))
      errorMsg = 'This field is required';

    return {
      error: errorMsg
    };

  };

  _onAction = (action, value) => {
    const attributes = this.getErrorAttributes(value, this.validator);
    const valid = attributes.error === null;

    if (!this.state.dirty)
      this.setState({dirty: true});

    if (typeof action === 'function')
      action(value, valid);
  };

  _isEmpty = (value) => {
    return !value || value === '' || value === ' ';
  };


  render() {
    const {children} = this.props;
    const element = React.Children.only(children);
    const {value, textContentType} = element.props;

    const errorAttributes = this.getErrorAttributes(value, textContentType);

    this.stashDefaultBehaviors(element);

    return (
      React.cloneElement(element, {
        onChange: this.onChange,
        onChangeText: this.onChangeText,
        onBlur: this.onBlur,
        ...errorAttributes
      })
    );
  }
}

TextFieldValidator.propTypes = {
  validator: PropTypes.object,
  children: (props, propName) => {

    const child = props[propName];
    let error = null;

    try {
      const element = React.Children.only(child);

      if (element.type !== TextField)
        error = new Error('TextFieldValidator can only be used with TextField element')
    } catch (e) {
      error = new Error('Multiple elements passed into TextFieldValidator');
    }
    return error;
  }

};

export default TextFieldValidator;