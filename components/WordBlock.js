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
                    source={
                      (uri =
                        'https://image.flaticon.com/icons/png/512/84/84380.png')
                    }
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
    marginLeft: 300,
    marginTop: -20,
  },
  definitions: {
    fontSize: 10,
    marginRight: 45,
    marginTop: -30,
    marginBottom: 0,
  },
  words: {
    marginLeft: 10,
    marginTop: 5,
  },
  letter: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 4,
    fontSize: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
