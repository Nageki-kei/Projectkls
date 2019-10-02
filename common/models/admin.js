'use strict';

module.exports = function(Admin) 
{
    Admin.getAdminByuser = function(user,callback)
    {
        new Promise(function(resolve,reject)
        {
            Admin.find({where :{username :{like : user}}}, function(err,result)
            {
                if (err) reject (err);
                if (result == null)
                {
                    err = new Error ("Data no found");
                    err = statutsCode = 404;
                    reject (err)
                }
            });
        })

        .then(function(res)
        {
            if (!res) callback (err);
            return callback(null,res[0]);
        })

        .catch(function(err)
        {
            callback(err);
        });
    };

    Admin.remoteMethod('getAdminByuser',
    {
        description: 'get user by tempat lahir', accepts:
        [
            {
                arg: 'username', type: 'string'
            }
        ],
        return:
        {
            arg: 'res', type: 'object',root: true
        },
        http: { path: '/getAdminByuser', verb: 'get'}
    });
};
