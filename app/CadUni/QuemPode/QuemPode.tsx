import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderNovoValor } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"
import { ScreenStackHeaderRightView } from "react-native-screens";
import { HeaderDireito } from "@/components/headerBPC";
import { HeaderQuemPode } from "@/components/headerCad";


export default function NovoValor() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderQuemPode />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        QUEM PODE SE INSCREVER NO CADASTRO ÚNICO ?
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 14 }}>
                        Cidadãos que não estão inscritos no Cadastro Único e desejam se cadastrar pela primeira vez. É importante destacar que apenas o Responsável Familiar pode realizar o Pré-Cadastro!
                    </Text>

                    <Text style={{ color: "black", fontSize: 14 }}>
                        O Responsável Familiar é a pessoa da família que vai prestar as informações dos demais componentes, e deve ser, de preferência, a mulher.
                    </Text>
                    <Text style={{ color: "black", fontSize: 14 }}>

                        Podem se inscrever no Cadastro Único as famílias que:

                    </Text>
                    <Text style={{ color: "black", fontSize: 14 }}>

                        Possuem renda mensal por pessoa de até meio salário mínimo;
                    </Text>
                    <Text style={{ color: "black", fontSize: 14 }}>
                        Possuem renda acima dessas, mas que estejam vinculadas ou querendo algum programa ou benefício que utilize o Cadastro Único em suas concessões.
                    </Text>
                    <Text style={{ color: "black", fontSize: 14 }}>

                    </Text>


                </View>



            </View>


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
