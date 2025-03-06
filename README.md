![Screenshot 2025-03-06 171217](https://github.com/user-attachments/assets/14284443-5c5f-4e4e-a613-e05ecfe514cd)
![Screenshot 2025-03-06 171150](https://github.com/user-attachments/assets/12f5129d-b826-4ab2-b08d-4c69b486c3b3)
![Screenshot 2025-03-06 171115](https://github.com/user-attachments/assets/097939e7-18eb-4581-8cda-25918866ee1d)
![Screenshot 2025-03-06 171033](https://github.com/user-attachments/assets/a10968cc-3578-4dec-adb9-ba8401dc52fb)
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
Cloudinary is used for handling the upload of book cover images. Follow these steps to integrate Cloudinary into your project:

- **Sign Up for Cloudinary**: Create a free account at [Cloudinary](https://cloudinary.com/).
- **Install Cloudinary SDK**: Run `npm install cloudinary`.
- **Configure Cloudinary**: Add your credentials to `.env` like ***CLOUDINARY_CLOUD_NAME*** , ***CLOUDINARY_API_KEY*** ,                ***CLOUDINARY_API_SECRET***.
For more details, refer to the [Cloudinary Official Documentation](https://cloudinary.com/documentation).
