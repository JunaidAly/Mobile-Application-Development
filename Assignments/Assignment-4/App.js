import { StyleSheet, View, Text, TextInput, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textfont}>Logout</Text>
              </TouchableOpacity>
            ),
            headerLeft: null
          })}
        />
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

  const user = {
    FirstName,
    LastName,
    Email,
    Pasword,
    ConfirmPassword,
    Gender,
    Age,
    Country,
    city,
    Street
  };
  
  const clearInputs = () => {
    setName('');
    setLstName('');
    setEmail('');
    setPass('');
    setconfrmpass('');
    setGender('');
    setAge('');
    setconty('');
    setcity('');
    setStreet('');
  };
  

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      clearInputs();
      console.log('User information stored successfully');
    } catch (error) {
      console.error('Error storing user information:', error);
    }
    navigation.navigate('Login')
  }
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

      <TouchableOpacity style={styles.btn} onPress={handleRegister}>
        <Text style={styles.textfont}>Register</Text>
      </TouchableOpacity>
    </View>
  )

}


//Login  Code

function LoginScreen({ navigation }) {

  const [Email, setEmail] = useState('');
  const [Pasword, setPass] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPass('');
  };
  

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const storedUserInfo = JSON.parse(storedUser);

        if (Email === storedUserInfo.Email && Pasword === storedUserInfo.Pasword) {
          clearInputs();
          console.log('Login successful');
          navigation.navigate('Profile', { user: storedUserInfo });
        } else {
          console.log('Invalid email or password');
        }
      } else {
        console.log('User information not found');
      }
    } catch (error) {
      console.error('Error retrieving user information:', error);
    }
  };

  return (
    <View style={styles.mainView}>

      <Text style={{ fontSize: 50, textAlign: 'center', color: '#fff', marginTop: 150 }}>Login</Text>

      <TextInput style={styles.textBox} onChangeText={(text) => setEmail(text)} value={Email} placeholderTextColor={'#fff'} placeholder="Email" />

      <TextInput style={styles.textBox} onChangeText={(text) => setPass(text)} value={Pasword} placeholderTextColor={'#fff'} placeholder="Password" secureTextEntry={true} />

      <Pressable style={styles.btn} onPress={handleLogin}>
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


function ProfileScreen({ route, navigation }) {
  const user = route.params?.user || {};

  const handleReset = async () => {
    try {
      await AsyncStorage.removeItem('user');
      console.log('Stored user data has been reset');
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error resetting stored user data:', error);
    }
  };

  return (
    <View style={styles.profileview}>
      <Text style={{ fontSize: 50, textAlign: 'center', color: '#fff' }}>Profile</Text>
      <Text style={styles.Profieltxt}>First Name: {user.FirstName}</Text>
      <Text style={styles.Profieltxt}>Last Name: {user.LastName}</Text>
      <Text style={styles.Profieltxt}>Email: {user.Email}</Text>
      <Text style={styles.Profieltxt}>Gender: {user.Gender}</Text>
      <Text style={styles.Profieltxt}>Age: {user.Age}</Text>
      <Text style={styles.Profieltxt}>Country: {user.Country}</Text>
      <Text style={styles.Profieltxt}>City: {user.city}</Text>
      <Text style={styles.Profieltxt}>Street: {user.Street}</Text>

      <TouchableOpacity style={styles.btn} onPress={handleReset}>
        <Text style={styles.textfont}>Reset</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  textfont: {
    fontSize: 16,
    textAlign: 'center',

    justifyContent: 'center',
    color: '#fff'
  },
  Profieltxt: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
    justifyContent: 'flex-start'
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
    fontWeight: 'bold',
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






