import react, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Header, Icon, Button, Input, ListItem } from'react-native-elements';

export default function App() {
  const [product, onChangeProduct] = useState("");
  const [amount, onChangeAmount] = useState("");
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data, {key: product, amount: amount}]);
    onChangeProduct("");
    onChangeAmount("");
  }

  const clearItem = () => {
    setData([]);
  }

  const deleteItem = (item)=>{
    console.log(item);
    console.log("Hi");
    var myIndex = data.indexOf(item);
    if (myIndex !== -1) {
    dataCopy = [...data]
    dataCopy.splice(myIndex, 1);
    setData(dataCopy)
    }
  }

  return (
    <View style={styles.container}>
      <Header centerComponent={{ text: 'SHOPPING LIST', style: { color: '#fff' } }}/>
      <Input   
        placeholder='Product' 
        label='PRODUCT'  
        onChangeText={product => onChangeProduct(product)} value={product} />
       <Input   
        placeholder='Amount' 
        label='AMOUNT'  
        onChangeText={amount => onChangeAmount(amount)} value={amount} />
      <Button
                onPress={addItem}
                title="SAVE"
                icon={{
                  name: 'save',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />

      <View style={styles.containerTwo}>
        <Text style={{color: "blue", fontWeight: "bold", marginTop: 10}}>Shopping List</Text>
        <FlatList
          data={data}
          renderItem={({item}) =><View style={styles.smallcontainer}><Text>{item.key}, {item.amount}</Text>          
          <Icon type="material" reverse color="lightblue" name='delete' onPress={deleteItem}/>
          </View>}
          keyExtractor={(item, index) => index.toString()}
        />  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  containerTwo: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallcontainer: {
    display: 'flex', 
    flexDirection: 'row'
  },

  input: {
    height: 40,
    width: '100%', 
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
