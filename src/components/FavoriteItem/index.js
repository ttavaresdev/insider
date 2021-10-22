import React from 'react';
import {
  Container,
  Title,
  RateContainer,
  Rate,
  ActionContainer,
  DetailButton,
  DeleteButton
}from './styles';
import { Ionicons, Feather } from '@expo/vector-icons';

function FavoriteItem({data, deleteMovie, navigatePage}){
  return(
    <Container>
      <Title size={22}> {data.title}</Title>
      <RateContainer>
        <Ionicons name = "md-star" size={18} color="#e7a74e"/>
        <Rate> {data.vote_average}</Rate>
      </RateContainer>
      <ActionContainer>
        <DetailButton activeOpacity = {0.7} onPress={ ()=> navigatePage(data) }>
          <Title size={14}>Detalhe</Title>
        </DetailButton>
        <DeleteButton activeOpacity = {0.7} onPress={ ()=> deleteMovie(data.id) }>
          <Feather name="trash" size={24} color="#FFF"/>
        </DeleteButton>
      </ActionContainer>
    </Container>
  )
}
export default FavoriteItem;