import { AiOutlineShoppingCart} from "react-icons/ai";
const Header = () => {
    return (
      <div className="nav-bar">
        <div className="logo-border">
          <img
            className="logo"
            src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          />
          <h5>Apna Zomato</h5>
        </div>
        <div className="nav-items">
          <ul className="items">
            <li>Home</li>
            <li>About</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
          <AiOutlineShoppingCart className="cart" />
        </div>
      </div>
    );
  };

  export default Header;