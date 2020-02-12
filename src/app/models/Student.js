import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  /* the method connectToDatabase connects the model to database,
  it must be given a sequelize instance as a parameter,
  and it is called on the file PostgresDatabase */
  static connectToDatabase(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }
}
export default Student;
