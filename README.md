# oclive-remotion-demo

独立的 Remotion 演示仓库：用代码渲染一段 “oclive 风格” 的短视频输出。

## 快速开始

### 安装依赖

```bash
npm install
```

### 预览

```bash
npm run preview
```

### 一键渲染（mp4）

输出到 `out/oclive-demo.mp4`：

```bash
npm run render
```

### 可选：渲染 gif

```bash
npm run render:gif
```

## 说明

- Remotion 入口：`src/index.ts`
- Composition 注册：`src/Root.tsx`（`id = "OcliveDemo"`）
- Demo 动画：`src/OcliveDemo.tsx`

