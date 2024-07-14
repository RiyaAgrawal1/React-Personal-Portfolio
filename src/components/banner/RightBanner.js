import React from 'react'
import { profile } from '../../assests/Index'
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
    <img
        className="w-[200px] h-[250px] lgl:w-[350px] lgl:h-[400px] z-10 rounded-md"
        src={profile}
        alt="bannerImg"
    />
    <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[450px] lgl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
</div>
  )
}

export default RightBanner
