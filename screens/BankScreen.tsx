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


type Props = NativeStackScreenProps<RootStackParamList, "Bank">;
// Define props type for MainScreen component
interface BankScreenProps {
  // Add any props your component requires
}

// Define MainScreen component with props
const BankScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  // Use props here if needed
  return (
    <SafeAreaView>
    <View
      style={{
        padding: Spacing * 0,
        flexDirection: 'row', // Added flexDirection to arrange the icons horizontally
        justifyContent: 'space-between', // Added to space the icons
        alignItems: 'center', // Added to vertically align the icons
      }}
    >
        <Ionicons name="list" size={30} color="black" style={{ marginHorizontal: Spacing }} />

      <TouchableOpacity onPress={() => navigate("Person")}>
        <Ionicons name="cog" size={24} color="black" style={{ marginHorizontal: Spacing }} />
      </TouchableOpacity>
    </View>
    <View>
      <View
        style={{
          alignItems: "center",
        }}
      >
          <TouchableOpacity
            onPress={() => navigate("Person")}
            style={{
              paddingVertical: Spacing * 0,
              paddingHorizontal: Spacing * 0,
              width: "80%",
              marginBottom: Spacing, // Added to reduce space between Welcome Name and image
            }}
          >
              <Text
                style={{
                  fontSize: 25,
                  maxWidth: "100%",
                  textAlign: "center",
                  fontWeight: 'bold',
                  color: "gray", 
                }}
              >
                 Name Surname
              </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.backgroundImage}
            resizeMode="contain"
            source={require("../assets/images/BANKSCREEN.png")}
          >
            <ImageBackground
              style={styles.qrCodeImage}
              resizeMode="contain"
              source={require("../assets/images/qrcode.png")}
            />
          </ImageBackground>
        </View>
        
      </View>
      <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            </View>
      <View
      style={{
        paddingHorizontal: Spacing*3,
      }}>
      <Text 
      style={{
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: Spacing*2,
        paddingTop: Spacing*3
        }}>
          DOCUMENT TRANSFER</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Spacing }}>
        <View style={styles.iconContainer}>
          <Ionicons name="cash" size={40} color="black" />
          <Text style={styles.iconText}>Pay</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="wallet" size={40} color="black" />
          <Text style={styles.iconText}>Wallet</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="calendar" size={40} color="black" />
          <Text style={styles.iconText}>Monthly</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="link" size={40} color="black" />
          <Text style={styles.iconText}>Link</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Spacing }}>
        <View style={styles.iconContainer}>
          <Ionicons name="cloud" size={40} color="black" />
          <Text style={styles.iconText}>Bank</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="card" size={40} color="black" />
          <Text style={styles.iconText}>Recharge</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="key" size={40} color="black" />
          <Text style={styles.iconText}>Key</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="home" size={40} color="black" />
          <Text style={styles.iconText}>Loan</Text>
        </View>

      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    paddingBottom: Spacing
  },
  iconText: {
    fontSize: 13,
    color: 'black',
    marginTop: 5,
  },
  imageContainer: {
    flex: 1,
    paddingVertical: Spacing*15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    height: height / 2.32,
    width: 400,
  },
  qrCodeImage: {
    position: 'absolute',
    height: '75%', // Adjust as needed
    width: '75%', // Adjust as needed
    top: '16%', // Adjust as needed
    left: '22%', // Adjust as needed
    alignItems: 'center',
  },
});

export default BankScreen;