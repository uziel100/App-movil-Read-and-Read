import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import useAuth from "../../hooks/useAuth";
import Menu from "../../components/Account/Menu";
import UserAvatar from "../../components/Account/UserAvatar";

export default function Account() {
  const { auth } = useAuth();
  const paperTheme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: paperTheme.colors.surface }]}
    >
      {/*<UserAvatar user={auth.email} urlPhoto={auth.photo} />*/}
      <Menu />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
