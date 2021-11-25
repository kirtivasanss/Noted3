import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class ListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // fontsLoaded: false
    };
  }


  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.listTitleText}>
                {this.props.card.title}
              </Text>
            </View>
            </View>
          </View>
      
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  // storyImage: {
  //   resizeMode: "contain",
  //   width: "95%",
  //   alignSelf: "center",
  //   height: RFValue(250)
  // },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  listTitleText: {
    fontSize: RFValue(25),
    color: "white"
  }
});