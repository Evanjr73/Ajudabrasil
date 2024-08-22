import { Text, View, StyleSheet, Image} from "react-native";



export function Header() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadastrounico.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                CADASTRO ÚNICO ONLINE
            </Text>
        </View>
    )
}

export function HeaderOQE() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadastrounico.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                O QUE É O CADÚNICO?
            </Text>
        </View>
    )
}
export function HeaderDireito() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadastrounico.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                QUEM TEM DIREITO DE RECEBER O BPC?
            </Text>
        </View>
    )
}
export function HeaderSolicitar() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadastrounico.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                COMO SOLICITAR O BPC
            </Text>
        </View>
    )
}
export function HeaderProgramas() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadastrounico.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                PROGRAMAS SOCIAIS DO CADÚNICO
            </Text>
        </View>
    )
}
export function HeaderQuemPode() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadastrounico.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                QUEM PODE SE INDCREVER NO CADÚNICO
            </Text>
        </View>
    )
}

export function HeaderComoSeInscrever() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadastrounico.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                COMO SE INSCREVER NO CADÚNICO
            </Text>
        </View>
    )
}

export function HeaderDuvidas() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadastrounico.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                DÚVIDAS FREQUENTES SOBRE O CADÚNICO
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