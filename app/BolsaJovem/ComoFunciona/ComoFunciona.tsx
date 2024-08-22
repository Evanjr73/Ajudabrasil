import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput, Image } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeraFeitoOPagamento, HeaderJovemComo } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function ComoFunciona() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderJovemComo />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        COMO FUNCIONA O PROGRAMA PÉ-DE-MEIA
                    </Text>


                </View>
                <View style={styles.textcontainer}>




                    <Image source={require("../../../assets/textos/como-pé-de-meis.jpg")} style={styles.img} resizeMode="contain" />
                    {/* <Text style={{ color: "black", fontSize: 13 , padding:15}}>
                        O que é

                        Pé-de-Meia é um programa criado pela Lei nº 14.818, de 16 de janeiro de 2024, que oferece incentivo financeiro a estudantes do ensino médio de colégios públicos para estimular a permanència e a conclusão dos estudos, além da participação em exames educacionais nacionais e subnacionais

                        A CAIXA e responsável pela abertura de conta, se for o caso, e crédito dos beneficios para os indicados pelo Ministério da Educação

                        Quem pode participar

                        O Programa Pé-de-Mela e destinado a estudantes de baixa renda matriculados no ensino médio da rede pública de ensino, que atendam aos seguintes critérios:

                        Tenham o minimo 80% de frequência escolar

                        Conclusão do ano letivo com aprovação; :

                        Participação em exames obrigatórios

                        Sejam de familias inscritas no Cadastro Unico para Programes Sociais do Governo Federal (CadUnico)

                        Não é necessário inscrição no Programa, os estudantes elegíveis que integrem familias beneficiarias do Programa

                        tém priondade na concessão dos incentivos

                        Estudantes na modalidade ELIA entre 19 e 24 anos podem ser contemplados pelo Programa sob a condição de participar do Exame Nacional para Certificação de Competencias de Jovens e Adultos (Encceja

                        No inicio de cada ano, o MEC publicará uma portaria com os critérios necessários para participar do programa
                    </Text> */}


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
   
    img: {
        height: 505,
        width: 380,
        borderRadius: 15,
       
    },

    image: {

        display: "flex",

        width: "auto",
        height: "100%"
    },

    Titulo: {
        height: 60,
        width: 300,
        backgroundColor: "blue",
        padding: 10,
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
        alignItems:"center",
        height: "auto",
        backgroundColor: "#FAFAD2",
        padding: 10,
        marginTop: 10


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
        height: "100%",
        
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
