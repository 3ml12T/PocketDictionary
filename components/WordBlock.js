import React, { Component } from 'react';
import {
  Text,
  Icon,
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';

const WordBlock = (props) => {
  return (
    <View>
      <Text style={styles.words}>
              {props.word}
              <TouchableOpacity onPress={this.edit}>
                <View style={styles.button}>
                  <Image
                    source={require('../assets/pencil.png')}
                    style={styles.like}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.definitions} numberOfLines={2}>
                {'\n'}
                {props.definition}
              </Text>
            </Text>
    </View>
  );
}

export default WordBlock

const styles = StyleSheet.create({
  like: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    borderColor: 'black',
    marginLeft: 280,
    marginRight: 40,
    marginTop: -20,
  },
  definitions: {
    fontSize: 10,
    marginRight: 50,
    marginTop: -30,
    marginBottom: 0,
  },
  words: {
    marginLeft: 20,
    marginTop: 5,
  },
});
