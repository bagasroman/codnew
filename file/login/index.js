import React, { Component } from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";

class Login extends Component{
    render() {
        return(
            <View style={{flex: 1}}>
            
            <View style={{flex: 1, alignItems: 'center',justifyContent: 'center',}}>

                <View style={styles.login}>
                    <Text style={{fontSize: 20, fontFamily: 'sans-serif-condensed'}}>SignUp Here</Text>
                </View>

                <View style={{marginTop: 10}}>
                    <View style={styles.input}>
                        <TextInput 
                        style={{marginHorizontal: 10}}
                        placeholder='username'/>
                    </View>
                    </View>

                    <View style={{marginTop: 10}}>
                    <View style={styles.input}>
                        <TextInput 
                        style={{marginHorizontal: 10}}
                        placeholder='email'/>
                    </View>
                    </View>

                        <View style={{marginTop: 10}}>
                            <View style={styles.input}>
                                <TextInput 
                                style={{marginHorizontal: 10}}
                                placeholder='password'/>
                            </View>
                        </View>
                <View style={{marginTop: 20}}>
                    <Text>Kamu Sudah Memiliki Akun?</Text>
                </View>
                <View>
                    <Text style={{fontFamily: 'sans-serif-condensed', fontSize: 16, color:'blue'}}>Login Di Sini</Text>
                </View>

            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    login: {
        
    },
    input: {
        backgroundColor: 'white', height: 40, width: 300, borderColor: 'black', borderWidth: 1, borderRadius: 25, 
    }
});

export default Login;