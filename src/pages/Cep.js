import {View, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default props => {

    const [cep, setCep] = useState('')
    const [cepResultado, setCepResultado] = useState('')

    async function buscarCep(){
        const resultado = await axios.get('https://viacep.com.br/ws/'+cep+'/json/');
        setCepResultado(resultado.data);
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
            <Text>Logradouro: {cepResultado.logradouro} </Text>
            <Text>Bairro: {cepResultado.bairro} </Text>
            <Text>Localidade: {cepResultado.localidade} </Text>
            <Text>Estado: {cepResultado.uf} </Text>
        </View>
    )
}
