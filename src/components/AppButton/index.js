import React from 'react';
import {Text,ActivityIndicator} from 'react-native';
import {PlatformTouchable} from '../PlatformTouchable';
import styles from './styles';

class AppButton extends React.Component{

    render() {
        const {title, wrapperStyle,titleStyle,isLoading,disabled,...rest} = this.props;
        return(
           <PlatformTouchable style={[styles.wrapper,wrapperStyle,disabled ? styles.disabled: null]}
                              disabled={isLoading || disabled}  {...rest}>
               {
                   isLoading ? <ActivityIndicator/> : 
                   <Text style={[styles.title,titleStyle]}>{title}</Text>
               }
              
           </PlatformTouchable>
        );
    }
}

export default AppButton;