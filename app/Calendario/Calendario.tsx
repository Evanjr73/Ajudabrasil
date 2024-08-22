import { ImageBackground, Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { Header } from "../../components/headerBPC"
import { ButtonLarge } from "../../components/buttonlarge"
import { Colors } from "../../constants/Colors"
import { HeaderBolsaCalendario } from "@/components/headerBolsa";
export default function Calendarios() {

    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            {/* <View style={styles.header}>
                <Text>
                    NOVO BOLSA FAMILIA
                </Text>

            </View> */}
            <HeaderBolsaCalendario />

            <View style={styles.container}>

                <Link style={styles.link} href={"/BolsaFamilia/CalendarioDePagamento/CalendarioDePagamento"}>
                    <View style={styles.buttonn} >

                        <Image style={styles.img} source={require("../../assets/images/bolsafamilia.png")} />

                        <Text style={{ color: "white", fontSize: 15 }}>CALENDÁRIO BOLSA FAMÍLIA</Text>

                    </View>
                </Link>

                <Link style={styles.link} href={"/AuxilioGas/CalendarioD/CalendarioD"}>
                    <View style={styles.buttonn} >
                        <Image style={styles.img} source={require("../../assets/images/auxiliogas.jpeg")} />



                        <Text style={{ color: "white", fontSize: 15 }}>CALENDÁRIO AUXILIO GÁS</Text>

                    </View>
                </Link>



            </View>







            {/* //////////////////////////////////////////////////// */}



            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/home"}>
                        <Text style={{ color: "white", fontSize: 15 }}>VOLTAR</Text>
                    </Link>

                </Pressable>

            </View>





        </ImageBackground>


    );
}


///////////////////////////////estilos///////////////////////////////////////


const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingTop: 50,
        alignItems: "center",

        height: 300,
        width: "100%",


    },
    image: {

        display: "flex",
        alignItems: "center",
        width: "auto",
        height: "100%"
    },
    button: {
        display: "flex",

        justifyContent: "space-between",
        backgroundColor: 'blue',
        height: 67,
        marginBottom: 10,
        width: "93%",
        padding: 15,
        borderRadius: 10,




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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8




    },


})
const style = StyleSheet.create({
    container: {
        marginTop: 230,
        padding: 20,

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
        backgroundColor: 'blue',
        height: "auto",
        width: "35%",

        marginBottom: 100,
        padding: 15,
        borderRadius: 10


    }

})




