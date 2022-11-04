
INSERT INTO department
    (name)
VALUES 
('Finance'),
('HR'),
('Logistics'),
('Sales'),
('Post Sales'),
('Customer Service'),
('Aquisitions'),
('Auditing'),
('Near Shore'),
('PR');

INSERT INTO role
    (title, salary, department_id)
    VALUES
    ('Head', 5000, 1 ),
    ('VP', 4500, 1 ),
    ('Senior', 2500, 1 ),
    ('Staff', 1500, 1 ),
    ('Head', 5000, 2 ),
    ('VP', 4500, 2 ),
    ('Senior', 2500, 2 ),
    ('Staff', 1500, 2 ),
    ('Head', 5000, 3 ),
    ('VP', 4500, 3 ),
    ('Senior', 2500, 3 ),
    ('Staff', 1500, 3 );

    INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 1, NULL),
  ('Jack', 'London', 2, 1),
  ('Robert', 'Bruce', 3, 2),
  ('Peter', 'Greenaway', 4, 3),
  ('Derek', 'Jarman', 5, NULL),
  ('Paolo', 'Pasolini', 6, 5),
  ('Heathcote', 'Williams', 7, 6),
  ('Sandy', 'Powell', 8, 7),
  ('Emil', 'Zola', 9, NULL),
  ('Sissy', 'Coalpits', 10, 9),
  ('Antoinette', 'Capet', 11, 10),
  ('Samuel', 'Delany', 12, 11),
  ('Tony', 'Duvert', 3, 2),
  ('Dennis', 'Cooper', 3, 2),
  ('Monica', 'Bellucci', 3, 2),
  ('Samuel', 'Johnson', 3, 2),
  ('John', 'Dryden', 7, 6),
  ('Alexander', 'Pope', 7, 6),
  ('Lionel', 'Johnson', 7, 6),
  ('Aubrey', 'Beardsley', 7, 6),
  ('Tulse', 'Luper', 11, 10),
  ('William', 'Morris', 11, 10),
  ('George', 'Shaw', 11, 10),
  ('Arnold', 'Bennett', 11, 10),
  ('Algernon', 'Blackwood', 4, 3),
  ('Rhoda', 'Broughton', 4, 3),
  ('Hart', 'Crane', 4, 3),
  ('Vitorio', 'DeSica', 4, 3),
  ('Wilkie', 'Collins', 8, 7),
  ('Elizabeth', 'Gaskell', 8, 7),
  ('George', 'Sand', 8, 7),
  ('Vernon', 'Lee', 8, 7),
  ('Arthur', 'Machen', 12, 11),
  ('Frederick', 'Marryat', 12, 11),
  ('Harriet', 'Martineau', 12, 11),
  ('George', 'Meredith', 12, 11);
 


    

