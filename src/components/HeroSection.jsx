import { Icon } from "@iconify/react"
import CheckBox from "../icons/CheckBox"

const HeroSection = () => {
  return (
    <section className="h-screen flex justify-between flex-col md:flex-row px-20">
        <div className="h-120 flex flex-col justify-around">
            <div className="flex items-center gap-2">
                <img src="./src/assets/img/Group-2.png" />
                <h1 className="text-4xl font-bold">نام آوران اندیشه آرتا</h1>
            </div>
            <ul className="flex flex-col gap-3 text-gray-500">
                <li className="flex items-center gap-3">
                    <CheckBox />
                    لورم ایپسوم متن ساختگی با تولید نامفهوم
                </li>
                <li className="flex items-center gap-2">
                    <CheckBox />
                    لورم ایپسوم متن ساختگی با تولید نامفهوم
                </li>
                <li className="flex items-center gap-2">
                    <CheckBox />
                    لورم ایپسوم متن ساختگی با تولید نامفهوم
                </li>
                <li className="flex items-center gap-2">
                    <CheckBox />
                    لورم ایپسوم متن ساختگی با تولید نامفهوم
                </li>
            </ul>
            <div>
                <button className="btn btn-primary">
                    درباره ما
                    <Icon icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
                <button className="btn mr-4">
                    محصولات ما
                    <Icon className="text-primary" icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
            </div>
        </div>
        <div className="w-1/2 relative">
            <span className="absolute left-0">
                <img src="./src/assets/img/Rectangle.png" width="468px" />
                <img src="./src/assets/img/Group-1.png" className="absolute top-50 left-13" />
                <img src="./src/assets/img/circle.png" className="absolute left-30 top-20" />
            </span>
            <img src="./src/assets/img/image.png" className="absolute left-28 top-14" />
        </div>
    </section>
  )
}

export default HeroSection
