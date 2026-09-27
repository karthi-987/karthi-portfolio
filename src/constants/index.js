import { Quantelle, Izeon_Innovative, Code_Bind } from "../assets/images";
import {
    contact,
    css,
    django,
    express,
    github,
    html,
    javascript,
    mongodb,
    mysql,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    java,
    python,
    powerbi,
    networking,
    transformers,
    threejs,
    linkedin,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Programming",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Programming",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend / 3D",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: transformers,
        name: "Transformers",
        type: "AI / Machine Learning",
    },
    {
        imageUrl: powerbi,
        name: "Power BI",
        type: "Data Analytics",
    },
    {
        imageUrl: networking,
        name: "Networking",
        type: "Networking & Security",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Quantum Computing Intern",
        company_name: "Quantelle Pvt. Ltd.",
        icon: Quantelle,
        iconBg: "#dbeafe",
        date: "2026",
        points: [
            "Worked on quantum computing concepts and practical software development.",
            "Contributed to backend development for quantum-computing-related applications.",
            "Explored the integration of quantum computing concepts with modern software systems.",
            "Worked on developing practical solutions for business-oriented quantum computing applications.",
        ],
    },
    {
        title: "Cyber Security Intern",
        company_name: "Izeon Innovative",
        icon: Izeon_Innovative,
        iconBg: "#fee2e2",
        date: "2025",
        points: [
            "Gained practical exposure to cybersecurity concepts and security practices.",
            "Worked with networking and cybersecurity fundamentals.",
            "Explored security-related tools and techniques through practical tasks.",
            "Developed an understanding of real-world cybersecurity workflows and threat analysis.",
        ],
    },
    {
        title: "Frontend Development Intern",
        company_name: "CodeBind Technologies",
        icon: Code_Bind,
        iconBg: "#dcfce7",
        date: "2024",
        points: [
            "Developed frontend interfaces using HTML, CSS, and JavaScript.",
            "Worked with XAMPP during application development and testing.",
            "Implemented responsive and user-friendly web interfaces.",
            "Gained practical experience in frontend development and web application workflows.",
        ],
    },
];

export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/karthi-987",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/karthi-raju-238570236",
    },
];

export const projects = [
    {
        iconUrl: github,
        theme: "btn-back-blue",
        name: "AEGIS Quantum AI",
        description:
            "A hybrid AI-powered network intrusion detection system combining Transformer-based deep learning with quantum machine learning for cyber threat detection and classification.",
        link: "https://github.com/karthi-987/cyber-quantum-forge",
        date: "Aug 2025 - Present",
    },
    {
        iconUrl: github,
        theme: "btn-back-red",
        name: "Road Sign Detection Using Mamba Transformer",
        description:
            "A computer vision project focused on road sign detection using Mamba Transformer architecture and deep learning techniques.",
        link: "https://github.com/karthi-987/Road_Sign_Detection_Using_Mamba_Transformer",
        date: "Jun 2025",
    },
    {
        iconUrl: github,
        theme: "btn-back-green",
        name: "Employee Attrition Analysis",
        description:
            "A data analytics project using Python to analyze employee attrition patterns and extract meaningful insights from organizational data.",
        link: "https://github.com/karthi-987/DAP_Final_Project",
        date: "Mar 2025",
    },
    {
        iconUrl: github,
        theme: "btn-back-yellow",
        name: "SB Foods - Food Ordering App",
        description:
            "A full-stack food ordering application developed using the MERN stack with features for browsing food items and managing orders.",
        link: "https://github.com/karthi-987/SB-Foods---Food-Ordering-App",
        date: "Nov 2024",
    },
    {
        iconUrl: github,
        theme: "btn-back-pink",
        name: "Music Web Application",
        description:
            "A music web application developed using Django as part of the Naan Mudhalvan project.",
        link: "https://github.com/karthi-987/Naan_Mudhalvan_karthiraju_4123_SREC",
        date: "Apr 2024",
    },
    {
        iconUrl: github,
        theme: "btn-back-black",
        name: "YouTube Clone",
        description:
            "A YouTube-inspired frontend website built using HTML and CSS as a practical web development project.",
        link: "https://github.com/karthi-987/YOUTUBE_CLONE",
        date: "Mar 2024",
    },
    {
        iconUrl: github,
        theme: "btn-back-blue",
        name: "Media Streaming with IBM Cloud",
        description:
            "A cloud-based media streaming project developed using IBM Cloud technologies for video streaming.",
        link: "https://github.com/karthi-987/IBM_project",
        date: "Sep 2023",
    },
];
