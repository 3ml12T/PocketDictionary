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
//import Icon from '@mdi/font';
import { mdiMenu } from '@mdi/js';
import WordBlock from './components/WordBlock';

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
            <Image
              source={(uri = 'https://img.icons8.com/cotton/2x/menu.png')}
              style={styles.logo}
            />
            <Text style={styles.TitleText} numberOfLines={1}>
              Dictionary 1 - French
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
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    borderRadius: 30 / 2,
    justifyContent: 'top',
    alightItems: 'right',
    marginTop: 10,
    marginLeft: 10,
  },
  TitleText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    marginTop: -30,
    marginLeft: 55,
    flexWrap: 'wrap',
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
    backgroundColor: '#EBEBEB',
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
