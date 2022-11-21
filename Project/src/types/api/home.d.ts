// 后端返回的接口数据格式
export type ApiRes<T> = {
  code: string;
  msg: string;
  // 考虑到不同接口返回的 result 不同，用泛型占位
  result: T;
};

// 分类数据单项类型
export interface Goods {
  id: string;
  desc: string;
  name: string;
  picture: string;
  price: string;
  title: string;
  alt: string;
};

export interface Children {
  id: string;
  name: string;
  picture: string;
  goods: Goods[];
};

export interface Category {
  id: string;
  name: string;
  picture: string;
  children: Children[];
  goods: Goods[];
};

// 分类数据列表类型
export type CategoryList = Category[];

// 轮播图类型
export interface Banner {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

// 轮播图数据列表类型
export type BannerList = Banner[];

export interface NewGood {
  id: string,
  name: string,
  desc: string,
  picture: string,
  price: string,
  discount: string,
  orderNum: number,
}

export type NewGoodList = NewGood[];