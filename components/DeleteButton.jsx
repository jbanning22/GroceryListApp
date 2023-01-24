import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const DeleteButton = props => {
  const {deleteItem, itemID} = props;

  return (
    <View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => deleteItem(itemID)}>
        <FontAwesomeIcon
          icon={faTrashCan}
          onPress={() => deleteItem(itenID)}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 1,
    width: 1,
  },
  iconStyle: {
    color: 'grey',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
