import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
export default function Foot() {
  return (
    <div className="w-[95%] *:my-[15px] flex flex-wrap justify-between items-center">
       <div className="lg:w-[40%] w-full flex text-center lg:text-start justify-center lg:justify-start items-center flex-wrap">
         <h3 className="font-maintext text-gray-200">Developed By Fatemeh Mohamadian</h3>
       </div>
        <div className="lg:w-[50%] w-full flex justify-center lg:justify-end items-center flex-wrap">
            <ul className="lg:w-[50%] w-[70%] *:text-gray-50 flex flex-wrap justify-evenly items-center">
                <li><a href="http://www.linkedin.com/in/fateme-mohamadian-dev0824"><LinkedInIcon/></a></li>
                <li><a href="https://www.instagram.com/fateme_mohamadiian.fed?igsh=YzVkODRmOTdmMw=="><InstagramIcon/></a></li>
                <li><a href="https://github.com/fatemeMohamadian"><GitHubIcon/></a></li>
                <li><a href="https://www.instagram.com/fateme_mohamadiian.fed?igsh=YzVkODRmOTdmMw=="><EmailIcon/></a></li>
            </ul>
        </div>
    </div>
  )
}
