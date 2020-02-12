import Student from '../models/Student';
/**
store – Salva o novo item na tabela
show – Mostra um item específico
index – Lista os dados da tabela
update – Salva a atualização do dado
delete – Remove o dado
 */
class StudentController {
  async store(req, res) {
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Students already exists' });
    }

    const student = await Student.create(req.body);

    return res.json(student);
  }

  async show(req, res) {
    const student = await Student.findByPk(req.params.id);

    return res.json(student);
  }

  async index(req, res) {
    const student = await Student.findAll();

    return res.json(student);
  }

  async update(req, res) {
    const studentFound = await Student.findByPk(req.params.id);

    if (!studentFound) {
      return res.json({ error: 'Students does not exists' });
    }

    // it verifies if there is a student with the same email that you are trying to update
    if (req.body.email !== studentFound.email) {
      const studentExist = await Student.findOne({
        where: { email: req.body.email },
      });

      if (studentExist) {
        return res.json({ error: 'Student already exists' });
      }
    }

    const student = await studentFound.update(req.body);

    return res.json(student);
  }

  async delete(req, res) {
    const student = await Student.findByPk(req.params.id);

    student.destroy();

    return res.json(student);
  }
}

export default new StudentController();
