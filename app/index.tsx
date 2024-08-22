import { ImageBackground, Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors"
import { AdMobBanner } from 'expo-ads-admob';
export default function Index() {

  return (
    <ImageBackground source={require("../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
   


      <Pressable style={styles.button} >

        <Link href={"/segunda"}>
          <Text style={{ color: "white", fontSize: 15 }}>CONTINUAR</Text>
        </Link>

      </Pressable>


    </ImageBackground>

  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "auto",
    backgroundColor: "red"

  },
  image: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "auto",
    height: "100%"
  },
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: 'blue',
    height: "auto",
    width: "35%",

    marginBottom: 100,
    padding: 15,
    borderRadius: 10


  }

})


