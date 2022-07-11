import React from "react";
import { ScrollView } from "react-native-virtualized-view";
import CalendarPicker from "react-native-calendar-picker";
import { FlatGrid } from "react-native-super-grid";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  SafeAreaView,
  Pressable,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { calendarPageModel, salaahTimes } from "../dummyData";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Calendar() {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/image12.png")}
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
              Claremont Main Road Mosque{"\n"}Calendar
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
      <View style={{ backgroundColor: "#5C5C5C", padding: 10 }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginTop: 10,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Our Monthly Calendar{"\n"}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Keep up to date with all the events happening at Claremont Main Road
          Mosque
        </Text>
      </View>
      <ImageBackground
        source={require("../assets/image33.png")}
        resizeMode="cover"
      >
        <View style={{ backgroundColor: "white" }}>
          <CalendarPicker />
        </View>
        <View
          style={{
            margin: 35,
            marginTop: 100,
            backgroundColor: "#FFFFFF",
            height: 170,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#5C5C5C",
              fontSize: 20,
              marginTop: 20,
              textDecorationLine: "underline",
            }}
          >
            Upcoming Events:
          </Text>
          <Text style={{ textAlign: "center", marginTop: 50 }}>
            There are no events this month
          </Text>
        </View>
      </ImageBackground>
      <View>
        <Image
          style={{ width: windowWidth, height: 180 }}
          source={require("../assets/calendar-body-img.png")}
          resizeMode="cover"
        />
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
          Claremont Mosque’s
        </Text>
        <Text style={{ textAlign: "center", fontSize: 25, color: "#B05919" }}>
          Calendar Page Model
        </Text>
        <View style={styles.lineStyle} />
        <View>
          <SafeAreaView>
            <FlatGrid
              style={{ margin: 7 }}
              itemDimension={180}
              listKey="calendarPageModal"
              data={calendarPageModel}
              renderItem={({ item }) => (
                <View
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    flex: 1,
                    width: windowWidth,
                  }}
                >
                  <View
                    style={{
                      width: "50%",
                      alignContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Text style={{ textAlign: "left" }}>{item.date}</Text>
                  </View>
                  <View
                    style={{
                      width: "50%",
                      alignContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Text style={{ textAlign: "left" }}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              )}
            />
          </SafeAreaView>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            alignItems: "center",
            backgroundColor: "black",
            padding: 30,
          }}
        >
          SALAAH TIMES 2020
        </Text>
        <SafeAreaView>
          <ImageBackground
            source={require("../assets/Rectangle43.png")}
            resizeMode="cover"
          >
            <FlatGrid
              style={styles.salaahTimesContainer}
              listKey="salaahTimes"
              data={salaahTimes}
              renderItem={({ item }) => (
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/Rectangle18.png")}
                    resizeMode="center"
                  />
                  <Text
                    style={{ color: "white" }}
                    onPress={() =>
                      Linking.openURL("https://www.youtube.com/c/CMRMmedia")
                    }
                  >
                    {item.area}
                  </Text>
                </View>
              )}
            />
            <View style={{ backgroundColor: "black", padding: 20 }}>
              <Pressable style={styles.buttonUpcoming}>
                <Text style={{ color: "black", padding: 5 }}>
                  View Calendar
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </View>
      <Image
        source={require("../assets/image16.png")}
        resizeMode="cover"
        style={{ width: windowWidth }}
      />
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          marginTop: 15,
        }}
      >
        LIVESTREAMS
      </Text>
      <View style={styles.lineStyle} />
      <Text
        style={{ fontSize: 17, padding: 20 }}
        onPress={() => Linking.openURL("https://www.youtube.com/c/CMRMmedia")}
      >
        Watch our official livestreams on{" "}
        <AntDesign name="youtube" size={25} color="red" />
      </Text>
      <Text style={{ fontSize: 17, padding: 20 }}>
        Subscribe to our YouTube Channel
      </Text>
      <Pressable style={styles.buttonStreams}>
        <Text style={{ color: "white", fontSize: 15 }}>Subscribe</Text>
      </Pressable>
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
  salaahTimesContainer: {
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonUpcoming: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
    height: 50,
    width: "45%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonStreams: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 5,
    height: 50,
    width: "45%",
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 10,
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
