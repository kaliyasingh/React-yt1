import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='flex flex-nowrap overflow-x-auto gap-10 h-full p-4 w-2/3 '>
          {props.users.map(function(elem,idx){
                       
               return <RightCard id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
          })};
    </div>
  )
}

export default RightContent
