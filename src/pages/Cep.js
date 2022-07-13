import {View, Text, TextInput, Button} from 'react-native';


export default props => {
    return(
        <View>
            <Text>Tela Cep</Text>
            <TextInput placeholder="CEP somente números" />
            <Button title="Pesquisar" />
            <Text>Logradouro: </Text>
        </View>
    )
}
