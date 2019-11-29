const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'techs', attributes: ['title'], through: { attributes: ['user_id'] } }
        })

        return res.json(user.techs)
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { title } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User not found'})
        }
        
        const [ tech  ] = await Tech.findOrCreate({
            where: { title }
        })

        await user.addTech(tech); // adiciona uma tech a um usuario (doc sequelize) getTech setTech etc.

        return res.json(tech)
    }, 

    async delete(req, res) {
        const { user_id } = req.params;
        const { title } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User not found'})
        }
        const tech = await Tech.findOne({
            where: { title }
        })

        await user.removeTech(tech);

        return res.json();
    }
}