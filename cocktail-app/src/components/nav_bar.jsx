import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from "./home/home_full";
import Matching_recipes from "./matching_recipes/matching_recipes_full";
import Recipe from "./recipe/recipe_full";
import { AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';


const [anchorEl, setAnchorEl] = React.useState(null);
const handleClick = event => {
    setAnchorEl(event.currentTarget);
};

const handleClose = () => {
    setAnchorEl(null);
};

const nav_bar = (props) => {
    return(
        <header>
            <div>
            <BrowserRouter>
            <AppBar position="static">
            <Toolbar>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
                <MenuIcon />
                </IconButton>
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <Link to="/home/home">Home</Link>
                <Link to="/matching_recipes/matching_recipes_full">Matching_recipes</Link>
                <Link to="/recipe/recipe_full">Recipe</Link>
                </Menu>

                <Typography variant="h6" className={'title'}>
                News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
                    <Switch>
                        <Route exact path="/home/home" component={Home} />
                        <Route exact path="/matching_recipes/matching_recipes_full" component={Matching_recipes} />
                        <Route exact path="/recipe/recipe_full" component={Recipe} />
                    </Switch>
                </BrowserRouter>
            </div>
        </header>   
    
    );
};
export default nav_bar;

/*
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

  <br />
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
</>



                    <Link to="/home/home">Home</Link>
                    <Link to="/matching_recipes/matching_recipes_full">Matching_recipes</Link>
                    <Link to="/recipe/recipe_full">Recipe</Link>
*/