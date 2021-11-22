import girlboss from './76216.svg';
import './App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const App = () => (
    <div className="App">
      <header>
        <script type='text/javascript' src='https://prod-useast-b.online.tableau.com/javascripts/api/viz_v1.js'>
        </script>
        {/* <link rel="stylesheet" href="https://use.typekit.net/msk1hyz.css"></link> */}
        
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>

      </header>

      <div className="boxcss alignC">
      <h1 className="title mrg0-TB">THE RISE OF THE GIRL BOSS</h1>

      <p className="textbox body-2 pd16-T pd48-B"> <strong>Feminism </strong>, a belief in the political, economic and cultural equality of women, 
      has roots in the earliest eras of human civilization. It is typically separated into three waves 
      and an emerging fourth wave: first wave feminism, dealing with property rights and the right to vote; 
      second wave feminism, 
      focusing on equality and anti-discrimination, and third wave feminism, 
      which started in the 1990s as a backlash to the second wave’s perceived privileging of white, straight women.
      </p>

      <div className="imageBox"></div>      
      {/* <img src={girlboss} alt="A picture depicting a girl boss" className="img mrg16-TB" /> */}
      </div>


      <div className="boxcss">
        <Grid container spacing={2}>
          <Grid item sm={5}>
          <h3 className="heading-1 mrg16-LR mrg0-T"> Female participation in labor markets grew remarkably in the 20th century </h3>
                <p className="body-2 pd16-LR">
                  The 20th century saw a radical increase in the number of women participating in labor markets across 
                  early-industrialized countries.
                  In the majority of countries, across all income levels the participation of women in labor markets is 
                  today higher than several decades ago.
                  </p>
                  <p className="body-2 pd16-LR pd16-TB">
                  After reaching a peak in 1999, labor force participation among women began a gradual decline. 
                  This decline accelerated following the Great Recession of 2007–09 until the participation rate hit a recent low in 2015 at 56.7 percent.
            Women’s involvement in the labor market changed in several notable ways since the 1940s 
            as other socioeconomic factors were also shifting. First, women became much more likely to pursue 
            higher levels of education: the proportion of women ages 25 to 64 in the labor force who 
            held a college degree nearly quadrupled from 1970 to 2017, 
            whereas the proportion of men with a college degree about doubled over that time.
                </p>
          </Grid>
          <Grid item sm={7}>
              <iframe width="98%" height="635px" src="https://public.tableau.com/views/theriseofthegirlboss/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"></iframe>
          </Grid>
        </Grid>
        
      </div>

    </div>
  );
// )

export default App;
