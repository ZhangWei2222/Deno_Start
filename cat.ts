/*
 * 读取一个文件
 */
const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}

// 执行
// $ deno run cat.ts /etc/passwd
