import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';

import {
  Container, 
  SearchButton, 
  SearchContainer, 
  Input, 
  Title,
  BannerButtom,
  Banner,
  SliderMovie
}from './styles';
import { Feather } from '@expo/vector-icons'
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

import api, { key } from '../../services/api';
import { getListMovies } from '../../utils/movie';

function Home(){
  const [nowMovies, setNowMovies] = useState([]);
  const [ popularMovies , setPopularMovies] = useState([]);
  const [topMovies, settopMovies] = useState([]);

  useEffect (()=>{
    let isActive = true;
    async function getMovies(){
      //const response = await api.get('/movie/now_playing', {
      //  params:{
       //   api_key: key, 
       //   language: 'pt-BR',
       //   page: 1,
      //  }
     // })

     const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing',{
          params:{
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/popular',{
          params:{
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/top_rated',{
          params:{
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
      }),
     ])
     const nowList = getListMovies(10,  nowData.data.results);
     const popularList = getListMovies (6, popularData.data.results);
     const topList = getListMovies (6, topData.data.results);

     setNowMovies (nowList);
     setPopularMovies (popularList);
     settopMovies (topList);
    }
    getMovies();
  }, [])

  return(
    <Container>
      <Header title = "My Movies"/>
      <SearchContainer> 

        <Input
         placeholder = "Ex Eternos"
         placeholderTextColor = "#ddd"
        />
        <SearchButton>
          <Feather name="search" size={30} color= "#FFF"/>
        </SearchButton>

      </SearchContainer>
      <ScrollView showsHorizontalScrollIndicator = {false}>

        <Title>Em Cartaz</Title>
        <BannerButtom 
        activeOpacity = {0.8}
        onPress={()=> alert ('TESTE')}
        >
          <Banner
          resizeMethod="resize" // colocar toda imagem no banner
          source = {{uri: 'https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80'}}
          />
        </BannerButtom>
        <SliderMovie
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        data={nowMovies}
        renderItem={({item})=> <SliderItem data={item}/>}
        keyExtractor={(item)=> String(item.id)}
        />
       
        <Title> Populares </Title>
        <SliderMovie
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        data={popularMovies}
        renderItem={({item})=> <SliderItem data={item}/>}
        keyExtractor={(item)=> String (item.id)}
        />

        <Title> Mais Votados</Title>
        <SliderMovie
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        data={topMovies}
        renderItem={({item})=> <SliderItem data={item}/>}
        keyExtractor={(item)=> String (item.id)}
        />

      </ScrollView>

    </Container> 
  )
}
export default Home;