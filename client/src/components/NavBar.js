import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <div className="Nav-root">
          <h1 className="Nav-title">Vacations</h1>
          <div className="Nav-links">
              <Link to="/home" ><button>Show all Vacations</button> </Link>
              <Link to="/addvacation" ><button>Create a new vacation</button> </Link>

          </div>
      </div>
    );
  }
  
  export default Navbar;