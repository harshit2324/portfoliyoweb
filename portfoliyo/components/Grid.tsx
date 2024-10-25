import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bentogrid'
import { i } from 'framer-motion/client'
import { gridItems } from '@/data'
import { title } from 'process'

function Grid() {
  return (
    <section id='about'>
      <BentoGrid>
     {gridItems.map ((item) => (
      <BentoGridItem 
      id ={item.id}
      key={item.id}
      title={item.title}
      description={item.description}
      className={item.className}
      img ={item.img}
      imgClassname = {item.titleClassName}


      />
     ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
