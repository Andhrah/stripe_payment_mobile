import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Button = ({ children, onPress, style, disabled, buttonTextstyle }) => {
  const { buttonStyle, textstyle, buttonViewStyle } = styles;
  return (
    <View style={buttonViewStyle}>
      <TouchableOpacity
        onPress={onPress}
        style={[buttonStyle, style]}
        disabled={disabled}
        >
        <Text style={[textstyle, buttonTextstyle]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: hp(6.2),
    width: '80%',
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#5E35B1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstyle: {
    fontSize: RFPercentage(2.4),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  buttonViewStyle: {
    paddingVertical: hp(3),
  },
});

export { Button };
