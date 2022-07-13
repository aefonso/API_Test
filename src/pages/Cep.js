import {View, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default props => {

    const [cep, setCep] = useState('')

    async function buscarCep(){
        axios.get('https://viacep.com.br/ws/01001000/json/')
    }

    return(
        <View>
            <Text>Tela Cep</Text>
            <TextInput 
                placeholder="CEP somente números"
                onChangeText={setCep}  
            />
            <Button
                 title="Pesquisar" 
                 onPress={buscarCep}
            />
            <Text>Logradouro: </Text>
        </View>
    )
}
