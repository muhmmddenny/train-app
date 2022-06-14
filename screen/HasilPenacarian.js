import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Appbar, List, Avatar, Button } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HasilPencarian({ navigation }) {
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
                source={require('../assets/Dackground.png')}>
                <TouchableOpacity onPress={() => navigation.navigate("PemesananScreen")}>
                    <View style={{ backgroundColor: '#ffff', marginHorizontal: 10, marginTop: 10, borderBottomWidth: 0.4, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }}>

                        <Avatar.Icon size={24} icon="ticket-confirmation" style={{ marginLeft: 10, backgroundColor: "#EB5757", marginTop: 20, position: 'absolute', }} color="#ffff" />
                        <Text style={{ position: 'absolute', marginLeft: 48, marginTop: 10, fontWeight: '700', color: '#413F42', }}>GAJAYANA</Text>
                        <Text style={{ marginLeft: 48, marginTop: 35, marginBottom: 14, color: '#EB5757', fontStyle: 'italic' }}>Executive</Text>
                        <Text style={{ position: 'absolute', marginLeft: 270, marginTop: 10, color: '#EB5757', fontWeight: '700' }}>Rp. 400.000,-</Text>
                    </View>
                    <View style={{ backgroundColor: '#ffff', marginHorizontal: 10, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                        <Text style={{ marginLeft: 10, marginTop: 6, color: '#413F42' }}>Pasar Senen</Text>
                        <Text style={{ marginLeft: 35, position: 'absolute', marginTop: 27, fontWeight: '300', color: '#413F42' }}>01.30</Text>
                        <Text style={{ position: 'absolute', marginTop: 6, marginLeft: 280, color: '#413F42' }}>Pasar Senen</Text>
                        <Text style={{ position: 'absolute', marginTop: 27, marginLeft: 305, fontWeight: '300', color: '#413F42' }}>07.30</Text>
                        <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={24} color="#EB5757" style={{ position: 'absolute', marginTop: 18, marginLeft: 175 }} />
                        <MaterialCommunityIcons name="clock-time-nine-outline" size={17} color="#413F42" style={{ position: 'absolute', marginTop: 29, fontWeight: 'bold', marginLeft: 15 }} />
                        <MaterialCommunityIcons name="clock-time-nine-outline" size={17} color="#413F42" style={{ position: 'absolute', marginTop: 29, fontWeight: 'bold', marginLeft: 285 }} />
                        <Text></Text>
                        <Text></Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>

        </>

    );
}
export default HasilPencarian;