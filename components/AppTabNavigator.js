import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadingMessagesOfWhatsaapScreen from '../screens/ReadingMessagesOfWhatsaapScreen';
import VoiceRecognitionScreen from '../screens/VoiceRecognitionScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: ReadingMessagesOfWhatsaapScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }
  },
  BookRequest: {
    screen: VoiceRecognitionScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  }
});
