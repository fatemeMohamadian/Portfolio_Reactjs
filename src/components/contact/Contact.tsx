import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '/md.png'
import Contactbtn from './Contactbtn';
import { motion } from 'framer-motion';
export default function Contact() {
    return (
        <motion.div
        initial={{opacity:0, scale:0.2}}
        whileInView={{opacity:1, scale:1}}
        viewport={{once:false}}
        transition={{duration:1}}
         className="lg:w-[80%] w-full  shadow-sm rounded-md bg-[#0f0f0fbf] flex flex-wrap justify-center items-center">
            <div className="w-[90%] border-b mt-[10px] *:my-[10px] flex flex-wrap justify-between items-center">
                <h5 className='font-maintext text-gray-100 w-[50%] flex flex-wrap justify-start items-center'>Collaboration</h5>
                <div className='w-[40%] *:cursor-pointer *:text-gray-300 flex flex-wrap justify-end items-center'>
                    <MinimizeIcon style={{ fontSize: '20px' }} />
                    <CropSquareIcon style={{ fontSize: '20px' }} />
                    <CloseIcon style={{ fontSize: '20px' }} />
                </div>
            </div>
            <div className='w-[90%] my-[5px] *:my-[50px] flex flex-wrap justify-evenly items-center'>
                {/* ///////////// */}
                <div className='lg:w-[30%] w-full flex flex-wrap justify-center items-center'>
                    <img className='w-[200px] h-[200px] rounded-[50%] object-cover' src={Logo} alt="" />
                </div>
                {/* /////////////// */}
                <div className='lg:w-[60%] w-full *:my-[10px] flex flex-wrap lg:text-start text-center justify-center lg:justify-start items-center'>
                    <h2 className='font-title capitalize text-gray-50 text-4xl'>let's work together</h2>
                    <h2 className='w-full capitalize font-title text-gray-50 text-4xl'>on your project</h2>
                    <Contactbtn/>
                </div>
            </div>
        </motion.div>
    )
}
