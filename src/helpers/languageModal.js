import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';
import { LANGUAGES } from './constants'
import { Radio } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { updatelLanguage } from '../redux/userLanguages';
import { useTranslation } from 'react-i18next';

export const LanguageModal = (props) => {
    const dispatch = useDispatch();
    const [selectedLan, setSelectedLan] = useState("");
    const { t, i18n } = useTranslation();
    const { currentLanguage, showModal } = useSelector((state) => {
        return state.UserLanguage
    })

    useEffect(() => {
        setSelectedLan(currentLanguage)
    }, [])

    const updateUserLanguage = async () => {
        let lagCode = (selectedLan == "arabic" ? 'ar' : 'en');
        dispatch(updatelLanguage({ "language": selectedLan }));//update redux
        i18n
            .changeLanguage(lagCode) //update local language
            .then(() => {
                // props.navigation.push('movielist')
            })
            .catch(err => {
                //console.log("err >>>>>>> ", err)
            });
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
                //  Alert.alert('Modal has been closed.');
                //setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Radio.Group name="myRadioGroup"
                        accessibilityLabel="favorite number"
                        value={selectedLan}
                        onChange={nextValue => {
                            setSelectedLan(nextValue)
                        }}
                        flex={1}
                    >
                        {LANGUAGES && LANGUAGES.map((lang, index) => {
                            return (
                                <Radio
                                    value={lang}
                                    my={2}
                                    mx={0}
                                    key={index}
                                    fontFamily={'FontAwesome'}
                                >
                                    {t(lang)}
                                </Radio>
                            )
                        })}
                    </Radio.Group>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => { updateUserLanguage() }}>
                        <Text style={styles.textStyle}>{t('updatelannguage')}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 200
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginVertical: 10,
        marginHorizontal:1
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        fontFamily:'FontAwesome',
        lineHeight:20
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
