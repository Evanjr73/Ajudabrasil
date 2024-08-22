import { ImageBackground, Text, View, StyleSheet, ScrollView, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeInscrever, HeaderSolicitar } from "../../../components/headerCad"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function QuemPodera() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" >
            <HeaderComoSeInscrever />
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            1 - PARA SE CADASTRAR
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Realizar o Pré Cadastro no Aplicativo do Cadastro Único ou na versão Web. Após a inclusão dos dados, será necessário comparecer a um posto de atendimento do Cadastro Único no seu município no prazo de 120 dias para levar os documentos de identificação das pessoas da sua família e complementar outros dados que são essenciais. Caso o seu cadastro não seja finalizado no período de 120 dias, ele será automaticamente excluído e será necessário realizar um novo cadastramento.
                        </Text>


                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            DOCUMENTAÇÃO
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Documentação em comum para todos os casos:

                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>

                            Importante: No dia da entrevista, não será preciso que toda a família vá ao local de cadastramento. Se você for maior de 16 anos, e preferencialmente mulher, poderá cadastrar toda a família. A pessoa que prestar a informação será chamada de Responsável pela Unidade Familiar (RF) no Cadastro Único
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Caso a família não tenha pessoas que possam ser o Responsável pela família é possível realizar o cadastramento da família pelo Representante Legal RL. O Representante Legal é uma pessoa que possui atribuição legal para representar, por meio de tutela, curatela ou guarda, uma determinada pessoa ou família que NÃO possua um Responsável Familiar - RF, segundo os conceitos do Cadastro Único, e que deseja se cadastrar.
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Atenção: o RL não é integrante da família que ele representa, não divide renda ou despesas com os integrantes, e nem reside no mesmo endereço da família representada. Não é possível realizar o Pré-Cadastro do Representante Legal - RL por meio do aplicativo do Cadastro Único, é necessário se dirigir até o posto de Atendimento do Cadastro Único ou CRAS mais próximo de sua residência
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Um outro recado: a entrevista demora mais ou menos uma hora, então se programe para ir com tempo suficiente, certo? Responsável pela Unidade Familiar (RF):
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Deve comparecer com pelo menos um desses documentos:
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Preferencialmente o CPF; ou
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Título de Eleitor.
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Responsável pela Família Indígena:
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Deve comparecer com pelo menos um desses documentos:
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            - CPF; ou

                            - Título de Eleitor, ou

                            - Registro Administrativo de Nascimento Indígena (RANI); ou Outros documentos de identificação, como Certidão de Casamento, Carteira de Identidade (RG) e Carteira de Trabalho.
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Responsável pela Familia Quilombola: • Deve comparecer com pelo menos um desses documentos:

                            - CPF; ou

                            - Título de Eleitor, ou

                            Outros documentos de identificação, como Certidão de Casamento, Carteira de Identidade (RG) e Carteira de Trabalho. Representante Legal - RL
                        </Text>







                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            2 - PARA ATUALIZAR SUAS INFORMAÇÕES
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Você vai precisar atualizar o seu cadastro a cada dois anos ou sempre que tiver alguma mudança na família. Exemplos:

                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            - alguém na família nasceu ou morreu;
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            - a família mudou de endereço;
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            - alguém foi morar em outro lugar,
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            - as crianças entraram ou mudaram de escola;
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            - alguém passou a ganhar mais ou menos na família;
                        </Text>

                        <Text style={{ color: "black", fontSize: 16 }}>
                            - a família mudou de cidade.
                        </Text>



                    </View>




                </View>

            </ScrollView>



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
