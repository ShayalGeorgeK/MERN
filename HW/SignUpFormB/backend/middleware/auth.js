
export function checkAuth(req,res,next) {
    console.log("Middleware executed")
    console.log("Method : ", req.method)    
    console.log("URL : ",req.url)
    next()
}