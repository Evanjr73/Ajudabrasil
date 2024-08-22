import { ImageBackground, Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { HeaderJovem } from "../../components/headerBolsa"
import { Colors } from "../../constants/Colors"

export default function BolsaJovem() {

    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <HeaderJovem />


            <View style={styles.container}>


                <Link style={styles.link} href={"/BolsaJovem/Consultar/Consultar"}>
                    <View style={styles.opcoens} >
                        <Image source={require("../../assets/images/pesquisa-de-pesquisa.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>Consultar Banefício</Text>

                    </View>
                </Link>
                {/* <Link style={styles.link} href={"/BolsaJovem/Calendario/Calendario"}>
                    <View style={styles.opcoens} >
                        <Image source={require("../../assets/images/calendario.jpeg")} style={styles.img} resizeMode="contain" />

                        <Text style={{ color: "white", fontSize: 15 }}>Calendario de pagamento</Text>

                    </View>
                </Link> */}

                <Link style={styles.link} href={"/BolsaJovem/ComoFunciona/ComoFunciona"}>
                    <View style={styles.opcoens} >
                        <Image source={require("../../assets/images/pergunta.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>Como funciona o bolsa Jovem?</Text>

                    </View>
                </Link>
                <Link style={styles.link} href={"/BolsaJovem/NaoFui/NaoFui"}>
                    <View style={styles.opcoens} >
                        <Image source={require("../../assets/images/questao.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>Não fui aprovado, o que fazer ? </Text>

                    </View>
                </Link>
                <Link style={styles.link} href={"/BolsaJovem/Perguntas/Perguntas"}>
                    <View style={styles.opcoens} >
                        <Image source={require("../../assets/images/perguntas-frequentes.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>Perguntas frequentes - Bolsa Jovem </Text>

                    </View>
                </Link>

            </View>

            <View style={styles.containerButton}>
                <View style={styles.button} >

                    <Link href={"/home"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </View>

            </View>




        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: "center",
        height: "auto",
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
    button: {
        display: "flex",
        alignItems: "center",
        backgroundColor: 'blue',
        height: "auto",
        width: "35%",
        marginTop: 180,


        padding: 15,
        borderRadius: 10


    },
    buttonn: {
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
    opcoens: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1E90FF',
        height: 67,
        marginBottom: 10,
        width: "93%",
        padding: 15,
        borderRadius: 10,


    }

})


