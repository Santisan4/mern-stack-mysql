const db = require("../database/models")
const moment = require("moment")

let horaActual = new Date().toISOString().
replace(/T/, ' ').      // replace T with a space
replace(/\..+/, '')     // delete the dot and everything after

const tasksController = {
    getTasks: (req, res) => {
        db.Tasks.findAll()
            .then(resultados => {
                resultados.map(resultado => console.log(resultado.dataValues))
                res.json(resultados)
            })
            .catch(error => {
                return res.status(500).json({message: error.message})
            })  
    },
    getTask: (req, res) => {

        const id = req.params.id
        db.Tasks.findOne({
            where: {id: id}
        })
            .then(resultado => {
                if(resultado == undefined)
                    return res.status(404).json({ message: "Task not found"})

                console.log(resultado.dataValues)
                res.json(resultado.dataValues)
            })
            .catch(error => {
                return res.status(500).json({message: error.message})
            })
        
    },
    createTask: (req, res) => {

        const newTask = {
            title: req.body.title,
            description: req.body.description,
            done: 0,
            created_at: horaActual,
            updated_at: horaActual
        }

        db.Tasks.create(newTask)
            .then(resultado =>{ 
                return res.json(resultado)
            })
            .catch(error => {
                return res.status(500).json({message: error.message})
            })

    },
    deleteTask: (req, res) => {
        const idToDelete = req.params.id
        db.Tasks.destroy({where: {
            id: idToDelete
        }})
            .then(resultado => {
                if(resultado == 0)
                    return res.status(404).json({ message: "Task not found"})
                
                res.sendStatus(204)
            }) 
            .catch(error => {
                return res.status(500).json({message: error.message})
            })
        
    },
    updateTask: (req, res) => {
        const idTaskUpdate = req.params.id

        db.Tasks.update(
            req.body,{
            where: {id: idTaskUpdate}
        })
            .then(resultado => {
                res.json(resultado)
            })
            .catch(error => {
                return res.status(500).json({message: error.message})
            })
    }
}

module.exports = tasksController
