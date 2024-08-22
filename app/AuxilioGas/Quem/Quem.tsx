import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeraFeitoOPagamento, HeaderGasQuem, HeaderJovemComo } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Quem() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderGasQuem />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        QUEM PODE PARTICIPAR DO AUXÍLIO GÁS
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>

                        São elegiveis ao Programa Auxilio Gas dos Brasileiros:
                    </Text>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>
                        Todas as familias inscritas no CadÚnico, com renda familiar mensal menor ou igual a meio salário-minimo por pessoa, inclusive as familias que recebem beneficios de programas do govemo,


                    </Text>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>

                        As familias que tenham alguma pessoa que mora na mesma casa, que recebe o beneficio de prestação continuada da assistència social, inscritas ou não no Cadunico
                    </Text>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>

                        O beneficio financeiro do Programa Auxilio Gás dos Brasileiros, segue os seguintes criterios
                    </Text>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 1 }}>

                        1-Familias com registro do Cadunico que tenha sido atualizado
                        nos últimos 24 meses;

                    </Text>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 1 }}>
                        II-Familias com menor renda por pessoa;


                    </Text>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 1 }}>

                        III-Familias com maior quantidade de pessoas,

                    </Text>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 1 }}>

                        IV-Familias que recebem beneficio do Programa Auxilio Brasil
                    </Text>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>

                        V-Familias com cadastro qualificado pelo gestor por meio do uso dos dados da averiguação, quando disponíveis.
                    </Text>
                    <Text style={{ color: "black", fontSize: 13, marginBottom: 4 }}>
                        Serão priorizadas as familias com mulheres vitimas de violència doméstica que estejam sob o monitoramento de medidas protetivas de urgência.

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
    view: {
        height: "70%",
        width: "100%",
        // backgroundColor:"green"

    },
    textcontainer: {
        height: "auto",
        backgroundColor: "#FAFAD2",
        padding: 15,
        marginTop: 20,
        width: "90%",
        margin: "auto",
        borderRadius: 10,


    },
    text: {



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
