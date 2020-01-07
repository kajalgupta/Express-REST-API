const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

  const courses = [
   { id: 1, name: 'course1'},
     
   { id: 2, name: 'course2'},
     

   { id: 3, name: 'course3'},
     
  ];
app.get('/',(req,res) => {
  
     res.send('HELLO kajal , WELCOME TO EXPRESS');

});

app.get('/api/courses',(req, res) => {

     res.send(courses);
});

app.post('/api/courses', (req, res) => {
    // Validate 
    const { error } = validateCourse(req.body); //result.error
    //object destrutor
    // If invalid, 404
    if(error){
       //400 bad request
          res.status(400).send(error.details[0].message);
          return; 
       } 


const course = {
     id: courses.length + 1,
     name: req.body.name
};
 courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req,res) => {

 // Look up the course
  // If not exists, return 404
  const course = courses.find(c => c.id == parseInt(req.params.id));
  if (!course)  return res.status(404).send('The course with the given id is absent');
   
  // Validate 
   const { error } = validateCourse(req.body); //result.error
  // If invalid, 404
  if(error){
     //400 bad request
        res.status(400).send(error.details[0].message);
        return; 
     }

  //update course
  course.name = req.body.name;
  //return updated course
    res.send(course);

});


app.delete('/api/courses/:id', (req, res) => {

    // Look up the course
  // If not exists, return 404
  const course = courses.find(c => c.id == parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given id is absent');
   
     // delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

     // return the same course
    res.send(course);
    }); 




function validateCourse(course){
     const schema = {
          name: Joi.string().min(3).required()
     };
     
     return Joi.validate(course, schema);
     

}

app.get('/api/courses/:id', (req, res) => {

  const course = courses.find(c => c.id == parseInt(req.params.id));
  if (!course)  return res.status(404).send('The course with the given id is absent');
  res.send(course); 

});



// port 

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`LISTENING ON PORT ${port}...`));