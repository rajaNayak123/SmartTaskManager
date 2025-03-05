const employees = [
  {
    id: 1,
    firstName: "Raj",
    email: "raj@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Fix Login Issue",
        description: "Resolve the bug causing login failures.",
        date: "2025-03-05",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update Dashboard UI",
        description: "Enhance the dashboard design for better UX.",
        date: "2025-03-06",
        category: "UI/UX",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Optimize Database Queries",
        description: "Improve database query performance.",
        date: "2025-03-07",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Write API Documentation",
        description: "Document all API endpoints in Swagger.",
        date: "2025-03-08",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Payment Gateway Issue",
        description: "Debug and resolve the Stripe payment failure.",
        date: "2025-03-09",
        category: "Bug Fix",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Develop Notification Service",
        description: "Create a microservice for sending notifications.",
        date: "2025-03-10",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Improve SEO Performance",
        description: "Optimize website for better search ranking.",
        date: "2025-03-11",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 3,
    firstName: "Kabir",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Landing Page",
        description: "Design and develop a responsive landing page.",
        date: "2025-03-12",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Automate Testing",
        description: "Implement automated testing for major features.",
        date: "2025-03-13",
        category: "QA",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Refactor User Auth Module",
        description: "Improve authentication security and performance.",
        date: "2025-03-14",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update Privacy Policy",
        description: "Revise privacy policy according to new regulations.",
        date: "2025-03-15",
        category: "Legal",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Set Up CI/CD Pipeline",
        description: "Automate deployment using GitHub Actions.",
        date: "2025-03-16",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 1, newTask: 2, completed: 1, failed: 1 },
  },
  {
    id: 4,
    firstName: "Ishaan",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Migrate Database to PostgreSQL",
        description: "Move from MongoDB to PostgreSQL for scalability.",
        date: "2025-03-17",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Mobile Responsiveness",
        description: "Ensure proper rendering on all devices.",
        date: "2025-03-18",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Implement Dark Mode",
        description: "Add dark mode toggle feature.",
        date: "2025-03-19",
        category: "Frontend",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 5,
    firstName: "Reyansh",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy App to AWS",
        description: "Set up EC2, S3, and RDS for deployment.",
        date: "2025-03-20",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Enhance Security Measures",
        description: "Implement JWT and OAuth authentication.",
        date: "2025-03-21",
        category: "Security",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Reduce Page Load Time",
        description: "Optimize images and minimize JS bundles.",
        date: "2025-03-22",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Broken Links",
        description: "Identify and repair all 404 errors.",
        date: "2025-03-23",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];

  console.log("Fetched Employees:", employees);
  console.log("Fetched Admin:", admin);

  return { employees, admin };
};