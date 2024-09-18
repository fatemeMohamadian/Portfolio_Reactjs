import React from 'react';
import { motion } from 'framer-motion';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MovieIcon from '@mui/icons-material/Movie';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import PoolIcon from '@mui/icons-material/Pool';
const DraggableBox: React.FC = () => {
    return (
        <motion.div
            drag // این ویژگی امکن Drag & Drop را فراهم می‌کند
            dragConstraints={{ left: -600, right: 300, top: -130, bottom: 100 }} // محدوده جابه‌جایی
            style={{
                backgroundColor: '#0f0f0fbf',
                display: 'flex',
                flexWrap:'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                cursor: 'grab',
                userSelect: 'none',
                backdropFilter:'blur(8px)',
            }}
            transition={{duration:2}}
        >
                <div className="w-[90%] border-b mt-[10px] *:my-[10px] flex flex-wrap justify-between items-center">
                    <h5 className='font-maintext text-gray-100 w-[50%] flex flex-wrap justify-start items-center'>Timing Work</h5>
                    <div className='w-[40%] *:cursor-pointer *:text-gray-300 flex flex-wrap justify-end items-center'>
                        <MinimizeIcon style={{ fontSize: '20px' }} />
                        <CropSquareIcon style={{ fontSize: '20px' }} />
                        <CloseIcon style={{ fontSize: '20px' }} />
                    </div>
                </div>
                <div className='w-[90%] my-[15px] *:my-[8px] flex flex-wrap justify-start items-center'>
                    <p  className='font-text1 w-full hover:text-green-400 transition-all duration-300 text-gray-100'><span className='text-gray-500 font-maintext'>1</span> Reading Docs,Books,.. <MenuBookIcon style={{ fontSize: '18px' }} /></p>
                    <p  className='font-text1 hover:text-green-400 transition-all duration-300 w-full text-gray-100'><span className='text-gray-500 font-maintext'>2</span> Watching Movie <MovieIcon style={{ fontSize: '18px' }} /></p>
                    <p  className='font-text1 hover:text-green-400 transition-all duration-300 w-full text-gray-100'><span className='text-gray-500 font-maintext'>3</span> BodyBuilding <SportsGymnasticsIcon style={{ fontSize: '18px' }} /></p>
                    <p  className='font-text1 hover:text-green-400 transition-all duration-300 w-full text-gray-100'><span className='text-gray-500 font-maintext'>4</span> Swimming <PoolIcon style={{ fontSize: '18px' }} /></p>
                </div>
           
        </motion.div>
    );
};

export default DraggableBox;
