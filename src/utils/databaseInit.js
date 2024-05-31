// Function to initialize the database with some sample data
import User from "../models/userModel.js";
import Task from "../models/tasksModel.js";
import UserStory from "../models/userStoriesModel.js";
import Project from "../models/projectsModel.js";
import UserProject from "../models/usersProjectsModel.js";
import BacklogElement from "../models/backlogElementsModel.js";

async function seedDatabase() {
  // Crear usuarios
  const users = await User.bulkCreate([
    {
      username: "Pedro",
      email: "pedro@correo.com",
      password: "password",
      completedTasks: 2,
      points: 40,
    },
    {
      username: "Sebastian",
      email: "sebastian@correo.com",
      password: "password",
      completedTasks: 1,
      points: 25,
    },
    {
      username: "Wilmer",
      email: "wilmer@correo.com",
      password: "password",
      completedTasks: 0,
      points: 0,
    },
  ]);

  // Crear proyectos
  const projects = await Project.bulkCreate([
    { name: "Project 1", description: "Description for Project 1" },
  ]);

  // Crear elementos del backlog
  const backlogElements = await BacklogElement.bulkCreate([
    {
      // Create task 1
      projectId: projects[0].id,
      userId: users[0].id,
      elementType: "task",
      title: "Fix bug 1",
      description: "Description for bug 1",
      priority: "high",
      status: "open",
    },
    {
      // Create task 2
      projectId: projects[0].id,
      userId: users[1].id,
      elementType: "task",
      title: "Complete task 1",
      description: "Description for task 1",
      priority: "low",
      status: "completed",
    },
    {
      // Create user story 1
      projectId: projects[0].id,
      userId: users[2].id,
      elementType: "user story",
      title: "Add user story 1",
      description: "Description for user story 1",
      priority: "medium",
      status: "in progress",
    },
    {
      // Create task 3
      projectId: projects[0].id,
      userId: users[0].id,
      elementType: "task",
      title: "Fix bug 1",
      description: "Description for bug 1",
      priority: "high",
      status: "open",
    },
    {
      // Create user story 2
      projectId: projects[0].id,
      userId: users[2].id,
      elementType: "user story",
      title: "Add user story 2",
      description: "Description for user story 2",
      priority: "medium",
      status: "in progress",
    },
    {
      // Create task 4
      projectId: projects[0].id,
      userId: users[0].id,
      elementType: "task",
      title: "Fix bug 2",
      description: "Description for bug 2",
      priority: "high",
      status: "open",
    },
  ]);

  // Crear tareas con IDs de BacklogElement
  const tasks = await Task.bulkCreate([
    { id: backlogElements[0].id },
    { id: backlogElements[1].id },
    { id: backlogElements[2].id },
  ]);

  // Crear historias de usuario con IDs de BacklogElement
  const userStories = await UserStory.bulkCreate([
    {
      id: backlogElements[3].id,
      acceptanceCriteria: "Criteria 1",
      storyPoints: 3,
    },
    {
      id: backlogElements[4].id,
      acceptanceCriteria: "Criteria 2",
      storyPoints: 5,
    },
    {
      id: backlogElements[5].id,
      acceptanceCriteria: "Criteria 3",
      storyPoints: 8,
    },
  ]);

  console.log("Database has been seeded successfully.");
}

export default seedDatabase;
