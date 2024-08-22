import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderBolsa } from "../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../constants/Colors"


export default function BolsaAdolescente() {

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




            <View style={{ height: "65%", width: "100%", backgroundColor: "green", marginBottom: 15 }}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 20, marginBottom: 5 }}>
                            SIMULAR NOVO BOLSA FAMÍLIA
                        </Text>
                        <Text>
                            Agora informe quantas crianças/adolescentes com idade entre 7 e 17 anos fazem parte do Núcleo Famíliar
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Crianças / Adolecentes"
                            keyboardType="numeric"
                        />

                        {/* <Pressable style={style.buttonn} >

                            <Link href={"/BolsaFamilia/NovoBolsaFamilia"}>
                                <Text style={{ color: "white", fontSize: 15 }}>Consuktar Agora</Text>
                            </Link>

                        </Pressable> */}



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
    container: {
        display: 'flex',
        height: 250,
        width: "100%",
        backgroundColor: "red",
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center"

    },
    view:{
        height:"70%",
        width:"100%",
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
    textcontainer:{
        height:"auto",
        backgroundColor:"red",
        padding:10,
        marginTop:20


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
        backgroundColor: "blue",
        alignItems: "flex-end"
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
        justifyContent: "center",
        backgroundColor: 'green',
        height: 50,
        width: "35%",
        color: "black",
        marginBottom: 100,
        padding: 5,
        borderRadius: 10
    },
    buttonn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'green',
        height: 50,
        width: "70%",
        color: "black",
        marginTop: 6,

        padding: 5,
        borderRadius: 40
    }


})
