import { ImageBackground, Text, View, StyleSheet, ScrollView, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderReferencia } from "../../../components/headerBloqBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function QuemPodera() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderReferencia />
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            BOLSA FAMILIA BLOQUEADO - REFERÊNCIA 6/2023
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Ao entrar no app para consultar o pagamento, os usuários notaram

                            que o dinheiro aparecia como bloqueado e a orientação para que

                            ligue para o número 121 para saber mais detalhes.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Existem alguns motivos que podem levar ao bloqueio do Bolsa Família no Caixa Tem, veja quais são:
                        </Text>

                        <Text style={{ color: "black", fontSize: 15 }}>
                            Parcela bloqueada até que chegue a data definida para saque - en alguns casos, a Caixa mantém o valor bloqueado para saque mesmo que o dinheiro já esteja creditado em conta. Isso ocorre para informar o beneficiário que o valor só estará disponível para movimentação quando chegar a data definida no calendário do Bolsa Familia.
                        </Text>

                        <Text style={{ color: "black", fontSize: 15 }}>
                            Para descobrir se o benefício está mesmo bloqueado, o beneficiário deve fazer a consulta em mais de um aplicativo que mostra a situação do Bolsa Família, pois em alguns casos o benefício pode aparecer liberado. Veja quais são:
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            ►Aplicativo Caixa Tem;
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            ► Aplicativo do Bolsa Família;
                        </Text>

                        <Text style={{ color: "black", fontSize: 15 }}>
                            ► Aplicativo do Cadastro Único;
                        </Text>

                        <Text style={{ color: "black", fontSize: 15 }}>
                            ► Portal Cidadão da Caixa.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Pagamento bloqueado após o saque outra situação comum é o Caixa Tem exibir
                            a mensagem de pagamento bloqueado no extrato após o beneficiário já ter
                            realizado o saque da parcela. Isso ocorre porque a situação do Bolsa
                            Família será atualizada para mostrar o status da próxima parcela (maio).
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Pagamento bloqueado por inconsistência no cadastro - se chegar a data de pagamento e o dinheiro não caiu na conta o beneficiario deve conferir se está apto a receber a parcela ou seja, se está dentro das regras e se cumpre todas as condicionalidades do

                            programa.
                        </Text>

                        <Text style={{ color: "black", fontSize: 15 }}>
                            Se a resposta for sim e o dinheiro não cair até o fim do calendário do mês vigente, será necessário procurar um CRAS mais próximo e buscar informações sobre o motivo do bloqueio.
                        </Text>

                        <Text style={{ color: "black", fontSize: 15 }}>

                        </Text>



                    </View>



                </View>
            </ScrollView>



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
