import { ImageBackground, Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Link } from "expo-router";

export  function ButtonLarge() {
    return (

        <Pressable style={styles.button} >



        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'blue',
        height: 67,
        marginBottom: 10,
        width: "93%",
        padding: 15,
        borderRadius: 10,
        
        


    },
})