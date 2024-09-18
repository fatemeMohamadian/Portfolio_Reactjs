import Logo from '/md.png'
export default function Headersec() {
    return (
        <div className="w-full *:my-[20px] flex flex-wrap justify-center lg:justify-between items-center">
            <div className='lg:w-[30%] w-full flex flex-wrap justify-center items-center'>
                <img className='w-[100px] h-[100px] rounded-[50%] object-cover' src={Logo} alt="" />
            </div>
            <div className='lg:w-[60%] w-full flex flex-wrap justify-center lg:justify-end items-center'>
                <ul className='lg:w-[75%] w-full *:font-maintext *:text-gray-100 *:cursor-pointer flex flex-wrap justify-between lg:justify-evenly items-center'>
                    <li className='relative px-[8px] py-[5px] after:absolute after:w-0 after:transition-all after:duration-700 after:h-[4px] hover:after:w-full after:bg-orange-500 after:bottom-0 after:left-0'>Home</li>
                    <li className='relative px-[8px] py-[5px] after:absolute after:w-0 after:transition-all after:duration-700 after:h-[4px] hover:after:w-full after:bg-orange-500 after:bottom-0 after:left-0'>About</li>
                    <li className='relative px-[8px] py-[5px] after:absolute after:w-0 after:transition-all after:duration-700 after:h-[4px] hover:after:w-full after:bg-orange-500 after:bottom-0 after:left-0'>Portfolio</li>
                    <li className='relative px-[8px] py-[5px] after:absolute after:w-0 after:transition-all after:duration-700 after:h-[4px] hover:after:w-full after:bg-orange-500 after:bottom-0 after:left-0'>Projects</li>
                    <li className='relative px-[8px] py-[5px] after:absolute after:w-0 after:transition-all after:duration-700 after:h-[4px] hover:after:w-full after:bg-orange-500 after:bottom-0 after:left-0'>Contact</li>
                </ul>
            </div>
        </div>
    )
}
