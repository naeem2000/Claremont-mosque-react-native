import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  Linking,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Donate() {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/image32.png")}
        resizeMode="cover"
      >
        <View style={{ top: 0, left: 5, position: "absolute" }}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 85, height: 50 }}
          />
          <Text style={{ fontSize: 12, textAlign: "center", color: "white" }}>
            Claremont
          </Text>
          <Text style={{ fontSize: 10, textAlign: "center", color: "white" }}>
            Main Road Mosque
          </Text>
        </View>
        <View style={styles.header}>
          <View style={styles.overlay}>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                color: "white",
                fontWeight: "500",
              }}
            >
              Claremont Main Road Mosque{"\n"}Donations
            </Text>
          </View>
        </View>
        <Text
          onPress={() => Linking.openURL("https://www.youtube.com/c/CMRMmedia")}
          style={{
            alignSelf: "flex-end",
            color: "white",
            fontSize: 18,
          }}
        >
          Subscribe <AntDesign name="youtube" size={25} color="red" />
          {"\u00A0"}
          {"\u00A0"}
        </Text>
      </ImageBackground>
      <Image source={require("../assets/donationsmain.png")} />
      <Text
        style={{
          color: "#355235",
          fontSize: 25,
          textAlign: "center",
          margin: 10,
          marginTop: 20,
        }}
      >
        BANKING DETAILS
      </Text>
      <View style={styles.lineStyle} />
      <Text
        style={{
          color: "#355235",
          fontSize: 17,
          padding: 20,
        }}
      >
        Claremont Main Road Mosque Building Fund
      </Text>
      <Text
        style={{
          color: "#5C5C5C",
          fontSize: 17,
          padding: 20,
        }}
      >
        Bank: First National Bank
        {"\n"}
        Branch: Vineyard
        {"\n"}
        Branch Code: 2000109
        {"\n"}
        Account No.: 62666627939
      </Text>
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <Pressable style={{ borderTopWidth: 1 }}>
          <Text style={styles.donateButton}>Mosque Banking Details</Text>
        </Pressable>
        <Pressable style={{ borderTopWidth: 1, borderBottomWidth: 1 }}>
          <Text style={styles.donateButton}>Madrassah Banking Details</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <View style={{ alignSelf: "center", marginTop: 15 }}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 85, height: 50 }}
          />
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Claremont
          </Text>
          <Text style={{ fontSize: 10, textAlign: "center", color: "white" }}>
            Main Road Mosque
          </Text>
        </View>
        <View style={styles.footerLinks}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white" }}>About</Text>
            <Text style={{ color: "white" }}>Jumu’ah</Text>
            <Text style={{ color: "white" }}>Ramadaan</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white" }}>Media</Text>
            <Text style={{ color: "white" }}>Donate</Text>
            <Text style={{ color: "white" }}>Contact</Text>
            <Text style={{ color: "white" }}>Archives</Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.footerItems}>
            <Text
              style={{ color: "white", fontWeight: "bold", textAlign: "left" }}
            >
              Address{"\n"}
            </Text>
            <Text style={styles.subText}>
              40 - 42 Main Road, Claremont, Cape Town, Western Cape, RSA{"\n"}
            </Text>
          </View>
          <View style={styles.footerItems}>
            <Text
              style={{ color: "white", fontWeight: "bold", textAlign: "left" }}
            >
              Postal Address{"\n"}
            </Text>
            <Text style={styles.subText}>
              P.O. Box 44572, Claremont, 7735{"\n"}
            </Text>
          </View>
          <View style={styles.footerItems}>
            <Text
              style={{ color: "white", fontWeight: "bold", textAlign: "left" }}
            >
              Phone Numbers{"\n"}
            </Text>
            <Text style={styles.subText}>
              Tel: +27 21 683 8384{"\n"}Fax: +27 21 683 8384
            </Text>
          </View>
          <View style={styles.footerItems}>
            <Text
              style={{ color: "white", fontWeight: "bold", textAlign: "left" }}
            >
              Email Address{"\n"}
            </Text>
            <Text style={styles.subText}>
              cmrm@iafrica.com{"\n"}Shariefa Wydeman
            </Text>
          </View>
        </View>
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          Become a Member
        </Text>
        <Text style={{ color: "white", textAlign: "center", marginBottom: 15 }}>
          Download the membership form
        </Text>
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          Join Our WhatsApp Broadcast List
        </Text>
        <Text style={{ color: "white", textAlign: "center" }}>
          WhatsApp 0792314273 with your name and surname to sign up{"\n"}
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>
            Subscribe To Our Weekly Newsletter
          </Text>
          <Pressable style={styles.footerButton}>
            <Text style={{ color: "white" }}>Subscribe</Text>
          </Pressable>
        </View>
        <Text style={{ color: "white", textAlign: "center", marginBottom: 20 }}>
          {"\n"}Privacy Policy | Copyright 2020 Claremont Main Road Mosque |
          Login to our Mobical Site
        </Text>
        <View style={styles.social}>
          <Text style={{ color: "white" }}>Follow:</Text>
          <Text onPress={() => Linking.openURL("http://google.com")}>
            <AntDesign name="facebook-square" size={30} color="blue" />
          </Text>
          <Text onPress={() => Linking.openURL("http://google.com")}>
            <AntDesign name="instagram" size={30} color="purple" />
          </Text>
          <Text onPress={() => Linking.openURL("http://google.com")}>
            <AntDesign name="twitter" size={30} color="aqua" />
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: windowHeight,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    width: windowWidth,
    height: 150,
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#ffffff66",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
  },
  donateButton: {
    padding: 20,
    color: "#598749",
  },
  footer: {
    backgroundColor: "#0D2225",
  },
  footerContainer: {
    marginTop: 30,
    marginLeft: 25,
    marginBottom: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  footerItems: {
    justifyContent: "center",
    width: "35%",
  },
  subText: {
    color: "white",
    textAlign: "left",
  },
  footerButton: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    height: 30,
    width: "25%",
    borderWidth: 3,
    borderColor: "white",
  },
  social: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
});
