import React from "react";
import { View, ImageBackground } from "react-native";
import { Appbar, List, Avatar, Button, TextInput } from "react-native-paper";

function PemesananScreen({ navigation }) {
    const [nama, setNama] = React.useState('');
    const [telepon, setTelepon] = React.useState('');
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction color="white" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Ringkasan Pemesanan"
                    color="black"
                />
            </Appbar.Header>
            <View style={{ flex: 1 }}>
                <ImageBackground style={{
                    width: '100%',
                    height: '100%',
                    flex: 1
                }}
                    resizeMode='cover'
                    source={require('../assets/Background2.png')}>
                    <View style={{ marginHorizontal: 16, marginTop: 10, borderColor: '#ffff', height: 300 }}>
                        <View style={{}}>
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
                            <Button
                                mode="contained"
                                style={{ marginHorizontal: 40, borderRadius: 30, marginTop: 10 }}
                                color="#FE9B4B"
                                labelStyle={{ color: '#fff' }}
                            // onPress={() => Alert.alert("Pesan", "Apakah Data Sudah Benar?",
                            //     [
                            //         { text: "Tidak" },
                            //         { text: "Iya", onPress: () => onSimpan() }
                            //     ]
                            // )}
                            >
                                Simpan
                            </Button>
                        </View>
                    </View>

                </ImageBackground>
            </View>

        </>

    );
}
export default PemesananScreen;