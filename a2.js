/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Nirajbhai Limbasiya Student ID: 146215231 Date: 24/05/2024
*
********************************************************************************/ 
// Import the collegeData module
const Data = require("./modules/collegeData");

// Invoke the initialize function from collegeData
Data.initialize()
    .then(dataCollection => {
        // Output success message
        console.log("Data initialization successful");

        // Test other functions
        testGetAllStudents(dataCollection);
        testGetCourses(dataCollection);
        testGetTAs(dataCollection);
    })
    .catch(error => {
        // Output error message
        console.error("Data initialization failed:", error);
    });

// Function to test getAllStudents
function testGetAllStudents(dataCollection) {
    dataCollection.getAllStudents()
        .then(students => {
            // Output number of students retrieved
            console.log(`Successfully retrieved ${students.length} students`);
        })
        .catch(error => {
            // Handle error if no students retrieved
            console.error("Error retrieving students:", error);
        });
}

// Function to test getCourses
function testGetCourses(dataCollection) {
    dataCollection.getCourses()
        .then(courses => {
            // Output number of courses retrieved
            console.log(`Successfully retrieved ${courses.length} courses`);
        })
        .catch(error => {
            // Handle error if no courses retrieved
            console.error("Error retrieving courses:", error);
        });
}

// Function to test getTAs
function testGetTAs(dataCollection) {
    dataCollection.getTAs()
        .then(TAs => {
            // Output number of TAs retrieved
            console.log(`Successfully retrieved ${TAs.length} TAs`);
        })
        .catch(error => {
            // Handle error if no TAs retrieved
            console.error("Error retrieving TAs:", error);
        });
}
