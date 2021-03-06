import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {HomeTabs} from './HomeTabs';


export function AppContainer (props) {
    
    const {isAuthenticated} = props;
    
    return <NavigationContainer>
              {isAuthenticated ? <HomeTabs/> : <AuthStack/>}
           </NavigationContainer>;
}