import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native';

function HomeScreen({ navigation }) {
  const image = { uri: "https://scontent.fcgk29-1.fna.fbcdn.net/v/t31.18172-8/12291801_1490231021285245_6136544680250325317_o.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DKas1MwWUFMAX8l1x_c&_nc_ht=scontent.fcgk29-1.fna&oh=00_AT9YDIUT-qSQvpZkup5eNO9aUBDZpzbJEgzy2ISKo4XF2w&oe=62BCBB3A" };
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("PencarianScreen")}>
        <ImageBackground source={image} style={{ width: 100, height: 100 }}></ImageBackground>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ba0e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;