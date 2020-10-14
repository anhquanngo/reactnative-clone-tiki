import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function App() {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={30} />
          <Text>Bạn tìm gì hôm nay?</Text>
        </View>
        <View style={styles.cartContainer}>
          <AntDesign name="shoppingcart" size={30} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: '#1e88e5'
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    marginBottom: 4
  },
  cartContainer: {

  }
})
