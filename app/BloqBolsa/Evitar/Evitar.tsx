import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderEvitar } from "../../../components/headerBloqBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"



export default function ReceberBolsa() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <HeaderEvitar />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        BLOQUEIOS PODEM SER EVITADOS:
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Os dados cadastrais devem estar sempre em dia. O beneficiário pode ficar no máximo até 24 meses sem atualizar essas informações. Em caso de mudanças, é necessário informar o setor responsável pelo cadastramento no município nas seguintes situações:

                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        ► Troca de endereço
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>

                        ► Mudança de telefone de contato
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        ► Alterações na composição da família (nascimento de uma criança, falecimento de integrante da família, casamento e adoção)
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Os beneficiários também precisam ficar atentos às regras de condicionamento do Bolsa Família. O programa exige uma série de cumprimentos nas áreas de saúde e educação. Veja quais são elas:
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        ► Acompanhar pré-natal
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>

                        ► Estar em dia com calendário nacional de vacinação
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>

                        - Acompanhar o estado nutricional de crianças menores de sete anos
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>

                        ► Crianças de 4 a 5 anos têm de ter frequência escolar mínima de 60%

                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        ► Beneficiários de seis a 18 anos incompletos que não concluíram a educação básica devem ter frequência escolar mínima de 75%
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        ► Ao matricular a criança na escola e ao vaciná-la no posto de saúde, é preciso informar que a família é beneficiária do Bolsa Família
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
