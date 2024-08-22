import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput, ScrollView } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeraFeitoOPagamento, HeaderGasDuvidas, HeaderJovemComo } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Duvidas() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" >
            <HeaderGasDuvidas />
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            QUAL É O VALOR DO BENEFÍCIO?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>
                            O valor do beneficio corresponderá a 50% da mildia do preço nacional de referència do botijäo de treze
                            quilogramas de gás de cozinha, sendo que a Agencia Nacional do Petróleo publicará, mensa mente até o decimo
                            dia útil do més, o valor da médis dos seis meses anteriores referente ao preço nacional do botijão de gás ao consumidor
                            final de acordo com o Sistema de Levantamento de Precos ou com outra fonte que a substitua.
                        </Text>


                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            ESTAR CADASRADO NO CADASTRO ÚNICO GARANTE O BENEFÍCIO?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>
                            O cadastramento é necessário, mas isso não garante a entrada imediata da familia no Programa, nem no recebimento do beneficio.

                        </Text>
                        <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>
                            A cada dois meses serão selecionaciat, de forma automatizada, as familias que serão incluidas para receber a beneficio, de acordo com os criterios de prionzação definidos pelo Ministerio da Cidadania

                        </Text>



                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            QUEM REALIZA A SELEÇÃO DAS FAMÍLIAS NO PROGRAMA AUXÍLIO GÁS?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>
                            A cada dois meses serão selecionacias, de forma automatizada, as

                            familias que serão incluidas para receber o beneficio, de acordo

                            com os critérios de pronzação definidos pelo Ministério da

                            Cidadania
                        </Text>
                        <Text style={{ color: "black", fontSize: 13, marginBottom: 10 }}>
                            A seleção das familias é realizada considerando os dados inseridos pelas prefeituras no Cadastro Unico dos Programas Sociais do Governo Federal
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
            </ScrollView>







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
    view: {
        height: "auto",
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
        marginBottom:90

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
