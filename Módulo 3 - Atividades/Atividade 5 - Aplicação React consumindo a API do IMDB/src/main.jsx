import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import FetchGet from './utils/Axios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchGet />
    {/* <App /> */}
  </StrictMode>,
)
