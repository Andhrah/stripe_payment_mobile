import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
import stripe from 'tipsi-stripe';
import { purchase } from '../../api';

import { Button } from './Button';

stripe.setOptions({
  publishableKey: 'pk_test_51HbXY0In97M0GymUamkBnKCyOWVuT7ylEmsbLEXm4yEgVUor6mqP0mHvj5deW5kxbFqafowxPB9PtLYW1BN1xN1h00dcB0Koz8',
});

const Home = (props) => {

  const [isPaymentPending, setIsPaymentPending] = useState(false);

  // const onChange = form => console.log(form);
  const requestPayment = () => {
    setIsPaymentPending(true);
    return stripe
      .paymentRequestWithCardForm()
      .then(stripeTokenInfo => {
        // console.log(stripeTokenInfo);
        console.log(stripeTokenInfo.tokenId);
        return purchase(500, stripeTokenInfo.tokenId);
      })
      .then(() => {
        console.warn('Payment succeeded!');
      })
      .catch(error => {
        console.warn('Payment failed', { error });
      })
      .finally(() => {
        setIsPaymentPending(false);
      });
  };

  const { containerStyle } = styles;

  return (
    <>
      <View style={containerStyle}>
        {/* <CreditCardInput
          requiresName
          onChange={onChange} /> */}

        <Button
          onPress={() => props.navigation.navigate('Payment')}>
          Add Card
        </Button>

        <Button
          onPress={requestPayment}
          // disabled={isPaymentPending}
          >
          Pay €5
        </Button>
      </View>
      {/* <Text>Payment</Text> */}
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: '#201F31',
    marginTop: 20,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Home;
