import Proheader from "./Proheader"
import Proinfo from "./Proinfo"
import Probutton from "./Probutton"
export default function Promain() {
    return (
        <div className="w-[95%] flex flex-wrap justify-center items-center">
            <div className="w-full flex flex-wrap justify-center items-center">
                <Proheader />
            </div>
            <div className="w-full mt-[40px] flex flex-wrap justify-center items-center">
                <Proinfo />
            </div>
            <div className="w-full my-[40px] flex flex-wrap justify-center items-center">
                <Probutton />
            </div>
        </div>
    )
}
