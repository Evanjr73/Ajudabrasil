import { Text, View, StyleSheet,Image } from "react-native";



export function Header() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                BOLSA FAMÍLIA BLOQUEADO
            </Text>
        </View>
    )
}

export function HeaderQuantoTempo() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 15 }}>
                QUANTO TEMPO LEVA PRA DESBLOQUEAR?
            </Text>
        </View>
    )
}

export function HeaderReferencia() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                BLOQUEADO REFERÊNCIA
            </Text>
        </View>
    )
}
export function HeaderCaixaTEm() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                BLOQUEADO CAIXATEM
            </Text>
        </View>
    )
}
export function HeaderUnipessoal() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                BLOQUEADO UNIPESSOAL
            </Text>
        </View>
    )
}
export function HeaderProncipais() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                PRINCIPAIS MOTIVOS QUE CAUSAM O BLOQUEIO
            </Text>
        </View>
    )
}
export function HeaderEvitar() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />
            <Text style={{ fontSize: 20 }}>
                COMO EVITAR O BLOQUEIO DO BENEFÍCIO
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
        fontSize: 20,

    },
    img: {
        maxHeight: 50,
        maxWidth: 50,

        borderRadius: 15,



    },

})
