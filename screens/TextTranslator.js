import React, { Component } from 'react';
import { ProviderTypes, TranslatorConfiguration, TranslatorFactory } from 'react-native-power-translator';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Picker, KeyboardAvoidingView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Tts from 'react-native-tts';
import Languages from './languages/languages.json';
import {LogoTitle} from './Home'
import {GOOGLE_API_KEY} from '../config';

export default class TextTranslator extends Component {
    static navigationOptions =  ({ navigation }) => {
        return {
            headerTitle: <LogoTitle/>
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            languageFrom: "",
            languageTo: "",
            languageCode: 'en',
            inputText: "",
            outputText: "",
            submit: false,
        };
        Tts.getInitStatus().then(this.initTts);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.languageCode != this.state.languageCode || prevState.inputText != this.state.inputText) {
            Tts.getInitStatus().then(this.initTts);
            const translator = TranslatorFactory.createTranslator();
            translator.translate(this.state.inputText).then(translated => {
                this.setState( {outputText: translated })
            });
        }
    }

    handleTranslate = () => {
        this.setState({submit: true})
    }

    initTts = () => {
        Tts.setDucking(true);
        if (this.state.languageCode === 'en') {
            Tts.setDefaultLanguage("en-IE");
        }
        if (this.state.languageCode === 'ko') {
            Tts.setDefaultLanguage("ko-KR");
        }
    }

    handleTts = () => {
        const translator = TranslatorFactory.createTranslator();
        translator.translate(this.state.inputText).then(translated => {
            Tts.getInitStatus().then(() => {
                Tts.speak(translated);
            });
            Tts.stop();
        });
    }


    render() {
        TranslatorConfiguration.setConfig(ProviderTypes.Google, `${GOOGLE_API_KEY}`, this.state.languageCode);
        return (
            <KeyboardAvoidingView style = {styles.container}  behavior="padding" enabled>
                <Picker
                    selectedValue={this.state.languageTo}
                    onValueChange={ lang => this.setState({languageTo: lang, languageCode: lang})}
                >
                    {Object.keys(Languages).map(key => (
                        <Picker.Item label={Languages[key]} value={key} />
                    ))}
                </Picker>

                <View style={styles.input}>
                    <TextInput
                        placeholder="번역할 단어를 입력해주세요."
                        onChangeText = {inputText => this.setState({inputText})}
                        value={this.state.inputText}
                        multiline={true}
                        style={{ textAlign: 'center'}}
                    />
                </View>

                <View style = {styles.output}>
                        {this.state.submit && <Text>{this.state.outputText}</Text>}
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {this.handleTranslate}
                    >
                        <Text style = {styles.submitButtonText}> 번역하기 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.handleTts}
                        style={{marginLeft: 10, marginTop: 5}}
                    >
                        <Icon size={30} name="md-volume-high" style={styles.ImageStyle}/>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    input: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: .7,
        borderBottomWidth: .7,
        borderColor: 'gray',
        borderRadius: 7,
        marginTop: 5
    },
    output: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: .7,
        borderBottomWidth: .7,
        borderColor: 'gray',
        borderRadius: 7,
        marginTop: 10,
    },
    ImageStyle: {
        marginTop: 25,
        marginRight: 25
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 10,
        marginTop: 20,
        borderRadius: 10,
        height: 50,
        width: 330,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    submitButtonText:{
        color: 'white',
        fontSize: 20
    },
    btnContainer: {
        flex: 2,
        flexDirection: 'row',
        marginBottom: 70
    }
})