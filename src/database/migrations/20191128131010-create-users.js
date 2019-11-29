'use strict';
// Aqui é onde se modela o banco (criação do banco, as tabelas e colunas)

/* Com Mongoose (DB MongoDB) não fazemos isto porque as informações são armazenadas no mesmo 
registro e no db SQL existe o relacionamento entre várias tabelas.*/

// Datatypes na doc do Sequelize existe as tipagens

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull: false,
      }
  })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};

// para criar a tabela: yarn sequelize db:migrate
// para criar um migrate : yarn sequelize migration:create --name=create-users
// desfaz a última migration meta a tabela (users): yarn sequelize db:migrate:undo