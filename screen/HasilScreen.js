import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { Appbar, List, Avatar, Button } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import supabase from '../supabase';

function HasilScreen({ navigation, route }) {
    let filter= route.params
    console.log(route)
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
        }, [data]);
    
      const getData = async() => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
                                  .from('rute')
                                  .select('*, kereta:id_kereta(*), stasiun:id_stasiun(*)')
                                  .eq('id_stasiun', filter.stasiun_tujuan)
                                  .eq('id_stasiun', filter.stasiun_asal)
                                //   .eq('tanggal', filter.tanggal)
                                  .order('id_rute', {ascending:true});
        // mengisi state data
        // console.log(error)
        setData(data);
      }

    return (
        <>
            <Appbar.Header style={{ backgroundColor: '#FFFFFF' }}>
                <Appbar.BackAction color="black" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Select Train"
                    color="black"
                />
            </Appbar.Header>
            <ImageBackground style={{
                width: '100%',
                height: '100%',
                flex: 1
            }}
                resizeMode='cover'
                source={require('../assets/Background2.png')}>
                <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => navigation.navigate("PemesananScreen", {rute:item.id_rute, stasiun:item.stasiun.id_stasiun, kereta:item.kereta.id_kereta, jumlah: filter.jumlah})}>
                    <View style={{ backgroundColor: '#ffff', marginHorizontal: 10, marginTop: 10, borderBottomWidth: 0.4, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}>
                        <Avatar.Icon size={24} icon="ticket-confirmation" style={{ marginLeft: 10, backgroundColor: "#EB5757", marginTop: 20, position: 'absolute', }} color="#ffff" />
                        <Text style={{ position: 'absolute', marginLeft: 48, marginTop: 10, fontWeight: '700', color: '#413F42', }}>{item.kereta.nama_kereta}</Text>
                        <Text style={{ marginLeft: 48, marginTop: 35, marginBottom: 14, color: '#EB5757', fontStyle: 'italic' }}>{item.kelas}</Text>
                        <Text style={{ position: 'absolute', marginLeft: 270, marginTop: 10, color: '#EB5757', fontWeight: '700' }}>Rp. {item.harga},-</Text>
                    </View>
                    <View style={{ backgroundColor: '#ffff', marginHorizontal: 10, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                        <Text style={{ marginLeft: 10, marginTop: 6, color: '#413F42' }}>{item.stasiun.stasiun_asal}</Text>
                        <Text style={{ marginLeft: 35, position: 'absolute', marginTop: 27, fontWeight: '300', color: '#413F42' }}>{item.jam_berangkat}</Text>
                        <Text style={{ position: 'absolute', marginTop: 6, marginLeft: 280, color: '#413F42' }}>{item.stasiun.stasiun_tujuan}</Text>
                        <Text style={{ position: 'absolute', marginTop: 27, marginLeft: 305, fontWeight: '300', color: '#413F42' }}>{item.jam_sampai}</Text>
                        <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={24} color="#EB5757" style={{ position: 'absolute', marginTop: 18, marginLeft: 175 }} />
                        <MaterialCommunityIcons name="clock-time-nine-outline" size={17} color="#413F42" style={{ position: 'absolute', marginTop: 29, fontWeight: 'bold', marginLeft: 15 }} />
                        <MaterialCommunityIcons name="clock-time-nine-outline" size={17} color="#413F42" style={{ position: 'absolute', marginTop: 29, fontWeight: 'bold', marginLeft: 285 }} />
                        <Text></Text>
                        <Text></Text>
                    </View>
                </TouchableOpacity>
                )}
                />
            </ImageBackground>

        </>

    );
}
export default HasilScreen;