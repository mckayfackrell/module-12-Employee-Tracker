INSERT INTO department (name)
VALUES  ('Accounting'), 
        ('Administratiion'), 
        ('Engineering'), 
        ('Human Resources'), 
        ('Maintenance');

INSERT INTO role (title, salary, dept_id)
VALUES  ('Manager', 150000, 1), 
        ('Vice President', 250000, 2), 
        ('Senior Developer', 100000, 3), 
        ('Benefits Specialist', 65000, 4), 
        ('Electrician', 80000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('George', 'Lucas', 1, 1), 
        ('Audrey', 'Hepburn', 2, 2), 
        ('Stephen', 'Spillberg', 3, 3), 
        ('Hans', 'Zimmer', 4, null), 
        ('Tom', 'Holland', 5, 5);

