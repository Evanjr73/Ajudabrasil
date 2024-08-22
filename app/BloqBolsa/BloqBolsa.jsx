import { ImageBackground, Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import { Header } from "../../components/headerBloqBolsa"
import { ButtonLarge } from "../../components/buttonlarge"
import { Colors } from "../../constants/Colors"



export default function BolqBolsa() {

    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>
            {/* <View style={styles.header}>
                <Text>
                    NOVO BOLSA FAMILIA
                </Text>

            </View> */}
            <Header></Header>

            <View style={styles.container}>

                <Pressable style={styles.button} >

                    <Link href={"/BloqBolsa/Tempo/Tempo"}>
                        <Text style={{ color: "white", fontSize: 15 }}>   QUANTO TEMPO LEVA PARA DESBLOQUEAR? </Text>
                    </Link>

                </Pressable>

                <Pressable style={styles.button} >

                    <Link href={"/BloqBolsa/Referencia/Referencia"}>
                        <Text style={{ color: "white", fontSize: 15 }}>BLOQUEADO REFERÊNCIA</Text>
                    </Link>

                </Pressable>
                <Pressable style={styles.button} >

                    <Link href={"/BloqBolsa/CaixaTem/CaixaTem"}>
                        <Text style={{ color: "white", fontSize: 15 }}>  BLOQUEADO CAIXATEM</Text>
                    </Link>

                </Pressable>

                <Pressable style={styles.button} >

                    <Link href={"/BloqBolsa/Unipessoal/Unipessoal"}>
                        <Text style={{ color: "white", fontSize: 15 }}> BLOQUEADO UNIPESSOAL</Text>
                    </Link>

                </Pressable>
                <Pressable style={styles.button} >

                    <Link href={"/BloqBolsa/Motivos/Motivos"}>
                        <Text style={{ color: "white", fontSize: 15 }}>  PRINCIPAIS MOTIVOS QUE CAUSAM O BLOQUEIO </Text>
                    </Link>

                </Pressable>
                <Pressable style={styles.button} >

                    <Link href={"/BloqBolsa/Evitar/Evitar"}>
                        <Text style={{ color: "white", fontSize: 15 }}>   COMO EVITAR O BLOQUEIO DO BENEFÍCIO </Text>
                    </Link>

                </Pressable>




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
        backgroundColor: 'blue',
        height: 67,
        marginBottom: 10,
        width: "93%",
        padding: 15,
        borderRadius: 10,




    },


})
const style = StyleSheet.create({
    container: {

       height: 200,
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




