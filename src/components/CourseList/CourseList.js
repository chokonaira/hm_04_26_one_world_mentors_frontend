import React, { useEffect } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import './CourseList.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/actions/fetchAllCourses";
import { enrollCourse } from "../../redux/actions/enrollCourse";

const CourseList = () => {

  const dispatch = useDispatch();
  const courses = useSelector(state => state.fetchCourses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="course-list-wrapper">
      <Accordion >
        {courses && courses.map(course => (

          <Card key={course.id}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={course.id}>
                {course.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={course.id}>
              <Card.Body>
                <div>
                  <p> {course.description}</p>
                  <a className="btn btn-success btn-lg float-right mb-2" href="#" role="button" onClick={() => dispatch(enrollCourse({ 'course_id': course.id }))}>Enroll Course</a>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>

  );

};

export default CourseList;