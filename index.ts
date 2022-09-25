import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();
const port = 8080;

console.log("http://localhost:8080/");
app.get("/user",(c) => {
  return JSON.stringify({"name" : "milo"});
})

app.start({ port: port });