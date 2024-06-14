# Vue 3 + TypeScript + Vite

该模板使用 Vue 3 的`<script setup>` 单文件组件（SFC），查看 [script setup 文档](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) 以了解更多信息。

## 推荐的设置

- 使用 [VS Code](https://code.visualstudio.com/) 和 [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)，并禁用 Vetur。

- 使用 [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) 命令行执行相同的类型检查，或为单文件组件（SFCs）生成 d.ts 文件。

## 命令

- ##### 快速生成页面模板

```ts
⚠️Name参数必须放第三个且不用‘=’，其他配置放最后且需要‘=’，顺序不限制。
例子：node templatePage.cjs Menus path=components/Layout single=true type=0,
（注释：在src/components/layout下生成了命名为Meuns的单文件类型为0的模板）
```

> ###### 预命令
>
> 1.  <p class="selec-line">node templatePage.cjs Name</p>
> 2.  <p class="selec-line">node templatePage.cjs Name single=true</p>
> 3.  <p class="selec-line">node templatePage.cjs Name path=view/Home</p>
> 4.  <p class="selec-line">node templatePage.cjs Name path=view/Home single=true</p>
> 5.  <p class="selec-line">node templatePage.cjs Name path=components</p>
> 6.  <p class="selec-line">node templatePage.cjs Name path=components/Home single=true</p>

|  参数  |                   说明                    |  类型   | 默认值 | 必填  |
| :----: | :---------------------------------------: | :-----: | :----: | :---: |
|  Name  |                 模板名称                  | string  |   -    | true  |
|  path  |        在 src 路径下生成模板的路径        | string  |  view  | false |
| single | 生成单文件，不带文件夹,默认是生成带文件的 | boolean | false  | false |
|  type  |     生成模板类型，目前只有 0 一种类型     |    0    |   0    | false |

<style>
.selec-line {
  user-select: all;
  white-space: pre;
}
</style>
