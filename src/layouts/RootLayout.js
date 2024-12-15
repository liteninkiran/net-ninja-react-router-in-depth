import { Outlet, NavLink } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>React Router</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
