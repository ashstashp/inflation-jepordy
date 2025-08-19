//settings.tsx

import * as React from 'react'; // Uses the React library
import {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, } from 'react-native'; // Uses the React Native library
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo's Vector Icons library
import { useQ } from '@/Context/qContext';
import { useC } from '@/Context/cContext';
import { useP } from '@/Context/pContext';
const aboutText = 
`Version: Pre-Release 0.1
Date Published (dd/mm/yyyy): 22/04/2025

This program is still in development, and may contain bugs.
Along with this, certain features are currently disabled.
I apoligize for any inconvience.

This program was developed by Ashton Paul`;

const Settings: React.FC = ({}) => {
    // Gets required vairables from respective Context file
    const { columns, addCol, editCol, removeCol } = useC();
    const { questions, addQ, editQ, removeQ, editA } = useQ();
    const { presets, addP, editP, removeP, loadP } = useP();

    const [openModal, setOpenModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [about, setAbout] = useState(false);
    const [g, setG] = useState(false);

    const [ openPreset, setOpenPreset ] = useState(false);
    const [ presetID, setPresetID ] = useState(0)

    // Sets the Array of Objcts used later for rendering
    const setScroll=[{
        id:1, // Stores the Identification Number (id)
        content: // Stores the content inside
        <TouchableOpacity
        onPress={() => {
            setModalType('c')
            setOpenModal(true)
            }}>

            <View style={[setStyles.row, {backgroundColor:"#eee"}]}>
                
                <Text style={[setStyles.text, {fontSize: 20, color:("#000")}]}>Columns</Text>
        
                <Ionicons 
                style={[{marginRight:20}]}
                name={'chevron-forward'}
                size={40}
                color={"#999"}/>

            </View>

        </TouchableOpacity>}, {
        id:2, content: 
            <TouchableOpacity
        onPress={() => {
            setModalType('q')
            setOpenModal(true)
            }}>

            <View style={[setStyles.row, {backgroundColor:"#fff"}]}>
                
                <Text style={[setStyles.text, {fontSize: 20, color:("#000")}]}>Questions</Text>
        
                <Ionicons 
                style={[{marginRight:20}]}
                name={'chevron-forward'}
                size={40}
                color={"#999"}/>

            </View>

        </TouchableOpacity>
    }, {
        id:3, content: 
            <TouchableOpacity
        onPress={() => {
            setModalType('p')
            setOpenModal(true)
            }}>

            <View style={[setStyles.row, {backgroundColor:"#eee"}]}>
                
                <Text style={[setStyles.text, {fontSize: 20, color:("#000")}]}>Presets</Text>
        
                <Ionicons 
                style={[{marginRight:20}]}
                name={'chevron-forward'}
                size={40}
                color={"#999"}/>

            </View>

        </TouchableOpacity>
    }, {
        id:4, content: 
            <TouchableOpacity
        onPress={() => {setAbout(true)}}>

            <View style={[setStyles.row, {backgroundColor:"#fff"}]}>
                
                <Text style={[setStyles.text, {fontSize: 20, color:("#000")}]}>About</Text>
        
                <Ionicons 
                style={[{marginRight:20}]}
                name={'chevron-forward'}
                size={40}
                color={"#999"}/>

            </View>

        </TouchableOpacity>
    }]

    return(
        <>
            <FlatList style={[setStyles.container, {backgroundColor:"#fff"}]}
                data={setScroll}
                renderItem={({ item }) => (
                    //Renders Content from setScroll for each id.
                    <View style={[]}>
                    {item.content}
                    </View>
                )}
                // Extracts the id 
                keyExtractor={(item) => item.id}/>
            <Modal visible={openModal} transparent={false} statusBarTranslucent={false} animationType="slide">

                <View style={[setStyles.container, {alignItems:"center", justifyContent:"flex-start", backgroundColor:"#eee"}]}>
                    <View style={[{marginTop:60}]}></View>
                    {modalType == 'c'?
                    <Text style={[setStyles.text, {fontSize:20, fontWeight:600}]}>Columns</Text> : 
                    modalType == 'q'?
                    <Text style={[setStyles.text, {fontSize:20, fontWeight:600}]}>Questions</Text> :

                    <Text style={[setStyles.text, {fontSize:20, fontWeight:600}]}>Presets</Text>}

                    <FlatList style={[setStyles.container, {backgroundColor: "#eee", margin: 5}]} 
                        data={modalType == 'c'? columns : modalType == 'q'? questions : presets}
                        renderItem = {({item}) => (
                            <View style={[]}>
                                {modalType == 'c'?
                                    <TextInput 
                                        style={[{}]}
                                        value={item.c}
                                        onChangeText={(text) => editCol(item.id, text)}
                                    />
                                    :
                                modalType == 'q'?
                                    <View style={[{flexDirection:'row', width:"100%", height:"100%"}]}>
                                        <TextInput 
                                            style={[{marginRight:10, maxWidth:"100%"}]}
                                            value={item.q}
                                            onChangeText={(text) => editQ(item.id, text)}
                                        />
                                        <TextInput 
                                            style={[{marginLeft:10, width:"100%"}]}
                                            value={item.a}
                                            onChangeText={(text) => editA(item.id, text)}
                                        />
                                    </View>
                                :
                                    item.id == 1?
                                        <TouchableOpacity style={[{alignItems:"center", justifyContent:"center",}]}
                                        onPress={() => loadP(1)}>
                                           <Text style={[setStyles.text]}>{item.p}</Text>
                                        </TouchableOpacity> :
                                        item.id == 3?
                                        <Text style={[setStyles.text]}>Custom Presets are underdevelopment</Text>
                                        : <></>
                                }

                                    
                                    {/* // <TouchableOpacity>
                                    //     <Text style={[setStyles.text]}>{item.p}</Text>
                                    // </TouchableOpacity> */}
                            </View>
                        )}/>
                    {modalType == 'c'?
                        <View style={[setStyles.container, {backgroundColor:"#eee"}]}>
                            <Text style={[setStyles.text, {color:g?"#000" : "#eee"}]}>Adding and Removing columns is currently prohibited</Text> 
                            <View style={[setStyles.row, {backgroundColor:"#eee"}]}>
                                <TouchableOpacity
                                onPress={() => setG(true)}>
                                    <Ionicons
                                        style={[{margin:30}]}
                                        name={"add-circle-outline"}
                                        size={40}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                onPress={() => setG(true)}>
                                    <Ionicons
                                        style={[{margin:30}]}
                                        name={"remove-circle-outline"}
                                        size={40}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View> : <></>}
                    <TouchableOpacity style={[setStyles.button4]}
                    onPress={() => {setOpenModal(false); setG(false);}}>
                        <Text style={[setStyles.text, {marginBottom:5}]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* Preset Editing? */}
            <Modal visible={openPreset} transparent={false} statusBarTranslucent={false} animationType="slide">
                {}
            </Modal>

            {/* About Page */}
            <Modal visible={about} transparent={true} statusBarTranslucent={false} animationType="fade">
                <View style={[setStyles.popup, {}]}>
                    <View style={[setStyles.card,{alignItems:"center" ,justifyContent:"center",}]}>
                    <Text style={[setStyles.text,{textAlign:"center"}]}>{aboutText}</Text>
                    <TouchableOpacity style={[setStyles.button4,{}]}
                    onPress={()=>{setAbout(false)}}>
                        <Text style={[setStyles.text, {fontWeight:600}]}>Close</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

 // Creates a StyleSheet, for easier code organization
const setStyles = StyleSheet.create({
    container: { flex: 1, 
        backgroundColor: '#fff', 
        flexBasis: 20, 
        flexDirection: "column", 
    }, 
    row: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
    },
    text: { 
        padding: 20, 
        fontSize: 20, 
        color: "#000",//"#42BFD5", 
        justifyContent: "flex-start", 
        alignItems: "flex-start", 
    }, button2: { 
        padding: 20, 
        fontSize: 20, 
        justifyContent: "flex-end", 
        alignItems: "flex-start", 
        flexDirection: "row" }, 
        button: { 
            width: "90%", 
            backgroundColor: "black", 
            justifyContent: "center", 
            alignItems: "center", 
            height: 56, 
            borderRadius: 8, 
    }, button3: { 
        fontSize: 20, 
        justifyContent: "flex-end", 
        alignItems: "flex-start", 
        flexDirection: "row" }, 
        switchThumb: { 
            padding: 15, 
            height: 10, 
            width: 10, 
            borderRadius: 8, 
    },popup: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      },desc: {
        fontSize: 14,
        lineHeight: 21,
        opacity: 0.7,
        color: "#000",
      },card: {
        width: "90%",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
      },button4: {
        width: "90%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        justifyContent: "center",
        alignItems: "center",
        height: 56,
        borderRadius: 8,
      },});

export default Settings; // Export Settings