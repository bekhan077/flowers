import React from 'react'
import kaktus from './summer_img/summer_cactus-min.png'
import trends from './summer_img/image 15.svg'
import EastIcon from '@mui/icons-material/East';

const Summer = () => {
    return (
        <div className='mt-[10px] w-[85%] h-auto mx-auto flex justify-between'>
            <div className='w-[49%] h-[300px] flex shadow-xl'>
                <div className='w-[50%] h-[100%]'>
                    <img src={kaktus} alt="" />
                </div>
                <div className='w-[50%] h-[100%] flex flex-col items-end justify-center'>
                    <h2 className='text-[18px] w-[150px] text-end font-semibold mr-[30px]'>SUMMER CACTUS & SUCULENTS</h2>
                    <p className='w-[300px] text-end mr-[30px] mt-[10px]'>we are an online plant shop offering a wide range of cheep and trendy plants</p>
                    <button className='bg-green-600 w-[150px] mr-[30px] mt-[20px] h-[40px] rounded text-white font-semibold '>Find More <EastIcon /></button>
                </div>
            </div>
            <div className='w-[49%] h-[300px] flex shadow-xl'>
                <div className='w-[50%] h-[100%]'>
                    <img src={trends} alt="" />
                </div>
                <div className='w-[50%] h-[100%] flex flex-col items-end justify-center '>
                    <h2 className='text-[18px] w-[150px] text-end font-semibold mr-[30px]'>STYILING TRENDS & MUCH MORE</h2>
                    <p className='w-[300px] text-end mr-[30px] mt-[10px]'>we are an online plant shop offering a wide  range of cheep and trendy plants</p>
                    <button className='bg-green-600 w-[150px] mr-[30px] mt-[20px] h-[40px] rounded text-white font-semibold '>Find More <EastIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Summer
