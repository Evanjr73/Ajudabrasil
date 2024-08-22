import { ImageBackground, Text, View, StyleSheet, Button, Pressable, ScrollView, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoBolsa } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"
import { HeaderOQE } from "@/components/headerCad";


export default function ReceberBolsa() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <HeaderOQE></HeaderOQE>
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            O que é o Cadastro Único
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 12, marginBottom:5 }}>
                            O Cadastro Único é um registro que permite ao governo saber quem são e como vivem as famílias de baixa renda no Brasil. Ele foi criado pelo Governo Federal, mas é operacionalizado e atualizado pelas prefeituras de forma gratuita. Ao se inscrever ou atualizar seus dados no Cadastro Único, você pode tentar participar de vários programas sociais. Cada programa tem uma exigência diferente, mas o primeiro passo é ter sempre seu cadastro atualizado.

                        </Text>
                        <Text style={{ color: "black", fontSize: 12, marginBottom:5 }}>

                            Em março de 2022 foi criado o aplicativo do Cadastro Único, um novo canal que possibilita o pré-cadastro para aqueles que não estão cadastrados e desejam se cadastrar. É uma etapa inicial para sua família ser incluída no Cadastro Único, mas será necessário para comparecer a um posto de atendimento do Cadastro Único по seu município no prazo de 120 dias para confirmar e complementar os dados da família.

                        </Text>


                    </View>

                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            PRÉ-CADASTRO
                        </Text>


                    </View>


                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 12, marginBottom:5 }}>
                            Caso o cidadão ainda não esteja cadastrado no Cadastro Único, ele poderá fazer um Pré-Cadastro por meio do aplicativo do Cadastro Único ou na versão web.

                        </Text>
                        <Text style={{ color: "black", fontSize: 12, marginBottom:5 }}>
                            O Pré-Cadastro permite que o cidadão já informe dados importantes para o seu cadastro. Após enviar o Pré-Cadastro, o usuário tem 120 dias para comparecer a um Posto de Atendimento do Cadastro Único para apresentar os documentos de identificação obrigatórios das pessoas da família e complementar outros que sejam essenciais. A apresentação de documentos e a complementação de informações é necessária para que o cadastro seja concluído e o cidadão possa ter direito a solicitar benefícios sociais.
                        </Text>

                        <Text style={{ color: "black", fontSize: 12, marginBottom:5 }}>
                            No posto de atendimento municipal, a equipe do Cadastro Único irá coletar as demais informações referentes ao domicílio, família, escolaridade, trabalho e remuneração.
                        </Text>
                        <Text style={{ color: "black", fontSize: 12, marginBottom:5 }}>
                            Atenção: o Pré-cadastro é uma etapa opcional. O cidadão pode, se desejar, fazer todo o cadastramento diretamente no posto de programas sociais. Cada programa tem uma exigência diferente, mas o primeiro passo é ter sempre seu cadastro atualizado.

                        </Text>
                        <Text style={{ color: "black", fontSize: 12, marginBottom:5 }}>
                            Em março de 2022 foi criado o aplicativo do Cadastro Único, um novo canal que possibilita o pré-cadastro para aqueles que não estão cadastrados e desejam se cadastrar. É uma etapa inicial para sua família ser incluída no Cadastro Único, mas será necessário para comparecer a um posto de atendimento do Cadastro Único по seu município no prazo de 120 dias para confirmar e complementar os dados da família.
                        </Text>




                    </View>


                </View>

            </ScrollView>


            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/CadUni/CadUni"}>
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
