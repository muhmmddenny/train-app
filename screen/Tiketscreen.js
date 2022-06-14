import React from "react";
import { View } from "react-native";
import { Appbar, List, Avatar, Button } from "react-native-paper";

function Tiketscreen({ navigation }) {
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction color="white" onPress={() => navigation.goBack("")} />
                <Appbar.Content
                    title="Info Tiket"
                    color="white"
                />
            </Appbar.Header>
        </>

    );
}
export default Tiketscreen;