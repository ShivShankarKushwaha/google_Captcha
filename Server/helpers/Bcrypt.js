const bcrypt =require('bcrypt');

function encryption(data)
{
    let hashed = bcrypt.hashSync(data,10);
    return hashed;
}

function comparepass(data, stored)
{
    return bcrypt.compareSync(data, stored);
}
module.exports ={encryption,comparepass}