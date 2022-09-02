import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Pagination from '../Pagination';
import { useHistory, useLocation } from 'react-router-dom';
//history navigates to certain pages, while Location tells the current page

import ChipInput from 'material-ui-chip-input';
//words stays on the searchbar

import { getPosts, getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from './styles'


//what page are we current on
function useQuery() {
  return new URLSearchParams(useLocation().search)

}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get('page') || 1;
  //reads the url and see if we have a page in there or else goes to page 1
const searchQuery = query.get('searchQuery');
const classes = useStyles();
const [search, setSearch] = useState('');
const [tags, setTags] = useState([]);


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);


  //trim is to make sure there are empty space, then we dispatch to fetch the post.Use Redux
  const searchPost = () => {
    if(search.trim()|| tags){
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'not available, sorry'}&tags = ${tags.join(',')} `)
    } else {
      history.push('/')
    }
  }


  //accepts the key press event
  const handleKeyPress = (e) => {
     if(e.keyCode === 13) {
      //keycode 13 is enter key
      searchPost();
     }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

  return (
    <Grow in>
      <Container maxWidth="xl" >
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer} >
          <Grid item xs={12} sm={6} md={9} >
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <AppBar className={classes.AppBarSearch} position="static" color="inherit" >
              <TextField name="search" 
              variant="outlined" 
              label="Search memories"
              onKeyPress={handleKeyPress}
              //the onKeyPress will search automatically
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
               />
               <ChipInput 
               style={{margin: '10px 0'}}
               value={tags}
               onAdd={handleAdd}
               onDelete={handleDelete}
               label="Search tags"
               variant="outlined"
               />
               <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary" >Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />

            {
              (!searchQuery && !tags.length) && (
                <Paper elevation={6} className={classes.pagination} >
                <Pagination page={page} />
             </Paper>
              )
            }
            
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;