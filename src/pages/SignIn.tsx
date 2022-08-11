import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Alert} from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => {
    Alert.alert('알림', '안녕');
  }, []);

  const canGoNext = !email || !password;

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          placeholder="이메일을 입력해주세요"
          onChangeText={onChangeEmail}
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력해주세요"
          onChangeText={onChangePassword}
          style={styles.textInput}
        />
      </View>
      <View>
        <Pressable
          onPress={onSubmit}
          style={
            canGoNext
              ? styles.loginButton
              : [styles.loginButton, styles.loginButtonActive]
          }
          disabled={canGoNext}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 15,
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {},
  buttonZone: {
    alignItems: 'center',
  },
});
export default SignIn;
