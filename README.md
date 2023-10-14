# PromptForge App

PromptForge App allows users to create prompts with tags and share them for use with chatbots like GPT, Bard or other models. Users can create, view, edit, and delete prompts. The app uses Next.js, NextAuth.js for authentication with Google as the callback provider, and MongoDB Atlas as the database.

## Features

- **Create Prompts:** Users can create prompts with specific tags like #reactjs or #webdevelopment.

- **View Prompts:** The `Feed` page displays all prompts created by users, including their image, email, tag, and prompt content.

- **Copy Prompt:** Users can copy prompts to use them in chatbots by clicking the copy button.

- **User Profiles:** Clicking on a user's profile image allows viewing all prompts created by that user.

- **Edit and Delete:** Users have the option to edit and delete the prompts they created.

## Technologies Used

- **Next.js:** Frontend framework for building React applications.

- **NextAuth.js:** Authentication library for Next.js, used with Google as the callback provider.

- **MongoDB Atlas:** Cloud-based NoSQL database for storing user data and prompts.

## How to Run the App

1. **Clone the Repository:**
   `git clone <repository-url>`

2. **Install Dependencies:**
   `cd PromptForge`
   `npm install`

3. **Configure Environment Variables:**
   ```Create a `.env.local` file with the following variables:
   GOOGLE_ID = <your-google-id>
   GOOGLE_CLIENT_SECRET = <your-google-client-id>
   MONGODB_URI = <your-mongodb-uri>

NEXTAUTH_URL = http://localhost:3000
NEXTAUTH_URL_INTERNAL = http://localhost:3000
NEXTAUTH_SECRET = <your-secret-code>```

4. **Run the Development Server:**
   `npm run dev`

5. **Access the App:**
   Open your browser and go to `http://localhost:3000`.
