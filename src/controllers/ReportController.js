const { Op } = require('sequelize')
const User = require('../models/User')


module.exports = {
    async show( req, res) {
       // Encontrar todos o usuarios que tenham o email que terminam com @rocketseat.com.br
       // Desses usuarios eu quero buscar todos que moram na "Rua das Flores"
       // Desses usuarios eu quero buscar as tecnologias que começam com "React"
        
       const users = await User.findAll({
           attributes: [ 'name', 'email'],
           where: {
               email: {
                   [Op.iLike]: '%@rocketseat.com.br'
               }
           },
           include: [
               { association: 'addresses', where: { street: 'Rua das Flores'}},
                { association: 'techs',
                 where: {
                    title: {
                        [Op.iLike]: 'React%'
                    }
                }
            },
           ]
       })
    
       return res.json(users)
    }

}