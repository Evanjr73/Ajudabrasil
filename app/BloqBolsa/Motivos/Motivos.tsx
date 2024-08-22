import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderProncipais } from "../../../components/headerBloqBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"
import { HeaderOQE } from "@/components/headerEmprestimo";


export default function ReceberBolsa() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <HeaderProncipais />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        Receber BolsaAS TRÊS PRINCIPAIS SITUAÇÕES PARA O CANCELAMENTO DO BOLSA FAMILIA SÃO AS SEGUINTES:
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        ► Inconsistências cadastrais, geralmente em relação à renda informada pelo beneficiário na inscrição do Cadastro Único
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        ► Falta de atualização de dados no mínimo a cada dois anos
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        ► Fim da Regra de Emancipação do Auxílio Brasil: O antigo programa de transferência de renda mantinha em proteção por 24 meses (12 meses no caso de beneficiários BPC e pensionistas) as famílias que atingiam até duas vezes e meia o valor da linha de pobreza (R$ 210), ou seja, R$ 525

                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>

                        O Bolsa Família tem uma regra de proteção em funcionamento desde junho. Por meio dela, a família tem direito a permanecer no programa por mais até dois anos, desde que a renda de cada integrante seja de até meio salário mínimo (R$ 660). O valor do benefício, porém, será reduzido pela metade para os núcleos familiares que conseguem emprego e aumentam a renda.
                    </Text>

                </View>

            </View>


            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/BloqBolsa/BloqBolsa"}>
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
        marginTop: 2,
        marginBottom: 10,
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
