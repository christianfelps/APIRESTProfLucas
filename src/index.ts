import  {server}  from "./Server";
import { Knex } from "./database/knex";

const startServer = () => {
    server.listen(process.env.PORT || 3333, () => console.log(`server na url http://localhost:${process.env.PORT || 3333}`));
};

if (process.env.IS_LOCALHOST !== 'true') {
    console.log("Rodando migrations");
    Knex.migrate
    .latest()
    .then(()=>{
        Knex.seed.run()
        .then(() => startServer())
        .catch(console.log)
    
    })

} else{
    startServer()
}


