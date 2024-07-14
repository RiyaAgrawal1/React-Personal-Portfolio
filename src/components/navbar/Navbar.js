import React from 'react'
import { navLinksdata } from '../../constants'
import {Link} from 'react-scroll'
const Navbar = () => {
    return (
        <div className='w-full h-20 mx-auto flex justify-between items-center sticky top-0 z-50 bg-bodyColor font-titleFont border-b-[2px] border-b-gray-600'>
            <div>
                Riya Agrawal
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    {
                        navLinksdata.map(({_id,title,link}) => (
                            <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}>
                              <Link activeClass='active' to={link} spy={true} smooth={true} offset={-70} duration={500}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
