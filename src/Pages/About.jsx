import React from 'react';

const About = () => {
    return (
        <div className="App">
            <div className="about-page">
                <div className="about-header">
                    <h1>About Application</h1>
                    <p className="about-description">
                        Educational React application for managing posts with advanced features including authentication, routing, and API integration.
                    </p>
                    <p className="about-description secondary">
                        Demonstrates modern React development practices, custom hooks, state management, and responsive design.
                    </p>
                </div>

                <div className="tech-card">
                    <h3>🛠️ Core Technologies</h3>
                    <ul className="tech-list">
                        <li>⚛️ React 19.2.4</li>
                        <li>🛣️ React Router DOM 7.13.0</li>
                        <li>🌐 Axios 1.13.4</li>
                        <li>🎨 CSS Modules</li>
                        <li>📦 React Scripts 5.0.1</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>🪝 Custom Hooks</h3>
                    <ul className="tech-list">
                        <li>🔄 useFetching - async data fetching with loading states</li>
                        <li>🔍 usePosts - sorting and searching posts</li>
                        <li>📄 usePagination - dynamic pagination logic</li>
                        <li>🎯 useSortedPosts - memoized post sorting</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>🎯 React Features</h3>
                    <ul className="tech-list">
                        <li>⚡ React.memo - component optimization</li>
                        <li>🎣 useState - local state management</li>
                        <li>🔄 useEffect - side effects handling</li>
                        <li>💭 useMemo - expensive calculations caching</li>
                        <li>🔗 useCallback - function memoization</li>
                        <li>🌐 useContext - global state (AuthContext)</li>
                        <li>🧭 useNavigate - programmatic navigation</li>
                        <li>🔗 useParams - URL params extraction</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>🧩 UI Components</h3>
                    <ul className="tech-list">
                        <li>🔘 Button - reusable button component</li>
                        <li>📝 Input - controlled input with styles</li>
                        <li>📋 Select - custom dropdown selector</li>
                        <li>🪟 Modal - overlay modal window</li>
                        <li>⏳ Loader - loading spinner animation</li>
                        <li>📄 Pagination - page navigation controls</li>
                        <li>🧭 Header - navigation bar with auth</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>🏗️ Architecture Patterns</h3>
                    <ul className="tech-list">
                        <li>🎯 Component Composition</li>
                        <li>📦 Service Layer (API/PostService)</li>
                        <li>🔐 Context API for Authentication</li>
                        <li>🗂️ Feature-based File Structure</li>
                        <li>🎨 CSS Modules for Scoped Styles</li>
                        <li>🔄 Custom Hooks for Logic Reuse</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>✨ Key Features</h3>
                    <ul className="tech-list">
                        <li>🔐 Authentication System (Login/Logout)</li>
                        <li>🛣️ Protected Routes & Public Routes</li>
                        <li>📄 Dynamic Post Detail Pages</li>
                        <li>💬 Comments Loading (with postId)</li>
                        <li>🔍 Real-time Search & Filtering</li>
                        <li>🔀 Post Sorting (by title/body)</li>
                        <li>📄 Pagination with Page Navigation</li>
                        <li>➕ Create New Posts (Modal Form)</li>
                        <li>🗑️ Delete Posts with Animation</li>
                        <li>💾 LocalStorage for Auth Persistence</li>
                        <li>📱 Fully Responsive Design</li>
                        <li>🎭 Smooth Animations & Transitions</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>🎨 Styling Approach</h3>
                    <ul className="tech-list">
                        <li>🎨 CSS Variables for Theming</li>
                        <li>📦 Modular CSS Architecture</li>
                        <li>✨ Keyframe Animations</li>
                        <li>📱 Mobile-first Responsive Design</li>
                        <li>🎯 BEM-like Naming Convention</li>
                        <li>🌈 Gradient Backgrounds</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>🌐 API Integration</h3>
                    <ul className="tech-list">
                        <li>🔗 JSONPlaceholder API</li>
                        <li>📄 GET Posts with Pagination</li>
                        <li>🔍 GET Post by ID</li>
                        <li>💬 GET Comments by Post ID</li>
                        <li>⚡ Axios HTTP Client</li>
                        <li>🔄 Error Handling & Loading States</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>⚡ Performance Optimizations</h3>
                    <ul className="tech-list">
                        <li>🎯 React.memo for Component Re-renders</li>
                        <li>💭 useMemo for Expensive Calculations</li>
                        <li>🔗 useCallback for Function Stability</li>
                        <li>📦 Code Splitting Ready</li>
                        <li>🚀 Optimized Re-render Logic</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h3>📁 Project Structure</h3>
                    <ul className="tech-list">
                        <li>📂 /Pages - Page-level components</li>
                        <li>🧩 /componets - Feature components</li>
                        <li>🎨 /UI - Reusable UI elements</li>
                        <li>🪝 /hooks - Custom React hooks</li>
                        <li>🌐 /API - Service layer</li>
                        <li>🎨 /styles - Modular CSS files</li>
                        <li>🛣️ /router - Route configurations</li>
                        <li>🌍 /context - Global state contexts</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;