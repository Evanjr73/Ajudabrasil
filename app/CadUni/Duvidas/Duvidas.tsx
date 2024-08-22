import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput, ScrollView } from "react-native";
import { Link } from "expo-router";
import { HeaderComoSeInscrever, HeaderDuvidas, HeaderSolicitar } from "../../../components/headerCad"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function Duvidas() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderDuvidas />
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            QUANDO DEVO ATUALIZAR O MEU CADASTRO?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Se você mudar de endereço ou de telefone, tiver alguma alteração em sua renda mensal ou no estado civil, no nascimento, adoção ou falecimento de algum membro da família, o seu cadastro deve ser atualizado.
                        </Text>


                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            SE A MINHA RENDA AUMENTAR, O QUE DEVO FAZER?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Procure o setor responsável pelo Auxílio Brasil em seu município para fazer a atualização cadastral. Leve seu documento de identificação oficial.
                        </Text>


                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            POR QUE É IMPORTANTE MANTER MEU CADASTRO ATUALIZADO?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Com suas informações atualizadas, é possível identificar exatamente a situação em que sua família se encontra para participação nos programas sociais do governo. E para receber os comunicados dos programas são utilizadas as últimas informações cadastradas
                        </Text>


                    </View>
                    <View style={styles.Titulo}>
                        <Text style={styles.textTitulo}>
                            EU IZ MEU CADASTRO E AINDA NÃO FUI SELECIONADO PARA RECEBER O AUXÍLIO BRASIL
                            OU OUTRO BENEFÍCIO SOCIAL. POE QUÊ?
                        </Text>


                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={{ color: "black", fontSize: 15 }}>
                            A inscrição no Cadastro Único é um requisito para participar da seleção no Auxílio Brasil e nos outros programas sociais, mas não garante que a família será selecionada. A seleção acontece mensalmente e quem for selecionado receberá um comunicado oficial pelo órgão responsável.
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
