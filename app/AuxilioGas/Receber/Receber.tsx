import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeraFeitoOPagamento, HeaderGasReceber, HeaderJovemComo } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Receber() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" >
            <HeaderGasReceber/>

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                       O QUE FAZER PARARECEBER O AUXÍLIO GÁS
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{   color: "black", fontSize:13, marginBottom: 10}}>
                        Para receber o aucílio gás, a família deve estar inscritas no Cadastro Único e possuior renda familiar mensal menor ou igual a meio salário-mínimo por pessoa.
                    </Text>
                    <Text style={{   color: "black", fontSize:13, marginBottom: 10}}>
                       A inscrição no Cadastro ùnico é um pré-requisito, mas não implica na entrada imediata das famílias no Programa, nem no recebimento do benefício.
                       </Text>


                </View>
                

                
            </View>


            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/AuxilioGas/AuxilioGas"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </Pressable>

            </View>




        </ImageBackground>

    )
}

const styles = StyleSheet.create({

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
        height: "auto",
        backgroundColor: "#FAFAD2",
        padding: 15,
        marginTop: 20,
        width: "90%",
        margin: "auto",
        borderRadius: 10,


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
