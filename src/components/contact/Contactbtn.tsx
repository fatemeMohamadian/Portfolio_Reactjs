import { motion } from 'framer-motion'
import EastIcon from '@mui/icons-material/East';
export default function Contactbtn() {
  return (
    <div className='flex flex-wrap text-gray-100 font-maintext justify-center lg:justify-start items-center w-full lg:w-[70%]'>
            <motion.button
                whileHover={{ scale: 1.1, backgroundColor:'rgb(1, 143, 70)' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 10 }}
                style={{ border: '1px solid rgb(140, 252, 181)', padding: '10px 25px', borderRadius: '10px' }}
            >
               <a href="http://fatemee.mn24@gmail.com">let's get in touch <EastIcon style={{color:'rgb(76, 170, 122)'}}/></a>
            </motion.button>
        </div>
  )
}
