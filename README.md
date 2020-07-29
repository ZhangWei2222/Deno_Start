# Deno_Start

## 前言

阅读了掘金技术专题第一期征文：[Deno 从入门到跑路](https://juejin.im/post/5f1d4065f265da22d8344dc6#heading-28)，跟着打了一下码，[仓库在此](https://github.com/ZhangWei2222/Deno_Start)。文章较清晰地介绍了 Deno 是什么，为什么，自己简单的体验了一番，暂时感受到了安全性和 ts 的优势。Deno 生态现在还是比较弱的，短时间内应该还无法取代 Node，期待它之后的成长，继续关注。

## 下载安装

- 使用 Shell (Mac, Linux)：

  ```bash
  $ curl -fsSL https://deno.land/x/install/install.sh | sh
  ```

- 使用 PowerShell (Windows):

  ```bash
  $ iwr https://deno.land/x/install/install.ps1 -useb | iex
  ```

- 使用 Homebrew (Mac):

  ```bash
  $ brew install deno
  ```

## 快速体验

```bash
# Hello World
$ deno run https://deno.land/std/examples/welcome.ts

# 搭建文件服务器
$ deno run --allow-read --allow-net https://deno.land/std@0.62.0/http/file_server.ts
```
