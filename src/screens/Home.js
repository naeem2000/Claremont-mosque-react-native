import { ScrollView } from "react-native-virtualized-view";
import { FlatGrid } from "react-native-super-grid";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { Video } from "expo-av";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Linking,
  Dimensions,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";

import {
  featuredVideos,
  khutbah,
  pressStatements,
  ramadaanPlanner,
  upcomingEvents,
} from "../dummyData";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Home() {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/Home-bg.png")}
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
            <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>
              Welcome to the
            </Text>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                color: "white",
                fontWeight: "500",
              }}
            >
              Claremont Main Road Mosque
            </Text>
            <Text style={{ fontSize: 17, textAlign: "center", color: "white" }}>
              The Claremont Main Road Mosque was established in 1854 and is the
              sixth oldest mosque in South Africa
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
      <Image
        source={require("../assets/image11.png")}
        style={{ width: windowWidth }}
      />
      <View>
        <View style={{ padding: 30, alignItems: "center" }}>
          <Image
            source={require("../assets/Rectangle44.png")}
            style={{ resizeMode: "cover" }}
          />
        </View>
        <ImageBackground
          source={require("../assets/image24.png")}
          resizeMode="center"
        >
          <Text style={{ textAlign: "center", fontSize: 23 }}>
            Introduction
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              color: "#B05919",
              textDecorationLine: "underline",
              fontWeight: "bold",
            }}
          >
            About
          </Text>
          <Text style={{ padding: 20, fontSize: 15, marginBottom: 15 }}>
            The Claremont Main Road Mosque (CMRM), established in 1854, has a
            history of critically reflecting on and engaging with issues that
            affect us as Muslim citizens, locally and globally.
            {"\n"}
            {"\n"}
            Many people have been drawn to this mosque over the years because of
            our strong commitment to the anti-Apartheid struggle and our
            compassionate and comprehensive vision of Islam.
            {"\n"}
            {"\n"}
            Join us on our mission to build an institutional legacy for future
            generations, of bearing witness and upholding the virtues of social
            justice and compassion.
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.pressSection}>
        <Image
          source={require("../assets/image11.png")}
          style={{ width: windowWidth }}
        />
        <Image
          source={require("../assets/image17.png")}
          style={{ alignSelf: "center" }}
        />
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 20,
            color: "#B05919",
            fontWeight: "bold",
          }}
        >
          Press Statements
        </Text>
        <SafeAreaView>
          <FlatList
            style={{ marginBottom: 20 }}
            listKey="pressStatements"
            data={pressStatements}
            renderItem={({ item }) => (
              <Text style={{ textAlign: "left", padding: 15, marginBottom: 5 }}>
                <Text style={{ color: "#5C5C5C", fontSize: 23 }}>
                  {item.title}
                </Text>
                {"\n"}
                <Text style={{ color: "#5C5C5C", fontSize: 15 }}>
                  {item.subTitle}
                </Text>
              </Text>
            )}
          />
        </SafeAreaView>
        <View style={{ backgroundColor: "#DFB87D", padding: 20 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#B05919",
              fontSize: 22,
              marginTop: 10,
            }}
          >
            ALLAHUMMA INNI AS’ALUKA
          </Text>
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            {"\n"}اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي
            الدُّنْيَا وَالآخِرَةِ
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            {"\n"}
            Transliteration: Allahumma inni as’alukal-‘afwa wal-‘afiyah
            fid-dunya wal-akhirah English Meaning / Translation: O Allah, I ask
            You for forgiveness and well-being in this world and in the
            Hereafter.
          </Text>
        </View>
      </View>
      <View>
        <ImageBackground
          source={require("../assets/Rectangle15.png")}
          resizeMode="cover"
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "white",
              marginTop: 50,
            }}
          >
            It shumuliyyat al-Islam
          </Text>
          <Text style={{ textAlign: "center", fontSize: 30, color: "white" }}>
            KHUTBAH
          </Text>
          <SafeAreaView>
            <FlatGrid
              itemDimension={130}
              style={styles.khutbahContainer}
              listKey="khutbah"
              data={khutbah}
              renderItem={({ item }) => (
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../assets/pdf-icon.png")}
                    resizeMode="center"
                  />
                  <Text
                    onPress={() =>
                      Linking.openURL("https://www.youtube.com/c/CMRMmedia")
                    }
                  >
                    {item.description}
                  </Text>
                </View>
              )}
            />
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View>
        <Image
          source={require("../assets/Rectangle37.png")}
          style={{ width: windowWidth }}
        />
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <Text
            style={{
              color: "#CA9B56",
              fontSize: 20,
              textDecorationLine: "underline",
            }}
          >
            OUR ACTIVITIES
          </Text>
          <Text style={{ color: "#B05919", fontSize: 25 }}>WHAT WE OFFER</Text>
          <Image
            source={require("../assets/whatweoffer.png")}
            style={{ width: windowWidth }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View>
        <ImageBackground source={require("../assets/Rectangle7.png")}>
          <Text style={styles.ramadaanPlan}>Ramadaan{"\n"}Planner</Text>
          <SafeAreaView>
            <FlatList
              style={styles.ramadaanPlanPdf}
              listKey="ramadaanPlanner"
              data={ramadaanPlanner}
              renderItem={({ item }) => (
                <View>
                  <Image
                    source={require("../assets/pdf-icon.png")}
                    resizeMode="center"
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    onPress={() => Linking.openURL("https://www.google.com")}
                  >
                    Download
                  </Text>
                </View>
              )}
            />
          </SafeAreaView>
          <View style={{ marginBottom: 10 }}>
            <Pressable style={styles.button}>
              <Text style={{ color: "white", padding: 5 }}>
                Ramadaan Package
              </Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={{ color: "white", padding: 5 }}>Fasting</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={{ color: "white", padding: 5 }}>
                COVID Guidelines
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <Image
        source={require("../assets/Rectangle37.png")}
        style={{ width: windowWidth }}
      />
      <View style={{ backgroundColor: "#82CFC1" }}>
        <Text style={styles.intentText}>INTENTION FOR FASTING</Text>
        <Image
          source={require("../assets/image18.png")}
          style={{ width: windowWidth }}
          resizeMode="center"
        />
        <Text
          style={{
            color: "white",
            padding: 20,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Recitation of the Niyyat/intention you can make to fast the entire
          month of Ramadan. Recorded by Imam Rashied in 2020 when the Masjid was
          closed.
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textAlign: "center",
            marginBottom: 25,
          }}
          onPress={() => Linking.openURL("https://youtu.be/LzHjLUPzh0Q")}
        >
          https://youtu.be/LzHjLUPzh0Q
        </Text>
        <Image
          source={require("../assets/Rectangle37.png")}
          style={{ width: windowWidth }}
        />
      </View>
      <View>
        <ImageBackground source={require("../assets/image7(1).png")}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 25,
              marginTop: 100,
            }}
          >
            FEATURED{"\n"}VIDEOS
          </Text>
        </ImageBackground>
        <View style={{ backgroundColor: "black" }}>
          <SafeAreaView>
            <FlatList
              horizontal
              style={styles.video}
              listKey="featuredVideos"
              data={featuredVideos}
              renderItem={({ item }) => (
                <View
                  style={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Video
                    style={{
                      width: windowWidth,
                      height: 200,
                    }}
                    source={{
                      uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                    }}
                    useNativeControls
                    resizeMode="contain"
                  />
                </View>
              )}
            />
            <Image
              source={require("../assets/image9(1).png")}
              style={{ width: windowWidth, height: 200 }}
              resizeMode="stretch"
            />
          </SafeAreaView>
        </View>
      </View>
      <View>
        <ImageBackground
          source={require("../assets/image41.png")}
          resizeMode="cover"
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              marginTop: 100,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            {`Upcoming\t\t`}
            {"\n"}
            {`\t\t Events`}
          </Text>
          <Image
            source={require("../assets/Rectangle37.png")}
            style={{ width: windowWidth }}
          />
        </ImageBackground>
        <Pressable style={styles.buttonUpcoming}>
          <Text style={{ color: "black", padding: 5 }}>View Calendar</Text>
        </Pressable>
      </View>
      <SafeAreaView>
        <FlatGrid
          style={{ marginTop: 10 }}
          itemDimension={130}
          listKey="upcomingEvents"
          data={upcomingEvents}
          renderItem={({ item }) => (
            <View style={{ alignSelf: "center", width: "100%" }}>
              <Text
                style={{
                  color: "#B05919",
                  textDecorationLine: "underline",
                  textAlign: "center",
                }}
              >
                {item.date}
              </Text>
              <Text style={{ textAlign: "center", color: "#9A9A9A" }}>
                {item.description}
              </Text>
              <Image
                source={require("../assets/Rectangle18.png")}
                resizeMode="center"
                style={{ alignSelf: "center" }}
              />
            </View>
          )}
        />
      </SafeAreaView>
      <Image
        source={require("../assets/Rectangle37.png")}
        style={{ width: windowWidth }}
      />
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
  pressSection: {
    backgroundColor: "#F4E4C0",
  },
  khutbahContainer: {
    backgroundColor: "white",
    maxWidth: "90%",
    maxHeight: "65%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 17,
  },
  ramadaanPlan: {
    color: "white",
    fontSize: 25,
    marginTop: 20,
    fontWeight: "bold",
    alignSelf: "flex-end",
    right: 40,
    textAlign: "center",
  },
  ramadaanPlanPdf: {
    alignSelf: "flex-end",
    marginRight: 55,
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 20,
    height: 50,
    width: "35%",
    marginLeft: 50,
    marginBottom: 20,
    backgroundColor: "black",
  },
  buttonUpcoming: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
    height: 50,
    width: "45%",
    backgroundColor: "white",
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  intentText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 20,
  },
  video: {
    display: "flex",
    flexDirection: "row",
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
