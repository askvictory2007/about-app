import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput
} from 'react-native';

import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {

    goBack() {
        Actions.pop()
    }

    render() {
        return(
          <ImageBackground  source={require('../assets/sample2.jpg')}  style={styles.container} >
            <View style={styles.container}>
            
                
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>

                <TextInput style={styles.inputBox}
                onChangeText={(Name) => this.setState({Name})}
                placeholder="Full Name"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                onSubmitEditing={()=> this.emailid.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(emailid) => this.setState({emailid})}
                placeholder="E-mail id"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                onSubmitEditing={()=> this.username.focus()}/>

                <Form type="Signup"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress= {() => {Actions.login(); }}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
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
    inputBox: {
      
      width: 300,
      padding: 15,
      backgroundColor: '#eeeeee', 
      borderRadius: 25,
      paddingHorizontal: 10,
      fontSize: 16,
      color: '#002f6c',
      marginVertical: 10
    
  },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row'
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