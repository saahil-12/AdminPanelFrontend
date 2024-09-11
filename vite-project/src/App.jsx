import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import  Sidebar from './Sidebar';
import Home from './Home';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Tables from './Table';
import Layout from './Layout/Layout';

// import Layout from './components/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/about" element={<Tables />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </Layout>
        </Router>
    );
}; export default App;



// function App() {

//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const openSidebar =()=>{
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className='grid-container'>
//       <Header OpenSidebar={openSidebar} />
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={openSidebar}/>
//       <Home/>
//       <Tables/>
//     </div>
//   )
// }

// export default App
