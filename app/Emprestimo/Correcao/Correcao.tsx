import { ImageBackground, Text, View, StyleSheet, ScrollView, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderProblema } from "../../../components/headerEmprestimo"
import React from 'react';
import { Colors } from "../../../constants/Colors"



export default function QuemPodera() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderProblema />
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            Aplicativo Caixa Tem não funciona? veja como resolver
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            App Caixa Tem não funciona? Veja principais erros e como resolver problemas no aplicativo

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Erros no Caixa Tem podem ocorrer devido a muitos acessos simultâneos ao aplicativo da Caixa para Android e iPhone (iOS). A nova modalidade será liberada tanto para pessoas físicas quanto jurídicas. Veja abaixo o valor e as condições:
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Escolhido para transações bancárias de beneficiários do Auxílio Emergencial que receberam o pagamento por meio da Poupança Social Digital, o app costuma ficar sobrecarregado e exibir mensagens de erro durante período de muita atividade de usuários, o que pode indicar instabilidade no sistema.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Os problemas são diversos, vão desde uma fila de espera

                            virtual que não permite entrar na conta, erros na hora de fazer

                            transferências, além de bloqueios com mensagens informando que

                            o CPF está cadastrado em mais de um celular.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Confira alguns problemas enfrentados pelos usuários do aplicativo Caixa Tem, e como resolvê-los.
                        </Text>




                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            Sala de espera no CaixaTem
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>

                            A sala de espera virtual do Caixa Tern foi uma maneira encontrada pela Caixa de não sobrecarregar a plataforma, devido ao grande número de acessos simultâneos no aplicativo. Ao usar o app, principalmente em horários de pico, a sala de espera é exibida para controlar o número de usuários ativos na plataforma, evitando instabilidades no sistema. Na página de acesso, o usuário pode verificar o tempo previsto para utilizar o aplicativo, e o Caixa Tem permite minimizar a janela para usar outros apps do celular, sem perder sua vez na fila.
                        </Text>


                    </View>

                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            Serviço de pagamento indisponível no momento
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            A mensagem de erro "Serviço de pagamento indisponível no momento" aparece logo após a tentativa de efetuar pagamentos de boletos no Caixa Tem. O aviso surge quando a plataforma encontra-se indisponível ou fora do ar. Reconhecer se o problema está no aplicativo e não em conexões de rede particulares é importante, já que a falha precisa ser reportada e corrigida pelo

                            servidor.
                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Quando o aplicativo apresentar erros e falhas constantes, cheque conexões de Internet, reinicie o celular e tente acessá-lo novamente.
                        </Text>



                    </View>

                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            Quando procurar a agência da Caixa?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Se o usuário já tiver atualizado o aplicativo Caixa Tem, fazendo o acesso ao sistema em horário que não seja de pico, e evitado dividir um mesmo aparelho para dois beneficiários, então será preciso procurar a agência da Caixa.

                        </Text>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Ou seja, apenas procure a agência bancária após ter certificado que você não conseguiu resolver a situação de outra forma.
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
