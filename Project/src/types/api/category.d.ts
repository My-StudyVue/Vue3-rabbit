import type { GoodsItem } from "..";

// 安装Vscode插件 json2ts
// 通过快捷键：ctrl+alt+V，可以把 json 快速生成 interface 格式的 TS 类型注解
export interface TopCategoryChildren {
  id: string;
  name: string;
  picture: string;
  goods: GoodsItem[];
}

export interface TopCategory {
  id: string;
  name: string;
  children: TopCategoryChildren[];
}