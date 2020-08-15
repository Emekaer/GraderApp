import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={props.colour ? props.colour : "white"}
      buttonStyle={{ marginTop: 20 }}
    />
  );
};

export default CustomHeaderButton;