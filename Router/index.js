const express = require("express");
const router= express.Router();
const st= require('../controller/student');
const cu= require('../controller/course');
const th= require('../controller/teacher');
const lgr= require('../controller/loginreccord');
const rct=require('../controller/reactapidata');


/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student API
 */

/**
 * @swagger
 * /getsdata:
 *   get:
 *     summary: Get all students data
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of students
 */
router.get('/getsdata', st.getstudentdata);

/**
 * @swagger
 * /postsdata:
 *   post:
 *     summary: Add a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       201:
 *         description: Student created successfully
 */
router.post('/postsdata', st.poststudentdata);

/**
 * @swagger
 * /putsdata/{name}:
 *   put:
 *     summary: Update student by name
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Student name
 *     responses:
 *       200:
 *         description: Student updated successfully
 */
router.put('/putsdata/:name', st.putstudentdata);

/**
 * @swagger
 * /deletesdata/{name}:
 *   delete:
 *     summary: Delete student by name
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Student name
 *     responses:
 *       200:
 *         description: Student deleted successfully
 */
router.delete('/deletesdata/:name', st.deletestudentdata);

/**
 * @swagger
 * tags:
 *   name: Teacher
 *   description: Teacher API
 */

/**
 * @swagger
 * /gettdata:
 *   get:
 *     summary: Get all teacher data
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: Successfully retrieved teacher data
 */
router.get('/gettdata', th.getteacherdata);

/**
 * @swagger
 * /posttdata:
 *   post:
 *     summary: Add new teacher data
 *     tags: [Teacher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               subject:
 *                 type: string
 *     responses:
 *       201:
 *         description: Teacher added successfully
 */
router.post('/posttdata', th.postteacherdata);

/**
 * @swagger
 * /puttdata/{name}:
 *   put:
 *     summary: Update teacher data by name
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the teacher
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: integer
 *               subject:
 *                 type: string
 *     responses:
 *       200:
 *         description: Teacher updated successfully
 */
router.put('/puttdata/:name', th.putteacherdata);

/**
 * @swagger
 * /deletetdata/{name}:
 *   delete:
 *     summary: Delete teacher data by name
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the teacher
 *     responses:
 *       200:
 *         description: Teacher deleted successfully
 */
router.delete('/deletetdata/:name', th.deleteteacherdata);

/**
 * @swagger
 * tags:
 *   name: Course
 *   description: Course API
 */

/**
 * @swagger
 * /getcdata:
 *   get:
 *     summary: Get all course data
 *     tags: [Course]
 *     responses:
 *       200:
 *         description: Successfully retrieved course data
 */
router.get('/getcdata', cu.getcoursedata);

/**
 * @swagger
 * /postcdata:
 *   post:
 *     summary: Add new course data
 *     tags: [Course]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               duration:
 *                 type: string
 *               fees:
 *                 type: number
 *     responses:
 *       201:
 *         description: Course added successfully
 */
router.post('/postcdata', cu.postcoursedata);

/**
 * @swagger
 * /putcdata/{name}:
 *   put:
 *     summary: Update course data by name
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               duration:
 *                 type: string
 *               fees:
 *                 type: number
 *     responses:
 *       200:
 *         description: Course updated successfully
 */
router.put('/putcdata/:name', cu.putcoursedata);

/**
 * @swagger
 * /deletecdata/{name}:
 *   delete:
 *     summary: Delete course data by name
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the course
 *     responses:
 *       200:
 *         description: Course deleted successfully
 */
router.delete('/deletecdata/:name', cu.deletecoursedata);

//userslogin record api
router.post('/searchlogindata', lgr.searchrecord);
router.get('/getUser', lgr.verifyToken, lgr.getuserdata);

//reactdataapi
router.get('/getreact',rct.getreactdata);
router.post('/postreact',rct.postreactdata);
router.put('/putreact/:username',rct.putreactdata);
router.delete('/deletereact/:username',rct.deletereactdata);

module.exports=router;