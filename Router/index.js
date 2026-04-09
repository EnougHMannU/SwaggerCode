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

//teacher api
router.get('/gettdata',th.getteacherdata);
router.post('/posttdata',th.postteacherdata);
router.put('/puttdata/:name',th.putteacherdata);
router.delete('/deletetdata/:name',th.deleteteacherdata);

//course api
router.get('/getcdata',cu.getcoursedata);
router.post('/postcdata',cu.postcoursedata);
router.put('/putcdata/:name',cu.putcoursedata);
router.delete('/deletecdata/:name',cu.deletecoursedata);

//userslogin record api
router.post('/searchlogindata', lgr.searchrecord);
router.get('/getUser', lgr.verifyToken, lgr.getuserdata);

//reactdataapi
router.get('/getreact',rct.getreactdata);
router.post('/postreact',rct.postreactdata);
router.put('/putreact/:username',rct.putreactdata);
router.delete('/deletereact/:username',rct.deletereactdata);

module.exports=router;