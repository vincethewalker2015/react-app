import { BrowserRouter as Router } from "react-router-dom"
// "react-router-dom" is an npm package that enables you to implement dynamic routing in a web app (need to run npm i react-router-dom after adding this above )
import './App.css'
// import PostsList from "./features/posts/PostsList"; - Removed as we use AppRoutes
import NavBar from "./componants/NavBar";
import AppRoutes from "./componants/AppRoutes";
function App() {
  return (
    // Adding a Router comp to route to pages (as in rails)
    <Router>
      <div className='app'>
        <h1>React on Rails Blog</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <NavBar></NavBar>
         {/* <PostsList /> This now gets replaced by AppRoutes*/}
         <AppRoutes />
      </div>
    </Router>
  )
}

export default App
