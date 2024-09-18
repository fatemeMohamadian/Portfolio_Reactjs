import DraggableBox from './Drag';
import DraggableBox1 from './Drag1';
import DraggableBox2 from './Drag3';
import { motion } from 'framer-motion';
export default function About() {
    return (
        <div className="lg:w-[90%] w-full my-[80px] relative flex flex-wrap justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .8 }}
                viewport={{ once: false }}
                className="lg:w-[50%] w-full flex flex-wrap justify-center items-center">
                <DraggableBox2 />
            </motion.div>
            {/* ////////////////////////////// */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .8, delay:.5 }}
                viewport={{ once: false }}
                className='lg:w-[25%] w-full absolute top-[25%] left-[12%] flex flex-wrap justify-center items-center'>
                <DraggableBox1 />
            </motion.div>
            {/* ///////////////////////////////// */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .8, delay:.5 }}
                viewport={{ once: false }}
                className='lg:w-[25%] w-full absolute top-[38%] left-[58%] flex flex-wrap justify-center items-center'>
                <DraggableBox />
            </motion.div>
        </div>
    )
}
