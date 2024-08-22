import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeraFeitoOPagamento, HeaderJovemPerguntas } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Perguntas() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderJovemPerguntas />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        O QUE É O BOLSA JOVEM?
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 14 }}>
                        O Programa é destinado à permanència e à conclusão escolar de estudantes
                        matriculados no ensino médio público, e oferece Incentivos relacionados
                        a matricula, frequência, conclusão escolar e à partirpação em exames
                        educacionais nacionais e subnacionais
                    </Text>


                </View>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        QUAL É A LEI QUE INSTITUI O PROGRAMA BOLSA JOVEM?
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 14 }}>
                        Lei nº 14.818, de 16 de janeiro de 2024, regulamentada pelo Decreto N° 11.901 de 26 de janeiro de 2024

                    </Text>


                </View>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        Quem pode receber o bolsa Jovem?
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 14 }}>
                        São elegivers ao Programa Bolsa Jovem os estudantes matriculados ensino médio regular das redes públicas, com idade compreendida entre 14 e 24 anos, que integrem familias Inscritas no Cadastro Union woo pera Programas Sociais do Governo

                        Federal (CadUnico)

                    </Text>
                    <Text style={{ color: "black", fontSize: 14 }}>
                        Os estudantes elegivels que inregiem familias beneficiárias do Programa Bolsa Femilia tam pliondate na concessão dos

                        Incentivos


                    </Text>
                    <Text style={{ color: "black", fontSize: 14 }}>

                        No inicio de cada ano, o MEC publicera uma portaria com os criterios de elegibilidade para o periodo
                    </Text>


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
        padding: 10,
        margin:"auto",
        borderRadius:10,
        marginBottom: 20,
        marginTop:5,
        width:"90%"



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
