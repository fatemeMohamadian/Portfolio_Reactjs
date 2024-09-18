import React from 'react';
import { motion } from 'framer-motion';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
import NorthEastIcon from '@mui/icons-material/NorthEast';
const DraggableBox1: React.FC = () => {
    return (
        <motion.div
            drag // این ویژگی امکان Drag & Drop را فراهم می‌کند
            dragConstraints={{ left: -100, right: 800, top: -150, bottom: 50 }} // محدوده جابه‌جایی
            style={{
                backgroundColor: '#0f0f0fbf',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                cursor: 'grab',
                userSelect: 'none',
                backdropFilter:'blur(8px)',
            }}
            transition={{ duration: 2 }}
        >
            <div className="w-[90%] border-b mt-[10px] *:my-[10px] flex flex-wrap justify-between items-center">
                <h5 className='font-maintext text-gray-100 w-[50%] flex flex-wrap justify-start items-center'>Me-Online</h5>
                <div className='w-[40%] *:cursor-pointer *:text-gray-300 flex flex-wrap justify-end items-center'>
                    <MinimizeIcon style={{ fontSize: '20px' }} />
                    <CropSquareIcon style={{ fontSize: '20px' }} />
                    <CloseIcon style={{ fontSize: '20px' }} />
                </div>
            </div>
            <div className='w-[90%] my-[15px] *:my-[8px] flex flex-wrap justify-start items-center'>
                <a href='http://www.linkedin.com/in/fateme-mohamadian-dev0824' className='font-text1 w-full hover:text-green-400 transition-all duration-300 text-gray-100'><span className='text-gray-500 font-maintext'>1</span> Linkedin <NorthEastIcon style={{ fontSize: '15px' }} /></a>
                <a href='https://github.com/fatemeMohamadian' className='font-text1 hover:text-green-400 transition-all duration-300 w-full text-gray-100'><span className='text-gray-500 font-maintext'>2</span> GitHub <NorthEastIcon style={{ fontSize: '15px' }} /></a>
                <a href='https://www.instagram.com/fateme_mohamadiian.fed?igsh=YzVkODRmOTdmMw==' className='font-text1 hover:text-green-400 transition-all duration-300 w-full text-gray-100'><span className='text-gray-500 font-maintext'>3</span> Instagram <NorthEastIcon style={{ fontSize: '15px' }} /></a>
                <a href='fatemee.mn24@gmail.com' className='font-text1 hover:text-green-400 transition-all duration-300 w-full text-gray-100'><span className='text-gray-500 font-maintext'>4</span> Email <NorthEastIcon style={{ fontSize: '15px' }} /></a>
            </div>

        </motion.div>
    );
};

export default DraggableBox1;
