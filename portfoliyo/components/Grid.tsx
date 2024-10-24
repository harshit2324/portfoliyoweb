import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bentogrid'
import { i } from 'framer-motion/client'

function Grid() {
  return (
    <section id='about'>
      <BentoGrid>
     {[{ title: 'Title1', description: 'Desc1', id: 1},
      { title: 'Title1', description: 'Desc1', id: 1},
      { title: 'Title1', description: 'Desc1', id: 1},
      { title: 'Title1', description: 'Desc1', id: 1}
     ].map ((item) => (
      <BentoGridItem 
      id ={item.id}
      key={item.id}
      title={item.title}
      description={item.description}
      />
     ))}
      </BentoGrid>
    </section>
  )
}

export default Grid