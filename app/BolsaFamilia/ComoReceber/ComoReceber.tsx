import { ImageBackground, Text, View, ScrollView, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoBolsa } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function ReceberBolsa() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderComoBolsa>

            </HeaderComoBolsa>
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            INSTALE O APLICATIVO CAIXA TEM
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15}}>
                            Acessar a Google Play Store ou a Apple Store do seu celular e baixe o app Caixa Tem. Se já tinha instalado, atualize o aplicativo,
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>
                            Abra o app, informe o CPF e orie uma senha; Para gerar senha será necessário seguir sete passos e fornecer informações pessoais como CPF nome completo, número do

                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>
                            celular, CEP dia, més e ano de nascimento e email, Crie uma senha, confime a senha, và em 'Não sou um robó e clique en Cadastre-se
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>
                            No seu primeiro acesso, sera enviado um código por SMS para confirmar a identificação
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>
                            Informe corretamente o número do seu telefone para receber o código depois, digite-o
                        </Text>



                    </View>

                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            CONSULTE O VALOR DO AUXILIO
                        </Text>


                    </View>


                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15}}>
                            - Abra o aplicativo Caixa Tem, digite seu CPF e senha e clique em Extrato

                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>

                            Se você recebeu o auxilio aparecerão os valores referentes ao Auxilio Brasil Vale-gas e o Beneficio Extraordinario (complemento do Auxilio Brasil
                        </Text>

                    </View>

                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            GERE UM CODIGO PARA FAZER O SAQUE
                        </Text>


                    </View>

                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15}}>
                            Clique em Saque serm cartão no seu Caixa Tem,

                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>

                            Na pagina segante, và em 'Gerar código para saque
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>

                            Aparecerão orientações sobre como será o saque caixa elevčnico, embaixo, olique em Gerar código de saque Digite senhe do aplicativo
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>
                            Na próxima tela, aparecerá o código, que tem validade de hora pare ser usado no caixa eletrónico, nas loténicas ou em um correspondete Cixa Aqui.


                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>
                            O saque é realizado e sem cartão. então clique no botão 'Entre' do teclado do caixa eletrônico
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>
                            ► Nessa tela, clique no botão 'Saque Caixa Tem'. Digite o número do seu CPF e, em seguida, o código gerado no aplicativo;

                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>
                            Escolha um valor para saque ou digite o valor no teclado numérico do caixa eletrônico;
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>

                        </Text>


                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            COMO FAZER TRANSFERÊNCIA DOS VALORES
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15}}>

                            ► Entre no aplicativo Caixa Tem e clique em 'Transferir dinheiro';
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>

                            Informe se a transferência será feita digitando agência e conta ou se irá para um dos seus favoritos já cadastrados para transferência;
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>

                            Digite agência, banco, conta, dígito e valor, informe o tipo de conta, o CPF, o nome de quem vai receber, o valor e confirme a operação. Se quiser, salve o comprovante no celular ou envie por WhatsApp;

                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>

                            Há limitação de transferência em até R$ 600 por operação; o dinheiro será enviado por DOC (Documento de Crédito) e cairá na conta no outro dia;
                        </Text>
                        <Text style={{ color: "black", fontSize: 15}}>


                        </Text>



                    </View>

                </View>

            </ScrollView>



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
