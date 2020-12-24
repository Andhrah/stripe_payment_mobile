import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
import stripe from 'tipsi-stripe';
import { Button } from './Button';

stripe.setOptions({
  publishableKey: 'pk_test_51HbXY0In97M0GymUamkBnKCyOWVuT7ylEmsbLEXm4yEgVUor6mqP0mHvj5deW5kxbFqafowxPB9PtLYW1BN1xN1h00dcB0Koz8',
});

const Payment = (props) => {

  const requestPayment = () => {
    return stripe
      .paymentRequestWithCardForm()
      .then(stripeTokenInfo => {
        console.warn('Token created', { stripeTokenInfo });
      })
      .catch(error => {
        console.warn('Payment failed', { error });
      });
  };

  const onChange = form => console.log(form);

  const { containerStyle } = styles;

  return (
    <>
      <View style={containerStyle}>
        <CreditCardInput
          requiresName
          onChange={onChange} />

        <Button onPress={requestPayment}>
          Save
        </Button>
      </View>
      {/* <Text>Payment</Text> */}
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: '#201F31',
    // marginTop: 20,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Payment;
