import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {useState} from "react";
import {useRouter} from "expo-router";

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLoginButton() {
        router.replace("/(tabs)");
    }

    console.log("Login");

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Pressable style={styles.loginButton} onPress={handleLoginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
            <Pressable style={styles.singinButton} onPress={() => router.push("/register")}>
                <Text style={styles.singinButtonText}>Register</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "'Roboto', sans-serif",
    },
    input: {
        marginTop: 20,
        padding: 10,
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10
    },
    loginButton: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: 200,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#0c6673",
    },
    loginButtonText: {
        fontSize: 18,
        fontFamily: "'Roboto', sans-serif",
        color: "#ffffff",
    },
    singinButton: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#000000",
        backgroundColor: "#ffffff",
    },
    singinButtonText: {

    }
})
