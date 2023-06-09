import { Link, Stack, useNavigation, useRouter } from 'expo-router';
import {View, Text, SafeAreaView, Image, Button, TouchableOpacity} from 'react-native';
import DonorLinkLogo from '../../components/DonoLinkLogo';
import OnboardingLogo from '../../components/OnboardingLogo';
import SignInForm from '../../components/SignInForm';


const SignIn = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#EEEEEE', height: 0, display: 'none' },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around', height: '100%' }}>
                <DonorLinkLogo />
                {/* Everything related to signIn/signUp will go here please refer to https://www.figma.com/proto/Q3LZBBY86wXCzwUVvQvpfz/Colab-19---Team-11?type=design&node-id=236-9997&scaling=scale-down&page-id=0%3A1&starting-point-node-id=141%3A6438&show-proto-sidebar=1  */}
                <SignInForm />
            </View>
        </SafeAreaView>
    )
}

export default SignIn