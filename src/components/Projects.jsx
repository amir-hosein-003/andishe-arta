import { Icon } from "@iconify/react"

const Projects = () => {

  const projects = [1, 2, 3, 4];

  return (
    <section className="px-20">
        <div className="flex justify-center mt-32">
            <div className="flex flex-col items-end">
                <img src="./public/img/Group-3.png" />
                <h2 className="text-3xl font-semibold py-2">
                    پروژه های
                    <span className="text-primary"> اندیشه آرتا </span>
                </h2>
            </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-y-8 mt-16">

          {projects.map((num, index) => (
            <div key={index} className="w-165 h-45 flex flex-row gap-3 rounded-3xl p-5 bg-base-200">
              <div className="rounded-2xl overflow-hidden">
                <img src="../public/img/image-2.png" width="320" />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-xl font-bold">پروژه لورم ایپسوم متن ساختگی</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Icon icon="fluent:location-24-filled" width="24" height="24" />
                    نام شرکت
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon icon="fluent:layer-24-filled" width="24" height="24" />
                    محصول شماره {num}
                  </span>
                  <button className="btn btn-primary rounded-xl">
                    مشاهده جزییات
                    <Icon icon="iconamoon:arrow-left-2" width="24" height="24" />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
    </section>
  )
}

export default Projects
