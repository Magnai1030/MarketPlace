import React from 'react';
import Profile from '@screens/Profile';
import Notification from '@screens/Notification';
import Coupon from '@screens/Coupon';
import ReferalFriend from '@screens/ReferalFriend';
import Address from '@screens/Address';
import Support from '@screens/Support';
import TermsConditions from '@screens/TermsConditions';

// import { TouchableOpacity, Text } from 'react-native';
// import LoginModal from '@modals/LoginModal';
// import SignUpModal from '@modals/SignUpModal';
// import NotificationModal from '@modals/NotificationModal';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { AlertContext, InitialValue, AlertType } from '@providersPath/Alert';

const ProfileStack = createNativeStackNavigator();

// const ExamplesScreen = () => {
//     const [isLoadLogIn, setIsLoadLogIn] = useState(false);
//     const [isLoadSignUp, setIsLoadSignUp] = useState(false);
//     const [isLoadNotification, setIsLoadNotification] = useState(false);

//     const { pushAlertData } = React.useContext(AlertContext) as InitialValue;

//     const onCloseLogIn = () => {
//         setIsLoadLogIn(false);
//     };

//     const onCloseSignUp = () => {
//         setIsLoadSignUp(false);
//     };

//     const onCloseNotification = () => {
//         setIsLoadNotification(false);
//     };

//     const onPressAlert = (title: string) => {
//         pushAlertData({
//             title: title,
//             type: AlertType.WARNING,
//         });
//     };

//     return (
//         <>
//             <TouchableOpacity
//                 style={{ height: 100, backgroundColor: 'green' }}
//                 onPress={() => setIsLoadLogIn(true)}>
//                 <Text>Open the modal</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={{ height: 100, backgroundColor: 'blue' }}
//                 onPress={() => setIsLoadSignUp(true)}>
//                 <Text>Open the modal</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={{ height: 100, backgroundColor: 'red' }}
//                 onPress={() => setIsLoadNotification(true)}>
//                 <Text>Open the modal</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={{ height: 100, backgroundColor: 'gray' }}
//                 onPress={() => onPressAlert('lokadoska')}>
//                 <Text>Open the alert</Text>
//             </TouchableOpacity>

//             <LoginModal isLoad={isLoadLogIn} onClose={onCloseLogIn} />
//             <SignUpModal isLoad={isLoadSignUp} onClose={onCloseSignUp} />
//             <NotificationModal
//                 isLoad={isLoadNotification}
//                 onClose={onCloseNotification}
//             />
//         </>
//     );
// };

const ProfileTab = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Notification"
                component={Notification}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Coupon"
                component={Coupon}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="ReferalFriend"
                component={ReferalFriend}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Address"
                component={Address}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Support"
                component={Support}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="TermsConditions"
                component={TermsConditions}
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    );
};
export default ProfileTab;
