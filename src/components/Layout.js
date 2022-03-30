import '../css/layout.css'

const Layout = ({children}) =>{
    return(
        <div className='layout__div'>
            {children}
        </div>
    )
}

export default Layout;