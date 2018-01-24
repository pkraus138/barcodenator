import React from 'react';
import { Text } from 'react-native';

const MyText = (props) => {
  return (
    <Text
      allowFontScaling={true}
      style={[styles.baseStyle, props.style]}
      numberOfLines={props.numberOfLines}
    >
      {props.children}
    </Text>
  );
};

const styles = {
  baseStyle: {
  }
};

export { MyText };
