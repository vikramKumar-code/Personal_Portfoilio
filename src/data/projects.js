const projects = [
  {
    id: 1,
    title: "Shopster — Full-Stack E-Commerce Platform",
    category: "Full-Stack",
    year: null,
    description:
      "Collaborated as a contributor on a full-stack e-commerce platform, owning the payment, cart, product, and order management modules end-to-end.",
    highlights: [
      "Integrated Stripe payment gateway with webhook-based order confirmation, enabling secure checkout for real transactions.",
      "Built a real-time shopping cart with add/update/remove operations synced to MongoDB, supporting persistent sessions across page reloads.",
      "Designed product listing and order management APIs handling filtering, pagination, and status tracking across the purchase workflow.",
      "Developed an admin panel for product, order, and platform management, used to control inventory and monitor sales activity.",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Webhooks",
      "RBAC",
    ],
    demo: "https://shopster-e-commerce-indol.vercel.app",
    code: "https://github.com/rohnshrma/backend-shopster/tree/vikram",
  },
  {
    id: 2,
    title: "Student Task Management System",
    category: "Full-Stack",
    year: "2025",
    description:
      "A full-stack task management platform enabling students to create, organize, and track assignments across separate Admin, Teacher, and Student dashboards.",
    highlights: [
      "Implemented JWT-based, role-based authentication with protected routes controlling access to 3 distinct user roles.",
      "Designed RESTful APIs for tasks, deadlines, and progress tracking, backed by a normalized MongoDB schema linking users, tasks, and submissions.",
      "Added due-date reminders and status labels (Pending, In Progress, Completed) to improve task visibility and reduce missed deadlines.",
      "Deployed frontend on Vercel and backend API on Render as a fully hosted production environment.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
    demo: "https://student-task-management-umber.vercel.app/login",
    code: "https://github.com/vikramKumar-code/Student_Task_Management",
  },
  {
    id: 3,
    title: "Lead Desk Mini — CRM-Style Lead Management App",
    category: "Full-Stack",
    year: "2025",
    description:
      "A mini CRM application to capture, organize, and track sales leads through a multi-stage pipeline (New, Contacted, Qualified, Closed).",
    highlights: [
      "Implemented JWT-based authentication to secure access to lead records and dashboard routes.",
      "Developed RESTful APIs for creating, updating, and querying lead records, with server-side filtering by pipeline stage.",
      "Designed an intuitive dashboard UI for visualizing leads across pipeline stages, improving lead tracking clarity.",
      "Deployed frontend on Vercel and backend API on Render.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
    demo: "https://lead-desk-mini-frontend.vercel.app/",
    frontendCode: "https://github.com/vikramKumar-code/leadDesk_mini_Frontend",
    backendCode: "https://github.com/vikramKumar-code/leadDesk_mini_API",
  },
  {
    id: 4,
    title: "AI ChatBot — Gemini-Powered Chat Application",
    category: "Full-Stack",
    year: null,
    description:
      "Built an AI-powered chatbot application integrating Google's Gemini API to generate real-time, context-aware conversational responses.",
    highlights: [
      "Implemented JWT-based authentication to secure user sessions and protect chat history.",
      "Used Redis to implement rate limiting, preventing API abuse and ensuring fair usage across users.",
      "Containerized the application with Docker for consistent, reproducible deployment across environments.",
      "Designed MongoDB schemas to persist user conversations and chat history.",
      "Built a responsive chat interface using React.js, TypeScript, and Bootstrap for a smooth user experience.",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Docker",
      "JWT",
      "Gemini API",
    ],
    demo: "https://chat-bot-frontend-one-beta.vercel.app/",
    frontendCode: "https://github.com/vikramKumar-code/ai-ChatBot-frontend",
    backendCode: "https://github.com/vikramKumar-code/ChatBot-backend",
  },
];

export const categories = ["All", "Full-Stack", "Frontend", "Backend"];

export default projects;
