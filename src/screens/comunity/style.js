import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        alignItems: 'center',
        marginTop: 20
    },
    maontext: {

        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        alignSelf: 'center',
        letterSpacing: -0.02,
    },
    menue: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
        alignItems: 'center'
    },
    menutext: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: - 0.02,
        color: '#fff'

    },
    unselecttext: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: - 0.02,
        color: '#000'
    },
    selected: {
        padding: 12,
        backgroundColor: '#E74779',
        borderRadius: 32,
    },
    rowpad: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 20
    },
    textbox: {
        width: '85%',
        height: 110,
        backgroundColor: '#F3F8FB',
        borderRadius: 12,
    },
    textboxtext: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.02,
        color: '#B1B1B1',
        margin: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    flatlist: {
        padding: 20
    },
    name: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: -0.02,
        color: '#323234',

    },
    time: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 20,
        letterSpacing: -0.02,
        color: "#7F7E83",
        marginLeft: 5
    },
    desc: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 14,
        letterSpacing: -0.02,
        color: "#7F7E83",
        padding: 10,
        marginTop: -10

    },
    ReadMore: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 11,
        letterSpacing: - 0.02,
        lineHeight: 15,
        color: '#E74779',
        alignItems: 'center',
        flexDirection: 'row',

    },
    namecontain: {
        backgroundColor: '#E74779',
        padding: 15,
        borderRadius: 30
    },
    namecontaintext: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: - 0.02,
        lineHeight: 20,
        alignItems: 'center',
        color: '#fff',
        opacity: 0.9
    },
    follow: {
        position: 'absolute',
        bottom: 0,
        right: -10,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    followMe:{
        padding:7,
        borderColor:'#E74779',
        borderRadius:8,
        borderWidth:2,
        marginRight:10
    },
    follwtext:{
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 13,
        letterSpacing: - 0.02,
        lineHeight: 20,
        alignItems: 'center',
        color: '#000',
        opacity: 0.9
    }
})

export default styles