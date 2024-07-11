import React from 'react';

import { ComoserParte } from '../Components/ComoserParte';
import { CategoriasBlock } from '../Components/CategoriasBlock';
import { Banner } from '../Components/Banner'
import BannerVideo from '../Media/servicios.mp4'



const Servicios = () => {
  return (
    <>
    <Banner BannerVideo={BannerVideo} text='¿Queres sumarte a nosotros?'/>
    
    <ComoserParte/>
    <CategoriasBlock/>
    </>
  )
}

export default Servicios