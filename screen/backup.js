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