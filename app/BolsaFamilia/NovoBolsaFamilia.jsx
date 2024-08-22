import { ImageBackground, Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { HeaderBolsa } from "../../components/headerBolsa"
import { ButtonLarge } from "../../components/buttonlarge"
import { Colors } from "../../constants/Colors"
export default function NovoBolsaFamilia() {

    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
       
            <HeaderBolsa ></HeaderBolsa>




          <Link style={styles.link} href={"/BolsaFamilia/ConsultarNovoBolsaFamilia/ConsultarNovoBolsaFamilia"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/bolsaa.jpg")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Consultar novo Bolsa Familia</Text>
                </View>
            </Link> 



            <Link style={styles.link} href={"/BolsaFamilia/CalendarioDePagamento/CalendarioDePagamento"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/calendario2.jpeg")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Calendario Bolsa Familia</Text>
                </View>
            </Link>


            <Link style={styles.link} href={"/ConsultarBolsa/SimularBolsa"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Simular bolsa Familia</Text>
                </View>
            </Link>



            <Link style={styles.link} href={"/BolsaFamilia/ComoReceber/ComoReceber"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/renda.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Como receber o Bolsa Familia Online</Text>
                </View>
            </Link>


            <Link style={styles.link} href={"/BolsaFamilia/QuemPodera/QuemPodera"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/perguntas-frequentes.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}> Quem poderá receber o bolsa familia </Text>
                </View>
            </Link>



            <Link style={styles.link} href={"/BolsaFamilia/NovoValor/NovoValor"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/rendaa.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Novo Valor do Benefício </Text>
                </View>
            </Link>


            <Link style={styles.link} href={"/BolsaFamilia/ComoSeraFeitoOPagamento/ComoSeraFeitoOPagamento"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/a-receber.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Como Será Feito o Pagamento </Text>
                </View>
            </Link>





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

        height: "100%",
        width: "auto",
        backgroundColor: "red"

    },
    image: {

        display: "flex",
        alignItems: "center",
        width: "auto",
        height: "100%"
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


})
const style = StyleSheet.create({
    container: {
        marginTop: 15,
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




