// 导入 .vue 源文件
import Button from "./Button/index.vue";
import Skeleton from "./Skeleton/Skeleton.vue";
import Slider from "./Slider/index.vue";
import Bread from "./Bread/index.vue";
import BreadItem from "./Bread/Item.vue";
import CheckBox from "./CheckBox/index.vue";
import City from "./City/index.vue";
import Count from "./Count/index.vue";
import Dialog from "./Dialog/index.vue";
import ImageView from "./ImageView/index.vue";
import InfiniteLoad from "./InfiniteLoad/index.vue";
import More from "./More/index.vue";
import Sku from "./Sku/index.vue";
import Tabs from "./Tabs/index.vue";
import TabPane from "./Tabs/pane.vue";

// 全局组件类型声明文件 for Volar
declare module "vue" {
  export interface GlobalComponents {
    // typeof 表示基于 .vue 源文件 获取对应的 TS 类型
    XtxButton: typeof Button;
    XtxSkeleton: typeof Skeleton;
    XtxSlider: typeof Slider;
    XtxMore: typeof More;
    XtxBread: typeof Bread;
    XtxBreadItem: typeof BreadItem;
    XtxCity: typeof City;
    XtxCount: typeof Count;
    XtxCheckBox: typeof CheckBox;
    XtxImageView: typeof ImageView;
    XtxSku: typeof Sku;
    XtxDialog: typeof Dialog;
    XtxInfiniteLoad: typeof InfiniteLoad;
    XtxTabs: typeof Tabs;
    XtxTabPane: typeof TabPane;
  }
}

export {};
