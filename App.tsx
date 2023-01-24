import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AddButton from './components/AddButton';
import DeleteButton from './components/DeleteButton';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [groceryItem, setGroceryItem] = useState('');
  const [groceries, setGroceries] = useState([]);

  const fetchApi = async () => {
    try {
      const res = await axios.get('http://192.168.1.154:3100/api/v1/groceries');
      console.log('res.data is:  ', res.data);
      setGroceries(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('useEffect is called');
    fetchApi();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderItemStyle}>
        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: '600'}}>
          {item.name}
        </Text>
        {/* <FontAwesomeIcon icon={faTrashCan} /> */}
        <DeleteButton deleteItem={deleteItem} itemID={item.id} />
      </View>
    );
  };

  const addItem = async () => {
    console.log('groceryItem in addItem is : ', groceryItem);
    try {
      const res = await axios.post(
        'http://192.168.1.154:3100/api/v1/groceries',
        {
          name: groceryItem,
        },
      );
      setGroceryItem('');
      fetchApi();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async id => {
    console.log('id in deleteItem is: ', id);
    try {
      const res = await axios.delete(
        `http://192.168.1.154:3100/api/v1/groceries/${id}`,
      );
      console.log('res in deleteItem is:', res);
      fetchApi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.box1}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>Grocery List</Text>
      </View>
      <View>
        <View style={styles.insertItemStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Item"
            value={groceryItem}
            spellCheck={true}
            onChangeText={setGroceryItem}
          />
          <AddButton addItem={addItem} />
        </View>
        <FlatList
          contentContainerStyle={styles.flatlistStyle}
          data={groceries}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInputStyle: {
    height: 40,
    width: 200,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  insertItemStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistStyle: {
    width: 300,
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
  },
  renderItemStyle: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerStyle: {
    paddingTop: 40,
    fontSize: 40,
    // margin: 20,
    padding: 10,
    alignSelf: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
