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
            <TouchableOpacity>
              <Image
                source={require('./assets/menu.png')}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.TitleText} numberOfLines={1}>
              Vocab for Writing
            </Text>
            <TouchableOpacity>
              <Image
                source={require('./assets/whitepencil.png')}
                style={styles.editLogo}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.letter}>D</Text>
            <WordBlock word="Dashing" definition="Moving quickly, in a sprightly manner"/>
            <WordBlock word="Delivery" definition="To transport from one location to another for the purpose of changing permissions, usually to that of the receiver"/>
            
            <Text style={styles.letter}>F</Text>
            <WordBlock word="Family" definition="Members of the same household, usually related by blood or some form of kinship"/>
            <WordBlock word="Fashion" definition="The concept of dress or appearance "/>
            <WordBlock word="Friend" definition="Someone with which the subject has a close acquaintanceship with"/>
            <WordBlock word="Forbid" definition="To be disallowed"/>
            <WordBlock word="Fundraise" definition="The practice of raising funds, or money, generally for a charitable purpose"/>

            <Text style={styles.letter}>M</Text>
            <WordBlock word="Mass" definition="Weight"/>
            <WordBlock word="Mill" definition="A location where wheat is ground into flour"/>
            <WordBlock word="Miss" definition="To feel the absence of"/>
            <WordBlock word="Morbid" definition="To be of solemn nature, associated with death"/>
            <WordBlock word="Mourn" definition="To lament, usually the passing of another"/>
            <WordBlock word="Murder" definition="To end the life of another"/>
            
            
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  editLogo: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    alightItems: 'left',
    marginTop: -33,
    marginLeft: 280,
    marginBottom: -100,
  },
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
    marginLeft: 20,
    marginTop: 5,
  },
  letter: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 4,
    fontSize: 15,
    borderBottomColor: '#DEE5F4',
    borderBottomWidth: 1,
  },
  logo: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    alightItems: 'right',
    marginTop: 10,
    marginLeft: 15,
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
});
