// TCP 服务

const hostname = "127.0.0.1";
const port = 8080;
const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);
for await (const conn of listener) {
  Deno.copy(conn, conn);
}

// 执行
// nc 127.0.0.1 8080 // 尝试用 netcat 向它发送数据
