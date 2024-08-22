import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeraFeitoOPagamento, HeaderJovemComo, HeaderJovemConsultar } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Consultar() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderJovemConsultar />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        Consultar Bolsa Jovem
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 13 }}>
                        No momento a consulta do Bolsa Jovem só pode ser feita através do aplicativo Jornada do Estudante.

                        Em breve a consulta também estará disponivel em nosso

                        aplicativo, inclusive caso o estudante tiver seu cadastro

                        reporvado, iremos informar o motivo e se é possível entrar com

                        um pedido de análise novamente para aprovação. Lembrando que para ser aprovado o Estudando precisa Atender estes requisitos:

                        Tenham o mínimo 80% de frequência escolar.

                        Conclusão do ano letivo com aprovação;

                        Participação em exames obrigatórios,

                        - Idade entre 14 e 24 anos;

                        ►Sejam de familias inscritas no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico).

                        Para realizar a consulta através do aplicativo Jornada do Estudante, o estudante precisa baixar o aplicativo na PlayStore e ter uma conta Gov.br para fazer o login no aplicativo e verificar se foi aprovado para participar do programa.
                    </Text>


                </View>



            </View>


            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/BolsaJovem/BolsaJovem"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </Pressable>
                <Pressable style={style.button} >

                    <Link href={"/Home"}>
                        <Text style={{ color: "white", fontSize: 15 }}>CONSULTAR</Text>
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
        backgroundColor: "FAFAD2",
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
        marginTop: 20


    },
    text: {



    },


})


const style = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
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
