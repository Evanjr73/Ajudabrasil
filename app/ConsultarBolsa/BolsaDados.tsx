import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderBolsa } from "../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../constants/Colors"


export default function BolsaDados() {

    const [number, onChangeNumber] = React.useState('');
    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            {/* <View style={styles.header}>
            <Text>
                NOVO BOLSA FAMILIA
            </Text>

        </View> */}
            <HeaderBolsa>
            </HeaderBolsa>




            <View style={{ height: "65%", width: "100%", marginBottom: 15 }}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 20, marginBottom: 5 }}>
                            DADOS INFORMADOS
                        </Text>


                        <View style={styles.cardCotainer}>



                        </View>
                        <Pressable style={styles.buttonCalcular}>
                            <Text style={{color:"white"}} >
                                Calcular Benefício
                            </Text>

                        </Pressable>



                    </View>


                </View>

                <View style={styles.container}>

                    <View style={styles.view}>
                        <View style={styles.Titulo}>
                            <Text style={styles.textTitulo}>
                                INSTALE O APLICATIVO CAIXA TEM
                            </Text>


                        </View>
                        <View style={styles.textcontainer}>
                            <Text style={{ color: "white", fontSize: 10 }}>
                                INSTALE O APLICATIVO CAIXA TEM
                            </Text>


                        </View>



                    </View>



                </View>


            </View>


            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/ConsultarBolsa/BolsaDados"}>
                        <Text style={{ color: "white", fontSize: 15 }}>CONATINUAR</Text>
                    </Link>

                </Pressable>


            </View>


            {/* //////////////////////////////////////////////////// */}









        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    cardCotainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",


        backgroundColor: "gray",
        height: "auto",
        margin:10,
        minHeight:20,
        width: "100%",

    },
    container: {
        display: 'flex',
        height: 250,
        width: "100%",
       
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center"

    },
    view: {
        height: "70%",
        width: "100%",
        // backgroundColor:"green"

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
    textcontainer: {
        height: "auto",
        backgroundColor: "gray",
        padding: 10,
        marginTop: 20


    },
    card: {
        flexDirection: "column",
        alignItems: "center",
        width: "90%",
        height: "auto",
        backgroundColor: "white",
        borderRadius: 30,
        padding: 20

    },
    image: {

        display: "flex",
        alignItems: "center",

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
    buttonCalcular: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'blue',
        height: 50,


        width: "70%",
        padding: 15,
        borderRadius: 35,
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },



})
const style = StyleSheet.create({
    container: {
        display: "flex",
        height: 55,
        width: "100%",
      
        alignItems: "flex-end"
    },

    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'green',
        height: 50,
        width: "35%",
        color: "black",
        marginBottom: 100,
        padding: 5,
        borderRadius: 10
    },


})
