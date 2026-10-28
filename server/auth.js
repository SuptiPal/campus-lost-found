const jwt=require('jsonwebtoken');
function requireAuth(req,res,next){const token=(req.headers.authorization||'').replace(/^Bearer\s+/i,'');if(!token)return res.status(401).json({error:'Please log in'});try{req.user=jwt.verify(token,process.env.JWT_SECRET||'dev-only-change-this-secret');next()}catch{return res.status(401).json({error:'Session expired; please log in again'})}}
module.exports={requireAuth};
