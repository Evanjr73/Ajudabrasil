import { Text, View, StyleSheet, Image } from "react-native";



export function Header() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bpc.jpg")} style={styles.img} resizeMode="contain" />
            <Text>
                CONSULTAR BPC
            </Text>
        </View>
    )
}

export function HeaderOQE() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bpc.jpg")} style={styles.img} resizeMode="contain" />
            <Text>
                O QUE É O BPC
            </Text>
        </View>
    )
}
export function HeaderDireito() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bpc.jpg")} style={styles.img} resizeMode="contain" />
            <Text>
                QUEM TEM DIREITO DE RECEBER O BPC?
            </Text>
        </View>
    )
}
export function HeaderSolicitar() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bpc.jpg")} style={styles.img} resizeMode="contain" />
            <Text>
                COMO SOLICITAR O BPC
            </Text>
        </View>
    )
}
export function HeaderPago() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bpc.jpg")} style={styles.img} resizeMode="contain" />
            <Text>
                COMO É PAGO O BPC?
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
        padding: 20,
        gap: 15,
        marginHorizontal: "auto",
        height: 70,

        // borderBottomEndRadius:60,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,

        backgroundColor: "#00CD00",
        marginBottom: 10,
        marginTop: 39,




    },
    text: {
        fontSize: 30,

    },
    img: {
        maxHeight: 50,
        maxWidth: 50,

        borderRadius: 15,



    },

})