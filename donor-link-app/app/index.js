import { Stack, useRouter } from 'expo-router';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {ReactComponent as DonorLinkLogo} from '../assets/donor-link-logo.svg'

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#EEEEEE'}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: '#EEEEEE'},
                    headerShadowVisible: false,
                    headerTitle:""
                }}
            />
            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
                <View>Donor Link Logo</View>
                <View>Welcome with info msg</View>
                <View>Continue button</View>
            </View>
        </SafeAreaView>
    )
}

export default Home;