CREATE TABLE players (
    idplayers INT PRIMARY KEY,
    Nombre VARCHAR (50) NOT NULL,
    Pais VARCHAR (50) NOT NULL,
    Ranking INT(11) NOT NULL
);


/*
-- Query: SELECT * FROM players
LIMIT 0, 1000

-- Date: 2022-02-03 19:10
*/
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (1,'Williams','Venezuela',85);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (2,'Fabiana','Venezuela',60);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (3,'Yessenia','Venezuela',70);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (4,'Florelba','Chile',35);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (5,'Manuel','Ecuador',95);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (6,'Karina','Peru',90);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (7,'Raul','USA',28);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (8,'Angelica','Brasil',45);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (9,'John','Cuba',44);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (10,'Carla','Chile',93);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (11,'Maria','Colombia',72);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (12,'Martha','Argentina',91);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (13,'Jose','Paraguay',83);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (14,'Daniel','El Salvador',76);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (15,'Rene','Haiti',87);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (16,'Juan','Mexico',43);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (17,'Pedro','Panama',69);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (18,'Roxana','Nicaragua',78);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (19,'Lorena','Honduras',86);
INSERT INTO `` (`idplayers`,`Nombre`,`Pais`,`Ranking`) VALUES (20,'Teomar','Costa Rica',79);

SELECT c1.Nombre, c2.Nombre
FROM PLAYERS c1, PLAYERS c2
WHERE c1.Ranking > c2.Ranking


/* Respuesta   es la opción 190*/