import { Outlet } from 'react-router-dom';
import './Layout.scss'
import Navbar from '../Navbar/Navbar';

const Layout = () => {
    return (
        <div className="App">
            <Navbar />
            <header>
                <span>&lt;html&gt;</span>
                <span>&lt;body&gt;</span>
             </header>
                <Outlet/>
            <footer>
                <span>&lt;/body&gt;</span>
                <span>&lt;/html&gt;</span>
            </footer>
        </div>
      
    )
}

export default Layout