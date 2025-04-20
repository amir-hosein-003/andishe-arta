import ArrowLDown from "../icons/ArrowLDown";
import ArrowRDown from "../icons/ArrowRDown";
import DetailProduct from "./DetailProduct";

const Products = () => {
  return (
    <section className="px-20 mt-16 md:mt-0">
      <div className="flex justify-center">
        <div className="flex flex-col items-end">
          <img src="./public/img/Group-3.png" width="100px" />
          <h2 className="text-3xl font-semibold py-2">
            محصولات <span className="text-primary">اندیشه آرتا</span>
          </h2>
        </div>
      </div>
      
      <div className="flex justify-center my-12">
        <ArrowLDown />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <img src="./public/img/image-1.png" width="640px" />
        <DetailProduct />
      </div>

      <div className="flex justify-center my-12">
        <ArrowRDown />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-10">
        <DetailProduct />
        <img src="./public/img/image-1.png" width="640px" />
      </div>

      <div className="flex justify-center my-12">
        <ArrowLDown />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <img src="./public/img/image-1.png" width="640px" />
        <DetailProduct />
      </div>
    </section>
  );
};

export default Products;
