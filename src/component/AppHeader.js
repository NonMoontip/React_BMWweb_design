import './AppHeader.css'
function AppHeader() {
    return (
        <header className="appheader">
                <div className="logo">
                    <img src='bmwlogo.png' />
                </div>
                <ul>
                    <li><a href='#home' className='active'>Home</a></li>
                    <li><a href='#store'>Store Car</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
        </header>
    );
}

export default AppHeader;