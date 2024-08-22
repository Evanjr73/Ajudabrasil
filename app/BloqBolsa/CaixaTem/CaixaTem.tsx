import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderCaixaTEm } from "../../../components/headerBloqBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Duvidas() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderCaixaTEm />

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        BOLSA FAMÍLIA BLOQUEADO NO CAIXA TEM
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Os beneficiários que estão com o cadastro atualizado e as informações em dia estão conseguindo consultar normalmente a parcela liberada no app do Bolsa Família e no Portal Cidadão. Contudo, para uma parte dos inscritos ao entrar no app Caixa Tem a parcela de abril aparece bloqueada e logo abaixo vem a seguinte mensagem:
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Mensagem do Bolsa Família Benefício bloqueado por averiguação. Você precisa esclarecer informações do seu cadastro. Se você realmente mora sozinho procure o setor do Cadastro Único na sua cidade até 16 de junho e atualize seu cadastro para evitar o cancelamento do seu benefício do Bolsa Família. Mais informações ligue 121. Motivo - AVE UNIPESSOAL COD. P1-76.
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Segundo o governo, a família que está em averiguação unipessoal recebe a mensagem de aviso no extrato de pagamento, que pode ser consultado no aplicativo do Bolsa Família, no Caixa Tem ou no Portal Cidadão.

                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        A partir do aviso, a família terá um prazo para atualizar os dados e, após o processamento, ter o pagamento desbloqueado. Caso não cumpra com o prazo estabelecido, o beneficiário será notificado do cancelamento do benefício.
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
