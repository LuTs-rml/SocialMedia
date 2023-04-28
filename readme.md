# Social Media

This is the repository for the Social Media project, a personal and study project for a social media platform. The project consists of a frontend built using React, Material-UI, and contextAPI, and a backend built using Node.js, Express, and MongoDB.

The Social Media platform is a responsive web application that offers a user interface to interact with the backend APIs. The application provides a modern and intuitive interface for users to create and manage posts and manage their own profile.

## Features

The Social Media platform offers the following features:

### Authentication and Authorization

The platform supports user authentication and authorization using JSON Web Tokens (JWT). When a user logs in or registers, the backend creates a JWT token that is then used to authenticate the user for all subsequent requests. The frontend stores the token in the browser's local storage and sends it with each request to the backend.

### User Registration and Login

Users can register on the platform by providing their name, email, and a password. The frontend sends this information to the backend and creates a user account. Upon successful registration, the user is redirected to the login page.

Registered users can log in to the platform by providing their email and password. The frontend sends the credentials to the backend and receives a JWT token that is stored in the browser's local storage.

### Post Management

Registered users can create and manage their own posts. The frontend provides a user-friendly interface to create and edit posts.

### Following and Unfollowing Users (comming soon)

Users can follow and unfollow other users on the platform. The frontend provides a user interface to search for and follow other users. When a user follows another user, they can see the other user's posts in their feed.

### Profile Management

Users can view their own profile and edit their profile information. They can also view other users' profiles.

## Installation

To install the Social Media platform, follow the steps below:

1. Clone this repository: `git clone https://github.com/LuTsl/SocialMedia.git`

2. Enter the project folder: `cd SocialMedia`

3. Install the frontend dependencies: `cd frontend` and then `npm install`

4. Install the backend dependencies: `cd backend` and then `npm install`

5. The backend application will be available at `http://localhost:4000`.

## Usage

To use the Social Media platform, follow the steps below:

1. Start the backend server: `cd backend` and then `npm start`
2. Start the frontend application: `cd frontend` and then `npm start`
3. The frontend application will be available at `http://localhost:3000`.
