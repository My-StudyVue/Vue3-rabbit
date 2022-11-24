// 统一先使用 Sku 组件中定义的商品详情类型
export * from "@/components/XtxUI/Sku/goods";

// export interface Brand {
// 	id: string;
// 	name: string;
// 	nameEn: string;
// 	logo: string;
// 	picture: string;
// 	type?: any;
// 	desc?: any;
// 	place?: any;
// }

// export interface Value {
// 	name: string;
// 	picture: string;
// 	desc: string;
// }

// export interface Spec {
// 	name: string;
// 	id: string;
// 	values: Value[];
// }

// export interface Spec {
// 	name: string;
// 	valueName: string;
// }

// export interface Sku {
// 	id: string;
// 	skuCode: string;
// 	price: string;
// 	oldPrice: string;
// 	inventory: number;
// 	specs: Spec[];
// }

// export interface Parent {
// 	id: string;
// 	name: string;
// 	layer: number;
// 	parent?: any;
// }

// export interface Category {
// 	id: string;
// 	name: string;
// 	layer: number;
// 	parent: Parent;
// }

// export interface Property {
// 	name: string;
// 	value: string;
// }

// export interface Detail {
// 	pictures: string[];
// 	properties: Property[];
// }

// export interface SimilarProduct {
// 	id: string;
// 	name: string;
// 	desc: string;
// 	price: string;
// 	picture: string;
// 	discount?: any;
// 	orderNum: number;
// }

// export interface HotByDay {
// 	id: string;
// 	name: string;
// 	desc: string;
// 	price: string;
// 	picture: string;
// 	discount?: any;
// 	orderNum: number;
// }

// export interface RootObject {
// 	id: string;
// 	name: string;
// 	spuCode: string;
// 	desc: string;
// 	price: string;
// 	oldPrice: string;
// 	discount: number;
// 	inventory: number;
// 	brand: Brand;
// 	salesCount: number;
// 	commentCount: number;
// 	collectCount: number;
// 	mainVideos: string[];
// 	videoScale: number;
// 	mainPictures: string[];
// 	specs: Spec[];
// 	skus: Sku[];
// 	categories: Category[];
// 	details: Detail;
// 	isPreSale: boolean;
// 	isCollect?: any;
// 	recommends?: any;
// 	userAddresses?: any;
// 	similarProducts: SimilarProduct[];
// 	hotByDay: HotByDay[];
// 	evaluationInfo?: any;
// }