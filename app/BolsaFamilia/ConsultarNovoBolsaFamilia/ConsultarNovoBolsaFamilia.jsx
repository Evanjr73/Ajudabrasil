import { ImageBackground, Text, View, StyleSheet, Button, Pressable, TextInput } from "react-native";
import { Link } from "expo-router";
import { HeaderBolsa } from "../../../components/headerBolsa"
import React from 'react';
import { Colors } from "../../../constants/Colors"


export default function ConsultarNovoBolsaFamilia() {

    const [number, onChangeNumber] = React.useState('');
    return (
        <ImageBackground source={require("./25.jpg")} resizeMode="cover" style={styles.image}>
            {/* <View style={styles.header}>
            <Text>
                NOVO BOLSA FAMILIA
            </Text>

        </View> */}
            <HeaderBolsa>
                
            </HeaderBolsa>




            <View style={{ height: "65%", width: "100%", backgroundColor: "green", marginBottom: 15 }}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text>
                            CONSULTAR NOVO BOLSA FAMILIA

                        </Text>
                        <Text>
                            imforme o numero do seu nis e clique em sultar para verificar a situação do seu beneficio
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="useless placeholder"
                            keyboardType="numeric"
                        />

                        <Pressable style={style.buttonn} >

                            <Link href={"/BolsaFamilia/NovoBolsaFamilia"}>
                                <Text style={{ color: "white", fontSize: 15 }}>Consuktar Agora</Text>
                            </Link>

                        </Pressable>



                    </View>


                </View>

                <View style={styles.container}>



                </View>


            </View>

            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/BolsaFamilia/NovoBolsaFamilia"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </Pressable>


            </View>


            {/* //////////////////////////////////////////////////// */}









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
        alignItems: "center",
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


})
const style = StyleSheet.create({
    container: {
        height: 55,
        width: "100%",
        backgroundColor: "blue"
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
        justifyContent: "center",
        backgroundColor: 'green',
        height: 50,
        width: "35%",
        color: "black",
        marginBottom: 100,
        padding: 5,
        borderRadius: 10
    },
    buttonn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'green',
        height: 50,
        width: "70%",
        color: "black",
        marginTop:6,
   
        padding: 5,
        borderRadius: 40
    }


})
