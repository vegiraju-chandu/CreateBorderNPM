
import React from 'react';
import {
    View
} from 'react-native';

const CreateBorder = (props) => {

    const {
        bColor = 'red',
        bWidth = 1,
        bRadius = 5,
    } = props;

    return(
        <View style = {{flex:1,borderColor:bColor,borderWidth:bWidth,borderRadius:bRadius}}>
            {props.children}
        </View>
    )
}

export default CreateBorder;