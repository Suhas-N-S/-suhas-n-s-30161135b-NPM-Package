#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const line = chalk.gray("─".repeat(80));

const printSection = (title, content) => {
  console.log(chalk.green.bold(`\n${title}`));
  console.log(content);
};

console.log(
  boxen(
    chalk.bold("SUHAS N S") +
      "\n" +
      chalk.blue("Backend Developer") +
      "\n\n" +
      chalk.white("📍 Bengaluru, India") +
      "\n" +
      chalk.white("🔗 LinkedIn: ") +
      chalk.underline("https://www.linkedin.com/in/suhas-n-s-30161135b") +
      "\n" +
      chalk.white("📧 Email: ") +
      chalk.yellow("suhasns082000@gmail.com") +
      "\n" +
      chalk.white("📞 Phone: ") +
      chalk.yellow("+91 9108964940"),
    {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "green",
    }
  )
);

printSection("💻 Skills", `
• Programming Languages: Java and JavaScript
• Backend: Spring Boot, Spring MVC, Node, Express
• Databases: MongoDB, PostgreSQL
• Tools: Git, GitHub, JIRA, Docker, Maven
`);

printSection("🧑‍💼 Experience - Graduate Engineer @ Thales (Aug 2022 - Oct 2023)", `
📍 Capella
• Built Capella MBSE features using Arcadia & Spring Boot
• Reduced modeling time by 30% via Eclipse RCP plugin development
• Improved stability and bug resolution time

📍 ITAC
• Resolved 10+ issues improving reliability by 35%
• Developed REST APIs using Spring Boot & JPA
• Migrated modules to microservices, reducing build times
`);

printSection("🎓 Education", `
Bachelor of Engineering - Electronics & Communication
JNN College of Engineering, Shimoga (2018 - 2022) | CGPA: 8.25
`);

printSection("📦 Projects", `
🌐 3D Portfolio Website
• Three.js, React, Tailwind CSS
• Interactive 3D models, 95% mobile responsiveness
• EmailJS integration for form submissions

📱 iPhone 15 Pro Clone
• React + Tailwind CSS + Three.js
• 95% visual similarity, 25% faster load, 90% mobile responsiveness

🧾 Leave Management System
• Spring Boot + PostgreSQL, 10+ REST endpoints
• Followed SOLID principles, improved workflow efficiency by 60%
`);

printSection("🔗 Project Links", `
• Portfolio: https://3d-portfolio-ivory-iota.vercel.app/
• Portfolio Code: https://github.com/Suhas-N-S/3d_Portfolio
• iPhone Clone: https://apple-clone-kappa-two.vercel.app/
• Clone Code: https://github.com/Suhas-N-S/Apple-clone
• Leave Management Code: https://github.com/Suhas-N-S/Employee-Leave-Management-System.git
`);

console.log(`\n${line}`);
console.log(chalk.gray("Built by Suhas N S"));
console.log(`${line}\n`);
