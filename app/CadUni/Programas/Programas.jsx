import { ImageBackground, Text, View, StyleSheet, Button, Pressable, SafeAreaView,FlatList, TextInput } from "react-native";
import { Link } from "expo-router";
import { Header, HeaderPago } from "../../../components/headerBPC"
import React from 'react';
import { Colors } from "../../../constants/Colors"
import { HeaderProgramas } from "../../../components/headerCad";


export default function ComoSeraFeitoOPagamento() {




    return (
        <ImageBackground source={require("../../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            <HeaderProgramas/>

            <View style={styles.view}>
                <View style={styles.Titulo}>
                    <Text style={styles.textTitulo}>
                        INSTALE O APLICATIVO CAIXA TEM
                    </Text>


                </View>
                <View style={styles.textcontainer}>
                    <Text style={{   color: "black", fontSize:13}}>
                        *Programa Auxílio Brasil

                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                        *Programa minha casa, minha vida
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       * Bolsa Verde -- Programa de Apoio á Conservação Ambiental
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       * Programa de erradicação do trabalho infantil - PETI
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       * Fomento -- Programa de Formento ás Atividades Produtivas Rurais
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       * Carteira do Idoso
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       * Aposentadoria para pessoa de baixa renda
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       * Programa Brasil Carinhoso
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       
                        * Programa de Cisternas
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       
                        * Telefone Popular 
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       
                        * Pro Jovem Adolecente
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       * Tarifa Social de Energia Elétrica
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       * Passe Livre para pessoas com deficiência
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       * Isenção de taxas em Concursos Públicos
                        
                    </Text>
                    <Text style={{   color: "black", fontSize:13}}>
                       Os Estados e Municípios também utilizam os dados Cadastro ùnico como base para seus programas socias.
                        
                    </Text>
                   

                   


                </View>
                

                
            </View>


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
    view:{
        height:"70%",
        width:"100%",
        // backgroundColor:"green"

    },
    textcontainer:{
        height: "auto",
        backgroundColor: "#FAFAD2",
        padding: 15,
        marginTop: 2,
        marginBottom: 10,
        width: "90%",
        margin: "auto",
        borderRadius: 10,

    },
    text:{
     
    

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
