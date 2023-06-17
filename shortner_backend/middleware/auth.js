import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const tokenforVerification = req.headers.authorization.split(' ')[1]

        let decodeData = jwt.verify(tokenforVerification, process.env.JWT_SECRET)
        req?.userId = decodeData?.id 

        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth;