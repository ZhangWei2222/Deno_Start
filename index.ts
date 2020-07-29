/*
* 创建一个http服务器
*/
import { serve } from "https://deno.land/std@0.62.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}

// 执行
// $ deno run --allow-net --reload index.ts // --reload 是第一次执行时缓存模块用的
