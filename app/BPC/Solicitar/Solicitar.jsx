import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderSolicitar } from "../../../components/headerBPC"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function QuemPodera() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderSolicitar/>

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        INSTALE O APLICATIVO CAIXA TEM
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{   color: "white", fontSize:10}}>
                        INSTALE O APLICATIVO CAIXA TEM
                    </Text>


                </View>
                

                
            </View>


            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/BPC/BPC"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </Pressable>

            </View>




        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: 250,
        width: "100%",
        backgroundColor: "red",
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center"

    },
    card: {
        flexDirection: "column",
        alignItems: "center",
        width: "90%",
        height: 200,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 20

    },
    image: {

        display: "flex",

        width: "auto",
        height: "100%"
    },
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
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
    Titulo: {
        height: 60,
        width: 300,
        backgroundColor: "blue",
        padding: 15,
        justifyContent: "center",

        borderTopEndRadius: 15,
        borderBottomRightRadius: 15,

    },
    textTitulo: {
        color: "white",

    },
    view:{
        height:"70%",
        width:"100%",
        // backgroundColor:"green"

    },
    textcontainer:{
        height:"auto",
        backgroundColor:"red",
        padding:10,
        marginTop:20


    },
    text:{
     
    

    },


})


const style = StyleSheet.create({
    container: {

        height: "auto",
        width: "100%",
  
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
        backgroundColor: 'green',
        height: "auto",
        width: "35%",
        color: "black",
        marginBottom: 100,
        padding: 15,
        borderRadius: 10


    }

})
