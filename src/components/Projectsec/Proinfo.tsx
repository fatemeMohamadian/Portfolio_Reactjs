import Pro1 from '/1.png'
import Pro2 from '/2.png'
import Pro3 from '/3.png'
import Pro4 from '/4.png'
import Pro5 from '/5.png'
import Pro6 from '/6.png'
import Pro7 from '/7.png'
import Pro8 from '/8.png'
import { motion } from 'framer-motion';
export default function Proinfo() {
    return (
        <div className="lg:w-[70%] w-full *:my-[15px] transition-all duration-700 flex flex-wrap justify-center items-center">
            <motion.div
                initial={{ opacity: 0, transform: 'translateX(-300px)' }}
                whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full backdrop-blur-3xl group relative h-[35vh]  bg-[#0f0f0fc3] flex cursor-pointer flex-wrap border-[1px] border-[#b5b5b538] justify-between items-center rounded-md">
                {/* /////////////////////// */}
                <div className="absolute transition-all duration-700 group-hover:scale-100 w-[35%] h-[150px] lg:w-[45%] scale-0 shadow-md lg:h-[250px] flex justify-center items-center top-[20%] left-[55%] lg:top-[-10%] z-[100] lg:left-[48%] rounded-lg  rotate-[-10deg]">
                    <a className='w-full h-full' href="https://github.com/fatemeMohamadian/Admin-Panel">
                        <img className='w-full rounded-lg h-full object-cover lg:object-fill' src={Pro1} alt="" />
                    </a>
                </div>

                {/* //////////////////////// */}
                <div className="flex group-hover:ml-0 transition-all duration-700 ml-[20px] *:my-[10px] flex-wrap justify-start items-center">
                    <h3 className="font-title group-hover:ml-[10px] text-xl w-full text-gray-100"><span className="font-maintext group-hover:hidden transition-all duration-700 px-[10px] text-gray-400">1</span> Admin Panel</h3>
                    <div className="w-full *:text-gray-400 flex flex-wrap justify-evenly group-hover:justify-start transition-all duration-700 lg:*:w-auto *:w-full group-hover:*:mx-[10px] items-center *:font-text1">
                        <span>Nextjs</span>
                        <span>Material UI</span>
                        <span>Api</span>
                        <span>MUI-Chart</span>
                        <span>Chartjs</span>
                    </div>
                </div>
                <div className="flex mr-[20px] group-hover:mr-[10px] transition-all duration-700 justify-end items-center">
                    <p className="text-gray-400 font-maintext">2024</p>
                </div>
            </motion.div>
            {/* //////////////////////Project2////////////////////////// */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full backdrop-blur-3xl group relative h-[35vh]  bg-[#0f0f0fc3] flex cursor-pointer flex-wrap border-[1px] border-[#b5b5b538] justify-between items-center rounded-md">
                {/* /////////////////////// */}
                <div className="absolute transition-all duration-700 group-hover:scale-100 w-[35%] h-[150px] lg:w-[45%] scale-0 shadow-md lg:h-[250px] flex justify-center items-center top-[20%] left-[55%] lg:top-[-10%] z-[100] lg:left-[50%] rounded-lg  rotate-[-10deg]">
                    <a className='w-full h-full' href="https://github.com/fatemeMohamadian/SnapFood_Project">
                        <img className='w-full rounded-lg h-full object-cover lg:object-fill' src={Pro2} alt="" />
                    </a>
                </div>

                {/* //////////////////////// */}
                <div className="flex group-hover:ml-0 transition-all duration-700 ml-[20px] *:my-[10px] flex-wrap justify-start items-center">
                    <h3 className="font-title group-hover:ml-[10px] text-xl w-full text-gray-100"><span className="font-maintext group-hover:hidden transition-all duration-700 px-[10px] text-gray-400">2</span> Snap Food</h3>
                    <div className="w-full *:text-gray-400 flex flex-wrap justify-evenly group-hover:justify-start transition-all duration-700 lg:*:w-auto *:w-full group-hover:*:mx-[10px] items-center *:font-text1">
                        <span>Nextjs</span>
                        <span>TailwindCss</span>
                        <span>Material UI</span>
                        <span>Api</span>
                        <span>Zustand</span>
                    </div>
                </div>
                <div className="flex mr-[20px] group-hover:mr-[10px] transition-all duration-700 justify-end items-center">
                    <p className="text-gray-400 font-maintext">2024</p>
                </div>
            </motion.div>
            {/* //////////////////////Project3////////////////////////// */}
            <motion.div
                initial={{ opacity: 0, transform: 'translateX(300px)' }}
                whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full backdrop-blur-3xl group relative h-[35vh]  bg-[#0f0f0fc3] flex cursor-pointer flex-wrap border-[1px] border-[#b5b5b538] justify-between items-center rounded-md">
                {/* /////////////////////// */}
                <div className="absolute transition-all duration-700 group-hover:scale-100 w-[35%] h-[150px] lg:w-[45%] scale-0 shadow-md lg:h-[250px] flex justify-center items-center top-[20%] left-[55%] lg:top-[-10%] z-[100] lg:left-[46%] rounded-lg  rotate-[-10deg]">
                    <a className='w-full h-full' href="https://github.com/fatemeMohamadian/Flower-Shop">
                        <img className='w-full rounded-lg h-full object-fill' src={Pro3} alt="" />
                    </a>
                </div>

                {/* //////////////////////// */}
                <div className="flex group-hover:ml-0 transition-all duration-700 ml-[20px] *:my-[10px] flex-wrap justify-start items-center">
                    <h3 className="font-title group-hover:ml-[10px] text-xl w-full text-gray-100"><span className="font-maintext group-hover:hidden transition-all duration-700 px-[10px] text-gray-400">3</span> Flower Shop</h3>
                    <div className="w-full *:text-gray-400 flex flex-wrap justify-evenly group-hover:justify-start transition-all duration-700 lg:*:w-auto *:w-full group-hover:*:mx-[10px] items-center *:font-text1">
                        <span>ReactJs</span>
                        <span>TailwindCss</span>
                        <span>SPA</span>
                        <span>Api</span>
                    </div>
                </div>
                <div className="flex mr-[20px] group-hover:mr-[10px] transition-all duration-700 justify-end items-center">
                    <p className="text-gray-400 font-maintext">2024</p>
                </div>
            </motion.div>
            {/* //////////////////////Project4////////////////////////// */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full backdrop-blur-3xl group relative h-[35vh]  bg-[#0f0f0fc3] flex cursor-pointer flex-wrap border-[1px] border-[#b5b5b538] justify-between items-center rounded-md">
                {/* /////////////////////// */}
                <div className="absolute transition-all duration-700 group-hover:scale-100 w-[35%] h-[150px] lg:w-[45%] scale-0 shadow-md lg:h-[250px] flex justify-center top-[20%] left-[55%] items-center lg:top-[-10%] z-[100] lg:left-[46%] rounded-lg  rotate-[-10deg]">
                    <a className='w-full h-full' href="https://github.com/fatemeMohamadian/Ontag_Parallax">
                        <img className='w-full rounded-lg h-full object-cover lg:object-fill' src={Pro4} alt="" />
                    </a>
                </div>

                {/* //////////////////////// */}
                <div className="flex group-hover:ml-0 transition-all duration-700 ml-[20px] *:my-[10px] flex-wrap justify-start items-center">
                    <h3 className="font-title group-hover:ml-[10px] text-xl w-full text-gray-100"><span className="font-maintext group-hover:hidden transition-all duration-700 px-[10px] text-gray-400">4</span> OnTag-Parallax</h3>
                    <div className="w-full *:text-gray-400 flex flex-wrap justify-evenly lg:*:w-auto *:w-full group-hover:justify-start transition-all duration-700 group-hover:*:mx-[10px] items-center *:font-text1">
                        <span>Html5</span>
                        <span>Scss</span>
                        <span>JavaScript</span>
                        <span>Scroll</span>
                    </div>
                </div>
                <div className="flex mr-[20px] group-hover:mr-[10px] transition-all duration-700 justify-end items-center">
                    <p className="text-gray-400 font-maintext">2024</p>
                </div>
            </motion.div>
            {/* //////////////////////Project5////////////////////////// */}
            <motion.div
                initial={{ opacity: 0, transform: 'translateX(-300px)' }}
                whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full backdrop-blur-3xl group relative h-[35vh]  bg-[#0f0f0fc3] flex cursor-pointer flex-wrap border-[1px] border-[#b5b5b538] justify-between items-center rounded-md">
                {/* /////////////////////// */}
                <div className="absolute transition-all duration-700 group-hover:scale-100 w-[35%] h-[150px] lg:w-[45%] scale-0 shadow-md lg:h-[250px] flex justify-center items-center top-[20%] left-[55%] lg:top-[-10%] z-[100] lg:left-[46%] rounded-lg  rotate-[-10deg]">
                    <a className='w-full h-full' href="https://github.com/fatemeMohamadian/Weather">
                        <img className='w-full rounded-lg h-full object-cover lg:object-fill' src={Pro5} alt="" />
                    </a>
                </div>

                {/* //////////////////////// */}
                <div className="flex group-hover:ml-0 transition-all duration-700 ml-[20px] *:my-[10px] flex-wrap justify-start items-center">
                    <h3 className="font-title group-hover:ml-[10px] text-xl w-full text-gray-100"><span className="font-maintext group-hover:hidden transition-all duration-700 px-[10px] text-gray-400">5</span> Weather</h3>
                    <div className="w-full *:text-gray-400 flex flex-wrap justify-evenly lg:*:w-auto *:w-full group-hover:justify-start transition-all duration-700 group-hover:*:mx-[10px] items-center *:font-text1">
                        <span>JavaScript</span>
                        <span>Html5</span>
                        <span>Scss</span>
                        <span>Api</span>
                    </div>
                </div>
                <div className="flex mr-[20px] group-hover:mr-[10px] transition-all duration-700 justify-end items-center">
                    <p className="text-gray-400 font-maintext">2024</p>
                </div>
            </motion.div>
            {/* //////////////////////Project6////////////////////////// */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full backdrop-blur-3xl group relative h-[35vh]  bg-[#0f0f0fc3] flex cursor-pointer flex-wrap border-[1px] border-[#b5b5b538] justify-between items-center rounded-md">
                {/* /////////////////////// */}
                <div className="absolute transition-all duration-700 group-hover:scale-100 w-[35%] h-[150px] lg:w-[45%] scale-0 shadow-md lg:h-[250px] flex justify-center items-center top-[20%] left-[55%] lg:top-[-10%] z-[100] lg:left-[46%] rounded-lg  rotate-[-10deg]">
                    <a className='w-full h-full' href="https://github.com/fatemeMohamadian/TodoList-ReactJs">
                        <img className='w-full rounded-lg h-full object-cover lg:object-fill' src={Pro6} alt="" />
                    </a>
                </div>
                {/* //////////////////////// */}
                <div className="flex group-hover:ml-0 transition-all duration-700 ml-[20px] *:my-[10px] flex-wrap justify-start items-center">
                    <h3 className="font-title group-hover:ml-[10px] text-xl w-full text-gray-100"><span className="font-maintext group-hover:hidden transition-all duration-700 px-[10px] text-gray-400">6</span> ToDo-List</h3>
                    <div className="w-full *:text-gray-400 flex flex-wrap justify-evenly lg:*:w-auto *:w-full group-hover:justify-start transition-all duration-700 group-hover:*:mx-[10px] items-center *:font-text1">
                        <span>ReactJs</span>
                        <span>TailwindCss</span>
                        <span>Html5</span>
                        <span>Logic</span>
                    </div>
                </div>
                <div className="flex mr-[20px] group-hover:mr-[10px] transition-all duration-700 justify-end items-center">
                    <p className="text-gray-400 font-maintext">2024</p>
                </div>
            </motion.div>
            {/* //////////////////////Project7////////////////////////// */}
            <motion.div
                initial={{ opacity: 0, transform: 'translateX(300px)' }}
                whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full backdrop-blur-3xl group relative h-[35vh]  bg-[#0f0f0fc3] flex cursor-pointer flex-wrap border-[1px] border-[#b5b5b538] justify-between items-center rounded-md">
                {/* /////////////////////// */}
                <div className="absolute transition-all duration-700 group-hover:scale-100 w-[35%] h-[150px] lg:w-[45%] scale-0 shadow-md lg:h-[250px] flex justify-center items-center top-[20%] left-[55%] lg:top-[-10%] z-[100] lg:left-[46%] rounded-lg  rotate-[-10deg]">
                    <a className='w-full h-full' href="https://github.com/fatemeMohamadian/Online-Quiz">
                        <img className='w-full rounded-lg h-full object-cover lg:object-fill' src={Pro7} alt="" />
                    </a>
                </div>
                {/* //////////////////////// */}
                <div className="flex group-hover:ml-0 transition-all duration-700 ml-[20px] *:my-[10px] flex-wrap justify-start items-center">
                    <h3 className="font-title group-hover:ml-[10px] text-xl w-full text-gray-100"><span className="font-maintext group-hover:hidden transition-all duration-700 px-[10px] text-gray-400">7</span> Online Quiz</h3>
                    <div className="w-full *:text-gray-400 flex flex-wrap justify-evenly lg:*:w-auto *:w-full group-hover:justify-start transition-all duration-700 group-hover:*:mx-[10px] items-center *:font-text1">
                        <span>JavaScript</span>
                        <span>TailwindCss</span>
                        <span>Logic</span>
                        <span>Html5</span>
                    </div>
                </div>
                <div className="flex mr-[20px] group-hover:mr-[10px] transition-all duration-700 justify-end items-center">
                    <p className="text-gray-400 font-maintext">2024</p>
                </div>
            </motion.div>
            {/* //////////////////////Project8////////////////////////// */}
            <motion.div
            initial={{ opacity: 0, scale:0 }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
             className="w-full backdrop-blur-3xl group relative h-[35vh]  bg-[#0f0f0fc3] flex cursor-pointer flex-wrap border-[1px] border-[#b5b5b538] justify-between items-center rounded-md">
                {/* /////////////////////// */}
                <div className="absolute transition-all duration-700 group-hover:scale-100 w-[35%] h-[150px] lg:w-[45%] scale-0 shadow-md lg:h-[250px] flex justify-center top-[20%] left-[55%] items-center lg:top-[-10%] z-[100] lg:left-[46%] rounded-lg  rotate-[-10deg]">
                    <a className='w-full h-full' href="https://github.com/fatemeMohamadian/Matching-Cards-Game">
                        <img className='w-full rounded-lg h-full object-cover lg:object-fill' src={Pro8} alt="" />
                    </a>
                </div>
                {/* //////////////////////// */}
                <div className="flex group-hover:ml-0 transition-all duration-700 ml-[20px] *:my-[10px] flex-wrap justify-start items-center">
                    <h3 className="font-title group-hover:ml-[10px] text-xl w-full text-gray-100"><span className="font-maintext group-hover:hidden transition-all duration-700 px-[10px] text-gray-400">8</span> Memory Cards</h3>
                    <div className="w-full lg:*:w-auto *:w-full *:text-gray-400 flex flex-wrap justify-evenly group-hover:justify-start transition-all duration-700 group-hover:*:mx-[10px] items-center *:font-text1">
                        <span>JavaScript</span>
                        <span>Scss</span>
                        <span>Html5</span>
                        <span>Logic</span>
                        <span>Game</span>
                    </div>
                </div>
                <div className="flex mr-[20px] group-hover:mr-[10px] transition-all duration-700 justify-end items-center">
                    <p className="text-gray-400 font-maintext">2024</p>
                </div>
            </motion.div>

        </div>
    )
}
