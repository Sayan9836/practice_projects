import mongoose from "mongoose";
import { Subscribe } from "../models/subscribe.js";
import { ApiResponse } from "../utils/Apiresponse.js";
import { Student } from "../models/Student.js";
import { Course } from "../models/Course.js";
import { BSON } from "mongodb";

const addStudent = async (req, res) => {
  const student = await Student.create(req.body);

  res
    .status(200)
    .send(new ApiResponse(200, student, "Student created successfully"));
};

const addCourse = async (req, res) => {
  const course = await Course.create(req.body);

  res
    .status(200)
    .send(new ApiResponse(200, course, "Course added successfully"));
};

const BuyCourses = async (req, res) => {
  const { studentId, courseId } = req.body;

  if (!studentId || !courseId) {
    console.log("studentId or couseId is missing");
  }

  const subscribe = await Subscribe.create({
    studentId: studentId,
    courseId: courseId,
  });

  res
    .status(200)
    .send(
      new ApiResponse(200, subscribe, "subscribed to this course successfully"),
    );
};

const getAllCourses = async (req, res) => {
  const { studentId } = req.body;

  let courses = await Subscribe.find({
    studentId: new BSON.ObjectId(studentId),
  }).populate("courseId");

  courses = courses?.map((course) => {
    const name = course.courseId?.name;
    const description = course.courseId?.description;
    return { name, description };
  });

  console.log(courses);

  res
    .status(200)
    .send(new ApiResponse(200, courses, "successfully fetched all courses"));
};

const getAllStudents = async (req, res) => {
  const { courseId } = req.body;

  let students = await Subscribe.find({
    courseId: new BSON.ObjectId(courseId),
  }).populate("studentId");

  students = students?.map((student) => {
    const { name, email, phoneNo } = student.studentId;
    return { name, email, phoneNo };
  });

  res
    .status(200)
    .send(new ApiResponse(200, students, "successfully fetched all students"));
};

export { addStudent, addCourse, BuyCourses, getAllCourses, getAllStudents };
