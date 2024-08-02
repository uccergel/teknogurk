import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'
import BookmarksPage from './pages/BookmarksPage'
import HeaderAlternative from './components/HeaderAlternative'
import BlogPost from './components/BlogPost'

function App() {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-3xl h-[1024px] mx-auto flex flex-col">
        <div>
          {/* <Header /> */}
          <HeaderAlternative />
        </div>
        <div className="min-h-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/post/:slug" element={<BlogPost />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
