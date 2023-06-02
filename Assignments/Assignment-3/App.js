import { StyleSheet, View, Text, TextInput, Pressable, TouchableOpacity, Button } from "react-native";
import { useState } from "react";
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import React from "react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
        headerStyle:
          { backgroundColor: '#A0A0A0' },
        headerTintColor: 'black',
        headerTitleStyle: { fontSize: 25 }

      }}
      initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//SignUp Code

function SignUpScreen({ navigation }) {

  const [FirstName, setName] = useState('');
  const [LastName, setLstName] = useState('');
  const [Email, setEmail] = useState('');
  const [Pasword, setPass] = useState('');
  const [ConfirmPassword, setconfrmpass] = useState('');
  const [Gender, setGender] = useState('');
  const [Age, setAge] = useState('');
  const [Country, setconty] = useState('');
  const [city, setcity] = useState('');
  const [Street, setStreet] = useState('');



  return (
    <View style={styles.mainView}>

      <Text style={{ fontSize: 50, textAlign: 'center', color: '#fff' }}>Sign Up</Text>

      <TextInput style={styles.textBox} onChangeText={(text) => setName(text)} value={FirstName} placeholderTextColor={'#fff'} placeholder="First Name" />

      <TextInput style={styles.textBox} onChangeText={(text) => setLstName(text)} value={LastName} placeholderTextColor={'#fff'} placeholder="Last Name" />

      <TextInput style={styles.textBox} onChangeText={(text) => setEmail(text)} value={Email} placeholderTextColor={'#fff'} placeholder="Email" />

      <TextInput style={styles.textBox} onChangeText={(text) => setPass(text)} value={Pasword} placeholderTextColor={'#fff'} placeholder="Password" secureTextEntry={true} />

      <TextInput style={styles.textBox} onChangeText={(text) => setconfrmpass(text)} value={ConfirmPassword} placeholderTextColor={'#fff'} placeholder="Confirm Password" secureTextEntry={true} />

      <TextInput style={styles.textBox} onChangeText={(text) => setGender(text)} value={Gender} placeholderTextColor={'#fff'} placeholder="Gender" />

      <TextInput style={styles.textBox} onChangeText={(text) => setAge(text)} value={Age} placeholderTextColor={'#fff'} placeholder="Age" />

      <TextInput style={styles.textBox} onChangeText={(text) => setconty(text)} value={Country} placeholderTextColor={'#fff'} placeholder="Country" />

      <TextInput style={styles.textBox} onChangeText={(text) => setcity(text)} value={city} placeholderTextColor={'#fff'} placeholder="City" />

      <TextInput style={styles.textBox} onChangeText={(text) => setStreet(text)} value={Street} placeholderTextColor={'#fff'} placeholder="Street" />

      <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate('Profile',
          {
            FirstName: FirstName, LastName: LastName,
            Email: Email, Gender: Gender, Age: Age,
            Country: Country, city: city, Street: Street
          })}
      >

        <Text style={styles.textfont}>Register</Text>
      </TouchableOpacity>
    </View>
  )

}


//Login  Code

function LoginScreen({ navigation }) {

  const [Email, setEmail] = useState('');
  const [Pasword, setPass] = useState('');


  return (
    <View style={styles.mainView}>

      <Text style={{ fontSize: 50, textAlign: 'center', color: '#fff', marginTop: 150 }}>Login</Text>

      <TextInput style={styles.textBox} onChangeText={(text) => setEmail(text)} value={Email} placeholderTextColor={'#fff'} placeholder="Email" />

      <TextInput style={styles.textBox} onChangeText={(text) => setPass(text)} value={Pasword} placeholderTextColor={'#fff'} placeholder="Password" secureTextEntry={true} />

      <Pressable style={styles.btn}
        onPress={() => { navigation.navigate('Login') }}
      >
        <Text style={styles.textfont}>Login</Text>
      </Pressable>


      <Pressable style={styles.btn}
        onPress={() => { navigation.navigate("SignUp") }}
      >
        <Text style={styles.textfont}>Create Account</Text>
      </Pressable>
    </View>
  )
}

//Profile  Code


function ProfileScreen() {
  const route = useRoute();
  return (
    <View style={styles.profileview}>

      <Text style={{ fontSize: 50, textAlign: 'center', color: '#fff' }}>Profile</Text>
      <Text style={styles.Profieltxt}>First Name: {route.params.FirstName}</Text>
      <Text style={styles.Profieltxt}>Last Name: {route.params.LastName}</Text>
      <Text style={styles.Profieltxt}>Email: {route.params.Email}</Text>
      <Text style={styles.Profieltxt}>Gender: {route.params.Gender}</Text>
      <Text style={styles.Profieltxt}>Age: {route.params.Age}</Text>
      <Text style={styles.Profieltxt}>Country: {route.params.Country}</Text>
      <Text style={styles.Profieltxt}>City: {route.params.city}</Text>
      <Text style={styles.Profieltxt}>Street: {route.params.Street}</Text>
    </View>
  )
}



const styles = StyleSheet.create({

  textfont: {
    fontSize: 16,
    textAlign: 'center',

    justifyContent: 'center',
    color: '#fff'
  },
  Profieltxt: {
    marginTop:20,
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    fontStyle:'italic',
    fontWeight:'bold',
    justifyContent:'flex-start'
  },
  mainView: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#585A66',

    placeholder: {
      color: 'red',
    }
  },

  profileview: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#585A66',

    placeholder: {
      color: 'red',
    }
  },
  textBox: {
    fontSize: 14,
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 0,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 7,
    textAlign: 'center',
    justifyContent: 'flex-start'

  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 1,
    borderRadius: 20,
    elevation: 3,
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,
    backgroundColor: '#3CB371',


  }
});






