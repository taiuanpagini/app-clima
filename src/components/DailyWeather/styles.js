import styled from 'styled-components/native';
import Refresh from '~/assets/images/refresh';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ImageWeather = styled.Image`
    width: 100px;
    height: 100px;
`;

export const City = styled.Text`
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    color: #fff;
`;

export const Forecast = styled.Text`
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin: 5px 0 0;
    color: #fff;
`;

export const Weather = styled.Text`
    font-size: 75px;
    font-weight: 200;
    text-align: center;
    color: #fff;
`;

export const MinMax = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const MaxWeather = styled.Text`
    color: #fff;
`;

export const MinWeather = styled.Text`
    margin-left: 10px;
    color: #fff;
`;

export const SunContainer = styled.View`
    flex-direction: row;
    margin-top: 30px;
`;

export const SunsetRise = styled.View`
    justify-content: center;
    align-items: center;
    margin: 0 20px;
`;

export const TextSun = styled.Text`
    color: #fff;
    font-size: 18px;
    margin-top: 10px;
`;

export const ContainerComplement = styled.View`
    width: 100%;
    padding: 0 40px;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 50px;
`;

export const Complement = styled.View`
    justify-content: center;
    align-items: center;
`;

export const TextComplement = styled.Text`
    margin-top: 16px;
    color: #fff;
`;

export const TextError = styled.Text`
    font-size: 20px;
    color: #fff;
    text-align: center;
`;

export const BtnRetry = styled.TouchableOpacity`
    margin-top: 16px;
    color: #fff;
    border: 1px solid #FFF;
    background: #fff;
    border-radius: 5px;
    padding: 10px 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const IconRefresh = styled(Refresh)``;

export const TextBtn = styled.Text`
    color: #389ADB;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
`;

export const ContainerBtnTop = styled.View`
    width: 70px;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 9999;
    flex-direction: row;
    justify-content: space-between;
`;

export const BtnHome = styled.TouchableOpacity`
    
`;