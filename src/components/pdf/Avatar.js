import React from 'react';
import { Image, View, StyleSheet } from '@react-pdf/renderer';

import avatar from '../../assets/images/avatar.png';

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    marginBottom: 5,
  },
  image: { height: 150, width: 150 },
});

const Avatar = () => (
  <View style={styles.container}>
    <Image src={avatar} style={styles.image} />
  </View>
);

export default Avatar;
