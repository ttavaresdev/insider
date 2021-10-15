import React from 'react';
import{ ScrollView} from 'react-native';

import { Container, SearchContainer, Input, SearchButton } from './styles';
import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';

function Home (){
  return(
    <Container>
      <Header title="My Family Prime"/>

      <SearchContainer>
        <Input 
          placeholder = "Ex Vingadores" 
          placeholderTextColor = "#ddd"
        />
        <SearchButton>
          <Feather name ="search" size= {30} color="#fff"/>
        </SearchButton>
      </SearchContainer>
      <ScrollView>
        
      </ScrollView>
    </Container>
  )
}
export default Home;