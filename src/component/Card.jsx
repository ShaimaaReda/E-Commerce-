import image from "../assets/images/playstation.jpeg";

export default function Card({ productInfo }) {
  return (
    <>
      <div className="card rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-30">
          <img src={productInfo.imageCover} alt="random picture" />
          <div className="layer gap-3 flex justify-center item-center absolute left-0 top-0 w-full h-full bg-slate-400 bg-opacity-40 ">
            <div className="icon cursor-pointer w-8 h-8 rounded-full bg-primary-500 text-white flex justify-center item-center">
              <i className="fa-solid fa-heart"></i>
            </div>

            <div className="icon cursor-pointer w-8 h-8 rounded-full bg-primary-500 text-white flex justify-center item-center">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>

            <div className="icon cursor-pointer w-8 h-8 rounded-full bg-primary-500 text-white flex justify-center item-center">
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>
        <div className="card-body p-4">
          <header>
            <h2 className="text-lg text-gray-600 font-semibold">
              {productInfo.title}
            </h2>
            <h4 className="text-primary-500 font-semibold">category</h4>
          </header>
          <p className="text-gray-400 text-sm line-clamp-2">
            {productInfo.category.name}
          </p>
          <div className="flex justify-between items-center">
            <span>{productInfo.price} LEG</span>
            <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
            <span>{productInfo.ratingsAverage}</span>
          </div>
        </div>
      </div>
    </>
  );
}
