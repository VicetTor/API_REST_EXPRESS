const logger = (req, res, next) => {
    const { method, host, path } = req
    const time = new Date().toLocaleTimeString('fr-FR')
    
    console.log(`${time} : ${method} - ${host} - ${path}`)

    //si c'est le dernier middleware dans la pile => res.send() sinon next() 
    next()
}

export default logger