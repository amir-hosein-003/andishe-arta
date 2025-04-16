import { Icon } from "@iconify/react"
import ProductBtnIcone from "../icons/ProductBtnIcone"
import PhoneCall from "../icons/PhoneCall"

const Navbar = () => {
  return (
    <>
    {/* mobile navbar */}
    <nav className="h-20 flex justify-between md:hidden px-8">
      <div className="dropdown flex items-center">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <Icon icon="ion:menu" width="512" height="512" />
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-60 w-105 p-2 shadow">
          <li><a>صفحه اصلی</a></li>
          <li><a>درباره ما</a></li>
          <li><a>تماس با ما</a></li>
          <li><a>پروژه ها</a></li>
          <li><a>بلاگ</a></li>
          <li className="flex flex-row items-center justify-end gap-4">
            <div className="flex items-center gap-2 font-yekan">
                <a href="tel:021555555">021-555555</a>
                <PhoneCall />
            </div>
            <div>
                <button className="btn btn-primary">
                    <ProductBtnIcone />
                    محصولات
                </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-2xl text-primary font-bold">LOGO</a>
      </div>
    </nav>
    {/* desktop navbar */}
    <nav className="h-20 grid-cols-3 gap-6 px-20 mt-12 hidden md:grid">
      <div className="flex items-center">
        <ul className="flex items-center justify-between w-full text-gray-500">
            <li><a href="#" className="text-black border-b-3 border-primary py-1">صفحه اصلی</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
            <li><a href="#">پروژه ها</a></li>
            <li><a href="#">بلاگ</a></li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <img src="./public/img/logo.png" alt="logo" />
      </div>
      <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-2 font-yekan">
              <a href="tel:021555555">021-555555</a>
              <PhoneCall />
          </div>
          <span className="w-1 h-10 rounded bg-gray-200"></span>
          <div>
              <button className="btn btn-primary">
                  <ProductBtnIcone />
                  محصولات
              </button>
          </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
