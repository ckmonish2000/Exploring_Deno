import {Application,Router} from 'https://deno.land/x/oak/mod.ts';
const app=new Application();


console.log("running on port 5000");

await app.listen({port:5000});