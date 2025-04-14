import { Icon } from "@iconify/react"
import Airplane from "../icons/Airplane";
import Clock from "../icons/Clock";
import Change from "../icons/Change";

const DetailProduct = () => {
  return (
    <div className=" flex flex-col justify-around">
      <div>
        <h3 className="text-3xl font-semibold mb-6">
          لورم ایپسوم متن ساختگی با تولید
        </h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ، و بااستفاده از طراحان گرافیک است
        </p>
      </div>
      <div>
        <ul>
          <li className="flex items-center gap-2 font-bold mb-3">
            <Clock />
            لورم ایپسوم متن ساختگی
          </li>
          <li className="flex items-center gap-2 font-bold mb-3">
            <Airplane />
            لورم ایپسوم متن ساختگی
          </li>
          <li className="flex items-center gap-2 font-bold mb-3">
            <Change />
            لورم ایپسوم متن ساختگی
          </li>
        </ul>
      </div>
      <div>
        <button className="btn btn-primary">
          اطلاعات بیشتر
          <Icon icon="iconamoon:arrow-left-2" width="24" height="24" />
        </button>
        <button className="btn text-primary mr-4">
          مشاوره رایگان
          <Icon icon="iconamoon:arrow-left-2" width="24" height="24" />
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;
