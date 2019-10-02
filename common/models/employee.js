'use strict';

module.exports = function(Employee) 
{

    Employee.getEmployeeBynama = function(name,callback)
    {
        new Promise(function(resolve,reject)
        {
            Employee.find({where :{nama : {like : name }}}, function(err,result)
            {
                if (err) reject (err);
                if (result == null)
                {
                    err = new Error ("Data no found");
                    err.statusCode = 404;
                    reject (err);
                }
                resolve(result);
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

    Employee.remoteMethod(
        'getEmployeeBynama',
        {
            description: 'get user by name',
            accepts:
            [
                {arg: 'name', type: 'string'},
            ],
            return: 
            {arg: 'res', type: 'object', root: true,},
            http: { path: '/getEmployeeBynama', verb: 'get'},
        });
};
