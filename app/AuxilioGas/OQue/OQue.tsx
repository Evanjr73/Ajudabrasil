import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeraFeitoOPagamento, HeaderGasOQ, HeaderJovemComo } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function OQue() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" >
            <HeaderGasOQ />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        O QUE É O  AUXÍLIOS GÁS
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 14 , marginBottom:10 }}>
                        É um programa de auxilio à compra do gás de cozinha, destinado a famílias de baixa renda. Familias com mulheres vítimas de violência doméstica com medidas protetivas de urgência tém preferéncia.

                    </Text>
                    <Text style={{ color: "black", fontSize: 14 , marginBottom:10 }}>
                        O Programa é gerido pelo Ministério da Cidadania, responsável pelo envio dos recursos para pagamento.
                    </Text>
                    <Text style={{ color: "black", fontSize: 14 , marginBottom:10 }}>
                        A CAIXA e responsável por realizar o pagamento do Auxílio Gás para as pessoas selecionadas pelo Ministério da Cidadania e pela disponibilização de canais para atendimento aos beneficiarios que tenham duvidas sobre o saque do beneficio.
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
        width:"90%",
        margin:"auto",
        borderRadius:10,
        


    },
    text: {
        marginBottom:25


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
