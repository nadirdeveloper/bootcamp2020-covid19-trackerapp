import React , {Fragment} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../../App.css'
import logo from '../../logo.png'
export default function NavBar() {
    return (
        <div>
             <AppBar>
             
        <Toolbar className="nav-container">
        <div className="img-cont">
                <img src={logo} alt=""/>
                </div>
            <Fragment>
               
            <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/stats">
                STATS
              </Button>
              
              <Button color="inherit" component={Link} to="/search">
                SEARCH
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                CONTACT
              </Button>
            </Fragment>
        </Toolbar>
      </AppBar>
        </div>
    )
}
