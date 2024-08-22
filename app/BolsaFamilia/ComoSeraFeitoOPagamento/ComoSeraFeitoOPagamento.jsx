import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeraFeitoOPagamento } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function ComoSeraFeitoOPagamento() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderComoSeraFeitoOPagamento />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        COMO SERÁ FEITO O PAGAMENTO?
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Assim como no Auxílio Brasil, o governo pagará o benefício
                        pela Caixa Econômica Federal. O pagamento do Auxílio Brasil é
                        realizado mensalmente conforme calendário de pagamentos, e
                        Rode ser falia des pacsdrica fomos:
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Poupança social digital;
                    </Text>

                    <Text style={{ color: "black", fontSize: 15 }}>
                        Poupança Caixa Fácil;
                    </Text>




                    <Text style={{ color: "black", fontSize: 15 }}>
                        Saque com Oo cartão do programa.
                    </Text>

                    <Text style={{ color: "black", fontSize: 15 }}>
                        O cartão é enviado para o endereço informado no Cadastro Único
                        quando da inclusão da família no Programa. Com o cartão em
                        mãos, os beneficiários podem sacar o valor nos terminais de
                        autoatendimento da Caixa, nos correspondentes Caixa Aqui e nas
                        unidades Lotéricas. É necessário apresentar um documento de
                        identificação e o cartão do benefício.
                    </Text>

                    





                </View>



            </View>


            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/BolsaFamilia/NovoBolsaFamilia"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </Pressable>

            </View>




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
