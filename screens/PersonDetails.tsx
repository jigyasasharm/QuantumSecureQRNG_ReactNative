import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../types";
  const { height } = Dimensions.get("window");
  import { Ionicons } from '@expo/vector-icons'; 
  
  
  type Props = NativeStackScreenProps<RootStackParamList, "Person">;
  // Define props type for MainScreen component
  interface BankScreenProps {
    // Add any props your component requires
  }
  
  // Define MainScreen component with props
  const PersonDetails: React.FC<Props> = ({ navigation: { navigate } }) => {
    return(
        <Text>Hello</Text>
    )
    };
    
    export default PersonDetails;