import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    logoutLabel: {
        fontSize: 14,
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'FontAwesome',
        lineHeight: 20,
        paddingHorizontal: 10
    },
    iconContainer: {
        alignItems: 'center',
        marginLeft: 16
    },
    icon: {
        width: 24,
        height: 24,
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: '#ffff',
        margin: 5
    },
    profileLabel: {
        fontSize: 12,
        textAlign: 'left',
        fontWeight: '500',
        fontFamily: 'FontAwesome',
        paddingVertical:5
    },
    profilePictureContainer: {
        width: '30%'
    },
    profilePictureNameContainer: {
        width: '70%',
        padding: 10
    },
    profileLogoutContainer: {
        width: '100%'
    },
    menuLabel: {
        fontSize: 14,
        textAlign: 'left',
        fontWeight: '600',
        fontFamily: 'FontAwesome',
        lineHeight: 20
    }
})