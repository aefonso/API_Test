import {View, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default props => {
    const[temp, setTemp] = useState('')
    const[tempResultado, setTempResultado] = useState('')

    async function verificarTemperatura(){
        const resultadoTemperatura = await axios.get('https://goweather.herokuapp.com/weather/'+temp+'')
        setTempResultado(resultadoTemperatura.data);
    }
    return(
        <View>
            <Text>Tela Temperatura</Text>
            <TextInput
                placeholder='Informe uma cidade'
                onChangeText={setTemp} 
            />
            <Button
                title='Pesquisar'
                onPress={verificarTemperatura} 
            />
            <Text>Temperatura: {tempResultado.temperature}</Text>
            <Text>Vento: {tempResultado.wind}</Text>
            <Text>Descrição: {tempResultado.description}</Text>
        </View>
    )
}