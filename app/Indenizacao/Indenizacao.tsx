import { ImageBackground, Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import { Header } from "../../components/headerBolsa"
import { ButtonLarge } from "../../components/buttonlarge"
import { Colors } from "../../constants/Colors"



export default function Indenizacao() {

    return (
        <ImageBackground source={require("../../assets/images/25.jpg")} resizeMode="cover" style={styles.image}>

            <Header></Header>

            <View style={styles.container}>


            </View>







           



            <View style={style.container}>
                <Pressable style={style.button} >

                    <Link href={"/Indenizacao/Segundo"}>
                        <Text style={{ color: "white", fontSize: 15 }}>CONTINUAR</Text>
                    </Link>

                </Pressable>

            </View>





        </ImageBackground>


    );
}


///////////////////////////////estilos///////////////////////////////////////


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems:"center",
       

        height: 530,
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
       
        
        
        alignItems:"flex-end",

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
       
      
        padding: 15,
        borderRadius: 10


    }

})




