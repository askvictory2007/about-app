import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard ,ImageBackground} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Form from '../components/Form';

export default class Login extends Component {

    

    render() {
        return(
            <ImageBackground  source={require('../assets/sample2.jpg')}  style={styles.container} >
                <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <Form type="Login"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Dont have an account yet? </Text>
                    <TouchableOpacity onPress= {() => {Actions.signup(); }}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
      color: 'white', 
      fontSize:25,
    },
    signupButton: {
        color: '#4f83cc',
        fontSize:24,
        fontWeight: '500',
    }
});