import { ImageBackground, Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { HeaderGas } from "../../components/headerBolsa"
import { Colors } from "../../constants/Colors"

export default function AuxilioGas() {

    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <HeaderGas />


            <View style={styles.container}>



                <Link style={styles.link} href={"/AuxilioGas/OQue/OQue"}>
                    <View style={styles.button} >
                        <Image source={require("../../assets/images/pergunta.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>O QUE É O AUXÍLIO GÁS ?</Text>

                    </View>
                </Link>

                <Link style={styles.link} href={"/AuxilioGas/Quem/Quem"}>

                    <View style={styles.button} >
                        <Image source={require("../../assets/images/pergunta.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>QUEM PODE PARTICIPAR DO AUXÍLIO?</Text>

                    </View>
                </Link>

                <Link style={styles.link} href={"/AuxilioGas/CalendarioD/CalendarioD"}>
                    <View style={styles.button} >
                        <Image source={require("../../assets/images/calendario2.jpeg")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>CALENDÁRIO DE PAGAMENTO AUXILIO</Text>
                    </View>
                </Link>


                <Link style={styles.link} href={"/AuxilioGas/Receber/Receber"}>
                    <View style={styles.button} >
                    <Image source={require("../../assets/images/renda.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}> O QUE FAZER PARA RECEBER? </Text>
                    </View>
                </Link>


                <Link style={styles.link} href={"/AuxilioGas/Duvidas/Duvidas"}>
                    <View style={styles.button} >
                    <Image source={require("../../assets/images/perguntas-frequentes.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>DÚVIDAS FREQUENTES   </Text>
                    </View>
                </Link>


            </View>

            <View style={styles.containerButton}>
                <Pressable style={styles.buttonn} >

                    <Link href={"/home"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </Pressable>

            </View>




        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    container: {
        
        marginTop: 20,
        alignItems: "center",
        justifyContent:"center",
        height: 550,
        minHeight: 50,
        width: "100%",




    },
    image: {
        display: "flex",

        alignItems: "flex-end",
        width: "auto",
        height: "100%"
    },
    containerButton: {
        width: "100%",
        height: "auto",
        alignItems: "flex-start",
        padding: 15

    },

    opcoens: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1E90FF',
        height: 67,
        marginBottom: 10,
        width: "93%",
        padding: 15,
        borderRadius: 10,


    },
    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8

    },

    img: {
        maxHeight: 55,
        maxWidth: 70,
        borderRadius: 15,
        marginRight: 20,
        marginLeft: 15
    },
    link: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1E90FF',
        height: 70,
        marginBottom: 10,
        width: "93%",
        borderRadius: 10,
    },
    buttonn: {
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


