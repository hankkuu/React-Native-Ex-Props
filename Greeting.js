import React, { Component } from 'react';
import {
    Text,
    Button,
    View,
    Alert,
    TextInput   
  } from 'react-native';
import PropTypes from 'prop-types';

export default class Greeting extends Component {

    onButtonPress = () => {
        Alert.alert('Button has been pressed!');
    };

    render() {


      return (
          <View>
               <Text style={{
                  backgroundColor: this.props.highlighted ? 'yellow' : 'green',
                  fontSize: this.props.fontSize
                }} >
                  Hello {this.props.name}!
               </Text>
               <TextInput>{this.props.name}</TextInput>
              <Button onPress={this.onButtonPress} title='Press Me' ></Button>
          </View>
      );
    }
  }
  
  Greeting.propTypes = {
      name: PropTypes.string.isRequired,
      highlighted: PropTypes.bool,
      fontSize: PropTypes.number
  };
  // 추가로 할 수 있는 propTypes 
  // 1. default 값 설정 
  Greeting.defaultProps = {
      name: 'default',
      fontSize: 15
  };