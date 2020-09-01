import React from 'react';

import { StyleSheet, Alert, View, Image, Text,TouchableOpacity, Button , AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Home extends React.Component {

    clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }   

    render() {
        
        return (
            
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image style={styles.bakcgroundImage} source={require('../assets/sample2.jpg')} />
                </View>
                <TouchableOpacity style={styles.button} onPress= {() => {Actions.login(); }}> 
                    <Text style={styles.buttonText} >
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress= {() => {Actions.signup(); }}> 
                    <Text style={styles.buttonText} >
                        SignUp
                    </Text>
                </TouchableOpacity>
                
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    backgroundContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }, 
    bakcgroundImage: {
        flex: 1, 
        width: null, 
        height: null
    },
      button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        padding: 18,
        marginBottom:110,
        paddingHorizontal:10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});
