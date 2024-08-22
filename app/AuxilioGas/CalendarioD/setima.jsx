import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput, Image } from "react-native";
import { Link } from "expo-router";
import {  HeaderGasCalendario } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Primeira() {

    const [number, onChangeNumber] = React.useState('');
    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <HeaderGasCalendario />
            <View style={{ height: 530, width: "100%", }}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        DATA DE PAGEMTO PARA O NIS FINAL 7
                    </Text>

                </View>
                <View style={styles.container}>
                    <View style={styles.lista}>
                        <Text>AGOSTO</Text>
                        <Text>DIA 26</Text>

                    </View>
                    <View style={styles.lista}>
                        <Text>SETEMBRO</Text>
                        <Text>DIA 27</Text>
                    </View>

                    <View style={styles.lista}>
                         <Text>OUTUBRO</Text>
                         <Text>DIA 26</Text>
                    </View>

                    <View style={styles.lista}>    
                         <Text>NOVEMBRO</Text>
                         <Text>DIA 25</Text>
                    </View>

                    <View style={styles.lista}>  
                         <Text>DEZEMBRO</Text>
                         <Text>DIA 20</Text>
                    </View>


                </View>

            </View>








            <View style={styles.containerButton}>
                <Pressable style={styles.buttonVoltar} >
                    <Link href={"/BolsaFamilia/CalendarioDePagamento/CalendarioDePagamento"}>
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
        height: "100%",

    },
    imagem: {
        width: '100%', // Ajusta a largura da imagem para preencher a largura do contêiner
        height: 320, // Altura da imagem
        resizeMode: 'contain', // Mantém a proporção da imagem
        marginVertical: 20, // Espaçamento vertical
    },
    Titulo: {
        height: 50,
        width: 300,
        backgroundColor: "gray",
        padding: 15,
        justifyContent: "center",


        borderTopEndRadius: 15,
        borderBottomRightRadius: 15,

    },
    textTitulo: {
        color: "white",

    },
    container: {
        height: 350,
        width: "90%",
       

        marginHorizontal: "auto",
        marginTop: 10,
        marginBottom: 10,

    },

    lista: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:15,

        backgroundColor: "#FFFFFF",
        width: 350,
        height: 70,
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
        marginTop:20
        

    },


    containerButton: {
        height: 55,
        width: "100%",
        marginTop: 45


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




})

