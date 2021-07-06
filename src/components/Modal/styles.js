import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: absolute;
`;

export const ModalView = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  width: 100%;
  bottom: 0;
  position: absolute;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 25px 0;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.View`
  width: 50px;
  height: 5px;
  background: #ccc;
  border-radius: 50px;
  align-self: center;
  margin-top: 5px;
`;

export const Text = styled.Text`
  margin-top: 30px;
  padding: 0 40px;
  text-align: center;
`;

export const InputSearch = styled.TextInput`
  width: 90%;
  height: 50px;
  border-radius: 30px;
  margin: 30px 0 0;
  padding: 0 0 0 20px;
  border: 1px solid #ccc;
`

export const Btn = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border-radius: 30px;
  background: #389ADB;
  margin: 30px 15px;
  justify-content: center;
  align-items: center;
`;

export const TextBtn = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
`;
