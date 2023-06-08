import { Link, Stack, useNavigation, useRouter } from 'expo-router';
import {View, Text, SafeAreaView, Image, Button, TouchableOpacity} from 'react-native';
import DonorLinkLogo from '../components/DonoLinkLogo';
import OnboardingLogo from '../components/OnboardingLogo';

const Home = () => {
    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#EEEEEE'}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: '#EEEEEE', height: 0},
                    headerShadowVisible: false,
                    headerTitle:""
                }}
            />
            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around', height: '100%'}}>
                <DonorLinkLogo />
                <OnboardingLogo />
                <TouchableOpacity style={{width: 360, height: 40, backgroundColor: '#87A7AE', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Link href='/signIn'>
                        <Text style={{fontSize: 12, color: '#FFF', fontWeight: 700}}>
                            Continue
                        </Text>
                    </Link>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;