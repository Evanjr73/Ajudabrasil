import { ImageBackground, Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { Header } from "../../components/headerBPC"
import { ButtonLarge } from "../../components/buttonlarge"
import { Colors } from "../../constants/Colors"



export default function BPC() {

    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            {/* <View style={styles.header}>
                <Text>
                    NOVO BOLSA FAMILIA
                </Text>

            </View> */}
            <Header></Header>

            <View style={styles.container}>


                <Link style={styles.link} href={"/BPC/OQueE/OQueE"}>
                    <View style={styles.buttonn} >
                        <Image source={require("../../assets/images/pergunta.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>O QUE É O BPC</Text>
                    </View>
                </Link>



                <Link style={styles.link} href={"/BPC/QuemTem/QuemTem"}>
                    <View style={styles.buttonn} >
                        <Image source={require("../../assets/images/rendaa.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>QUEM TEM DIREITO DE RECEBER?</Text>
                    </View>
                </Link>


                <Link style={styles.link} href={"/BPC/Solicitar/Solicitar"}>
                    <View style={styles.buttonn} >
                        <Image source={require("../../assets/images/lupa.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>COMO SOLICITAR O BPC</Text>
                    </View>
                </Link>



                <Link style={styles.link} href={"/BPC/ComoPago/ComoPago"}>
                    <View style={styles.buttonn} >
                        <Image source={require("../../assets/images/renda.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "white", fontSize: 15 }}>COMO O BPC É PAGO ?</Text>
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
        alignItems: "center",

        height: 500,
        width: "100%",
        justifyContent: "center",


    },
    image: {

        display: "flex",
        alignItems: "center",
        width: "auto",
        height: "100%"
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
    button: {
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


})
const style = StyleSheet.create({
    container: {
        marginTop: 0,
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




