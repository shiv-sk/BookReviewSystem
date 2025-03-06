# BookReviewSystem
### About: 
The Book Review System is a web-based platform designed to help users discover, review, and share their thoughts on books. Users can search for books, filter results, create accounts, update profiles, and read or write reviews to make informed decisions when purchasing new books. This system is ideal for book enthusiasts who want to explore new reads and share their opinions with others.

### Features:
- User Authentication:
    - Create an account and log in securely.
    - Update profile information (e.g., username, email).
- Book Search:
    - Search for books by title, author,
    - Filter results by genre
- Book Reviews:
    - Write and submit reviews for books.
    - Rate books on a scale (e.g., 1 to 5).
    - View reviews from other users.
- Admin Panel
    - Manage books

### Technologies Used:
- Frontend: HTML, CSS, JavaScript, React.js
- Backend: Node.js, Express.js.
- Database: MongoDB.
- Authentication: JWT (JSON Web Tokens).
- ApiIntegration: Axios.

### Installation
1. Clone the repository ***git clone repoLink***.
2. Install dependencies for both frontend and backend.

### Commands:
```
cd server
npm install
cd ../client
npm install
```

### To start development servers:
- Backend:

```
cd server
node index.js (port-4000)
```
- Frontend:

```
cd ../client
npm run dev   (port-5173)
```


# File structure
```
BookReviewSystem/
│
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── app.js
│ ├── index.js
│ └── env.example
│
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── utils/
│ │ ├── Context/
│ │ └── App.js
│ └── public/
│
└── README.md

```
### env-setup: 
- Navigate to the ```server``` folder.
- Rename the ```env.example``` file to .env
- Update the .env file with your environment variables.

### Media Upload(Book's Image)
cloudinary is used for handling upload of book's cover image follow the cloudinary [- link] official documentation to know more about cloudinary(easy to use). 

- **Sign Up for Cloudinary**: Create a free account at [Cloudinary](https://cloudinary.com/).
- **Install Cloudinary SDK**: Run `npm install cloudinary`.
- **Configure Cloudinary**: Add your credentials to `.env` like ***CLOUDINARY_CLOUD_NAME*** , ***CLOUDINARY_API_KEY*** ,                ***CLOUDINARY_API_SECRET***.
For more details, refer to the [Cloudinary Official Documentation](https://cloudinary.com/documentation).
