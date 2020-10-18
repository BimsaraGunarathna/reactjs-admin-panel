import React, { Component } from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//
import { mainListItems, secondaryListItems } from '../../components/ListItems';
import Chart from '../../components/Chart';
import Deposits from '../../components/Deposits';
import Orders from '../../components/Orders';

//
//redux
import { connect } from 'react-redux';

//react-router-dom
import { withRouter, Redirect } from "react-router-dom";
import { SIGN_UP_PAGE } from "../../routes/RouteConstants";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
});

/*
const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
*/

class MainDashboardPage extends Component{
  //const classes = useStyles();
  
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }  
  /*
  hideAppbar() {
    this.setState({
      isDrawerOpen: false
    });
    console.log('hideAppBar is called : ' + this.state.isDrawerOpen)
  }

  showAppbar() {
    this.setState({
      isDrawerOpen: true
    });
    console.log('showAppBar is called : ' + this.state.isDrawerOpen)
  }
  */
  handleDrawerOpen = () => {
    this.setState({
      isDrawerOpen: true
    });
    console.log('showAppBar is called : ' + this.state.isDrawerOpen)
  };

  handleDrawerClose = () => {
    this.setState({
      isDrawerOpen: false
    });
    console.log('hideAppBar is called : ' + this.state.isDrawerOpen)
  };

  renderAppBarIcon(className) {
    
    if (this.state.isDrawerOpen) {
      return(
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerClose}
            className={className}
            
            //className={this.state.isDrawerOpen ? classes.menuButton : classes.menuButtonHidden }
            //className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <ArrowBackIcon />
        </IconButton>
      );
      //return <ArrowBackIcon />
    } else{
      return(
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={className}
          >
            <MenuIcon />
        </IconButton>
      );
      //return <MenuIcon /> 
    }
    
  }

  render() {
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        //position="absolute" className={this.state.isDrawerOpen ? classes.appBar : classes.appBarShift}
        position="absolute" 
        className={classes.appBar}
        //className={clsx(classes.appBar, this.state.isDrawerOpen && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          {
              this.renderAppBarIcon(classes.menuButton)
          }
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            #Dashboard#
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        
        classes={{
          paper: clsx(classes.drawerPaper, !this.state.isDrawerOpen && classes.drawerPaperClose),
        }}
        /*
        classes={
          this.state.isDrawerOpen ? classes.drawerPaper : classes.drawerPaperClose
        }
        */
        open={this.state.isDrawerOpen}
        //open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton 
          onClick={this.handleDrawerClose}
          /*
            onClick={
              () => {
                  this.hideAppbar()
              }
            //handleDrawerClose
            }
            */
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
  }  
};

MainDashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(useStyles)(MainDashboardPage)))