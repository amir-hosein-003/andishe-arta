import { Icon } from "@iconify/react"
import CheckBox from "../icons/CheckBox"
import ImgSlider from "../components/ImgSlider"

const HeroSection = () => {

    const lists = [
        "لورم ایپسوم متن ساختگی با تولید نامفهوم",
        "لورم ایپسوم متن ساختگی با تولید نامفهوم",
        "لورم ایپسوم متن ساختگی با تولید نامفهوم",
        "لورم ایپسوم متن ساختگی با تولید نامفهوم",
    ]

  return (
    <section className="h-screen flex justify-between flex-col-reverse md:flex-row px-20 mt-12">
        <div className="h-120 flex flex-col justify-around">
            <div className="flex items-center gap-2">
                <img src="./public/img/Group-2.png" />
                <h1 className="text-4xl font-bold">نام آوران اندیشه آرتا</h1>
            </div>
            <ul className="flex flex-col gap-3 text-gray-500">
                {lists.map((list, index) => (
                    <li className="flex items-center gap-3" key={index}>
                        <CheckBox />
                        {list}
                    </li>
                ))}
            </ul>
            <div>
                <button className="btn btn-primary">
                    درباره ما
                    <Icon icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
                <button className="btn btn-ghost mr-4">
                    محصولات ما
                    <Icon className="text-primary" icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
            </div>
        </div>
        <div className="w-full md:w-1/2 relative">
            <span className="absolute left-0">
                <img src="./public/img/Rectangle.png" width={"440"} />
                <img src="./public/img/circle.png" className="absolute left-30 top-20" />
            </span>
            <div className="absolute top-0 left-19 w-full h-full">
                <ImgSlider />
            </div>
        </div>
    </section>
  )
}

export default HeroSection
