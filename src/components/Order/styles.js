import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    image: {
        width:  '100@s',
        height: '100@s',
        marginEnd: '10@s'
    },

    container: {
        flexDirection: 'row',
        padding: '10@s',
        margin: '10@s',
        backgroundColor: '#fff'
    },

    wrapper: {
        flex: 1,
        justifyContent: 'space-between'
    },

    statuswrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default styles;