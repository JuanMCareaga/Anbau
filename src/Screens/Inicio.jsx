import React from 'react'

import { CategoriasBlock } from '../Components/CategoriasBlock'
import { ComoserParte } from '../Components/ComoserParte'
import { Numeros } from '../Components/Numeros'
import { NoticiasComponente } from '../Components/NoticiasComponente'
import { Guia } from '../Components/Guia'
import { Banner } from '../Components/Banner'
import BannerVideo from '../Media/bannerini.mp4'





const Inicio = () => {
  return (
    <>
    <Banner BannerVideo={BannerVideo} text='Bienvenidos a Anbau'/>
    <CategoriasBlock />
    <ComoserParte />
     <Numeros />
     <NoticiasComponente />
     <Guia />
     
    </>
  )
}

export default Inicio