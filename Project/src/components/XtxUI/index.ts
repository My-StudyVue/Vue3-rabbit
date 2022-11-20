import Skeleton from "./Skeleton/Skeleton.vue";
import Slider from "./Slider/index.vue";
import More from "./More/index.vue";
import Bread from "./Bread/index.vue";
import BreadItem from "./Bread/Item.vue";
import City from "./City/index.vue";
import Count from "./Count/index.vue";
import Button from "./Button/index.vue";
import CheckBox from "./CheckBox/index.vue";
import ImageView from "./ImageView/index.vue";
import Sku from "./Sku/index.vue";
import Dialog from "./Dialog/index.vue";
import InfiniteLoad from "./InfiniteLoad/index.vue";
import Tabs from "./Tabs/index.vue";
import TabPane from "./Tabs/pane.vue";
import type { App, Plugin } from "vue";

// 统一出口和统一组件命名前缀，用户可以按需导入组件库的组件
// PS：按需导入后，有 TS 类型提示
export const XtxSkeleton = Skeleton;
export const XtxSlider = Slider;
export const XtxMore = More;
export const XtxBread = Bread;
export const XtxBreadItem = BreadItem;
export const XtxImageView = ImageView;
export const XtxCity = City;
export const XtxSku = Sku;
export const XtxCount = Count;
export const XtxButton = Button;
export const XtxCheckBox = CheckBox;
export const XtxDialog = Dialog;
export const XtxTabs = Tabs;
export const XtxTabPane = TabPane;
export const XtxInfiniteLoad = InfiniteLoad;

// Vue3 插件写法
const XtxUI: Plugin = {
  // 安装组件库(插件)
  install(app: App) {
    // Vue3 注册全局组件：app.component('组件名', 组件)
    // 把组件库所有组件注册成全局组件
    app.component(`XtxSkeleton`, Skeleton);
    app.component(`XtxSlider`, Slider);
    app.component(`XtxMore`, More);
    app.component(`XtxBread`, Bread);
    app.component(`XtxBreadItem`, BreadItem);
    app.component(`XtxImageView`, ImageView);
    app.component(`XtxCity`, City);
    app.component(`XtxSku`, Sku);
    app.component(`XtxCount`, Count);
    app.component(`XtxButton`, Button);
    app.component(`XtxCheckBox`, CheckBox);
    app.component(`XtxDialog`, Dialog);
    app.component(`XtxTabs`, Tabs);
    app.component(`XtxTabPane`, TabPane);
    app.component(`XtxInfiniteLoad`, InfiniteLoad);
  },
};

// 默认导出组件库插件
export default XtxUI;

// 做统一出口
export * from "./Message/index";
