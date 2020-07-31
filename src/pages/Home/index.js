import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import TemplateBase from '../../components/TemplateBase'

function Home() {
  return (
    <div style={{backgroundColor:"#141414"}}>
      <TemplateBase bgColor="#141414">
      
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Vídeo preferido"}
      />
      {dadosIniciais.categorias.map(tema=>
      <Carousel 
        category={tema}
        ignoreFirstVideo = {tema.videos.length>5}
      />)}
      </TemplateBase>
    </div>
  );
}

export default Home;
