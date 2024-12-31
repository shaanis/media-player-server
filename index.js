const jsonserver = require('json-server')
const Mpserver= jsonserver.create()
const middleware = jsonserver.defaults()
// create port
const PORT = 3000
const route = jsonserver.router('db.json')

Mpserver.use(middleware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`mp server statred running :${PORT} and its waiting for client request`);
})