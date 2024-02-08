const Todo = require("../modal/Todo")

exports.getTodo = async (req, res) => {
    try {
        const result = await Todo.find()
        res.status(200).json({ message: "fetch sucess", result })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went wrong" })
    }
}
exports.addTodo = async (req, res) => {
    try {
        await Todo.create(req.body)
        res.status(201).json({ message: "Add sucess" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went wrong" })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "update sucess" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went wrong" })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "remove sucess" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went wrong" })
    }
}