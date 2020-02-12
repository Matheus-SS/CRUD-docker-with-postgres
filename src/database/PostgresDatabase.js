import Sequelize from 'sequelize';
import Student from '../app/models/Student';

import databaseConfig from '../config/database';

const models = [Student]; // put your models here
class Database {
  constructor() {
    this.postgres();
    this.testConnection();
  }

  postgres() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.connectToDatabase(this.connection)); // load all models
  }

  testConnection() {
    this.connection
      .authenticate()
      .then(() => {
        console.log('Conexão estabelecida.');
      })
      .catch(err => {
        console.error('Erro ao conectar no Banco de Dados:', err);
      });
  }
}

export default new Database();
