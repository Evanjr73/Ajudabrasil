import { ImageBackground, Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import { Colors } from "../constants/Colors"
import { Link } from "expo-router";

export default function Home() {

    return (
        <ImageBackground source={require("../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <View style={styles.container}>
                {/* <ImageBackground source={require("../assets/images/bolsafamilia.png")} resizeMode="cover" style={styles.button}>

                </ImageBackground> */}

                <Link href={"/BolsaFamilia/NovoBolsaFamilia"} style={styles.link}>
                    <View style={styles.button}>
                        <Image source={require("../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain">

                        </Image>
                        <Text style={{ fontSize: 13, marginTop: 10 }}>
                            NOVO BOLSA FAMILIA
                        </Text>

                    </View>




                </Link>






                <Link href={"/ConsultarBolsa/SimularBolsa"} style={styles.link}>
                    <View style={styles.button} >
                        <Image source={require("../assets/images/bolsaa.jpg")} style={styles.img} resizeMode="contain" />


                        <Text style={{ color: "black", fontSize: 13, marginTop: 10 }}>CONSUlTAR BOLSA FAMILIA 2024</Text>

                    </View>
                </Link>

                <Link href={"/BolsaJovem/BolsaJovem"} style={styles.link}>
                    <View style={styles.button} >
                        <Image source={require("../assets/images/bolsajovem.jpg")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "black", fontSize: 13, marginTop: 10 }}>BOLSA JOVEM PÉ DE MEIA</Text>

                    </View>
                </Link>





                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

                <Link href={"/AuxilioGas/AuxilioGas"} style={styles.link}>
                    <View style={styles.button} >

                        <Image source={require("../assets/images/auxiliogas.jpeg")} style={styles.img} resizeMode="contain" />

                        <Text style={{ color: "black", fontSize: 15, marginTop: 10 }}> CONSULTA AUXÍLIO GÁS</Text>

                    </View>
                </Link>

                <Link href={"/BPC/BPC"} style={styles.link}>
                    <View style={styles.button} >
                        <Image source={require("../assets/images/bpc.jpg")} style={styles.img} resizeMode="contain" />

                        <Text style={{ color: "black", fontSize: 15 }}>CONSULTAR BPC</Text>

                    </View>
                </Link>

                <Link href={"/Calendario/Calendario"} style={styles.link}>
                    <View style={styles.button}  >
                        <Image source={require("../assets/images/calendario2.jpeg")} style={styles.img} resizeMode="contain" />

                        <Text style={{ color: "black", fontSize: 14 }}>CALENDARIO DE PAGAMENTO </Text>

                    </View>
                </Link>


                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}


                <Link href={"/CadUni/CadUni"} style={styles.link}>
                    <View style={styles.button} >
                        <Image source={require("../assets/images/cadastrounico.png")} style={styles.img} resizeMode="contain" />
                        <Text style={{ color: "black", fontSize: 15 }}>CADASTRO ÚNICO ONLINE</Text>

                    </View>
                </Link>

                <Link href={"/Emprestimo/Emprestimo"} style={styles.link}>
                    <View style={styles.button} >
                        <Image source={require("../assets/images/caixatememprestimo.png")} style={styles.img} resizeMode="contain" />

                        <Text style={{ color: "black", fontSize: 15 }}>EMPRÉSTIMO CAIXATEM</Text>

                    </View>
                </Link>
                <Link href={"/segunda"} style={styles.link}>
                    <View style={styles.button} >
                        <Image source={require("../assets/images/noticias.png")} style={styles.img} resizeMode="contain" />

                        <Text style={{ color: "gray", fontSize: 15 }}>NOTICIAS IMPORTANTES </Text>

                    </View>
                </Link>


                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

                <Link href={"/BloqBolsa/BloqBolsa"} style={styles.link}>
                    <View style={styles.button} >
                        <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />

                        <Text style={{ color: "black", fontSize: 15 }}>BOLSA FAMILIA BLOQUEADO</Text>

                    </View>
                </Link>

                {/* <Link href={"/Indenizacao/Indenizacao"} style={styles.link}>
                    <View style={styles.button} >

                        <Text style={{ color: "white", fontSize: 15 }}>INDENIZAÇÃO AUXILIO BRAZIL</Text>

                    </View>
                </Link> */}
                <Link href={"/ConsultaAuxilioBrasil/Consulta"} style={styles.link}>
                    <View style={styles.button} >
                        <Image source={require("../assets/images/auxiliobrasil.png")} style={styles.img} resizeMode="contain" />

                        <Text style={{ color: "white", fontSize: 15 }}>CONSULTA AUXILIO BRASIL </Text>

                    </View>
                </Link>




                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}


                <Link href={"/segunda"} style={styles.link}>
                    <View style={styles.button} >
                        <Image source={require("../assets/images/relatorio-diario.png")} style={styles.img} resizeMode="contain" />

                        <Text style={{ color: "white", fontSize: 15 }}>POLITICAS DE PRIVACIDADE</Text>

                    </View>
                </Link>
                {/* 
                <Link href={"/segunda"} style={styles.link}>

                    <View style={styles.button} >
                        <Text style={{ color: "white", fontSize: 15 }}>COMPARTILHAR APLICATIVO</Text>

                    </View>
                </Link>
                <Link href={"/segunda"} style={styles.link}>
                    <View style={styles.button} >

                        <Text style={{ color: "white", fontSize: 15 }}>AVALIAR APLICATIVO</Text>

                    </View>
                </Link> */}






            </View>

        </ImageBackground >

    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 600,
        margin: 10,
        marginTop: 90,

        height: "80%",
        width: "100%",


    },

    img: {
        maxHeight: 70,
        maxWidth: 70,

        borderRadius: 15,


    },
    image: {


        display: "flex",

        alignItems: "center",
        width: "auto",




        height: "100%"
    },

    button: {

        width: 100,
        height: 140,
        backgroundColor: "red ",
        alignItems: "center"


    },
    link: {
        flexBasis: '30%', // Aproximadamente 1/3 do espaço disponível
        margin: 5,
        flexDirection: "column",
        backgroundColor: '#4CAF50',
        // backgroundColor: Colors.dark.background,

        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
        width: 100,
        borderRadius: 10,
        padding: 5


    },

})


