import { ImageBackground, Text, View, StyleSheet, Button, Pressable, Alert} from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors"

export default function Segunda() {

    return (
        <ImageBackground source={require("../assets/images/AVISOLEGAL.png")} resizeMode="cover" style={styles.image}>
            

            <View style={styles.container}>
                <Text style={{fontSize:20, color:"black"}} >---Ao utilizar o nosso aplicativo, você concorda que seus dados serão usados somente para a consulta do benefício e não serão armazenados pelo aplicativo. Sua privacidade é importante para nós.</Text>
                <Text style={{fontSize:20, color:"black"}}>---Este não é um aplicativo oficial do Governo Federal, mas todas as informações exibidas pelo aplicativo são Oficiais, obtidas através do portal da transparência.</Text>
            </View>
            <View style={styles.containerButton}>
                <Pressable style={styles.button} >


                    <Link href={"/home"} >
                        <Text style={{ color: "white", fontSize: 15 }}>CONTINUAR</Text>
                    </Link>

                </Pressable>

            </View>





        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    container: {
        padding:30,
        marginTop:230,
        height: 300,
        width: "100%",
        
        backgroundColor:"#FAFAD2",
        borderRadius: 20,
        marginBottom:50,
      

    },
    containerButton: {

    }
    ,
    image: {


        display: "flex",
        justifyContent: "center",
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


