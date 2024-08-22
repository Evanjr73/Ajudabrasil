import { Text, View, StyleSheet,Image } from "react-native";



export function Header() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/caixatememprestimo.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                EMPRÉSTIMO CAIXATEM
            </Text>
        </View>
    )
}

export function HeaderOQE() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/caixatememprestimo.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                O QUE É O CAIXATEM ?
            </Text>
        </View>
    )
}

export function HeaderSolicitar() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/caixatememprestimo.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                COMO SOLICITAR O EMPRESTIMO
            </Text>
        </View>
    )
}
export function HeaderAtualizar() {

    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/caixatememprestimo.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                COMO ATUALIZAR
            </Text>
        </View>
    )
}
export function HeaderProblema() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/caixatememprestimo.png")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                CORREÇÃO DE PROBLEMAS CAIXATEM
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