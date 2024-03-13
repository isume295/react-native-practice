import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from "react-native"
import styled from "@emotion/native";
import { ColorProps, color } from 'styled-system';
import { Entypo } from '@expo/vector-icons';


interface LoginProp extends ColorProps { }

const theme = {
    breakpoints: ['576px', '768px', '992px', '1200px'],
}

const Login = ({ navigation }: any) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={100}
        >
            <Container bg={'black'}>
                <Content>
                    <Entypo name="lock" size={35} color="black" />
                    <Header>Login to get started</Header>
                    <StyledText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam qui ipsam, ipsum!</StyledText>
                    <StyledInput
                        placeholder="Email"
                    />
                    <StyledInput
                        placeholder="Password"
                        secureTextEntry
                    />
                    <LoginBtn onPress={() => navigation.navigate('Home')}>
                        <LoginTxt>Login</LoginTxt>
                    </LoginBtn>
                    <Text>You dont have account? signup</Text>
                </Content>
                <ImageContainer>
                <StyledImage
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEDBF0bbSgYZrYfTGT4CiWfc8D5XTkqwB_WJiC1gr4Q&s',
              }}
            /> 
            </ImageContainer>
            </Container>
        </KeyboardAvoidingView>
    )
}


export default Login;


const Container = styled.View<LoginProp>`
flex: 1;
justify-content: flex-end;
align-items: center;
${color}
position: relative;
`;

const Content = styled.View`
width: 100%;
height: 60%;
padding: 40px;
background-color: white;
border-radius: 40px 40px  0 0;
justify-content: center;
align-items: center;
gap: 10px;
`;

const Header = styled.Text`
font-weight: 900;
color: black;
font-size: 30px;
`;


const StyledInput = styled.TextInput`
width: 100%;
border: 2px solid black;
padding: 15px;
border-radius: 9px

`;

const StyledText = styled.Text`
text-align: center;
margin-bottom: 10px;
`;

const LoginBtn = styled.TouchableOpacity`
width: 100%;
border: 2px solid black;
background-color: black;
padding: 15px;
border-radius: 9px;
justify-content: center;
align-items: center;
`;

const LoginTxt = styled.Text`
color: white;
font-weight: 600;
font-size: 16px;
`;

const ImageContainer = styled.View`
position: absolute;
top: 15%;
z-index: 1000;
`;

const Img = styled.Image`
width: 30%;
height: 30%;
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
