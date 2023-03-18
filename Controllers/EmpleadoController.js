const User = require('../Models/Empleado');

const createUser = (req, res, next) =>{

    User.inser

}

const findAllUser = (req, res, next) =>{

    User.find({}, (err, user)=>{
        if(err) next(err);
        else{
            res.status(200).send(user);
        }
    });    
}

const findUser = (req, res, next) =>{
    
}

const editUser = (req, res, next) =>{
    
}

const deleteUser = (req, res, next) =>{
    
}

module.exports = {

    createUser,
    findAllUser,
    findUser,
    editUser,
    deleteUser
}