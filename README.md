# Software Engineering + AI Roadmap (2026)

My personal journey to becoming a Software Engineer with AI skills by following a 48-week roadmap.

---

## Goal

- Become an employable Software Engineer.
- Build real-world projects.
- Learn modern software engineering practices.
- Develop practical AI engineering skills.

---

## Capstone Project

### TaskForge AI

An AI-powered project and task management application that will evolve throughout this roadmap.

It will be built step by step as I learn:

- Frontend Engineering
- Backend Engineering
- Databases
- Authentication
- System Design
- Cloud & Deployment
- AI Integration
- Testing and Performance Optimization

> Status: Planning Stage

---

## Planned Tech Stack

### Frontend

- HTML
- CSS
- Tailwind CSS
- React
- Next.js
- TypeScript

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL
- Prisma
- MongoDB
- Redis

### DevOps & Tools

- Git
- GitHub
- Docker
- GitHub Actions

### AI

- LLM APIs
- RAG
- AI-assisted Software Development

---

## Weekly Progress
---
### Week 2
- Learn JS arrays and explore with example: every, filter, find, forEach, map, reduce,some, sort
  - And finally make a proejct using js arrays: Student Grade Analyzer
- Explore what is higher order function in js.
  - And build form scratch:
    - myFilter.js
    - myforEach.js
    - myMap.js 
- Learn node js basic fs, readFileSync, writeFileSync, parse, stringify and make a cli based note apps mini project
- Clear objects concept in js
  - destructuring
  - objects methods: Objects.keys(), Object.values(),Objects.entries()
- And build two mini proojects:
   - Library management
   - Product Inventory
- Finally one main project: CLI based Contact Book
   - Features:
    - Add new contacts with name, email, phone
    - list all saved contact
    - Search contacts by name, phone or email
    - Delete contacts by id
    - Persistent storage using JSON file
    - Using node js basic  fs, readFileSync, writeFileSync, parse, stringify, process.argv[] in whole project
---
---

### Week 3
- Learn async and await in js
  - And code practice using promises
- Learn callbacks in js and why it's hard to debug
  -  Efficient way to write using then, cathc or async, await
- Learn Interesting topic Event loop in js. How macrotask and microtask play role and continue asynchronous behaviour in js
  -  Practice 4 interesting code predict exmaple 
- Fetch and error: learn how to fetch data uising api and handle different type of error
- Learn Promise utilities
  - When all operations need to succeed: Promise.all()
  - When every result matters, even if some fail: Promise.allsettled
  - When the first settled Promise matters: Promise.race()

- Concept clear which one is better sequential vs parallel and why parallel faster then sequential for that do mini project practice
- 3 Main Project for this section: based on  fetch and error handle concept
  - NASA_SPACE_EXPLORER
    - fetch nasa image, title , data and explanation using nasa api
    - Implement html css for better UI visualization
    - feature handle how previousbutton and nextbutton work 
    - spin loading 
    - Dom manipulatipn
  
  - Pokemon_CLI
    - cli based proejct where intorduce readline concept and how promise resolve take input from user
    - fetch data using pokemon api
    - show specific pokemon require data as well

  - Weather_APP
    - fetch data using weather api
    - cli based project
    - show data city name, temp, feels_like, humidity, description, wind
    - error handling with status code 
