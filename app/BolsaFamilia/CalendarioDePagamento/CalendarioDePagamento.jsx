import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderBolsaCalendario } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function ConsultarNovoBolsaFamilia() {

    const [number, onChangeNumber] = React.useState('');
    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            {/* <View style={styles.header}>
            <Text>
                NOVO BOLSA FAMILIA
            </Text>

        </View> */}
            <HeaderBolsaCalendario>

            </HeaderBolsaCalendario>
            <View style={styles.Titulo}>
                <Text style={styles.textTitulo}>
                    CLIQUE NA OPÇÃO CORRESPONDENTE AO ÚLTIMO NÚMERO DO SEU NIS
                </Text>

            </View>




            <View style={{ height: "65%", width: "100%", marginBottom: 15 }}>




                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.grid}>
                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}>1</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/segunda"} >
                                    <Text style={styles.text}>2</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/terceira"} >
                                    <Text style={styles.text}>3</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/quarta"} >
                                    <Text style={styles.text}>4</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/quinta"} >
                                    <Text style={styles.text}>5</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/sexta"} >
                                    <Text style={styles.text}>6</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/setima"} >
                                    <Text style={styles.text}>7</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/oitava"} >
                                    <Text style={styles.text}>8</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/nona"} >
                                    <Text style={styles.text}>9</Text>
                                </Link  >
                            </Pressable>

                            <Pressable style={styles.itemm}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"} >
                                    <Text style={styles.text}></Text>
                                </Link  >
                            </Pressable>
                            <Pressable style={styles.item}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/ultima"} >
                                    <Text style={styles.text}>0</Text>
                                </Link  >
                            </Pressable>



                            <Pressable style={styles.itemm}>
                                <Link href={"/BolsaFamilia/CalendarioDePagamento/primeira"}  >
                                    <Text style={styles.text}></Text>
                                </Link  >
                            </Pressable>





                            {/* <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.item}><Text style={styles.text}>2</Text></Link  >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.item}><Text style={styles.text}>3</Text></Link  >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.item}><Text style={styles.text}>4</Text></Link  >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.item}><Text style={styles.text}>5</Text></Link  >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.item}><Text style={styles.text}>6</Text></Link  >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.item}><Text style={styles.text}>7</Text></Link  >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.item}><Text style={styles.text}>8</Text></Link >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.item}><Text style={styles.text}>9</Text></Link  >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.itemm}><Text style={styles.text}></Text></Link  >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.item}><Text style={styles.text}>0</Text></Link  >
                            <Link href={"/BolsaFamilia/CalendarioDePagamento"} style={styles.itemm}><Text style={styles.text}></Text></Link > */}

                        </View>
                        {/* <Pressable style={styles.itemm}><Text style={styles.textt}>0</Text></Pressable> */}




                    </View>



                </View>

                <View style={styles.containerr}>



                </View>


            </View>

            <View style={styles.containerButton}>
                <Pressable style={styles.buttonVoltar} >

                    <Link href={"/home"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </Pressable>


            </View>


            {/* //////////////////////////////////////////////////// */}









        </ImageBackground >
    )
}


const styles = StyleSheet.create({
    image: {

        display: "flex",
        width: "auto",
        height: "100%",

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
    container: {
        display: 'flex',
        marginTop:50,
        height: 380,
        width: "100%",
        // backgroundColor: "red",
  
        alignItems: "center",
        justifyContent: "center"

    },
    containerr: {
        display: 'flex',
        height: 180,
        width: "100%",
        // backgroundColor: "red",
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center"

    },

    card: {
        flexDirection: "column",
        alignItems: "center",
        width: "90%",
        height: 340,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 10

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
    containerButton: {
        height: 55,
        width: "100%",

    },
    buttonVoltar: {
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
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

        height: 320,

        maxWidth: 330,
        padding: 0,
        margin: 0,
    },
    item: {
        flexBasis: '25%',// Aproximadamente 1/3 do espaço disponível
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


        backgroundColor: '#4CAF50',


        height: 60,
        width: 60,
        margin: 10,

        borderRadius: 10
    },
    itemm: {
        flexBasis: '25%',// Aproximadamente 1/3 do espaço disponível
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


   

        height: 60,
        width: 60,
        margin: 10,

        borderRadius: 10


    },

    text: {
        margin: "auto"
    }


})

