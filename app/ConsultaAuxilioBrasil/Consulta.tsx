import { ImageBackground, Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { HeaderBolsa } from "../../components/headerBolsa"
import { ButtonLarge } from "../../components/buttonlarge"
import { Colors } from "../../constants/Colors"
import { HeaderAuxilioBrasil } from "@/components/headerAuxilio";
export default function ConsultarAuxilioBrasil() {

    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
        
            <HeaderAuxilioBrasil></HeaderAuxilioBrasil>






            <Link style={styles.link} href={"/BolsaFamilia/NovoBolsaFamilia"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Como receber o Bolsa Familia Online</Text>
                </View>
            </Link>


            <Link style={styles.link} href={"/BolsaFamilia/QuemPodera/QuemPodera"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/lupa.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Quem poderá receber o Bolsa Familia</Text>
                </View>
            </Link>



            <Link style={styles.link} href={"/BolsaFamilia/NovoValor/NovoValor"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/renda.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Novo Valor do Benefício</Text>
                </View>
            </Link>


            <Link style={styles.link} href={"/BolsaFamilia/CalendarioDePagamento/CalendarioDePagamento"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/calendario2.jpeg")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}> como será feito o Pagamento</Text>
                </View>
            </Link>



            <Link style={styles.link} href={"/AuxilioGas/AuxilioGas"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/tanque-de-gas.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Auxílio Gás </Text>
                </View>
            </Link>


            <Link style={styles.link} href={"/Emprestimo/Emprestimo"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/renda.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Empréstimo Consignado</Text>
                </View>
            </Link>
            {/* <Link style={styles.link} href={"/BolsaFamilia/ComoSeraFeitoOPagamento/ComoSeraFeitoOPagamento"}>
                <View style={styles.button} >
                    <Image source={require("../../assets/images/a-receber.png")} style={styles.img} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 15 }}>Principais Dúvidas</Text>
                </View>
            </Link> */}





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
        marginTop:100,
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




