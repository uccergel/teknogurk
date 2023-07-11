import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="bg-[#f2f2f2]">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
)
