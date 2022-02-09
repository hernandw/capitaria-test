DROP TABLE IF EXISTS "public"."course_tests";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS course_tests_id_seq

-- Table Definition
CREATE TABLE "public"."course_tests" (
    "id" int4 NOT NULL DEFAULT nextval('course_tests_id_seq'::regclass),
    "note" int4,
    "studentid" int4,
    "testid" int4,
    CONSTRAINT "course_tests_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "public"."students"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "course_tests_testid_fkey" FOREIGN KEY ("testid") REFERENCES "public"."tests"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."courses";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS courses_id_seq

-- Table Definition
CREATE TABLE "public"."courses" (
    "id" int4 NOT NULL DEFAULT nextval('courses_id_seq'::regclass),
    "name" varchar NOT NULL,
    "teacherid" int4,
    CONSTRAINT "courses_teacherid_fkey" FOREIGN KEY ("teacherid") REFERENCES "public"."teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."student_courses";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS student_courses_id_seq

-- Table Definition
CREATE TABLE "public"."student_courses" (
    "id" int4 NOT NULL DEFAULT nextval('student_courses_id_seq'::regclass),
    "studentid" int4,
    "courseid" int4,
    CONSTRAINT "student_courses_studentId_fkey" FOREIGN KEY ("studentid") REFERENCES "public"."students"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "student_courses_courseId_fkey" FOREIGN KEY ("courseid") REFERENCES "public"."courses"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."students";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS students_id_seq

-- Table Definition
CREATE TABLE "public"."students" (
    "id" int4 NOT NULL DEFAULT nextval('students_id_seq'::regclass),
    "name" varchar NOT NULL,
    "lastname" varchar NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."teachers";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS teachers_id_seq

-- Table Definition
CREATE TABLE "public"."teachers" (
    "id" int4 NOT NULL DEFAULT nextval('teachers_id_seq'::regclass),
    "name" varchar NOT NULL,
    "lastname" varchar NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."tests";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS tests_id_seq

-- Table Definition
CREATE TABLE "public"."tests" (
    "id" int4 NOT NULL DEFAULT nextval('tests_id_seq'::regclass),
    "name" varchar NOT NULL,
    "courseid" int4,
    CONSTRAINT "tests_courseid_fkey" FOREIGN KEY ("courseid") REFERENCES "public"."courses"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."course_tests" ("id", "note", "studentid", "testid") VALUES
(1, 6, 1, 1);
INSERT INTO "public"."course_tests" ("id", "note", "studentid", "testid") VALUES
(2, 4, 1, 2);
INSERT INTO "public"."course_tests" ("id", "note", "studentid", "testid") VALUES
(3, 4, 1, 3);
INSERT INTO "public"."course_tests" ("id", "note", "studentid", "testid") VALUES
(4, 5, 2, 1),
(5, 7, 2, 2),
(7, 3, 3, 1),
(8, 3, 3, 2),
(9, 2, 3, 3),
(6, 4, 2, 3);

INSERT INTO "public"."courses" ("id", "name", "teacherid") VALUES
(1, 'programacion', 1);
INSERT INTO "public"."courses" ("id", "name", "teacherid") VALUES
(2, 'sistema', 2);
INSERT INTO "public"."courses" ("id", "name", "teacherid") VALUES
(3, 'estadistica', 3);

INSERT INTO "public"."student_courses" ("id", "studentid", "courseid") VALUES
(1, 1, 1);
INSERT INTO "public"."student_courses" ("id", "studentid", "courseid") VALUES
(2, 1, 2);
INSERT INTO "public"."student_courses" ("id", "studentid", "courseid") VALUES
(3, 1, 3);
INSERT INTO "public"."student_courses" ("id", "studentid", "courseid") VALUES
(4, 2, 1),
(5, 2, 2),
(6, 2, 3),
(7, 3, 1),
(8, 3, 2),
(9, 3, 3);

INSERT INTO "public"."students" ("id", "name", "lastname") VALUES
(1, 'Fabiana', 'Hernandez');
INSERT INTO "public"."students" ("id", "name", "lastname") VALUES
(2, 'Ruben', 'Ruiz');
INSERT INTO "public"."students" ("id", "name", "lastname") VALUES
(3, 'Sara', 'Oberto');

INSERT INTO "public"."teachers" ("id", "name", "lastname") VALUES
(1, 'Williams', 'Hernandez');
INSERT INTO "public"."teachers" ("id", "name", "lastname") VALUES
(2, 'Yessenia', 'Ortunio');
INSERT INTO "public"."teachers" ("id", "name", "lastname") VALUES
(3, 'Florelba', 'Martinez');

INSERT INTO "public"."tests" ("id", "name", "courseid") VALUES
(1, 'matematica_1', 1);
INSERT INTO "public"."tests" ("id", "name", "courseid") VALUES
(2, 'matematica_2', 1);
INSERT INTO "public"."tests" ("id", "name", "courseid") VALUES
(3, 'matematica_3', 1);
INSERT INTO "public"."tests" ("id", "name", "courseid") VALUES
(4, 'lenguaje_1', 2),
(5, 'lenguaje_2', 2),
(6, 'lenguaje_3', 2);
