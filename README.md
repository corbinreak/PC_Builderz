# 💻 PC BUILDERZ #

PC BUILDERZ is a modern, high-performance web application designed to help enthusiasts build their dream computers. It features a smart compatibility engine that handles the technical complexity of PC hardware selection through a clean, "engineered" user interface.

## 🚀 Features ##

Smart Compatibility Engine: Automatically filters and validates parts based on socket types, dimensions, and power requirements.

Live Price & Wattage Tracking: Real-time calculation of total build cost and power draw (TDP) as the user selects components.

Featured Build Templates: Quick-start configurations based on user goals (Gaming, Workstation, Budget).

Responsive Dark Mode UI: A high-tech aesthetic built with precision for both mobile and desktop experiences.

## 🛠️ Tech Stack ##

Frontend:

React (Vite): Core framework for component-based architecture.

Tailwind CSS: For modern, utility-first styling and responsive design.

Framer Motion: (Optional) For smooth UI transitions and animations.



## Backend & Data: ##

Node.js / Express: Handling part data and API requests.

JSON/PostgreSQL: Managing a relational database of PC components and specifications.



## Typography: ##

Inter: Primary typeface for readability.

JetBrains Mono: Accent typeface for technical specifications and pricing data.

## 🏗️ Architecture & Engineering ##

This project was built with a focus on Clean Code and Maintainability:

Component-Driven Development: UI elements like PartCard and FeaturedBuild are modular and reusable.

State Management: Utilizes React hooks (useState, useEffect) to manage the global "Build State" across different application views.

Logical Filtering: Implements advanced JavaScript array methods (filter, reduce) to calculate totals and enforce hardware compatibility rules.

## 🚦 Getting Started ##
Follow these steps to run the project locally:

Clone the repository:

Bash

git clone https://github.com/your-username/pc-builderz.git
Navigate to the folder:

Bash

cd pc-builderz
Install dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev
👤 Author
[Corbin Reak]

GitHub: @corbin-reak

Portfolio: https://corbinreak.dev