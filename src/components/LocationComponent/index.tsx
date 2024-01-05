import React from 'react'
import MapsImg from '../../../public/maps.png'
import Fossa from '../../../public/fossa.jpeg'
import Image from 'next/image'

const LocationComponent = () => {
  return (
    <div className='relative mt-64'>
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
            <div className='flex justify-center items-center'>
                <Image className='w-4/5 object-cover h-80' src={MapsImg} alt={''} />
            </div>
        </div>
        <div>
            <Image className='w-full object-cover h-80' src={Fossa} alt={''} />
        </div>
    </div>
  )
}

export default LocationComponent