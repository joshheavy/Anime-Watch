
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="w-screen">
      <NavBar />
      <div className="w-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
