INSERT INTO department(name)
VALUES ("management"), ("leadership"), ("office"), ("facilities");

INSERT INTO
    role(title, salary, department_id)
VALUES ("manager", 200000.01, 1), ("admin", 175000.02, 1), ("team_manager", 150000.03, 1), ("team_lead", 115000.04, 2), ("team_member", 100000.05, 3), ("supervisor", 120000.07, 2), ("technician", 70000.08, 4), ("maintenance", 55000.09, 4), ("temp", 30000.10, 3);

INSERT INTO
    employee(
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ("Apple", "Cider", 1, NULL), ("Berry", "Splash", 2, 1), ("Jerry", "West", 2, 1), ("Glow", "Worm", 3, 1), ("Ginger", "Spice", 4, 1), ("Jake", "Farmland", 4, 1);