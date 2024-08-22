import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeraFeitoOPagamento, HeaderJovemCalendario, HeaderJovemComo } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Calendario() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderJovemCalendario />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        SELECIONE SEU MÊS DE NASCIMENTO
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                <View style={styles.grid}>
                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>JANEIRO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>FEVEREIRO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>MARÇO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>ABRIL</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>MAIO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>JUNHO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>JULHO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>AGOSTO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>SETEMBRO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>OUTUBRO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>NOVEMBRO</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"}  >
                                    <Text style={styles.text}>DEZEMBRO</Text>
                                </Link  >
                            </Pressable>


                        </View>





                </View>



            </View>


            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/BolsaJovem/BolsaJovem"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </Pressable>

            </View>




        </ImageBackground>

    )
}

const styles = StyleSheet.create({


    image: {

        display: "flex",

        width: "auto",
        height: "100%"
    },


    Titulo: {
        height: 60,
        width: 300,
        marginHorizontal: "auto",
        backgroundColor: "blue",
        padding: 15,
        justifyContent: "center",
        borderRadius: 15



    },
    textTitulo: {
        color: "white",

    },
    view: {
        height: "70%",
        width: "100%",
        alignItems:"center"
        // backgroundColor:"green"

    },
    textcontainer: {
        height: "auto",
        // backgroundColor: "red",
        padding: 10,
        marginTop: 20


    },
    text: {
        color: "white",


    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // backgroundColor:"green",

        height: 320,

        maxWidth: 330,
        padding: 0,
        margin: 0,
    },
    item: {
        flexBasis: '40%',// Aproximadamente 1/3 do espaço disponível
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


        backgroundColor: '#4CAF50',


        height: 60,
        width: 60,
        margin: 5,

        borderRadius: 10
    },


})


const style = StyleSheet.create({
    container: {

        height: "auto",
        width: "100%",
        padding: 15

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
