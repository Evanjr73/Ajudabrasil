import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput, ScrollView } from "react-native";
import { Link } from "expo-router";
import { HeaderSolicitar } from "../../../components/headerEmprestimo"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Duvidas() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderSolicitar />
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            COMO SOLICITAR O EMPRÉSTIMO CAIXATEM?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            A Caixa Econômica Federal (CEF) lançou um novo microcrédito no valor de até R$ 1 mil para os cidadãos, inclusive para os brasileiros que estão com o nome sujo. É a primeira vez que a Caixa libera empréstimo para os cidadãos que estão negativados.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            O microcrédito poderá ser solicitado a partir do dia 28 de março e
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            diz respeito ao Programa de Simplificação do Microcrédito Digital para Empreendedores, mais conhecido como SIM Digital. A nova modalidade será liberada tanto para pessoas físicas quanto jurídicas. Veja abaixo o valor e as condições:
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Pessoas físicas: será liberado para empréstimo um valor de até R$ 1 mil que terá uma taxa de juros a partir de 1,95% ao mês e um parcelamento de 24 meses. A modalidade será permitida também para quem estiver com nome sujo.

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            Pessoas Jurídicas e MEls: será liberado para empréstimo um valor de até R$ 3 mil, com taxa de juros a partir de 1,99% ao mês e a possibilidade de parcelamento em até 24 meses
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            De acordo com o Ministério do Trabalho e Emprego, o objetivo do microcrédito é fazer o crédito chegar "aos empreendedores individuais, impulsionando a geração de trabalho e renda".
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                        </Text>



                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            COMO SOLICITAR?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            O novo microcrédito será solicitado por meio do aplicativo Caixa Tema partir do dia 28 de março e será feita de forma automática, com a análise do pedido em até uma semana.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Para o MEI a possibilidade de contratação nessa primeira etapa será feita diretamente nas agências da Caixa, mas daqui a 45 dias a contratação também estará disponível por meio do Caixa Tem
                        </Text>


                    </View>



                </View>
            </ScrollView>



            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/Emprestimo/Emprestimo"}>
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
