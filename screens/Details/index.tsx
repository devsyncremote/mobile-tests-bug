import { StyleSheet, Text, View } from "react-native"
import Screen from "../../components/Screen"
import { User } from "../../types/User"
import { RouteProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details:React.FC<Props> = ({route:{params:{user}}}) => {
  return (
    <Screen>
      <View style={styles.container}>
      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.interest}>{user?.interest}</Text>
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10
  },
  interest: {
    fontSize: 16
  }
})

export default Details