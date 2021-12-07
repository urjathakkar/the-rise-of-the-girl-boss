import girlboss from './76216.svg';
import './App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FirstWave, {SecondWave, ThirdWave, FourthWave, FirstWaveDesc, SecondWaveDesc, ThirdWaveDesc,
  FourthWaveDesc, Waves} from "./Waves";
import ReactPageScroller from 'react-page-scroller';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Navigation, Pagination } from 'swiper';
import SwiperCore from 'swiper';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

SwiperCore.use([Pagination]);

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const App = () => (
    <div className="App">
      <header>
        <script type='text/javascript' src='https://prod-useast-b.online.tableau.com/javascripts/api/viz_v1.js'>
        </script>
        {/* <link rel="stylesheet" href="https://use.typekit.net/msk1hyz.css"></link> */}
        
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>

      </header>

      <ReactPageScroller>
      <Waves />
      
      <section>
      <div className="box-920">
      <h1 className="title-h2 red mrg0-TB pd16-T">Feminism</h1>
      <p className="body-2 pd16-B mrg8-T"> A belief in the political, economic and cultural equality of women, 
      has roots in the earliest eras of human civilization. It is typically separated into three waves 
      and an emerging fourth wave: first wave feminism, dealing with property rights and the right to vote; 
      second wave feminism, 
      focusing on equality and anti-discrimination; third wave feminism, 
      which started in the 1990s as a backlash to the second wave’s perceived privileging of white, straight women 
      and the fourth wave feminism, is a feminist movement that began around 2012 and
       is characterized by a focus on the empowerment of women, the use of internet tools, and intersectionality.
      </p>

      <div className="imageBox"></div>      
       {/* // <img src={girlboss} alt="A picture depicting a girl boss" className="img mrg16-TB" />  */}
      </div>
      </section>

      <section>
      <div className="boxcss">
      <h3 className="title-h2 mrg16-LR mrg0-T"> Female participation in labor markets</h3>
        <Grid container spacing={2}>
        
          <Grid item sm={5}>
          
                <p className="body-2 pd16-LR">
                  The 20th century saw a radical increase in the number of women participating in labor markets across 
                  early-industrialized countries.
                  In the majority of countries, across all income levels the participation of women in labor markets is 
                  today higher than several decades ago.
                  </p>
                  
                  <p className="body-2 pd16-LR pd16-TB">
                  Women’s involvement in the labor market changed in several notable ways since the 1940s.
            A single moment can spark a revolution, collective actions can transform laws, 
            creative expression can change attitudes and an invention can alter the course of history. 
            It’s these threads that weave together to propel the women’s movement — even in the face of obstacles.
            Let's take a peak into this history of feminism.
                </p>
          </Grid>
          <Grid item sm={7}>
              <iframe  frameBorder="0" marginHeight="0" marginWidth="0" allowtransparency="true" allowFullScreen={true} className="tableauViz" src="https://public.tableau.com/views/theriseofthegirlboss/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"></iframe>
          </Grid>
        </Grid>
        </div>
      </section>
     
      

      <FirstWaveDesc />
      <FirstWave />
    
      <SecondWaveDesc />
      <SecondWave />

      <ThirdWaveDesc />
      <ThirdWave />

      <FourthWaveDesc />
      <FourthWave />

      <section>
      <div className="boxcss">
      <div>
        <h2 className="title-h3 red">Noteworthy</h2> 
        <h3 className="title-h2">The rise of digital activism</h3>
        
          <p className="body-1">The hashtags say it all: Women and girls want a life free of violence and a gender equal world.</p>
        
      </div>
      <div>
        <ul className="hashtags__list">
          <li><a href="https://www.huffpost.com/entry/turkey-sendeanlat-twitter-campaign_n_6699702" target="_blank" className="title-h3">#SendeAnlat</a></li> 
          <li><a href="https://bringbackourgirls.ng/" target="_blank" className="title-h3">#BringBackOurGirls</a></li> 
          <li><a href="https://www.newyorker.com/culture/culture-desk/the-power-of-yesallwomen" target="_blank" className="title-h3">#YesAllWomen</a></li> 
          <li><a href="https://twitter.com/everydaysexism" target="_blank" className="title-h3">#EverydaySexism</a></li> 
          <li><a href="https://blogs.brighton.ac.uk/lm131/2017/01/09/un-women-womenshould-campaign/" target="_blank" className="title-h3">#WomenShould</a></li> 
          <li><a href="https://www.heforshe.org/en" target="_blank" className="title-h3">#HeForShe</a></li> 
          <li><a className="title-h3">#NiUnaMenos</a></li> 
          <li><a className="title-h3">#MeToo</a></li> 
          <li><a className="title-h3">#YoTambien</a></li> 
          <li><a href="https://giuliablasi.medium.com/quellavoltache-italys-metoo-before-metoo-83e7f6a73276" target="_blank" className="title-h3">#QuellaVoltaChe</a></li> 
          <li><a className="title-h3">#BalanceTonPorc</a></li> 
          <li><a className="title-h3">#AnaKaman</a></li> 
          <li><a className="title-h3">#TimesUp</a></li> 
          <li><a className="title-h3">#FeministFriday</a></li>
        </ul>
        </div>
        </div>
      </section>

      <section>
      <div className="boxcss emp">
      <h3 className="title-h2 mrg16-LR mrg0-T"> Women in Employment In Different Occupations</h3>

      <Grid container spacing={2}>
          <Grid item sm={5}>
                <p className="body-2 pd16-LR">
                  Women have been in the workforce for over more than a century but the participation of women in different sectors has changed over these years.
                  In the early 2000s education and library occupations came in the top 3 occupations, 
                  and in 2020 we see that health practitioners and technical occupations came in the top 3 occupations. These trends show
                  that women were no longer bound to stay in their houses 
                  and their expectation of future employment changed and they saw themselves getting college degress and working and not just in "pink collar jobs".
                </p>
                <p className="body-2 pd16-LR pd16-TB">
                  The chart shows these trends of the top occupations for women over 1997 to 2020.
                </p>
          </Grid>
          <Grid item sm={7}>
          <iframe frameBorder="0" marginHeight="0" marginWidth="0" allowtransparency="true" allowFullScreen={true} className="tableauViz"
          src="https://public.tableau.com/views/theriseofthegirlboss/Dashboard3?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fpublic.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:animate_transition=yes&amp;:display_static_image=no&amp;:display_spinner=no&amp;:display_overlay=yes&amp;:display_count=yes&amp;:language=en&amp;:loadOrderID=0"></iframe>
          </Grid>
        </Grid>
    </div>
    </section>

    <section>
    <div className="boxcss">
    <h3 className="title-h2 mrg16-LR mrg0-T">Gender Gap Index</h3>

      <Grid container spacing={2}>
          <Grid item sm={5}>
                <p className="body-2 pd16-LR">
                The Global Gender Gap Index, is a framework for capturing the magnitude and scope of gender-based 
                disparities and tracking their progress.
                The Index benchmarks national gender gaps in four key areas: economic, political, education and health-based criteria, 
                and is based on a total of 14 indicators from these categories.
                The index is designed to "measure gender-based gaps in access to resources and opportunities in countries rather than the actual level of the available resources and opportunities in those countries.
                </p>
                <p className="body-2 pd16-LR pd16-TB">
                The highest possible score is 1.0 (equality or better for women, except for lifespan (106% or better for women) and gender parity at birth (94.4% or better for women) and the lowest possible score is 0.
                <br/> Data for some countries are unavailable.
                  
                </p>
                <p className="body-2 pd16-LR pd16-TB">
                Gender equality is a necessity for a peaceful, prosperous and sustainable world. 
                Women represent half of the world’s population but continue to be underrepresented 
                in leadership and in the workplace.
                The Gender Gap Index serves as a benchmark for comparing countries and their progress to gender equality over time. 
                Based on current trends, the WEF estimates that it will take <strong> 135.6 years </strong> to close the global gender gap.
                </p>
          </Grid>
          <Grid item sm={7}>
          <iframe  frameBorder="0" marginHeight="0" marginWidth="0" allowtransparency="true" allowFullScreen={true} className="tableauViz" src="https://public.tableau.com/views/theriseofthegirlboss/Dashboard4?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true&:showVizHome=no&:embed=true"></iframe>
          </Grid>
        </Grid>
    </div>
    </section>

    <section>
      <div className="boxcss">
      <div className="center pd64-T">
        <h3 className="title-h2">The time is now</h3>
        
          <p className="body-1 mrg16-T" style={{textAlign:'center'}}>We've come a long way, but we still have a long way to go for an equal society. 
          <br/>Gender inequality is rife. 
          We owe it to the next generations to strive for a <br/>world where women have voice,
          choice and agency and enjoy the <br/>same rights as men.</p>

          <p className="title red mrg72-T" style={{textAlign:'center', fontStyle: 'italic'}}>Women, men, boys and girls, citizens of the world, unite!</p>

          <p className="body-1 mrg16-T"> Time to Take Action - <a href="https://www.unwomen.org/en" className="body-1 red">UN WOMEN</a></p>
      </div>
      </div>
      </section>

      </ReactPageScroller>

    </div>
      
  );
// )

export default App;
