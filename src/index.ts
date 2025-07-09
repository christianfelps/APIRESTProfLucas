import  {server}  from "./server/server";

server.listen(process.env.PORT || 3333, () => console.log(`server na url http://localhost:${process.env.PORT || 3333}`));


