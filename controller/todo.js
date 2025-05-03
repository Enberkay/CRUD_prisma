const prisma = require("../config/prisma")

exports.create = async(req,res) =>{
    try{
        //code body
        const { title, status } = req.body;
        const newTodo = await prisma.todo.create({
            data: {
                title: title,
                status: status,
            },
        });

        res.json({newTodo});

    }catch(err){
        //err
        console.log(err)
        res.json({ message : "Server Error"}).status(500);
    }

    
    // res.send("Create Controller");
};

exports.list = async(req, res) =>{
    //code body
    try{
        const todos = await prisma.todo.findMany();
        res.json({ todos });
    }catch(err){
        console.log(err);
        res.json({ message : "Server error"}).status(500);
    }

    // res.send("List Controller");
};

exports.update = async(req, res)=>{
    try{
        const { todoID } = req.params;
        const { title, status } = req.body;

        const updated = await prisma.todo.update({
            where:{
                id: Number(todoID)
            },
            data:{
                title: title,
                status: status,
            },
        });
        res.json({ updated });
    }catch(err){
        console.log(err);
        res.json({ message : "Server error"}).status(500);
    }

    // res.send("Update Controller");
};

exports.remove = async(req, res)=>{
    try{
        const { todoID } = req.params;
        const deleted = await prisma.todo.delete({
            where: {
                id: Number(todoID),
            },
        });
        res.json({ deleted });
    }catch(err){
        console.log(err);
        res.json({ message: "Server Error"}).status(500);
    }
    // res.send("Delete Controller");
};