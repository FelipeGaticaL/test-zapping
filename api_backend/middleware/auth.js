const jwt = require('jsonwebtoken');

const auth = ( req, res, next ) =>
{
  /* const token = req.headers.authorization || req.headers.token; */
    const token = req.body
    
    if ( !token ) res.status(401).send( 'Necesita autorizacion' );

    jwt.verify(token.token, process.env.SECRET, (err, decoded) =>
    {
    if ( err )
    {
      res.status(401).send( 'No tiene autorizacion' );
    }
  
    req.user = decoded;
    return res.status(201).send('Autorizado')
    next();
  });
};

module.exports = {auth};