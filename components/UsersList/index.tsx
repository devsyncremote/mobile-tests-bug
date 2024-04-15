import React from "react";
import { FlatList, Text, View } from "react-native";
import { User } from "../../types/User";
import UserCard from "./components/UserCard";

type Props = {
  users: Array<User>
}

const UsersList:React.FC<Props> = ({
  users
}) => {
  return (
    <FlatList
      data={users}
      renderItem={({item}) => <UserCard user={item} />}
      keyExtractor={user => user._id}
    />
  )
}

export default UsersList
