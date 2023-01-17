import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet, FlatList, Text, ImageBackground, ScrollView} from 'react-native';
import { Appbar, List, Avatar, Button, TextInput, Card, RadioButton } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import supabase from '../supabase';

function PemesananScreen({ navigation, route }) {
    const [nama, setNama] = React.useState('');
    const [nama2, setNama2] = React.useState('');
    const [nama3, setNama3] = React.useState('');
    const [nama4, setNama4] = React.useState('');
    const [telepon, setTelepon] = React.useState('');
    const [telepon2, setTelepon2] = React.useState('');
    const [telepon3, setTelepon3] = React.useState('');
    const [telepon4, setTelepon4] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [gender2, setGender2] = React.useState('');
    const [gender3, setGender3] = React.useState('');
    const [gender4, setGender4] = React.useState('');

    let filter = route.params
    console.log(route)
    // const [kereta, setKereta] = React.useState('');
    // const [tanggal, setTanggal] = React.useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [data]);

    const getData = async () => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
            .from('rute')
            .select('* , kereta:id_kereta(*), stasiun:id_stasiun(*)')
            .eq('id_rute', filter.rute)
        //   .eq('id_rute', filter.stasiun_asal)
        //   .order('id_detail_kereta', {ascending:true});
        //mengisi state data
        // console.log(error)
        setData(data);
    }

    const onSimpan = async () => {
        //data : hasil query, error : pesan error
        let penumpang = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama,
                no_telepon: telepon,
                gender: gender
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang = penumpang.data[0].id_penumpang;

        let tiket = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })
        
        // console.log({ tiket: tiket.error, id: tiket.data[0].id })
        Alert.alert('Tiket Berhasil Di Pesan');
        navigation.navigate('TiketTab');
    }

    const onSimpan2 = async () => {
        //data : hasil query, error : pesan error
        let penumpang = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama,
                no_telepon: telepon,
                gender: gender
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang = penumpang.data[0].id_penumpang;

        let penumpang2 = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama2,
                no_telepon: telepon2,
                gender: gender2
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang2 = penumpang2.data[0].id_penumpang;

        let tiket = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })
        
        let tiket2 = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang2,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })

        // console.log({ tiket: tiket.error, id: tiket.data[0].id })
        Alert.alert('Tiket Berhasil Di Pesan');
        navigation.navigate('TiketTab');
    }

    const onSimpan3 = async () => {
        //data : hasil query, error : pesan error
        let penumpang = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama,
                no_telepon: telepon,
                gender: gender
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang = penumpang.data[0].id_penumpang;

        let penumpang2 = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama2,
                no_telepon: telepon2,
                gender: gender2
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang2 = penumpang2.data[0].id_penumpang;

        let penumpang3 = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama3,
                no_telepon: telepon3,
                gender: gender3
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang3 = penumpang3.data[0].id_penumpang;

        let tiket = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })
        
        let tiket2 = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang2,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })
        
        let tiket3 = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang3,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })

        // console.log({ tiket: tiket.error, id: tiket.data[0].id })
        Alert.alert('Tiket Berhasil Di Pesan');
        navigation.navigate('TiketTab');
    }

    const onSimpan4 = async () => {
        //data : hasil query, error : pesan error
        let penumpang = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama,
                no_telepon: telepon,
                gender: gender
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang = penumpang.data[0].id_penumpang;

        let penumpang2 = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama2,
                no_telepon: telepon2,
                gender: gender2
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang2 = penumpang2.data[0].id_penumpang;

        let penumpang3 = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama3,
                no_telepon: telepon3,
                gender: gender3
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang3 = penumpang3.data[0].id_penumpang;

        let penumpang4 = await supabase
            .from('penumpang')
            .insert({
                nama_penumpang: nama4,
                no_telepon: telepon4,
                gender: gender4
            });
        // console.log(error)                          
        // console.log({ pemesan: pemesan.error, id: pemesan.data[0].id})
        let id_penumpang4 = penumpang4.data[0].id_penumpang;

        let tiket = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })
        
        let tiket2 = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang2,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })
        
        let tiket3 = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang3,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })
        
        let tiket4 = await supabase
            .from('tiket')
            .insert({
                id_kereta: filter.kereta,
                id_penumpang: id_penumpang4,
                id_stasiun: filter.stasiun,
                id_rute: filter.rute
            })

        // console.log({ tiket: tiket.error, id: tiket.data[0].id })
        Alert.alert('Tiket Berhasil Di Pesan');
        navigation.navigate('TiketTab');
    }

    // 1 Penumpang
    if (filter.jumlah == 1) {
    return (
        <>
            <Appbar.Header style={{ backgroundColor: '#FFFFFF' }}>
                <Appbar.BackAction color="black" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Ringkasan Pemesanan"
                    color="black"
                />
            </Appbar.Header>
            <ImageBackground style={{
                width: '100%',
                height: '100%',
                flex: 1
            }}
                resizeMode='cover'
                source={require('../assets/Dackground.png')}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <>
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
                        </>
                    )}
                />
                <View style={{ position: 'absolute', marginTop: 150, alignSelf: 'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 8 }} />
                    <Text style={{ marginLeft: 35, marginTop: 10, fontWeight: '700', fontSize: 16 }}>Detail Penumpang</Text>
                    <Card style={{ width: 343, height: 310, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama}
                                onChangeText={nama => setNama(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon(telpon)}
                            />
                            <View>
                                <Button
                                    mode="contained"
                                    style={{ marginTop: 95, borderRadius: 25 }}
                                    color="#ed4f1a"
                                    onPress={() => Alert.alert("Pesan", "Apakah Data Sudah Benar?",
                                        [
                                            { text: "Tidak" },
                                            { text: "Iya", onPress: () => onSimpan() }
                                        ]
                                    )}
                                >
                                    Simpan
                                </Button>
                            </View>
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender(data)} value={gender}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </ImageBackground>
        </>
    )
    }

    // 2 Penumpang
    if (filter.jumlah == 2) {
        return (
               <>
            <Appbar.Header style={{ backgroundColor: '#FFFFFF' }}>
                <Appbar.BackAction color="black" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Ringkasan Pemesanan"
                    color="black"
                />
            </Appbar.Header>
            <ScrollView>
            <ImageBackground style={{
                width: '100%',
                height: '100%',
                flex: 1
            }}
                resizeMode='cover'
                source={require('../assets/Dackground.png')}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <>
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
                        </>
                    )}
                    />
                <View style={{ alignSelf:'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 18 }} />
                    <Text style={{ marginLeft: 35, marginTop: 20, fontWeight: '700', fontSize: 16 }}>Detail Penumpang 1</Text>
                    <Card style={{ width: 343, height: 250, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama}
                                onChangeText={nama => setNama(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon(telpon)}
                            />
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender(data)} value={gender}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
                <View style={{ alignSelf:'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 18 }} />
                    <Text style={{ marginLeft: 35, marginTop: 20, fontWeight: '700', fontSize: 16 }}>Detail Penumpang 2</Text>
                    <Card style={{ width: 343, height: 250, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama2}
                                onChangeText={nama => setNama2(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon2}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon2(telpon)}
                            />
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender2(data)} value={gender2}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
                <View>
                        <Button
                            mode="contained"
                            style={{ marginVertical: 10, borderRadius: 25, marginHorizontal: 50 }}
                            color="#ed4f1a"
                            onPress={() => Alert.alert("Pesan", "Apakah Data Sudah Benar?",
                                [
                                    { text: "Tidak" },
                                    { text: "Iya", onPress: () => onSimpan2() }
                                ]
                                )}
                            >
                                Simpan
                        </Button>
                    </View>
            </ImageBackground>
        </ScrollView>
        </>
        )
    }

    // 3 Penumpang
    if (filter.jumlah == 3) {
        return (
               <>
            <Appbar.Header style={{ backgroundColor: '#FFFFFF' }}>
                <Appbar.BackAction color="black" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Ringkasan Pemesanan"
                    color="black"
                />
            </Appbar.Header>
            <ScrollView>
            <ImageBackground style={{
                width: '100%',
                height: '100%',
                flex: 1
            }}
                resizeMode='cover'
                source={require('../assets/Dackground.png')}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <>
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
                        </>
                    )}
                    />
                <View style={{ alignSelf:'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 18 }} />
                    <Text style={{ marginLeft: 35, marginTop: 20, fontWeight: '700', fontSize: 16 }}>Detail Penumpang 1</Text>
                    <Card style={{ width: 343, height: 250, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama}
                                onChangeText={nama => setNama(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon(telpon)}

                            />
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender(data)} value={gender}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
                <View style={{ alignSelf:'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 18 }} />
                    <Text style={{ marginLeft: 35, marginTop: 20, fontWeight: '700', fontSize: 16 }}>Detail Penumpang 2</Text>
                    <Card style={{ width: 343, height: 250, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama2}
                                onChangeText={nama => setNama2(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon2}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon2(telpon)}
                            />
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender2(data)} value={gender2}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>

                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
                <View style={{ alignSelf:'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 18 }} />
                    <Text style={{ marginLeft: 35, marginTop: 20, fontWeight: '700', fontSize: 16 }}>Detail Penumpang 3</Text>
                    <Card style={{ width: 343, height: 250, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama3}
                                onChangeText={nama => setNama3(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon3}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon3(telpon)}
                            />
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender3(data)} value={gender3}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
                <View>
                        <Button
                            mode="contained"
                            style={{ marginVertical: 10, borderRadius: 25, marginHorizontal: 50 }}
                            color="#ed4f1a"
                            onPress={() => Alert.alert("Pesan", "Apakah Data Sudah Benar?",
                                [
                                    { text: "Tidak" },
                                    { text: "Iya", onPress: () => onSimpan3() }
                                ]
                                )}
                            >
                                Simpan
                        </Button>
                </View>
            </ImageBackground>
        </ScrollView>
        </>
        )
    }

    if (filter.jumlah == 4) {
        return (
               <>
            <Appbar.Header style={{ backgroundColor: '#FFFFFF' }}>
                <Appbar.BackAction color="black" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Ringkasan Pemesanan"
                    color="black"
                />
            </Appbar.Header>
            <ScrollView>
            <ImageBackground style={{
                width: '100%',
                height: '100%',
                flex: 1
            }}
                resizeMode='cover'
                source={require('../assets/Dackground.png')}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <>
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
                        </>
                    )}
                    />
                <View style={{ alignSelf:'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 18 }} />
                    <Text style={{ marginLeft: 35, marginTop: 20, fontWeight: '700', fontSize: 16 }}>Detail Penumpang 1</Text>
                    <Card style={{ width: 343, height: 250, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama}
                                onChangeText={nama => setNama(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon(telpon)}

                            />
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender(data)} value={gender}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
                <View style={{ alignSelf:'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 18 }} />
                    <Text style={{ marginLeft: 35, marginTop: 20, fontWeight: '700', fontSize: 16 }}>Detail Penumpang 2</Text>
                    <Card style={{ width: 343, height: 250, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama2}
                                onChangeText={nama => setNama2(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon2}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon2(telpon)}
                            />
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender2(data)} value={gender2}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>

                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
                <View style={{ alignSelf:'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 18 }} />
                    <Text style={{ marginLeft: 35, marginTop: 20, fontWeight: '700', fontSize: 16 }}>Detail Penumpang 3</Text>
                    <Card style={{ width: 343, height: 250, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama3}
                                onChangeText={nama => setNama3(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon3}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon3(telpon)}
                            />
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender3(data)} value={gender3}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
                <View style={{ alignSelf:'center' }}>
                    <MaterialCommunityIcons name="account-multiple" size={25} color="#F47814" style={{ position: 'absolute', marginTop: 18 }} />
                    <Text style={{ marginLeft: 35, marginTop: 20, fontWeight: '700', fontSize: 16 }}>Detail Penumpang 4</Text>
                    <Card style={{ width: 343, height: 250, marginTop: 10 }}>
                        <Card.Content style={{ marginTop: 5, marginHorizontal: 16 }}>
                            {/* <Text style={{ marginLeft: 10 }}>Penumpang</Text> */}
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nama"
                                value={nama4}
                                onChangeText={nama => setNama4(nama)}
                                left={<TextInput.Icon name="account" />}
                            />
                            <TextInput
                                style={{ backgroundColor: '#ffff' }}
                                label="Nomor Telepon"
                                value={telepon4}
                                left={<TextInput.Icon name="phone" />}
                                onChangeText={telpon => setTelepon4(telpon)}
                            />
                            <View style={{ position: 'absolute', marginTop: 150, marginLeft: 20 }}>
                                <RadioButton.Group onValueChange={data => setGender4(data)} value={gender4}>
                                    <View>
                                        <Text style={{ position: 'absolute', marginTop: 5, marginLeft: 40 }}>Laki-laki</Text>
                                        <RadioButton value="Laki-laki" />
                                    </View>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 5 }}>Perempuan</Text>
                                        <RadioButton value="Perempuan" />
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
                <View>
                        <Button
                            mode="contained"
                            style={{ marginVertical: 10, borderRadius: 25, marginHorizontal: 50 }}
                            color="#ed4f1a"
                            onPress={() => Alert.alert("Pesan", "Apakah Data Sudah Benar?",
                                [
                                    { text: "Tidak" },
                                    { text: "Iya", onPress: () => onSimpan4() }
                                ]
                                )}
                            >
                                Simpan
                        </Button>
                </View>
            </ImageBackground>
        </ScrollView>
        </>
        )
    }

}

export default PemesananScreen;