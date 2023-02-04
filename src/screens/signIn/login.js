import React, { useState, useEffect } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadSignIn,
    loginSuccess,
    loginFailure
} from '../../redux/userDetails';
import { validateEmailId, validatePassword } from '../../helpers/utility'
import { Stack, Input, Pressable, Button, Popover, Box, IconButton, HStack } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Tooltip from '../../components/toolTip'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LanguageModal } from '../../helpers/languageModal'
import { openModal } from '../../redux/userLanguages';
import '../../localization/i18n';
import { useTranslation } from 'react-i18next';
import { signInStyle } from './styles';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FastImages from '../../components/fastImage';

const Login = (props) => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [inputValidation, setInputValidation] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = React.useState(false);
    const { currentLanguage } = useSelector(state => state.UserLanguage);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    const onLogin = () => {
        setLoading(true)
        dispatch(loginSuccess({ emailid: emailId }));
        props.navigation.navigate('menuNavigators')
    }

    const validation = () => {
        if (validateEmailId(emailId) && validatePassword(password)) {
            setInputValidation(true)
        }
        else {
            setInputValidation(false)
        }
    }

    useEffect(() => {
        validation();
    }, [emailId, password])

    return (
        <SafeAreaView style={signInStyle.container}>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={"handled"}
                contentContainerStyle={signInStyle.container}
                enableOnAndroid={true}
                enableAutomaticScroll={Platform.OS === "ios"}
            >
                <LinearGradient colors={signInStyle.gradientColor}
                    style={signInStyle.gradientContainer}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <FastImages
                        style={signInStyle.imageStyle}
                        imageSource={require('../../assets/images/demoLogo.png')}
                        resizeMode={'contain'}
                    />
                    <HStack justifyContent={'center'} alignItems={'center'} marginY={5} marginTop={10}>
                        <Input
                            w={'85%'}
                            h={50}
                            p={2}
                            bg={'#fff'}
                            shadow={2}
                            rounded={10}
                            borderColor={'gray.300'}
                            fontSize={12}
                            InputLeftElement={<FontAwesomeIcon name="user" size={20} style={signInStyle.loginIcon} />}
                            placeholder={t('emailid')}
                            onChangeText={(email) => setEmailId(email)}
                            _focus={{ backgroundColor: '#fff' }}
                        />
                        <Tooltip msg={t('tooltipusernamemsg')} />
                    </HStack>
                    <HStack justifyContent={'center'} alignItems={'center'} marginY={5}>
                        <Input
                            w={'85%'}
                            h={50}
                            p={2}
                            bg={'#fff'}
                            shadow={2}
                            rounded={10}
                            borderColor={'gray.300'}
                            fontSize={12}
                            type={show ? "text" : "password"}
                            InputLeftElement={<FontAwesomeIcon name="lock" size={20} style={signInStyle.loginIcon} />}
                            InputRightElement={
                                <Pressable onPress={() => setShow(!show)}
                                >
                                    <MaterialIcon name={show ? "visibility" : "visibility-off"}
                                        size={20}
                                        style={{ paddingHorizontal: 5, paddingRight: 10 }}
                                    />
                                </Pressable>
                            }
                            placeholder={t('password')}
                            onChangeText={(pwd) => setPassword(pwd)}
                            _focus={{ backgroundColor: '#fff' }}
                            maxLength={15}
                        />
                        <Tooltip msg={t('tooltippasswordmsg')} />
                    </HStack>
                    <Button
                        isLoading={loading}
                        isDisabled={!inputValidation}
                        isLoadingText={t('login')}
                        variant="outline"
                        w={'50%'}
                        h={50}
                        p={2}
                        m={5}
                        bg={'#73a8f8'}
                        shadow={2}
                        rounded={10}
                        borderColor={'gray.300'}
                        _text={{
                            color: "white",
                            fontSize: 14,
                            fontWeight: '500'
                        }}
                        _loading={{
                            size: 100
                        }}
                        onPress={() => { onLogin() }}
                    >
                        {t('login')}
                    </Button>
                    <TouchableOpacity
                        style={signInStyle.dropdown}
                        onPress={() => dispatch(openModal())}
                    >
                        <Text>{t(currentLanguage)}</Text>
                        <MaterialIcon name="keyboard-arrow-down" size={20} />
                    </TouchableOpacity>
                    {/* <LanguageModal /> */}
                </LinearGradient>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Login;