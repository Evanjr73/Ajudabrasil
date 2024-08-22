import { Text, View, StyleSheet, Image } from "react-native";

export function HeaderAuxilioBrasil() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain"></Image>
            <Text style={{fontSize:20}}>
              CONSULTA AUXÍLIO BRASIL
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "97%",
        padding:20,
        gap:15,
        marginHorizontal: "auto",
        height: 70,
       
        // borderBottomEndRadius:60,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        
        backgroundColor: "#00CD00",
        marginBottom: 10,
        marginTop:39,
       
       


    },
    text:{
        fontSize:30,
       
    },
    img: {
        maxHeight: 50,
        maxWidth: 50,

        borderRadius: 15,
     


    },

})