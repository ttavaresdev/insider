import React from 'react';
import { Feather } from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native';

import { Container, MenuButton, Title } from './styles'
function Header ({title}){
  const navigation = useNavigation();
  return(
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name= "menu" size={36} color= "#fff"/>
      </MenuButton>
      <Title> {title} </Title>
    </Container>
  )
}
export default Header;