import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    TouchableWithoutFeedback
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
import { USERNAME_TOOLTIP_MSG, PASSWORD_TOOLTIP_MSG } from '../../helpers/Constants'
import Tooltip from '../../components/toolTip'
const Login = (props) => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [inputValidation, setInputValidation] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = React.useState(false);
    const { username } = useSelector(
        state => state.UserDetail,
    );

    const dispatch = useDispatch();

    const onLogin = () => {
        setLoading(true)
        dispatch(loginSuccess({ emailid: emailId }));
        props.navigation.navigate('movielist')
    }

    const validation = () => {
        console.log("calleddddd >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        // if (validateEmailId(emailId) && validatePassword(password)) {
        //setInputValidation(true)
        // }
        // else {
        //     setInputValidation(false)
        // }

        if (emailId != "" && password != "") {
            setInputValidation(true)
        }
        else {
            setInputValidation(false)
        }
    }

    useEffect(() => {
        validation();
    }, [emailId, password])

    const Logo = () => {
        return (
            <Image source={require('../../assets/images/demoLogo.png')} style={{
                width: '100%',
                height: '20%',
            }}
                resizeMode={'contain'}
            >
            </Image>
        )
    }
    return (
        <LinearGradient colors={['#4a92e1', '#4a92e1', '#2f3363']}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <Image source={require('../../assets/images/demoLogo.png')} style={{
                width: '100%',
                height: '20%',
            }}
                resizeMode={'contain'}
            >
            </Image>

            <HStack justifyContent={'center'} alignItems={'center'} marginY={5} marginTop={10}>
                <Input
                    w={'85%'}
                    h={50}
                    p={2}
                    // mv={5}
                    bg={'#fff'}
                    shadow={2}
                    rounded={10}
                    borderColor={'gray.300'}
                    fontSize={12}
                    InputLeftElement={<FontAwesomeIcon name="user" size={20} style={{ paddingHorizontal: 5, paddingLeft: 10 }} />}
                    placeholder="Email ID"
                    onChangeText={(email) => setEmailId(email)}
                    _focus={{ backgroundColor: '#fff' }}
                />
                <Tooltip msg={USERNAME_TOOLTIP_MSG} />


            </HStack>


            <HStack justifyContent={'center'} alignItems={'center'} marginY={5}>
                <Input
                    w={'85%'}
                    h={50}
                    p={2}
                    // m={5}
                    bg={'#fff'}
                    shadow={2}
                    rounded={10}
                    borderColor={'gray.300'}
                    fontSize={12}
                    type={show ? "text" : "password"}
                    InputLeftElement={<FontAwesomeIcon name="lock" size={20} style={{ paddingHorizontal: 5, paddingLeft: 10 }} />}
                    InputRightElement={
                        <Pressable onPress={() => setShow(!show)}
                        >
                            <MaterialIcon name={show ? "visibility" : "visibility-off"}
                                size={20}
                                style={{ paddingHorizontal: 5, paddingRight: 10 }}
                            />
                        </Pressable>
                    }
                    placeholder="Password"
                    onChangeText={(pwd) => setPassword(pwd)}
                    _focus={{ backgroundColor: '#fff' }}
                />
                {/* <View style={{width:'2%',backgroundColor:"orange",paddingLeft:50}}> */}
                    {/* <View style={{paddingHorizontal:10}}> */}
                    <Tooltip msg={PASSWORD_TOOLTIP_MSG} />
                    {/* </View> */}
                    {/* <Text style={{width:10,paddingHorizontal:10}}>i</Text> */}
                {/* <Tooltip msg={PASSWORD_TOOLTIP_MSG} /> */}
                {/* </View> */}
               
            </HStack>

            <TouchableOpacity
            //  onPress={onPressForgotPassword}
            //style={{justifyContent:'flex-end'}}
            >
                <Text style={{textAlign:'right'}}>Forgot Password?{(inputValidation).toString()}</Text>
            </TouchableOpacity>
            <Button
                isLoading={loading}
                isDisabled={!inputValidation}
                isLoadingText="Log In"
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
                Log In
            </Button>
        </LinearGradient>
    )
}


export default Login;


// <TouchableOpacity
//             //  onPress={onPressForgotPassword}
//             >
//                 <Text>Forgot Password?{(inputValidation).toString()}</Text>
//             </TouchableOpacity>