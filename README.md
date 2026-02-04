# Posts Management Application

Modern React application for managing posts with authentication, routing, and real-time filtering.

## 🎯 Overview

Educational project demonstrating modern React development practices including custom hooks, Context API, protected routes, and API integration. Features include user authentication, post management (create, view, delete), search & filtering, pagination, and responsive design.

## ✨ Features

- **Authentication System** - Login/logout with LocalStorage persistence
- **Post Management** - Create, view, and delete posts with smooth animations
- **Advanced Filtering** - Real-time search and sorting (by title/description)
- **Pagination** - Navigate through posts with dynamic page controls
- **Post Details** - View individual posts with comments
- **Responsive Design** - Fully adapted for mobile, tablet, and desktop
- **Protected Routes** - Public pages (login) and private pages (posts, about)

## 🛠️ Tech Stack

### Core
- **React 19.2.4** - UI library
- **React Router DOM 7.13.0** - Client-side routing
- **Axios 1.13.4** - HTTP client for API requests
- **CSS Modules** - Scoped component styling

### Custom Hooks
- `useFetching` - Async data fetching with loading/error states
- `usePosts` - Combined sorting and searching logic
- `usePagination` - Dynamic pagination array generation
- `useSortedPosts` - Memoized post sorting

### React Features Used
- `useState`, `useEffect`, `useMemo`, `useCallback`
- `useContext` (Authentication state)
- `useNavigate`, `useParams` (Routing)
- `React.memo` (Performance optimization)

## 📁 Project Structure

```
src/
├── API/              # Service layer for API calls
├── Pages/            # Page-level components
├── componets/        # Feature components
├── UI/               # Reusable UI components
├── hooks/            # Custom React hooks
├── styles/           # Modular CSS files
├── router/           # Route configurations
└── context/          # Global state (AuthContext)
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Application will run at `http://localhost:3000`

## 🔌 Backend Integration

Currently using **JSONPlaceholder** as a mock API. To connect your own backend:

### 1. Update API Service

Edit `src/API/PostService.js`:

```javascript
import axios from "axios";

const API_URL = 'http://localhost:5000/api'; // Your backend URL

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get(`${API_URL}/posts`, {
            params: { _limit: limit, _page: page }
        });
        return response;
    }

    static async getById(id) {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        return response;
    }

    static async create(post) {
        const response = await axios.post(`${API_URL}/posts`, post);
        return response;
    }

    static async delete(id) {
        const response = await axios.delete(`${API_URL}/posts/${id}`);
        return response;
    }
}
```

### 2. Update Comments Service

Edit `src/API/CommentsService.js`:

```javascript
import axios from "axios";

const API_URL = 'http://localhost:5000/api';

export default class CommentsService {
    static async getAll(postId) {
        const response = await axios.get(`${API_URL}/comments`, {
            params: { postId: postId }
        });
        return response;
    }
}
```

### 3. Backend Requirements

Your backend should provide these endpoints:

```
GET    /api/posts              - Get all posts (with pagination)
GET    /api/posts/:id          - Get single post
POST   /api/posts              - Create new post
DELETE /api/posts/:id          - Delete post
GET    /api/comments?postId=1  - Get comments for post
```

**Response format for posts:**
```json
{
  "id": 1,
  "title": "Post title",
  "body": "Post content"
}
```

**Response headers for pagination:**
```
x-total-count: 100  // Total number of posts
```

### 4. Authentication (Optional)

To add real authentication, update `src/Pages/Login.jsx`:

```javascript
const loginHandler = async (event) => {
    event.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
            username: username,
            password: password
        });
        
        localStorage.setItem('auth', response.data.token);
        setIsAuth(true);
    } catch (error) {
        console.error('Login failed:', error);
    }
};
```

Add token to requests in `PostService.js`:

```javascript
const token = localStorage.getItem('auth');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
```

## 📝 Environment Variables

Create `.env` file in root:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Use in code:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com';
```

## 🎨 Customization

### Change Theme Colors

Edit `src/styles/variables.css`:

```css
:root {
    --accent: #3b82f6;        /* Primary color */
    --accent-hover: #2563eb;  /* Hover state */
    --bg-primary: #f8fafc;    /* Background */
    /* ...other variables */
}
```

### Add New Routes

1. Create page component in `src/Pages/`
2. Add route to `src/router/routsJS.js`:

```javascript
export const privatRoutes = [
    {path: '/my-page', component: <MyPage />},
    // ...existing routes
];
```

## 🧪 Testing

```bash
npm test
```

## 📦 Build

```bash
npm run build
```

Optimized production build will be in `build/` folder.

---

**Built with React** • Educational project demonstrating modern React patterns (youtu.be/GNrdg3PzpJQ?si=qLv1uZNqi0hz6Wji)
