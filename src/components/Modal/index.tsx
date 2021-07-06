import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store/ducks';
import { ModalProps } from './interface';

import {
  Container,
  ModalView,
  Indicator,
  Text,
  InputSearch,
  Btn,
  TextBtn
} from './styles';

const AnimatedContainer = Animatable.createAnimatableComponent(Container);
const AnimatedModal = Animatable.createAnimatableComponent(ModalView);

const Modal: React.FC<ModalProps> = (props) => {
  const { search } = props;
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const { show } = useSelector((state: RootState) => state.modal);

  const setModal = () => {
    dispatch({ type: "SET_MODAL", show: !show });

    if (city.length > 2) {
      search(city);
      setCity('');
    }
  };

  return (
    show ? (
      <AnimatedContainer animation="fadeInUp" duration={400}>
        <AnimatedModal>
          <Indicator />
          <Text>
            Pesquise uma cidade para saber suas condições climáticas
          </Text>

          <InputSearch
            placeholder="Digite o nome da cidade"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="send"
            value={city}
            onChangeText={setCity}
            onSubmitEditing={setModal}
          />
          <Btn onPress={setModal}>
            <TextBtn>{city.length > 2 ? 'Pesquisar' : 'Fechar'}</TextBtn>
          </Btn>
        </AnimatedModal>
      </AnimatedContainer>
    ) :
      <></>
  );
};

export default Modal;