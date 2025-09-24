*Expense Tracker*
Overview

The Expense Tracker is a full-stack web application that helps users manage their personal finances by tracking income, expenses, and budgets in real-time. It provides an intuitive interface to monitor financial activities and gain insights into spending habits.

Features

Add Income & Expenses: Easily record all financial transactions.

Categorization: Classify expenses and income by categories.

Dashboard Overview: View total income, expenses, and balance at a glance.

Transaction History: See a detailed list of all past transactions.

Responsive Design: Works seamlessly on desktop and mobile devices.

Technologies Used

Frontend: React.js, HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Version Control: Git & GitHub

Installation

Clone the repository

git clone https://github.com/<your-username>/Expense-Tracker.git
cd Expense-Tracker


Install dependencies

# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install


Create a .env file in backend

DATABASE=<your MongoDB connection string>
PORT=3000
JWT_SECRET=<your-secret-key>


Run the project

# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm start


Open http://localhost:3000 (backend) and http://localhost:5173 (frontend) in your browser.

Usage

Sign up or log in with existing credentials.

Add and categorize income and expenses.

Track your balance and analyze spending patterns.

Review past transactions and filter by category or date.

Contributing

Contributions are welcome!

Fork the repository

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add feature")

Push to the branch (git push origin feature-name)

Open a Pull Request
