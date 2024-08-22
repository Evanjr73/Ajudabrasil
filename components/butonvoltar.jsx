import { ImageBackground, Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Link } from "expo-router";

export default function btnVoltar() {
    return (


        <Pressable style={styles.button} >

            <Link href={"/home"}>
                <Text style={{ color: "white", fontSize: 15 }}>CONTINUAR</Text>
            </Link>

        </Pressable>
    )

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 600,
        margin: 20,

        height: "80%",
        width: "100%",


    },
    image: {


        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",



        height: "100%"
    },

    button: {

        flexBasis: '30%', // Aproximadamente 1/3 do espaço disponível
        margin: 5,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        width: 90,
        borderRadius: 10

    }

})





