import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
};

const Screen: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
