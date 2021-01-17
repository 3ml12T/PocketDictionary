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

import WordBlock from './components/Word';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

const edit = () => {
  alert('You are now editing this entry!');
};

export default class VerticalStackLayout extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.box, styles.box1]}>
            <TouchableOpacity>
              <Image
                source={require('./assets/menu.png')}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.TitleText} numberOfLines={1}>
              Vocab for Writing
            </Text>
          </View>
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.letter}>D</Text>
            <WordBlock word="Dashing" definition="ahhh"/>
            <WordBlock word="Delivery" definition="I am delivering food oh such good food yummy yummy yummy"/>
            
            <Text style={styles.letter}>F</Text>
            <WordBlock word="Fashion" definition="ahhh"/>
            <WordBlock word="Friendship" definition="hehehaha we know each other welllll"/>
            <WordBlock word="Forbid" definition="never never not allowed angeryyyy"/>
            <WordBlock word="Fundraise" definition="money money gib money please i promise its for a good cause maybe not but moonnnennyyyyy"/>
            <WordBlock word="Fundraise" definition="money money gib money please i promise its for a good cause maybe not but moonnnennyyyyy"/>
            <WordBlock word="Fashion" definition="ahhh"/>
            <WordBlock word="Friendship" definition="hehehaha we know each other welllll"/>
            <WordBlock word="Forbid" definition="never never not allowed angeryyyy"/>
            <WordBlock word="Fundraise" definition="money money gib money please i promise its for a good cause maybe not but moonnnennyyyyy"/>
            
          </View>
        </View>
      </ScrollView>
    );
  }
}

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
  logo: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: 'top',
    alightItems: 'right',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  TitleText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    marginTop: -40,
    marginLeft: 55,
    flexWrap: 'wrap',
    marginBottom:10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    flex: 1,
    height: box_height,
  },
  box1: {
    flex: 1.5,
    backgroundColor: '#2463FC',
  },
  box2: {
    flex: 3,
    backgroundColor: '#FAFAFA',
  },
  box3: {
    flex: 8,
    backgroundColor: '#FAFAFA',
  },
});
