// home.tsx

import * as React from 'react'; // Uses the React library
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native'; // Uses the React Native library
import { Ionicons } from '@expo/vector-icons'; // Uses the Expo library
import { useQ } from '../Context/qContext'

let m = 25

const Home: React.FC = ({}) => {
    // Gets required vairables from respective Context files
    const { questions } = useQ();
    let q11 = questions.find(item => item.id === 1)
    let q12 = questions.find(item => item.id === 2)
    let q13 = questions.find(item => item.id === 3)
    let q14 = questions.find(item => item.id === 4)
    let q15 = questions.find(item => item.id === 5)
    let q21 = questions.find(item => item.id === 6)
    let q22 = questions.find(item => item.id === 7)
    let q23 = questions.find(item => item.id === 8)
    let q24 = questions.find(item => item.id === 9)
    let q31 = questions.find(item => item.id === 10)
    let q32 = questions.find(item => item.id === 11)
    let q33 = questions.find(item => item.id === 12)
    let q34 = questions.find(item => item.id === 13)
    let q35 = questions.find(item => item.id === 14)
    let q41 = questions.find(item => item.id === 15)
    let q42 = questions.find(item => item.id === 16)
    let q43 = questions.find(item => item.id === 17)
    let q44 = questions.find(item => item.id === 18)
    let q45 = questions.find(item => item.id === 19)
    let q20 = questions.find(item => item.id === 20)
    let q21 = questions.find(item => item.id === 21)
    let q22 = questions.find(item => item.id === 22)
    let q23 = questions.find(item => item.id === 23)
    let q24 = questions.find(item => item.id === 24)
    let q25 = questions.find(item => item.id === 25)

    // Creates Vairables:
    
    return(
        <>
        {/* Renders Screen */}
        <View style={[setStyles.container, {alignItems:'center',justifyContent:'center',}]}>
          <View style={[setStyles.row]}>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m + 1.5, marginRight: m + 1.5}]}>{q1?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m+1.5, marginRight: m+1.5}]}>{q2?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m+1.5, marginRight: m+1.5}]}>{q3?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m+1.5, marginRight: m+1.5}]}>{q4?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m+1.5, marginRight: m+1.5}]}>{q5?.points}</Text>
            </TouchableOpacity>
          </View>

          <View style={[setStyles.row]}>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q6?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q7?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q8?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q9?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q10?.points}</Text>
            </TouchableOpacity>
          </View>

          <View style={[setStyles.row]}>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q11?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q12?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q13?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q14?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q15?.points}</Text>
            </TouchableOpacity>
          </View>

          <View style={[setStyles.row]}>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m-0.25, marginRight:m-0.25}]}>{q16?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m-0.25, marginRight:m-0.25}]}>{q17?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m-0.25, marginRight:m-0.25}]}>{q18?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m-0.25, marginRight:m-0.25}]}>{q19?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m-0.25, marginRight:m-0.25}]}>{q20?.points}</Text>
            </TouchableOpacity>
            </View>

            <View style={[setStyles.row]}>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q21?.points}</Text>
            </TouchableOpacity >
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q22?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q23?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#f00"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q24?.points}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "#0f0"}}>
            <Text style={[setStyles.text, {marginLeft: m, marginRight: m}]}>{q25?.points}</Text>
            </TouchableOpacity>
          </View>
        </View>
        </>
    );
};

{/* Creates StyleSheet for better orginization */}
const setStyles = StyleSheet.create({
    container: {flex: 1,
        flexDirection: "column",
        backgroundColor: "#eee"
    }, row:{
      flexDirection: 'row'
    }, text: {
        fontSize: 20,
        fontWeight: 600,
        margin: m
    },})

export default Home; {/* Exports Home */}
