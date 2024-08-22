import { ImageBackground, Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import { Header } from "../../components/headerEmprestimo"
import { ButtonLarge } from "../../components/buttonlarge"
import { Colors } from "../../constants/Colors"



export default function CadUni() {

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

                    <Link href={"/Emprestimo/OQueE/OQueE"}>
                        <Text style={{ color: "white", fontSize: 15 }}> O QUE É O CAIXATEM</Text>
                    </Link>

                </Pressable>

                <Pressable style={styles.button} >

                    <Link href={"/Emprestimo/Solicitar/Solicitar"}>
                        <Text style={{ color: "white", fontSize: 15 }}>COMO SOLICITAR O EMPRESTIMO CAIXATEM</Text>
                    </Link>

                </Pressable>
                <Pressable style={styles.button} >

                    <Link href={"/Emprestimo/Atualizar/Atualizar"}>
                        <Text style={{ color: "white", fontSize: 15 }}>COMO  ATUALIZAR O CADASTRO CAIXATEM</Text>
                    </Link>

                </Pressable>

                <Pressable style={styles.button} >

                    <Link href={"/Emprestimo/Correcao/Correcao"}>
                        <Text style={{ color: "white", fontSize: 15 }}>CORREÇÃO DE PROBLEMAS CAIXATEM</Text>
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




