# Installation
1. Clone the repository:

    git clone https://github.com/TamizhSen/coding-challenge.git

    cd coding-challenge

2. Install dependencies:

    npm install



# Running the Application
1. To start the development server: on http://localhost:3000 in development mode.

    npm start



# Running Tests
1. To run the unit tests: 

    npm test



# Folder Structure

├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── UserCard.tsx         # Displays individual user details
│   │   ├── UserList.tsx         # Main component rendering the list of users
│   │   └── UserModal.tsx        # Modal component for displaying detailed user info
│   ├── hooks/           # Custom React hooks
│   │   └── useFetchUsers.ts     # Hook for fetching user data
│   ├── styles/          # Stylesheets for components
│   │   ├── index.css            # Global styles
│   │   ├── UserCard.css         # Styles for UserCard component
│   │   ├── UserList.css         # Styles for UserList component
│   │   └── UserModal.css        # Styles for UserModal component
│   ├── tests/            # Test files
│   │   ├── UserCard.test.tsx    # Tests for UserCard component
│   │   ├── UserList.test.tsx    # Tests for UserList component
│   │   └── UserModal.test.tsx   # Tests for UserModal component
│   ├── types/            # Type definitions
│   │   └── types.ts            # User data type definitions
│   ├── utils/            # Utility files
│   │   └── api.ts              # Axios instance for API calls
│   ├── App.tsx            # Main app component
│   ├── index.tsx          # Entry point for the React app
├── .gitignore             # Git ignore file
├── package.json           # Node.js dependencies and scripts
├── postcss.config.js      # PostCSS configuration (for Tailwind CSS)
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation


