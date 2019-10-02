'use strict';

module.exports = function(Owner) {
 Owner.getOwnerByNama = function(name, callback){
                new Promise(function(resolve, reject){
                //find bootcamp
                Owner.find({where : {user : {like : name }}}, function(err,result){
                    if(err) reject (err);
                    if (result == null){
                        err = new Error("User not found");
                        err.statusCode = 404;
                        reject (err)
                    }
                    resolve (result);
                });
            }).then(function(res){
                if(!res) callback (err);
                return callback(null, res[0]);
            })
            .catch(function(err)
            {
                callback(err);
            });
        };
        
            Owner.remoteMethod(
                'getOwnerByNama',
                {
                    description: 'get Owner by nama',
                    accepts: [
                        {arg: 'user', type: 'string'}
                    ],
                    returns: {
                        arg: 'res', type: 'object', root: true
                    },
                    http: {path: '/getOwnerByNama', verb: 'get'}
                    }
                
            );
        };
    
