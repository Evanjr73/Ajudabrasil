import { Text, View, StyleSheet, Image } from "react-native";

export function Header() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain" />
            <Text>
                APP BRAJUDA
            </Text>
        </View>
    )
}



export function HeaderBolsa() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain" />
            <Text>
                NOVO BOLSA FAMILIA
            </Text>
        </View>
    )
}
export function HeaderBolsaCalendario() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/calendario2.jpeg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                Calendário de Pagamento
            </Text>
        </View>
    )
}
export function HeaderComoBolsa() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                Como Receber o Bolsa Familia
            </Text>
        </View>
    )
}
export function HeaderQuemPodera() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                QUEM PODERÁ RECEBER O NOVO BOLSA FAMILIA
            </Text>
        </View>
    )
}
export function HeaderComoSeraFeitoOPagamento
    () {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                COMO SERÁ FEITO O PAGAMENTO

            </Text>
        </View>
    )
}

export function HeaderSimular
    () {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                RESULTADO BOLSA FAMÍLIA

            </Text>
        </View>
    )
}

export function HeaderNovoValor() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsafamilia.png")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                NOVO VALOR DO BENEFÍCIO
            </Text>
        </View>
    )
}

export function HeaderJovem() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsajovem.jpg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                BOLSA JOVEM PÉ DE MEIA
            </Text>
        </View>
    )
}
export function HeaderJovemConsultar() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsajovem.jpg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                CONSULTAR BOLSA JOVEM
            </Text>
        </View>
    )
}
export function HeaderJovemCalendario() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsajovem.jpg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                CALENDÁRIO - BOLSA JOVEM
            </Text>
        </View>
    )
}
export function HeaderJovemComo() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsajovem.jpg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                COMO FUNCIONA O BOLSA JOVEM?
            </Text>
        </View>
    )
}
export function HeaderJovemRepro() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsajovem.jpg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                AINDA NÃO FUI APROVADO
            </Text>
        </View>
    )
}
export function HeaderJovemPerguntas() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/bolsajovem.jpg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                PERGUNTAS FREQUENTES 
            </Text>
        </View>
    )
}


///////////////////////AUXILIO GAS ////////////////////////////////
export function HeaderGas() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/auxiliogas.jpeg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                CONSULTA AUXÍLIO GÁS
            </Text>
        </View>
    )
}
export function HeaderGasOQ() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/auxiliogas.jpeg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                O QUE É O AUXÍLIO GÁS ?
            </Text>
        </View>
    )
}


export function HeaderGasQuem() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/auxiliogas.jpeg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                QUEM PODE PARTICIPAR ?

            </Text>
        </View>
    )
}

export function HeaderGasCalendario() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/auxiliogas.jpeg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                CALENDÁRIO

            </Text>
        </View>
    )
}
export function HeaderGasOQF() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/auxiliogas.jpeg")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                O QUE FAZER PARA RECEBER O AUXÍLIO ?

            </Text>
        </View>
    )
}
export function HeaderGasDuvidas() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                DÚVIDAS FREQUENTES
            </Text>
        </View>
    )
}
export function HeaderGasReceber() {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/images/cadeado.webp")} style={styles.img} resizeMode="contain" />
            <Text style={styles.text}>
                O QUE FAZER PARA RECEBER O AUXÍLIO GÁS
            </Text>
        </View>
    )
}







const styles = StyleSheet.create({

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "97%",

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
        maxHeight: 60,
        maxWidth: 60,

        borderRadius: 15,



    },

})
