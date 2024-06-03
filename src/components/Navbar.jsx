import Logo from "./Logo";
import SearchBar from "./SearchBar";
function Navbar() {
    
    return(
        <div className="md:flex w-full sm:block sm:text-center ">
        <Logo />
        <SearchBar />

        
        </div >

    )
    
}

export default Navbar;