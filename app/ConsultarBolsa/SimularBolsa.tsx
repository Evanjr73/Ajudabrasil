
import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, TextInput, Pressable, ScrollView, Image, } from 'react-native';
import { Link } from 'expo-router';
import { HeaderBolsa } from '../../components/headerBolsa';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import {styles , style} from '../../constants/estilos'
// import { RootStackParamList } from '../types';


const SimularBolsa: React.FC = () => {
  const [number, onChangeNumber] = useState<string>('');

  //////////////// variáveis de valor input //////////////////////////
  const [nome, setNome] = useState<string>('');
  const [nis, setNis] = useState<string>('');
  const [pessoas, setPessoas] = useState<string>('');
  const [bebes, setBebes] = useState<string>('');
  const [criancas, setCriancas] = useState<string>('');
  const [adolecentes, setAdolecentes] = useState<string>('');
  const [gestantes, setGestantes] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  /////////////////////////////////////////////////////////////////////

  const [dis, setDis] = useState<'flex' | 'none'>('flex');
  const [disbutton, setDisbutton] = useState<'flex' | 'none'>('none');

  const handleChangeCalcular = () => {
    console.log(nome, nis, pessoas, bebes, criancas, adolecentes, gestantes);

    setDis('none');
    setDisbutton('flex');

    const pessoasNum = parseInt(pessoas) || 0;
    const criancasNum = parseInt(criancas) || 0;
    const bebesNum = parseInt(bebes) || 0;
    const adolecentesNum = parseInt(adolecentes) || 0;
    const gestantesNum = parseInt(gestantes) || 0;

    let resultado =
      (142 * pessoasNum) +
      (150 * criancasNum) +
      (50 * adolecentesNum) +
      (50 * criancasNum);

    console.log('Resultado:', resultado);
    setResultado(resultado)

  };
  const handleChangeCalcularNova = () => {
    setDis('flex');
    setDisbutton('none');

  }

  const handleChangeNome = (text: string) => {
    setNome(text);
  };
  const handleChangeNis = (text: string) => {
    setNis(text);
  };
  const handleChangePessoas = (text: string) => {
    setPessoas(text);
  };
  const handleChangeBebes = (text: string) => {
    setBebes(text);
  };
  const handleChangeCriancas = (text: string) => {
    setCriancas(text);
  };
  const handleChangeAdolecentes = (text: string) => {
    setAdolecentes(text);
  };
  const handleChangeGestantes = (text: string) => {
    setGestantes(text);
  };



  return (
    <ImageBackground source={require('../../assets/images/25.jpg')} resizeMode="cover" style={styles.image}>
      <HeaderBolsa />
      <ScrollView>
        <View style={{ display: dis }}>
          <View style={{ height: '65%', width: '100%', marginBottom: 15 }}>
            <View style={styles.container}>
              <View style={styles.cardp}>
                <Text style={{ fontSize: 20, marginBottom: 5 }}>SIMULAR NOVO BOLSA FAMÍLIA</Text>
                <Text>Para começar informe seu NOME</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nome"
                  value={nome}
                  onChangeText={handleChangeNome}
                  keyboardType="default"
                />
              </View>
              <View style={styles.card}>
                <Text>Para começar informe seu NISS</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChangeNis}
                  value={nis}
                  placeholder="NISS"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.card}>
                <Text>Número de pessoas do seu núcleo familiar.</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChangePessoas}
                  value={pessoas}
                  placeholder="Pessoas"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.card}>
                <Text>Bebês de até 6 meses fazem parte do núcleo familiar</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChangeBebes}
                  value={bebes}
                  placeholder="Bebês"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.card}>
                <Text>Informe quantas crianças de 6 meses até 6 anos fazem parte do núcleo familiar</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChangeCriancas}
                  value={criancas}
                  placeholder="Crianças"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.card}>
                <Text>Quantidade de crianças/adolescentes com idade entre 7 e 17 anos no núcleo familiar</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChangeAdolecentes}
                  value={adolecentes}
                  placeholder="Crianças/Adolescentes"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.card}>
                <Text>Informe o número de gestantes</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChangeGestantes}
                  value={gestantes}
                  placeholder="Gestantes"
                  keyboardType="numeric"
                />
              </View>
              <Pressable style={style.button2} onPress={handleChangeCalcular}>
                <Text style={{ color: 'white', fontSize: 15 }}>CALCULAR</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{ display: disbutton, height: 650, width: '100%', marginBottom: 15, alignItems: "center" }}>
          <View style={style.View}>
            <Image source={require('../../assets/images/bolsa.jpg')} style={{ borderRadius: 15, height: 150, width: "auto" }} />
            <Text style={{ fontSize: 20 }} > VALOR A RECEBER: {resultado}</Text>

          </View>
          <View style={style.View}>

            <Text style={{ fontSize: 15 }} >VALOR POR PESSOA:          </Text>
            <Text style={{ fontSize: 15 }} >R$142,00</Text>

            <Text style={{ fontSize: 15 }} >VALOR POR PRIMEIRA INFÂNCIA 6 MESES A 6 ANOS:</Text>
            <Text style={{ fontSize: 15 }} >R$150,00</Text>
            <Text style={{ fontSize: 15 }} >VALOR POR CRIANÇAS ENTRE 7 E 17 ANOS:</Text>
            <Text style={{ fontSize: 15 }} >R$50,00</Text>
            <Text style={{ fontSize: 15 }} >VALOR POR CRIANÇAS DE ATÉ 6 ANOS:</Text>
            <Text style={{ fontSize: 15 }} >R$50,00</Text>

          </View>



        </View>
        <View style={{ display: disbutton, height: 55, width: 400, justifyContent: "space-between", flexDirection: "row-reverse" }}>
          <Pressable style={style.button} onPress={handleChangeCalcularNova}>

            <Link href={"/home"}>
              <Text style={{ color: 'white', fontSize: 15 }}>MENU</Text>
            </Link>



          </Pressable>
          <Pressable style={style.button} onPress={handleChangeCalcularNova}>

            <Text style={{ color: 'white', fontSize: 15 }}>VOLTAR</Text>

          </Pressable>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SimularBolsa;

