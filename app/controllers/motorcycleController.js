import Motorcycle from '../models/motorcycle.js'

const MotorcycleController = {
    async index(req, res) {
        try {
            await MotorcycleController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const motorcycles = await Motorcycle.findAll()
        res.status(200)
        res.json({
            success: true,
            data: motorcycles
        })
    },
    async show(req, res) {
        try {
            await MotorcycleController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const motorcycle = await Motorcycle.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: motorcycle
        })
    },
    async store(req, res) {
        try {
            await MotorcycleController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const motorcycle = await Motorcycle.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: motorcycle
        })
    },
    async update(req, res) {
        try {
            await MotorcycleController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Motorcycle.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const motorcycle = await Motorcycle.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: motorcycle
        })
    },
    async destroy(req, res) {
        try {
            await MotorcycleController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const motorcycle = await Motorcycle.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: motorcycle
        })
    }
}

export default MotorcycleController
