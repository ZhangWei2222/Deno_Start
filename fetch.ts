// 网络访问
const result = await fetch("https://deno.land/");

// 执行
// 设置 host 或 url 白名单的示例,如果 fetch.ts 尝试与其他域名建立网络连接，那么这个进程将会失败。
// $ deno run --allow-net=github.com,deno.land fetch.ts

// 允许访问任意地址
// $ deno run --allow-net fetch.ts
