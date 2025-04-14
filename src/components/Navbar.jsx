import ProductBtnIcone from "../icons/ProductBtnIcone"
import PhoneCall from "../icons/PhoneCall"

const Navbar = () => {
  return (
    <nav className="h-40 flex items-center justify-between px-20">
      <div>
        <ul className="w-100 flex items-center justify-between text-gray-500">
            <li><a href="#" className="text-black border-b-3 border-primary py-1 ">صفحه اصلی</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
            <li><a href="#">پروژه ها</a></li>
            <li><a href="#">بلاگ</a></li>
        </ul>
      </div>
      <div>
        <img src="./src/assets/img/logo.png" alt="logo" />
      </div>
        <div className="w-100 flex items-center justify-end gap-4">
            <div className="flex items-center gap-2 font-yekan">
                021-555555
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
  )
}

export default Navbar
