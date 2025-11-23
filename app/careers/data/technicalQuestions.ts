export const technicalQuestions: { [key: string]: unknown[] } = {
  "Software Engineer": [
    {
      id: 1,
      type: "mcq",
      question: "Which of the following is NOT a characteristic of RESTful APIs?",
      options: ["Stateless", "Cacheable", "Client-Server", "Synchronous"],
      correct: 3
    },
    {
      id: 2,
      type: "fill",
      question: "What does SOLID principles stand for in object-oriented programming? (Write the first letter of each principle)",
      correct: "SRPOCP"
    },
    {
      id: 3,
      type: "mcq",
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1
    },
    {
      id: 4,
      type: "fill",
      question: "What design pattern ensures only one instance of a class exists?",
      correct: "Singleton"
    },
    {
      id: 5,
      type: "mcq",
      question: "Which HTTP method is used for updating resources in REST?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correct: 2
    },
    {
      id: 6,
      type: "mcq",
      question: "What is the purpose of a database index?",
      options: ["Store data", "Improve query performance", "Enforce constraints", "Backup data"],
      correct: 1
    },
    {
      id: 7,
      type: "fill",
      question: "What does ACID stand for in database transactions?",
      correct: "Atomicity Consistency Isolation Durability"
    },
    {
      id: 8,
      type: "mcq",
      question: "Which of the following is a NoSQL database?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      correct: 2
    },
    {
      id: 9,
      type: "fill",
      question: "What does MVC stand for in software architecture?",
      correct: "Model View Controller"
    },
    {
      id: 10,
      type: "mcq",
      question: "What is the main advantage of microservices architecture?",
      options: ["Simpler deployment", "Better scalability", "Lower cost", "Easier testing"],
      correct: 1
    },
    {
      id: 11,
      type: "mcq",
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
      correct: 1
    },
    {
      id: 12,
      type: "fill",
      question: "What does OOP stand for?",
      correct: "Object Oriented Programming"
    },
    {
      id: 13,
      type: "mcq",
      question: "What is the purpose of version control systems like Git?",
      options: ["Code compilation", "Track changes in code", "Database management", "Server deployment"],
      correct: 1
    },
    {
      id: 14,
      type: "fill",
      question: "What does API stand for?",
      correct: "Application Programming Interface"
    },
    {
      id: 15,
      type: "mcq",
      question: "Which of the following is NOT a software development methodology?",
      options: ["Agile", "Waterfall", "Scrum", "JavaScript"],
      correct: 3
    }
  ],
  "QA Engineer": [
    {
      id: 1,
      type: "mcq",
      question: "What is the primary goal of regression testing?",
      options: ["Find new bugs", "Ensure new changes don't break existing functionality", "Test performance", "Verify UI design"],
      correct: 1
    },
    {
      id: 2,
      type: "fill",
      question: "What does API stand for in API testing?",
      correct: "Application Programming Interface"
    },
    {
      id: 3,
      type: "mcq",
      question: "Which testing level focuses on individual components?",
      options: ["System Testing", "Integration Testing", "Unit Testing", "Acceptance Testing"],
      correct: 2
    },
    {
      id: 4,
      type: "fill",
      question: "What is the term for testing that verifies the system meets business requirements?",
      correct: "Acceptance Testing"
    },
    {
      id: 5,
      type: "mcq",
      question: "What does BDD stand for?",
      options: ["Behavior Driven Development", "Business Driven Design", "Bug Driven Development", "Build Driven Deployment"],
      correct: 0
    },
    {
      id: 6,
      type: "mcq",
      question: "Which testing technique involves testing with invalid inputs?",
      options: ["Positive testing", "Negative testing", "Boundary testing", "Equivalence testing"],
      correct: 1
    },
    {
      id: 7,
      type: "fill",
      question: "What does TDD stand for?",
      correct: "Test Driven Development"
    },
    {
      id: 8,
      type: "mcq",
      question: "What is the main purpose of smoke testing?",
      options: ["Find critical bugs", "Verify basic functionality", "Test performance", "Validate security"],
      correct: 1
    },
    {
      id: 9,
      type: "fill",
      question: "What does SQL stand for?",
      correct: "Structured Query Language"
    },
    {
      id: 10,
      type: "mcq",
      question: "Which testing tool is commonly used for API testing?",
      options: ["Selenium", "Postman", "JUnit", "Cucumber"],
      correct: 1
    },
    {
      id: 11,
      type: "mcq",
      question: "What is the difference between verification and validation?",
      options: ["No difference", "Verification checks if we built it right, validation checks if we built the right thing", "Validation is manual, verification is automated", "Verification is for code, validation is for requirements"],
      correct: 1
    },
    {
      id: 12,
      type: "fill",
      question: "What does CI/CD stand for?",
      correct: "Continuous Integration Continuous Deployment"
    },
    {
      id: 13,
      type: "mcq",
      question: "Which testing approach focuses on testing the system as a whole?",
      options: ["White box testing", "Black box testing", "Gray box testing", "Unit testing"],
      correct: 1
    },
    {
      id: 14,
      type: "fill",
      question: "What does SUT stand for in testing?",
      correct: "System Under Test"
    },
    {
      id: 15,
      type: "mcq",
      question: "What is the main advantage of automated testing?",
      options: ["Higher cost", "Faster execution", "Less accuracy", "Manual intervention required"],
      correct: 1
    }
  ],
  "Full Stack Developer": [
    {
      id: 1,
      type: "mcq",
      question: "Which of the following is NOT a frontend framework?",
      options: ["React", "Vue.js", "Express", "Angular"],
      correct: 2
    },
    {
      id: 2,
      type: "fill",
      question: "What does MVC stand for in web development?",
      correct: "Model View Controller"
    },
    {
      id: 3,
      type: "mcq",
      question: "What is the purpose of middleware in Express.js?",
      options: ["Database connection", "Request processing", "File serving", "Authentication"],
      correct: 1
    },
    {
      id: 4,
      type: "fill",
      question: "What CSS property is used to make elements flexible?",
      correct: "Flexbox"
    },
    {
      id: 5,
      type: "mcq",
      question: "Which database is document-based?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      correct: 2
    },
    {
      id: 6,
      type: "mcq",
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
      correct: 0
    },
    {
      id: 7,
      type: "fill",
      question: "What does CSS stand for?",
      correct: "Cascading Style Sheets"
    },
    {
      id: 8,
      type: "mcq",
      question: "Which JavaScript method is used to add elements to an array?",
      options: ["add()", "push()", "insert()", "append()"],
      correct: 1
    },
    {
      id: 9,
      type: "fill",
      question: "What does DOM stand for in web development?",
      correct: "Document Object Model"
    },
    {
      id: 10,
      type: "mcq",
      question: "Which HTTP status code indicates success?",
      options: ["200", "404", "500", "300"],
      correct: 0
    },
    {
      id: 11,
      type: "mcq",
      question: "What is the purpose of npm in Node.js development?",
      options: ["Node Package Manager", "New Project Manager", "Network Protocol Manager", "Node Process Manager"],
      correct: 0
    },
    {
      id: 12,
      type: "fill",
      question: "What does REST stand for?",
      correct: "Representational State Transfer"
    },
    {
      id: 13,
      type: "mcq",
      question: "Which of the following is a CSS preprocessor?",
      options: ["JavaScript", "SASS", "HTML", "JSON"],
      correct: 1
    },
    {
      id: 14,
      type: "fill",
      question: "What does JSON stand for?",
      correct: "JavaScript Object Notation"
    },
    {
      id: 15,
      type: "mcq",
      question: "What is the main advantage of using a frontend framework?",
      options: ["Faster loading", "Component reusability", "Smaller file size", "Better SEO"],
      correct: 1
    }
  ],
  "DevOps & Cloud Engineer": [
    {
      id: 1,
      type: "mcq",
      question: "What does CI/CD stand for?",
      options: ["Continuous Integration/Continuous Deployment", "Centralized Infrastructure/Cloud Development", "Container Integration/Container Deployment", "Code Integration/Code Deployment"],
      correct: 0
    },
    {
      id: 2,
      type: "fill",
      question: "What containerization technology was created by Docker?",
      correct: "Docker"
    },
    {
      id: 3,
      type: "mcq",
      question: "Which AWS service is used for serverless computing?",
      options: ["EC2", "Lambda", "S3", "RDS"],
      correct: 1
    },
    {
      id: 4,
      type: "fill",
      question: "What does IaC stand for in DevOps?",
      correct: "Infrastructure as Code"
    },
    {
      id: 5,
      type: "mcq",
      question: "Which tool is commonly used for container orchestration?",
      options: ["Docker Compose", "Kubernetes", "Jenkins", "Ansible"],
      correct: 1
    },
    {
      id: 6,
      type: "mcq",
      question: "What is the main purpose of a reverse proxy?",
      options: ["Cache content", "Load balance requests", "Encrypt data", "Monitor performance"],
      correct: 1
    },
    {
      id: 7,
      type: "fill",
      question: "What does DNS stand for?",
      correct: "Domain Name System"
    },
    {
      id: 8,
      type: "mcq",
      question: "Which cloud deployment model provides services over the internet?",
      options: ["Private cloud", "Public cloud", "Hybrid cloud", "Community cloud"],
      correct: 1
    },
    {
      id: 9,
      type: "fill",
      question: "What does SSL stand for?",
      correct: "Secure Sockets Layer"
    },
    {
      id: 10,
      type: "mcq",
      question: "What is the main advantage of microservices architecture?",
      options: ["Simpler deployment", "Better scalability", "Lower cost", "Easier testing"],
      correct: 1
    },
    {
      id: 11,
      type: "mcq",
      question: "Which tool is used for configuration management?",
      options: ["Docker", "Ansible", "Jenkins", "Kubernetes"],
      correct: 1
    },
    {
      id: 12,
      type: "fill",
      question: "What does API stand for?",
      correct: "Application Programming Interface"
    },
    {
      id: 13,
      type: "mcq",
      question: "What is the purpose of monitoring in DevOps?",
      options: ["Track performance", "Debug issues", "Ensure availability", "All of the above"],
      correct: 3
    },
    {
      id: 14,
      type: "fill",
      question: "What does CDN stand for?",
      correct: "Content Delivery Network"
    },
    {
      id: 15,
      type: "mcq",
      question: "Which of the following is NOT a cloud service model?",
      options: ["IaaS", "PaaS", "SaaS", "FaaS"],
      correct: 3
    }
  ],
  "Full Stack Web Development Intern": [
    {
      id: 1,
      type: "mcq",
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
      correct: 0
    },
    {
      id: 2,
      type: "fill",
      question: "What CSS property controls the space between elements?",
      correct: "Margin"
    },
    {
      id: 3,
      type: "mcq",
      question: "Which JavaScript method is used to add elements to an array?",
      options: ["add()", "push()", "insert()", "append()"],
      correct: 1
    },
    {
      id: 4,
      type: "fill",
      question: "What does DOM stand for in web development?",
      correct: "Document Object Model"
    },
    {
      id: 5,
      type: "mcq",
      question: "Which HTTP status code indicates success?",
      options: ["200", "404", "500", "300"],
      correct: 0
    },
    {
      id: 6,
      type: "mcq",
      question: "What is the purpose of CSS selectors?",
      options: ["Style HTML elements", "Add JavaScript functionality", "Create database queries", "Handle form submissions"],
      correct: 0
    },
    {
      id: 7,
      type: "fill",
      question: "What does URL stand for?",
      correct: "Uniform Resource Locator"
    },
    {
      id: 8,
      type: "mcq",
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1
    },
    {
      id: 9,
      type: "fill",
      question: "What does CSS stand for?",
      correct: "Cascading Style Sheets"
    },
    {
      id: 10,
      type: "mcq",
      question: "What is the purpose of JavaScript in web development?",
      options: ["Style web pages", "Add interactivity", "Create databases", "Handle server requests"],
      correct: 1
    },
    {
      id: 11,
      type: "mcq",
      question: "Which CSS property is used to change text color?",
      options: ["text-color", "font-color", "color", "text-style"],
      correct: 2
    },
    {
      id: 12,
      type: "fill",
      question: "What does HTTP stand for?",
      correct: "HyperText Transfer Protocol"
    },
    {
      id: 13,
      type: "mcq",
      question: "Which HTML tag is used to create a table?",
      options: ["<table>", "<tr>", "<td>", "<th>"],
      correct: 0
    },
    {
      id: 14,
      type: "fill",
      question: "What does IDE stand for?",
      correct: "Integrated Development Environment"
    },
    {
      id: 15,
      type: "mcq",
      question: "What is the purpose of version control?",
      options: ["Track changes in code", "Compile programs", "Run tests", "Deploy applications"],
      correct: 0
    }
  ],
  "Graphics Design Intern": [
    {
      id: 1,
      type: "mcq",
      question: "What does RGB stand for in color models?",
      options: ["Red Green Blue", "Realistic Graphics Base", "Resolution Graphics Bitmap", "Raster Graphics Buffer"],
      correct: 0
    },
    {
      id: 2,
      type: "fill",
      question: "What is the standard resolution for print design (DPI)?",
      correct: "300"
    },
    {
      id: 3,
      type: "mcq",
      question: "Which Adobe software is primarily used for vector graphics?",
      options: ["Photoshop", "Illustrator", "InDesign", "Premiere"],
      correct: 1
    },
    {
      id: 4,
      type: "fill",
      question: "What design principle creates visual hierarchy through size differences?",
      correct: "Scale"
    },
    {
      id: 5,
      type: "mcq",
      question: "What does UX stand for?",
      options: ["User Experience", "Ultimate Exchange", "Universal Extension", "User Extension"],
      correct: 0
    },
    {
      id: 6,
      type: "mcq",
      question: "Which color model is used for digital displays?",
      options: ["CMYK", "RGB", "Pantone", "Hex"],
      correct: 1
    },
    {
      id: 7,
      type: "fill",
      question: "What does UI stand for?",
      correct: "User Interface"
    },
    {
      id: 8,
      type: "mcq",
      question: "What is the purpose of a style guide in design?",
      options: ["Create animations", "Maintain consistency", "Edit photos", "Design logos"],
      correct: 1
    },
    {
      id: 9,
      type: "fill",
      question: "What does CMYK stand for?",
      correct: "Cyan Magenta Yellow Black"
    },
    {
      id: 10,
      type: "mcq",
      question: "Which design principle refers to the distribution of visual weight?",
      options: ["Balance", "Contrast", "Alignment", "Proximity"],
      correct: 0
    },
    {
      id: 11,
      type: "mcq",
      question: "What is the purpose of wireframing in design?",
      options: ["Add colors", "Plan layout", "Create animations", "Edit photos"],
      correct: 1
    },
    {
      id: 12,
      type: "fill",
      question: "What does DPI stand for?",
      correct: "Dots Per Inch"
    },
    {
      id: 13,
      type: "mcq",
      question: "Which file format is best for logos and illustrations?",
      options: ["JPEG", "PNG", "SVG", "GIF"],
      correct: 2
    },
    {
      id: 14,
      type: "fill",
      question: "What does PNG stand for?",
      correct: "Portable Network Graphics"
    },
    {
      id: 15,
      type: "mcq",
      question: "What is the main purpose of typography in design?",
      options: ["Add colors", "Communicate information", "Create animations", "Edit images"],
      correct: 1
    }
  ],
  "Motion Graphics Designer": [
    {
      id: 1,
      type: "mcq",
      question: "Which Adobe software is primarily used for motion graphics and animation?",
      options: ["Photoshop", "After Effects", "Illustrator", "Premiere Pro"],
      correct: 1
    },
    {
      id: 2,
      type: "fill",
      question: "What does FPS stand for in video and animation?",
      correct: "Frames Per Second"
    },
    {
      id: 3,
      type: "mcq",
      question: "What is the standard frame rate for web videos?",
      options: ["24 fps", "30 fps", "60 fps", "120 fps"],
      correct: 1
    },
    {
      id: 4,
      type: "fill",
      question: "What animation principle creates the illusion of weight and mass in motion?",
      correct: "Squash and Stretch"
    },
    {
      id: 5,
      type: "mcq",
      question: "Which of the following is a key principle of motion graphics timing?",
      options: ["Ease In/Ease Out", "Color Theory", "Typography", "Grid Systems"],
      correct: 0
    },
    {
      id: 6,
      type: "mcq",
      question: "What does keyframe mean in animation?",
      options: ["A locked frame", "A frame that defines a starting or ending point", "A frame rate", "A color value"],
      correct: 1
    },
    {
      id: 7,
      type: "fill",
      question: "What does MP4 stand for?",
      correct: "MPEG-4"
    },
    {
      id: 8,
      type: "mcq",
      question: "Which technique is used to create smooth transitions between keyframes?",
      options: ["Interpolation", "Rasterization", "Vectorization", "Pixelation"],
      correct: 0
    },
    {
      id: 9,
      type: "fill",
      question: "What is the standard resolution for HD video (width x height)?",
      correct: "1920x1080"
    },
    {
      id: 10,
      type: "mcq",
      question: "What does alpha channel control in video editing?",
      options: ["Audio levels", "Transparency", "Color saturation", "Frame rate"],
      correct: 1
    },
    {
      id: 11,
      type: "mcq",
      question: "Which principle of animation involves preparing the audience for an action?",
      options: ["Anticipation", "Staging", "Follow Through", "Arc"],
      correct: 0
    },
    {
      id: 12,
      type: "fill",
      question: "What does compositing mean in motion graphics?",
      correct: "Combining multiple visual elements"
    },
    {
      id: 13,
      type: "mcq",
      question: "What is the purpose of a motion graphics explainer video?",
      options: ["Entertainment only", "Explain complex concepts visually", "Record live events", "Edit photos"],
      correct: 1
    },
    {
      id: 14,
      type: "fill",
      question: "What does render mean in motion graphics?",
      correct: "Process and export final video"
    },
    {
      id: 15,
      type: "mcq",
      question: "Which file format is commonly used for exporting motion graphics videos?",
      options: ["PSD", "AI", "MP4", "PDF"],
      correct: 2
    }
  ]
};
