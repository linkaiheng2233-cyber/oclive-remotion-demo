# OCLive Remotion 最小演示

一个用 React / Remotion 生成 OCLive 风格动画的公开源码示例。

A minimal code-animation demo. The full local Mumu production project, review compositions, music and finished videos are separate from this public snapshot.

## 运行示例

```bash
git clone https://github.com/linkaiheng2233-cyber/oclive-remotion-demo.git
cd oclive-remotion-demo
npm install
npm run preview
```

这些命令在**本仓根目录**运行，不在 Chat Pro、启动器或角色包编写器中运行。

## 导出

```bash
npm run render
```

默认导出 `out/oclive-demo.mp4`。可选 `npm run render:gif`；脚本与版本以 [package.json](package.json) 为准。

入口是 [src/index.ts](src/index.ts)，Composition 注册在 [src/Root.tsx](src/Root.tsx)，动画示例为 [src/OcliveDemo.tsx](src/OcliveDemo.tsx)，Composition ID 是 `OcliveDemo`。

## 与产品仓库的关系

这里展示代码动画的制作方式，不是角色运行时、桌面安装包或完整开发历史影片。体验软件请进入 [A.I.Live](https://github.com/linkaiheng2233-cyber/oclivenewnew)，内核接口见 [oclive-kernel](https://github.com/linkaiheng2233-cyber/oclive-kernel)。

问题与改进建议请提交 [Issue](https://github.com/linkaiheng2233-cyber/oclive-remotion-demo/issues)。


<!-- Preserve previously published section bookmarks. -->
<a id="oclive-remotion-demo"></a>
<a id="快速开始"></a>
<a id="安装依赖"></a>
<a id="预览"></a>
<a id="一键渲染mp4"></a>
<a id="可选渲染-gif"></a>
<a id="说明"></a>

旧版章节书签保留在此。[整理前的首页](https://github.com/linkaiheng2233-cyber/oclive-remotion-demo/blob/e3abbe0dd9eea92a25960f414578c17fed7bbc39/README.md)可用于查阅历史说明；现行入口以本页与所链文档为准。
