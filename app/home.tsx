// home.tsx

import * as React from 'react'; // Uses the React library
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native'; // Uses the React Native library
import { Ionicons } from '@expo/vector-icons'; // Uses the Expo library
import { useQ } from '../Context/qContext'
import { useC } from '../Context/cContext'

let m = 35
let d = 3

const Home: React.FC = ({}) => {

  const { questions, addQ, removeQ, editQ, editA } = useQ();
  const { columns } = useC();
  const[openModal, setOpenModal] = useState(false);
  const[modalQ, setModalQ] = useState('');
  const[modalColor, setModalColor] = useState('');
  const[modalA, setModalA] = useState('');
  const[modalID, setModalID] = useState(0)
  const[modalUsed, setModalUsed] = useState(false);
  const [show, setShow] = useState(false);
  const [tName1, setTName1] = useState('Team 1')
  const [tName2, setTName2] = useState('Team 2')
  const [tName3, setTName3] = useState('Team 3')
  const [tName4, setTName4] = useState('Team 4')
  const [team1 ,setTeam1] = useState(0);
  const [team2 ,setTeam2] = useState(0);
  const [team3 ,setTeam3] = useState(0);
  const [team4 ,setTeam4] = useState(0);
  const [points, setPoints] = useState(0);

  if ((questions.length / 5) != columns.length) {
    if ((questions.length / 5) < columns.length) {
      for (let i = 1; i < columns.length - (questions.length/5); i ++) {
        addQ
      }
    } else if ((questions.length / 5) > columns.length) {
      for (let i = 1; i < (questions.length / 5) - columns.length; i ++) {
        removeQ
      }
    }
  }

  const handleOpenPopup = (id: number, q: string, a: string, used: boolean) => {
    let temp = questions.find(item => item.id == id)
    if (temp) {
    if (!used) {
      setModalQ(q)
      setModalA(a)
      setModalID(id)
      if (id % 2 == 0) {
        setModalColor("#f00")
      }
      else {
        setModalColor("#0f0")
      }
      setOpenModal(true)
      setPoints(temp.points)
      temp.used = true
    }}}  
    
    return(
        <>
        <View style={[setStyles.row, {backgroundColor:"#eee", alignItems:"center", justifyContent:"center",}]}>

          {/* Team 1-2 */}
          <View style={[setStyles.container, {backgroundColor:"#fff", margin:50, borderColor:"#000", borderWidth:2, alignItems:"center", justifyContent:"center", width:"10%"}]}>
            <TextInput 
            style={[setStyles.text, {color:"#000", marginBottom:5, textAlign:"center", maxWidth:'90%'}]}
            value={tName1}
            onChangeText={setTName1}/>
            <Text style={[setStyles.text, {color:"#000", marginBottom:5, marginTop:0}]}>{team1}</Text>
            <View style={[setStyles.row, {flexDirection:"row", alignItems:"center", justifyContent:"center"}]}>
            <TouchableOpacity style={[{margin:10, marginTop:0}]}
              onPress={() => {setTeam1(team1+points);}}>
              <Ionicons name={"add-circle-outline"} color={"#000"} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={[{margin:10, marginTop:0}]}
              onPress={() => setTeam1(team1-points)}>
              <Ionicons name={"remove-circle-outline"} color={"#000"} size={30}/>
            </TouchableOpacity>
            </View>
          </View>

          <View style={[setStyles.container, {backgroundColor:"#fff", margin:50, borderColor:"#000", borderWidth:2, alignItems:"center", justifyContent:"center", width: "10%"}]}>
            <TextInput 
              style={[setStyles.text, {color:"#000", marginBottom:5, textAlign:"center", maxWidth:'90%'}]}
              value={tName2}
              onChangeText={setTName2}/>
            <Text style={[setStyles.text, {color:"#000", marginBottom:5, marginTop:0}]}>{team2}</Text>
            <View style={[setStyles.row, {flexDirection:"row", alignItems:"center", justifyContent:"center"}]}>
            <TouchableOpacity style={[{margin:10, marginTop:0}]}
              onPress={() => setTeam2(team2+points)}>
              <Ionicons name={"add-circle-outline"} color={"#000"} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={[{margin:10, marginTop:0}]}
              onPress={() => setTeam2(team2-points)}>
              <Ionicons name={"remove-circle-outline"} color={"#000"} size={30}/>
            </TouchableOpacity>
            </View>
          </View>

          {/* Col Names & Q Boxes*/}
            <View style={[{flexDirection:'column',alignItems:"center", justifyContent:"center", height:"100%", width:"35%",}]}>
              {/* Col Names */}
              <FlatList style={[setStyles.container, {margin:10, height:"10%", width:"95%",}]}
                  data={columns}
                  numColumns={columns.length}
                  renderItem={({ item }) => (
                      <View style={[setStyles.row, {alignItems: 'center', justifyContent:'center', marginBottom:0, width:`${100/columns.length}%`}]}>
                        <Text style={[setStyles.text, {margin:10, marginTop:10, marginBottom:10, textAlign:'center'}]}>{item.c}</Text>    
                      </View>
                    )}
                  // Extracts the id 
                  keyExtractor={(item) => item.id}/>

                {/* Q Boxes */}
                <FlatList style={[setStyles.container, {height:"100%",}]}
                  data={questions}
                  numColumns={columns.length}
                  renderItem={({ item }) => (
                      <View style={[setStyles.row, {alignItems: 'center', justifyContent:'center'}]}>
                          <TouchableOpacity style={{backgroundColor: item.used?"#005":"#009",borderColor:"#Ffd700",borderWidth:1}}
                          onPress={() => {handleOpenPopup(item.id, item.q, item.a, item.used); editA(item.id, questions.length.toString())}}>
                            <Text style={[setStyles.text, {color: "#fff",marginLeft: (item.points==100)?(m+1.45) : (item.points==400)?(m-0.20):(m), marginRight: (item.points==100)?(m + 1.45) : (item.points==400)?(m-0.20):(m)}]}>{item.points}</Text>
                          </TouchableOpacity>
                        </View>
                    )}
                  // Extracts the id 
                  keyExtractor={(item) => item.id}/>
            </View>

          {/* Teams 3-4 */}
          <View style={[setStyles.container, {backgroundColor:"#fff", margin:50, borderColor:"#000", borderWidth:2, alignItems:"center", justifyContent:"center", width: "10%"}]}>
            <TextInput 
              style={[setStyles.text, {color:"#000", marginBottom:5, textAlign:"center", maxWidth:'90%'}]}
              value={tName3}
              onChangeText={setTName3}/>
            <Text style={[setStyles.text, {color:"#000", marginBottom:5, marginTop:0}]}>{team3}</Text>
            <View style={[setStyles.row, {flexDirection:"row", alignItems:"center", justifyContent:"center"}]}>
            <TouchableOpacity style={[{margin:10, marginTop:0}]}
              onPress={() => setTeam3(team3+points)}>
              <Ionicons name={"add-circle-outline"} color={"#000"} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={[{margin:10, marginTop:0}]}
              onPress={() => setTeam3(team3-points)}>
              <Ionicons name={"remove-circle-outline"} color={"#000"} size={30}/>
            </TouchableOpacity>
            </View>
          </View>

          <View style={[setStyles.container, {backgroundColor:"#fff", margin:50, borderColor:"#000", borderWidth:2, alignItems:"center", justifyContent:"center", width: "10%"}]}>
            <TextInput 
              style={[setStyles.text, {color:"#000", marginBottom:5, textAlign:"center", maxWidth:'90%'}]}
              value={tName4}
              onChangeText={setTName4}/>
            <Text style={[setStyles.text, {color:"#000", marginBottom:5, marginTop:0}]}>{team4}</Text>
            <View style={[setStyles.row, {flexDirection:"row", alignItems:"center", justifyContent:"center"}]}>
            <TouchableOpacity style={[{margin:10, marginTop:0}]}
              onPress={() => setTeam4(team4+points)}>
              <Ionicons name={"add-circle-outline"} color={"#000"} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={[{margin:10, marginTop:0}]}
              onPress={() => setTeam4(team4-points)}>
              <Ionicons name={"remove-circle-outline"} color={"#000"} size={30}/>
            </TouchableOpacity>
            </View>
          </View>

        </View>
        
        {/* Question Modal */}
        <Modal /* Allows for seeing popup */visible={openModal} /* Background transparencey */ transparent={true} /* Status Bar Transluency */statusBarTranslucent={true} animationType="fade">
        <View style={[setStyles.popup, {}]}>
          {/* Creates the Popup Card */}
          <View style={[setStyles.card, {backgroundColor: "#fff"}]}>
            <Text style={[setStyles.text, {
              alignItems: "flex-start", 
              justifyContent: "flex-start", 
              fontWeight: "600", 
              marginBottom: 12,
              fontSize: 20
              }]}>
                {modalQ}
            </Text>
            <Text style={[setStyles.desc, {fontWeight: "500", fontSize: 14,marginLeft:35}]}>
              {show? modalA: ""}
            </Text>
            {!show?
              <TouchableOpacity style={[setStyles.button, {
                height: 66,
                width: "100%",
                marginTop: 24,
                backgroundColor: "rgba(0, 0, 0, 0.1)"/* Red Green Blue Alpha (Alpha aka transparency, 0 = full, 1 = none) */,},]}
            onPress={() => {setShow(!show);}}>
            <Text style={[setStyles.text, {fontWeight: "600", fontSize: 20,}]}>Answer</Text>
            </TouchableOpacity> 
            : 
            <TouchableOpacity style={[setStyles.button, {
              height: 66,
              width: "100%",
              marginTop: 24,
              backgroundColor: "rgba(0, 0, 0, 0.1)"/* Red Green Blue Alpha (aka transparency, 0 = full, 1 = none) */,},]}
            onPress={() => {
              setShow(!show)
              setOpenModal(false);
              
            }}>
            <Text style={[setStyles.text, {fontWeight: "600", fontSize: 20,}]}>Close</Text>
            </TouchableOpacity>}
            
            </View>
        </View>
      </Modal>
        </>
    );
};

{/* Creates StyleSheet for better orginization */}
const setStyles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#eee"
    }, row:{
      flexDirection: 'row'
    }, text: {
        fontSize: 20,
        fontWeight: 600,
        margin: m
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
    },button: {
      width: "90%",
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
      height: 56,
      borderRadius: 8,
    },})

export default Home; {/* Exports Home */}
