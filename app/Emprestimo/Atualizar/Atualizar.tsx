import { ImageBackground, Text, View, StyleSheet, ScrollView, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderNovoValor } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"
import { ScreenStackHeaderRightView } from "react-native-screens";
import { HeaderDireito } from "@/components/headerBPC";
import { HeaderAtualizar } from "@/components/headerEmprestimo";


export default function NovoValor() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderAtualizar />
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            COMO ATUALIZAR O SEU CADASTRO CAIXA TEM
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            A atualização do cadastro no aplicativo Caixa Tem é gratuita e feita em poucos passos, de forma simples. Deve-se lembrar que é preciso estar conectado à Internet. E para adiantar o processo de atualização cadastral, é preciso ter em mãos um documento de identificação, como por exemplo, RG (documento de identidade) ou CNH (Carteira Nacional de Habilitação).
                        </Text>


                    </View>




                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            ATUALIZAR CADASTRO NO CAIXA TEM - PASSO A PASSO
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>

                        <Text style={{ color: "black", fontSize: 15 }}>
                            1° passo - FAZER LOGIN :

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Abrir o aplicativo Caixa Tem e fazer login com o número do cpf (Cadastro de Pessoa Física) e senha ou biometria.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            2° passo - CLICAR EM "ATUALIZE SEU CADASTRO" :
                        </Text>

                        <Text style={{ color: "black", fontSize: 15 }}>
                            No menu inicial, procurar pela opcão "ATUALIZE SEU CADASTRO" e então clique nela . Se estiver com o documento de identidade
                            em mãos, clique em "entendi, vamos começar" , já na tela seguinte.

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            3° passo - CONFIRMAR OS SEUS DADOS E LOCALIZAÇÃO :
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            O aplicativo Caixa Tem vai mostrar o seu endereço em primeiro lugar.

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Se o endereço estu=iver correto e atualizado , clique em "Sim , está Correto"

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            Porém, se você se mudou ou se estiver alguma informação incorreta, clique em "O meu endereço mudou"

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Na tela seguinte , você deve informar seu nascimento no Brasil (BR) ou não e, logo  em seguida, clique em "proximo."

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            4° passo - PREENCHER AS SUAS INFORMAÇÕES DE RENDA

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            Clicar em "Entendi, vamos lá" para então responder as questões sobre renda e patrimônio.

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            Nesse sentido, será necessário informar a fonte de renda, o valor, e há quanto tempo você tem esse rendimento mensal. Além disso, também é necessário informar a profissão e o patrimônio.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            E a cada vez que terminar de preencher uma parte do questionário, é preciso clicar em "Próximo" para continuar para a próxima tela posteriormente.

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            5° Passo: CONFIRMAR OS DADOS PREENCHIDOS

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            Conferir todas as informações com atenção para ter a certeza de que todos os dados estão corretos.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Então, se não tiver nenhum erro, é só clicar em "Confirmar".

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            6º Passo : VALIDAR O CADASTRO COM UM DOCUMENTO DE IDENTIFICAÇÃO

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            Clicar em "Continuar", escolher qual documento vai ser enviado pelo aplicativo e, logo depois, clicar em "Continuar" por mais

                            uma vez
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Seguir as instruções que vão aparecer nas próximas telas para

                            fazer o envio das imagens.

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            Logo depois de terminar de atualizar o seu cadastro no aplicativo Caixa Tem, a plataforma digital vai desbloquear o acesso aos recursos da conta no tempo de até 48 horas. Para isso, é importante ficar atento às notificações do aplicativo ou que serão enviadas para o seu endereço de e-mail.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            E caso isso não venha a acontecer ou seja, se nenhuma notificação do aplicativo Caixa Tem chegar a ser enviada para o seu dispositivo é só ir até uma agência física do banco (verificar horário do expediente anteriormente) e pedir para que autorizem o acesso ao aplicativo no seu celular. Com exceção da fila de atendimento, que pode demandar um tempo de espera, este processo é rápido.

                        </Text>





                    </View>



                </View>

            </ScrollView>



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
