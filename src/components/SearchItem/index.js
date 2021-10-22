import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container, Banner, Title, RateContainer, Rate } from './styles';

function SearchItem({data, navigatePage}){
  function detailMovie(){
    if(data.release_date ===''){
      alert('Filme aindasem data');
      return;
    }
    navigatePage(data);
  }
  return(
    <Container activeOpacity= {0.8} onPress={detailMovie}>
      {data?.poster_path?(
        <Banner
          resizeMode="stretch"
          source={{uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`}}
        />
      ):(
        <Banner
          resizeMode="stretch"
          source={require('../../assets/semfoto.png')}
        />
      )}
      <Title>{data?.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E"/>
        <Rate>{data?.vote_average}</Rate>
      </RateContainer>
    </Container>
  )
}
export default SearchItem;