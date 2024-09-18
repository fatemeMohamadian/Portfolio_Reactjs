import { motion } from 'framer-motion'
import EastIcon from '@mui/icons-material/East';
export default function Probutton() {
    return (
        <div className='flex flex-wrap text-gray-100 font-maintext justify-center items-center w-full lg:w-[50%]'>
            <motion.button
                whileHover={{ scale: 1.1, backgroundColor:'rgb(1, 143, 70)' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 10 }}
                style={{ border: '1px solid rgb(140, 252, 181)',boxShadow:'0 0 50px 10px rgb(1, 143, 70) ', padding: '10px 25px', borderRadius: '10px' }}
            >
               <a href="https://github.com/fatemeMohamadian?tab=repositories">All Projects <EastIcon style={{color:'rgb(76, 170, 122)', rotate:'-35deg'}}/></a>
            </motion.button>
        </div>
    )
}