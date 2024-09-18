import React from 'react';
import { motion } from 'framer-motion';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
const DraggableBox2: React.FC = () => {
    return (
        <motion.div
            drag // این ویژگی امکان Drag & Drop را فراهم می‌کند
            dragConstraints={{ left: -300, right: 300, top: -100, bottom: 100 }} // محدوده جابه‌جایی
            style={{
                backgroundColor: '#0f0f0fbf',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                cursor: 'grab',
                userSelect: 'none',
                backdropFilter: 'blur(8px)',
            }}
            transition={{ duration: 2 }}
        >
            <div className="w-[95%] mt-[10px] border-b *:py-[8px] flex flex-wrap justify-between items-center">
                <h5 className='font-maintext text-gray-100 w-[50%] flex flex-wrap justify-start items-center'>About me</h5>
                <div className='w-[40%] *:cursor-pointer *:text-gray-300 flex flex-wrap justify-end items-center'>
                    <MinimizeIcon style={{ fontSize: '20px' }} />
                    <CropSquareIcon style={{ fontSize: '20px' }} />
                    <CloseIcon style={{ fontSize: '20px' }} />
                </div>
            </div>
            <div className='w-[95%] my-[15px] *:my-[12px] flex flex-wrap justify-start items-center'>
                <p className='font-text1 w-full text-gray-100'><span className='text-gray-500 font-maintext'>1</span> Nice To Meet you! I'm Fatemeh, I'm a <span className='text-green-300 font-maintext'>FrontEnd Developer</span>.</p>
                <p className='font-text1 text-gray-100'><span className='text-gray-500 font-maintext'>2</span> I'm Interested to <span className='text-green-300 font-maintext'>Work Team</span> and get the <span className='text-red-400 font-maintext'>New Experience</span> .</p>
                <p className='font-text1 text-gray-100'><span className='text-gray-500 font-maintext'>3</span> Experiencing <span className='font-maintext text-yellow-300'>challenges</span> and <span className='font-maintext text-sm text-sky-500'>Problem Solving</span> is very enjoyable for me. </p>
                <p className='font-text1 text-gray-100'><span className='text-gray-500 font-maintext'>4</span> Doing the <span className='text-orange-400 font-maintext'>Best Projects</span> with Your Topics and rechecking that.</p>
            </div>

        </motion.div>
    );
};

export default DraggableBox2;
