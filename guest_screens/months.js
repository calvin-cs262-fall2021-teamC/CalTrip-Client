import React from 'react';
import { View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function GuestMonthsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View>
      <Button color='#75022c' title="January" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="February" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="March" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="April" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="May" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="June" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="July" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="August" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="September" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="October" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="November" onPress={() => { navigation.navigate('Home', {}); }} />
      <Button color='#75022c' title="December" onPress={() => { navigation.navigate('Home', {}); }} />

      <Button color='#75022c' title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
