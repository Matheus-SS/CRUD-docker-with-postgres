module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'crudSQL',
  define: {
    timestamps: true, // created_at and updated_at in each column of database
    underscored: true,
    underscoredAll: true,
    /* create a table from model with underscore.
    ex.: model UserGroup,the table will be created as user_groups and NOT UserGroups */
  },
};
