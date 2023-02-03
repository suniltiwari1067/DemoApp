
import { Stack, Text, Pressable, Button, Popover, Box, IconButton, HStack, StatusBar } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
    return <>
        <HStack bg={['#4a92e1', '#4a92e1', '#2f3363']} px="3" py="2" justifyContent="space-between" alignItems="center" w="100%" mb={2}>
            <HStack alignItems={'center'} flex={9} justifyContent={'space-between'}>
                <IconButton icon={<MaterialIcon name="menu" color="white" size={20} />} />
                <Text color="white" fontSize="20" fontWeight="bold" textAlign={'center'}>
                    Home
                </Text>
                <IconButton icon={<MaterialIcon name="more-vert" color="white" />} />
            </HStack>
        </HStack>
    </>;
}

export default Header;