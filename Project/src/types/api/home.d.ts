// 后端返回的接口数据格式
export type ApiRes<T> = {
  code: string;
  msg: string;
  // 考虑到不同接口返回的 result 不同，用泛型占位
  result: T;
};

// 分类数据单项类型
export interface CategoryGoods {
  id: string;
  desc: string;
  name: string;
  picture: string;
  price: string;
  title: string;
  alt: string;
};

export interface CategoryChildren {
  id: string;
  name: string;
  picture: string;
  goods: CategoryGoods[];
};

export interface CategoryItem {
  id: string;
  name: string;
  picture: string;
  children: CategoryChildren[];
  goods: CategoryGoods[];
};

// 存一个更有语义的类型名字
export type GoodsItem = CategoryGoods;

// 分类数据列表类型
export type CategoryList = CategoryItem[];

// 轮播图类型
export interface Banner {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

// 轮播图数据列表类型
export type BannerList = Banner[];