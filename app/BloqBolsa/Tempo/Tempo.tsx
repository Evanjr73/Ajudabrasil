import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderNovoValor } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"
import { ScreenStackHeaderRightView } from "react-native-screens";
import { HeaderDireito } from "@/components/headerBPC";
import { HeaderQuantoTempo } from "@/components/headerBloqBolsa";


export default function NovoValor() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderQuantoTempo />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        BOLSA FAMILIA: QUANTO TEMPO LEVA PARA  DESBLOQUEAR?
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Nesse primeiro momento, o governo orientou que apenas as pessoas que moram sozinhas e tiveram o benefício bloqueado procurem um CRAS ou setor do Cadúnico para atualizar o seu cadastro.

                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Além de levar a documentação exigida, o beneficiário deverá assinar um termo afirmando que vive sozinho e que as informações prestadas são verdadeiras. Após esse procedimento, o Bolsa Família é desbloqueado automaticamente pela gestão municipal.

                    </Text>

                    <Text style={{ color: "black", fontSize: 15 }}>
                        O governo federal deu o prazo de até 60 dias para que as famílias unipessoais façam a atualização do Cadúnico. O prazo começou a contar do dia 14 de abril e foi até 16 de junho
                    </Text>

                    <Text style={{ color: "black", fontSize: 15 }}>
                        O ministro do MDS, Wellington Dias, reforçou que as famílias bloqueadas que atualizarem o cadastro e tiverem dentro dos critérios voltarão a receber o Bolsa Familia.
                    </Text>

                    <Text style={{ color: "black", fontSize: 15 }}>
                        Já o prazo para desbloqueio pode variar conforme cada caso. Na maioria das vezes, os benefícios bloqueados são liberados cerca de 30 dias após a regularização. Porém, caso ocorra o cancelamento pode levar até três meses para que a situação do Bolsa Família volte ao normal.
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
