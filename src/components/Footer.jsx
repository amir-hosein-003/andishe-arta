import { Icon } from "@iconify/react"
import Linkedin from "../icons/Linkedin";
import Telegram from "../icons/Telegram";
import Twitter from "../icons/Twitter";
import WhatsApp from "../icons/WhatsApp";
import Youtube from "../icons/Youtube";

const Footer = () => {

  return (
    <footer className="bg-base-100 py-20 font-yekan relative">
      <div className="w-full md:w-250 h-20 flex flex-row items-center justify-between bg-primary rounded-2xl absolute top-[-40px] left-0 md:left-[20%] px-5">
        <p className="text-xl font-bold text-base-100">عضویت در خبرنامه!! از جدیدترین اخبار مطلع شوید!</p>
        <span className="h-13 flex flex-row items-center rounded-2xl overflow-hidden">
            <input type="email" placeholder="example@gmail.com" className="w-70 h-full bg-base-100 rounded-2xl outline-0 z-2 px-5 ml-[-15px]" />
            <button className="w-35 h-full flex flex-row items-center justify-end gap-3 bg-red-400 text-base-100 px-4 py-2">
                <Icon icon="ic:outline-email" width="24" height="24" />
                ثبت ایمیل
            </button>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="px-10 md:px-20">
            <img src="./public/img/logo.png" className="mt-5" alt="logo" width={"150"} />
            <ul className="flex flex-row items-center justify-between mt-10">
                <li>
                    <a href="#"><Youtube /></a>
                </li>
                <li>
                    <a href="#"><Linkedin /></a>
                </li>
                <li>
                    <a href="#"><Twitter /></a>
                </li>
                <li>
                    <a href="#"><Telegram /></a>
                </li>
                <li>
                    <a href="#"><WhatsApp /></a>
                </li>
            </ul>
        </div>
        <div className="px-10 md:px-0">
          <ul className="flex flex-row items-center justify-between text-gray-400">
            <li className="text-primary"><a href="#">صفحه اصلی</a></li>
            <li><a href="#">محصولات</a></li>
            <li><a href="#">بلاگ</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
          </ul>
          <div className="mt-10">
            <p className="font-bold mb-2">درباره ما</p>
            <p className="text-gray-400">
              درباره ما لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ، و با استفاده از طراحان گرافیک است <a href="#" className="border-b font-bold text-black">بیشتر بخوانید</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-gray-400 px-10">
          <p className="text-black">راه ارتباطی</p>
          <p>تلفن : 021555555</p>
          <p>آدرس : تهران - خیابان تهران - کوچه تهران - شرکت</p>
          <p>ایمیل : example@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
