import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoBolsa } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"
import { HeaderOQE } from "@/components/headerEmprestimo";


export default function ReceberBolsa() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <HeaderOQE></HeaderOQE>

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        O QUE É O CAIXATEM?
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        O aplicativo Caixa Tem, criado em 2020 pelo Governo Federal com o objetivo maior de atender aos cidadãos beneficiários do Auxílio Emergencial oferece diversos serviços. Recentemente, a Caixa Econômica Federal informou que é possível solicitar empréstimo no valor de até R$1.000, até mesmo para quem esteja negativado, desde o dia 28 de março. Inclusive, de acordo com os dados divulgados pela Caixa, até momento cerca de 80% do empréstimo tem sido realizado para quem está negativado. Quem ainda não tiver o aplicativo instalado pode baixar o Caixa Tem e consultar o saldo disponível.
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        O Responsável Familiar é a pessoa da família que vai prestar as

                        informações dos demais componentes, e deve ser, de preferência,

                        a mulher.
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        No entanto, para ter acesso a todos esses serviços, sem ter limites de movimentação ou de saldo, é preciso atualizar o seu cadastro.
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Veja alguns dos serviços a que o beneficiário tem acesso no Caixa Tem:
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        * Poupança

                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        * Pagamento de contas
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        * Transferências
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        * Empréstimos
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                    * Pix
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                       * Cartão de Crédito Virtual
                    </Text>
                  



                </View>








            </View>


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
