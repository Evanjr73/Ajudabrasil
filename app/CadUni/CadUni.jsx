import { ImageBackground, Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { Header } from "../../components/headerCad"
import { ButtonLarge } from "../../components/buttonlarge"
import { Colors } from "../../constants/Colors"



export default function CadUni() {

    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <Header></Header>

            <View style={styles.container}>

                <Link style={styles.link} href={"/CadUni/OQueE/OQueE"}>
                    <View style={styles.buttonn} >
                        <Image style={styles.img} source={require("../../assets/images/pergunta.png")} />

                        <Text style={{ color: "white", fontSize: 15 }}>O QUE É O CadÚnico?</Text>

                    </View>
                </Link>

                <Link style={styles.link} href={"/CadUni/Programas/Programas"}>
                    <View style={styles.buttonn} >
                        <Image style={styles.img} source={require("../../assets/images/familia.png")} />

                        <Text style={{ color: "white", fontSize: 15 }}>PROGRAMAS SOCIAIS QUEM FAZEM PARTE</Text>

                    </View>
                </Link>
                <Link style={styles.link} href={"/CadUni/QuemPode/QuemPode"}>
                    <View style={styles.buttonn} >
                        <Image style={styles.img} source={require("../../assets/images/bolsafamilia.png")} />

                        <Text style={{ color: "white", fontSize: 15 }}>quem pode se inscrever? </Text>

                    </View>
                </Link>

                <Link style={styles.link} href={"/CadUni/Inscrever/Inscrever"}>
                    <View style={styles.buttonn} >
                        <Image style={styles.img} source={require("../../assets/images/pergunta.png")} />

                        <Text style={{ color: "white", fontSize: 15 }}>COMO SE INSCREVER NO CadÚnico</Text>

                    </View>
                </Link>
                <Link style={styles.link} href={"/CadUni/Duvidas/Duvidas"}>
                    <View style={styles.buttonn} >
                        <Image style={styles.img} source={require("../../assets/images/perguntas-frequentes.png")} />

                        <Text style={{ color: "white", fontSize: 15 }}>DÚVIDAS FREQUENTES SOBRE O  CadÚnico</Text>

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
    img: {
        maxHeight: 55,
        maxWidth: 70,
        borderRadius: 15,
        marginRight: 8,
        marginLeft: 5
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




        height: 180,
        width: "100%",

    },
    image: {

        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "auto",
        height: "auto"
    },
    button: {
        display: "flex",
        alignItems: "center",
        backgroundColor: 'blue',
        height: 50,
        width: "35%",

        marginBottom: 100,
        padding: 15,
        borderRadius: 10


    }

})




