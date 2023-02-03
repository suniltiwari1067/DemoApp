import React, { memo } from 'react';
import { Popover, Box, IconButton } from 'native-base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tooltip = (props) => {
    return (
        <Popover
            trigger={(triggerProps) => {
                return (
                    <IconButton {...triggerProps}
                        icon={<MaterialCommunityIcon
                            name="information" size={15} />}
                    />
                )
            }}
        >
            <Popover.Content w="56" bg={'#fff'} p={2} mt={'10%'}>
                <Box>
                    {props.msg}
                </Box>
            </Popover.Content>
        </Popover>
    )
}

export default Tooltip;