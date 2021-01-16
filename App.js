import React, { Component } from 'react';
import {
  Text,
  Icon,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
 
var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;
 
export default class VerticalStackLayout extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
              <Image
                source={uri = 'https://img.icons8.com/cotton/2x/menu.png'} 
                style={styles.logo} 
              />
              <Text style={styles.TitleText} numberOfLines={1}>
                Dictionary 1 - French
              </Text>
            </View>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.letter}>
                D
              </Text>
              <Text style={styles.words}>
                Dashing
                <Image
                source={uri = 'https://image.flaticon.com/icons/png/512/84/84380.png'} 
                style={styles.like} 
              />
                <Text style={styles.definition} numberOfLines={2}>
                  {"\n"}
                  let this be a really really realllllyyyyy long definition that can't fit what will happen!!!!
                </Text>
              </Text>
              
              <Text style={styles.words}>
                Dictionary
                <Image
                source={uri = 'https://image.flaticon.com/icons/png/512/84/84380.png'} 
                style={styles.like} 
                />
                <Text style={styles.definition} numberOfLines={2}>
                  {"\n"}
                  let this be another really really realllllyyyyy long definition that can't fit what will happen!!!!
                </Text>
              </Text>
            </View>
            <View style={[styles.box, styles.box3]}>
            <Text style={styles.letter}>
                F
              </Text>
              <Text style={styles.words}>
                Famous
                <Image
                source={uri = 'https://image.flaticon.com/icons/png/512/84/84380.png'} 
                style={styles.like} 
                />
                <Text style={styles.definition} numberOfLines={2}>
                  {"\n"}
                  let this be another really really realllllyyyyy long definition that can't fit what will happen!!!!
                </Text>
              </Text>

              <Text style={styles.words}>
                Friend
                <Image
                source={uri = 'https://image.flaticon.com/icons/png/512/84/84380.png'} 
                style={styles.like} 
              />
                <Text style={styles.definition} numberOfLines={2}>
                  {"\n"}
                  let this be a really really realllllyyyyy long definition that can't fit what will happen!!!!
                </Text>
              </Text>
              
              <Text style={styles.words}>
                Fundraise
                <Image
                source={uri = 'https://image.flaticon.com/icons/png/512/84/84380.png'} 
                style={styles.like} 
                />
                <Text style={styles.definition} numberOfLines={2}>
                  {"\n"}
                  let this be another really really realllllyyyyy long definition that can't fit what will happen!!!!
                </Text>
              </Text>
            </View>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  like: {
    width: 15,
    height: 15,
    borderRadius: 15/2,
    marginLeft: 300,
    marginTop: -20,
},
  definition: {
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
    borderRadius: 30/2,
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
    flexWrap: 'wrap'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    flex: 1,
    height: box_height
  },
  box1: {
    flex: 1.5,
    backgroundColor: '#EBEBEB'
  },
  box2: {
    flex: 3,
    backgroundColor: '#FAFAFA',
  },
  box3: {
    flex: 8,
    backgroundColor: '#FAFAFA'
  }
});