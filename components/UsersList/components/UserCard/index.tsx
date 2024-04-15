import React from "react"
import { User } from "../../../../types/User"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../routes";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  any
>;

const UserCard = ({user}:{user:User}) => {
  if (!user?.name) {
    return null;
  }

  const {navigate} = useNavigation<ProfileScreenNavigationProp>();

  const onPressCard = () => {
    navigate('Detail', {
      user:user
    });
  }

  return (
    <TouchableOpacity onPress={onPressCard} style={styles.card}>
      <Text style={styles.name}>
        {user.name}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 16,
    borderRadius: 6,
  },
  name: {
    fontWeight: '700'
  }
})

export default UserCard
