import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Appbar, List, Avatar, Button, Card, TextInput } from "react-native-paper";
// import { AntDesign } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import DatePicker from 'react-native-datepicker';
import supabase from '../supabase';

function PencarianScreen({ navigation }) {
    const [dataPicker, setDataPicker] = useState([]);
    const [asal, setAsal] = useState('');
    const [tujuan, setTujuan] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [jumlah, setJumlah] = React.useState('');
    // const [Asal, setAsal] = useState();
    // const [Tujuan, setTujuan] = useState();
    // const [tanggal, setTanggal] = useState('');

    useEffect(() => {
        getRute();
    }, []);

    //list data picker
    const getRute = async () => {
        const { data, error } = await supabase
            .from('stasiun')
            .select('*')
            .order('id_stasiun', { ascending: true });
        setDataPicker(data);
    }

    return (
        <>
            <StatusBar />

            <View style={{ flex: 1 }}>
                <ImageBackground style={{
                    // width: '100%',
                    // height: '100%',
                    flex: 1
                }}
                    resizeMode='cover'
                    source={require('../assets/Background2.png')}>
                    <Image source={require('../assets/Illustration.png')} style={{ position: 'absolute', marginTop: 71, marginLeft: 61 }} />
                    <View style={{ marginTop: 232, marginHorizontal: 16, backgroundColor: '#ffff', flexDirection: 'row', height: 340, borderRadius: 10 }}>
                        <Text style={{ position: 'absolute', marginTop: 90, marginLeft: 16, marginRight: 100, color: '#F2F2F2' }}>____________________________________________________ </Text>
                        <View style={{ marginRight: 10, flex: 1, }}>
                            <Text style={{ marginTop: 22, marginLeft: 22, color: '#2D9CDB', fontSize: 15, fontWeight: '700' }}>Keberangkatan</Text>
                            <Picker
                                style={{ fontSize: 24, marginLeft: 16, marginTop: 4, }}
                                selectedValue={asal}
                                onValueChange={(value) => setAsal(value)}>
                                <Picker.Item label="Kota Asal" value="" />
                                {dataPicker.map((row) =>
                                    <Picker.Item label={row.stasiun_asal} value={row.id_stasiun} />
                                )}
                            </Picker>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 22, marginLeft: 110, marginRight: 16, color: '#2D9CDB', fontSize: 15, fontWeight: '700' }}>Tujuan</Text>
                            <Picker
                                style={{ fontSize: 24, marginTop: 4, marginLeft: 20 }}
                                selectedValue={tujuan}
                                onValueChange={(value) => setTujuan(value)}>
                                <Picker.Item label="Kota Tujuan" value="" />
                                {dataPicker.map((row) =>
                                    <Picker.Item label={row.stasiun_tujuan} value={row.id_stasiun} />
                                )}
                            </Picker>
                        </View>

                        <View style={{ position: 'absolute', marginTop: 122, backgroundColor: '#fff' }}>
                            <Text style={{ marginTop: 4, marginLeft: 22, fontWeight: '700', color: '#2D9CDB', fontSize: 15 }}>Tanggal Keberangkatan</Text>
                            <DatePicker
                                style={{ width: 350, marginTop: 20, }}
                                date={tanggal}
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 5,
                                        marginLeft: 7
                                    },
                                    dateInput: {
                                        marginLeft: 45,
                                        borderRadius: 50,
                                        marginRight: 10,
                                    }
                                }}
                                format='YYYY-MM-DD'
                                onDateChange={(date) => setTanggal(date)}
                            />
                            <Text></Text>
                            <Text></Text>
                            {/* <Text></Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff', marginTop: -30 }}
                                label="Jumlah Penumpang"
                                value={jumlah}
                                onChangeText={jumlah => setJumlah(jumlah)}
                                left={<TextInput.Icon name="account" />}
                            />
                        </View>

                    </View>
                    <Button
                        mode="contained"
                        onPress={() => navigation.navigate("HasilScreen", { stasiun_asal: asal, stasiun_tujuan: tujuan, tanggal: tanggal, jumlah: jumlah })}
                        color="#FE9B4B"
                        style={{
                            borderRadius: 30,
                            marginTop: -45,
                            marginHorizontal: 90,
                        }}
                        labelStyle={{ color: '#fff' }}
                    >
                        CARI TIKET
                    </Button>
                </ImageBackground>
                <View style={{ position: 'absolute' }}>
                    <Text style={{ marginTop: 136, marginLeft: 32, fontSize: 24, fontWeight: '700' }}>
                        Mau pergi ke
                    </Text>
                    <Text style={{ marginTop: 2, marginLeft: 32, fontSize: 24, fontWeight: '700' }}>
                        mana hari ini ?
                    </Text>
                    <View style={{ flex: 1 }}>
                        <Text style={{ position: 'absolute', color: 'black', marginTop: 365, marginLeft: 32, fontSize: 16, fontWeight: '700' }}>Berita</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 370 }}>
                        <ScrollView horizontal={true}>
                            <Card style={{ marginLeft: 16, width: 262, height: 140, marginTop: 20 }}>
                                <Card.Content>
                                    <Text style={{ position: 'absolute', marginLeft: 24, marginTop: 28, backgroundColor: '#85D3FF', color: '#ffff', }}>  Tips  </Text>
                                    <Text style={{ position: 'absolute', marginLeft: 24, marginTop: 50 }}> Tetap Jaga</Text>
                                    <Text style={{ position: 'absolute', marginLeft: 24, marginTop: 70 }}> Komunikasi</Text>
                                    <Text style={{ position: 'absolute', marginLeft: 24, marginTop: 90 }}> Selama di kereta</Text>
                                </Card.Content>
                                <Card.Cover source={require('../assets/pesan.png')} style={{ width: 90, height: 100, marginLeft: 140, backgroundColor: '#ffff', marginRight: 10 }} />
                            </Card>
                            <View>

                                <Card style={{ marginLeft: 16, width: 262, height: 140, marginTop: 20 }}>
                                    <Card.Content>
                                        <Text style={{ position: 'absolute', marginLeft: 24, marginTop: 28, backgroundColor: '#F47814', color: '#ffff', }}>  Update  </Text>
                                        <Text style={{ position: 'absolute', marginLeft: 24, marginTop: 55 }}> Protokol</Text>
                                        <Text style={{ position: 'absolute', marginLeft: 24, marginTop: 75 }}> Kesehatan di</Text>
                                        <Text style={{ position: 'absolute', marginLeft: 24, marginTop: 95 }}> Kereta</Text>
                                    </Card.Content>
                                    <Card.Cover source={require('../assets/healthy.png')} style={{ width: 90, height: 100, marginLeft: 140, backgroundColor: '#ffff', marginRight: 10 }} />
                                </Card>
                            </View>
                        </ScrollView>

                    </View>
                </View>
            </View>
        </>


    );
}
export default PencarianScreen;