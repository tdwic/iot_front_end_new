
import { AppBar, Toolbar, Typography, Button, IconButton, Link } from '@mui/material';

// import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/material/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
//     link: {
//         color: 'white',
//         textDecoration: 'none',
//         margin: theme.spacing(1),
//     }
// }));

export default function Navbar() {
    // const classes = useStyles();

    return (
        <div >
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" >
                        My Apps
                    </Typography>
                    <Link to="/" >
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/about" >
                        <Button color="inherit">About</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}