import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const AddButton = props => {
  const {addItem} = props;

  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle} onPress={addItem}>
        <Text style={styles.btnTextstyle}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'green',
    height: 40,
    Width: 20,
    padding: 5,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  btnTextstyle: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '600',
  },
});
