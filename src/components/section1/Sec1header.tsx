import TypingText from "./Typetext"
import Mypic from '/mypic.jpg'
import { motion } from 'framer-motion'
export default function Sec1header() {
    return (
        <div className="w-[95%] flex flex-wrap justify-center lg:text-start text-center lg:justify-between items-center">
            <div className="lg:w-[60%] w-full *:my-[25px] flex flex-wrap justify-center items-center">
                <h1 className="text-gray-100 text-5xl w-full font-title">Hi Dears, I'm Fatemeh</h1>
                <h2 className="text-gray-200 w-full flex justify-center items-center text-2xl font-title"><TypingText text="I'm Front-End Developer" typingSpeed={150} /></h2>
                <h2 className="text-gray-100 text-lg justify-center  text-center lg:justify-end items-center lg:text-end w-full font-title">You Can See Creativity In My Projects!</h2>
                <div className="flex justify-center text-gray-50 items-center w-full font-maintext">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        style={{ border: '1px solid #ffabab', padding: '8px 20px', borderRadius: '25px' }}
                    >
                        Download CV
                    </motion.button>
                </div>
            </div>
            <div className="lg:w-[30%] w-full flex justify-center items-start">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ 
                        ease: "linear",
                        duration: 3, }}
                    exit={{ opacity: 0 }}
                    className="w-full rounded-3xl object-cover"
                    src={Mypic}
                    alt="" />
            </div>
        </div>
    )
}
