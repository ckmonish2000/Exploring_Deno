const encoder=new TextEncoder();
let text=encoder.encode("welcome to deno");
await Deno.writeFile("file.txt",text);