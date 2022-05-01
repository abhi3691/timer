import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

export default function App() {
  const [counter, setCounter] = React.useState(59);
  const [value, setValue] = React.useState('Abhinand');
  const [editable, setEditable] = React.useState(false);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, color: 'green'}}>
        00: {counter < 10 ? `0${counter}` : counter}
      </Text>
      <View style={{marginTop: 10}}>
        <Button
          title="Resend OTP"
          color={'green'}
          onPress={() => {
            setCounter(59);
          }}
          disabled={counter !== 0}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
          marginTop: 20,
          width: '90%',
          flexDirection: 'row',
        }}>
        <TextInput
          style={{height: 50, width: '80%', borderBottomWidth: 1}}
          editable={editable}
          value={value}
          autoFocus={editable}
          onChangeText={text => setValue(text)}
          returnKeyType={'send'}
        />
        <Button title="edit" onPress={() => setEditable(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
