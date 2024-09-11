// import React from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';


// const Layout = ({ children }) => {
//     return (
//         <div>
//             <div>
//                 <Header />
//                 <Sidebar />
//             </div>
//             <main style={{ marginLeft: '220px', padding: '10px' }}>{children}</main>
//         </div>

//     );
// }; export default Layout;


import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Check if the current path is the admin login page
  const isAdminLogin = location.pathname === '/adminLogin';

  // Toggle Sidebar for mobile view
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%' }}>
      {!isAdminLogin && (
        <>
          {/* Header with a hamburger icon for mobile */}
          <div style={{ 
            position: 'fixed', top: 0, left: 0, right: 0, height: '60px', backgroundColor: '#2D3748', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'
          }}>
            <Header />
            <button 
              onClick={toggleSidebar} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#fff', 
                fontSize: '24px', 
                cursor: 'pointer', 
                display: 'none' /* Initially hidden for larger screens */
              }} 
              className="hamburger-icon"
            >
              &#9776; {/* Hamburger menu icon */}
            </button>
          </div>

          {/* Sidebar and main content */}
          <div style={{ display: 'flex', marginTop: '60px', height: 'calc(100vh - 60px)', width: '100%' }}>
            <div 
              style={{ 
                flexBasis: '20%', 
                minWidth: '250px', 
                maxWidth: '30%', 
                backgroundColor: '#4A5568', 
                display: isSidebarOpen ? 'block' : 'none' /* Show on mobile when toggled */
              }} 
              className="sidebar"
            >
              <Sidebar />
            </div>
            
            <main 
              style={{ 
                flexGrow: 1, 
                padding: '20px', 
                backgroundColor: '#f9f9f9', 
                overflowY: 'auto', 
                maxWidth: '80%', 
              }}
            >
              {children}
            </main>
          </div>
        </>
      )}

      {isAdminLogin && (
        <main 
          style={{ 
            flexGrow: 1, 
            padding: 0, 
            minWidth: '100%', 
            maxWidth: '100%', 
            backgroundColor: '#f9f9f9', 
            overflowY: 'auto' 
          }}
        >
          {children}
        </main>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .sidebar {
            position: absolute;
            top: 60px;
            left: 0;
            width: 250px;
            height: calc(100vh - 60px);
            z-index: 999;
          }
          
          .hamburger-icon {
            display: block;
          }

          main {
            padding: 10px;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
