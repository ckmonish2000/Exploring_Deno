let filename="file.txt";
const file= await Deno.open(filename);

await Deno.copy(file,Deno.stdout);

file.close();






