import React, {Component} from 'react';
    import {View, Text, StyleSheet, ImageBackground, Image,Dimensions, TouchableOpacity} from 'react-native';
    import { Actions } from 'react-native-router-flux'
class About extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <Image style={styles.bakcgroundImage} source={require('../assets/sample2.jpg')} /> 
                </View>         
                  <View style={styles.overlay}>
                    <Text style = {[styles.textStyle, {paddingTop: 33}]} >My Account</Text>
                    <Image source= {{uri:'https://us.123rf.com/450wm/amin268/amin2681711/amin268171100013/88929775-user-glyph-icon-web-and-mobile-admin-sign-vector-graphics-a-solid-pattern-on-a-white-background-eps-.jpg?ver=6'}}
                        style={styles.avatarStyle}/>
                    <Text style = {styles.textStyle} > Ashok Kumar.R</Text>
                    <Text style = {styles.textStyle} > +9198435637652</Text>
                    <Text style = {styles.textStyle} > </Text>
                    </View>
                   
               
                </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    width: '100%', 
    height: '100%',
},           

    avatarStyle: {
        width:100, 
        height: 100,
        marginTop: 10,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textStyle: {
        marginTop: 10,
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    balanceContainer:{
        padding:10,
    },
    button: {
        width: 440,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 17
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
     
  });

export default About;