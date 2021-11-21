
import './Tableau.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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


function Tableau() {
  return (
    <div className="Tableau">
     <div className="boxcss">
        <Grid container spacing={2}>
          <Grid item sm={5}>
          <h3 className="heading-1 mrg16-LR mrg0-T">The Four Waves Of Feminism</h3>
                <p className="body-2 pd16-LR pd48-B">
                  The 20th century saw a radical increase in the number of women participating in labor markets across 
                  early-industrialized countries.
                  In the majority of countries, across all income levels the participation of women in labor markets is 
                  today higher than several decades ago.
                </p>
                <Swiper spaceBetween={30} pagination={{"clickable": true}} className="mySwiper">
                  <SwiperSlide>
                  <p className="body-1 pd16-B pd16-LR">
                  <strong> The First Wave of Feminism</strong>
                  </p>
                  <p className="body-2 pd16-LR">
                The first wave of feminism took place in the late nineteenth and early twentieth centuries 
                and was dominated by the women’s suffrage movement.
                The participation of women in World War I proved to the people of United States that women deserved 
                equal rights and representation. 
                In 1920, due to the work of suffragists like Susan B. Anthony and Carrie Chapman Catt, 
                the 19th Amendment was passed and American women finally earned the right to vote.
                </p>
                  </SwiperSlide>
                  <SwiperSlide>
                  <p className="body-1 pd16-B pd16-LR">
                  <strong> The Second Wave of Feminism</strong>
                  </p>
                  <p className="body-2 pd16-LR">
                  The second wave began in the 1960s and continued into the 90s also referred as Women’s Liberation. 
                  The Equal Rights Amendment, which sought legal equality for women and banned discrimination on the basis of 
                  sex, was passed by Congress in 1972. 
                  One year later, feminists celebrated the Supreme Court decision in Roe v. Wade, 
                  the landmark ruling that guaranteed a woman’s right to choose an abortion
                </p>
                  </SwiperSlide>
                  <SwiperSlide>
                  <p className="body-1 pd16-B pd16-LR">
                  <strong> The Third Wave of Feminism</strong>
                  </p>
                  <p className="body-2 pd16-LR">
                  The third wave of feminism began in the mid-90’s and was informed by post-colonial and post-modern thinking. 
                  Pink floor expressed the new position in the third wave of feminism when she said that it’s possible to 
                  have a push-up bra and a brain at the same time. 
                  Women’s expectations of future employment changed. Women began to see themselves going on to college and 
                  working through their marriages and even attending graduate school. 
                  Most women however were still secondary earners, and worked in ”pink-collar jobs”.
                  Nevertheless, Labor force participation by women still grew significantly.
                  <br/>
                  <br/>
                </p>
                  </SwiperSlide>
                  <SwiperSlide>
                  <p className="body-1 pd16-B pd16-LR">
                  <strong> The Fourth Wave of Feminism</strong>
                  </p>
                  <p className="body-2 pd16-LR">
                  The fourth wave of feminism is still a captivating silhouette. The fourth wave also known as the ”Quiet Revolution”, began in the late 1970s and continues on today. Beginning in the 1970s women began to flood colleges and grad schools. They began to enter profession like medicine, law, dental and busi- ness. More women were going to college and expected to be employed at the age of 35, as opposed to past generations that only worked intermittently due to marriage and childbirth. They were able to define themselves prior to a serious relationship.
                </p>
                  </SwiperSlide>
                </Swiper>
                
                <p className="body-2 pd16-LR">
                  [description of the visualiztion]
                </p>
          </Grid>
          <Grid item sm={7}>
          <iframe width="95%" height="575px" src="https://public.tableau.com/views/theriseofthegirlboss/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"></iframe> 
          </Grid>
        </Grid>
        
      </div>

    <div className="boxcss">
      <Grid container spacing={2}>
          <Grid item sm={5}>
          <h3 className="heading-1 mrg16-LR mrg0-T"> Women in Employment In Different Occupations</h3>
                <p className="body-2 pd16-LR">
                  [description of the visualiztion]
                </p>
          </Grid>
          <Grid item sm={7}>
          <iframe width="95%" height="575px" src="https://public.tableau.com/views/theriseofthegirlboss/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"></iframe>
          </Grid>
        </Grid>
    </div>

    <div className="boxcss">
      <Grid container spacing={2}>
          <Grid item sm={5}>
          <h3 className="heading-1 mrg16-LR mrg0-T">Gender Gap Index</h3>
                <p className="body-2 pd16-LR">
                  [description of the visualiztion]
                </p>
          </Grid>
          <Grid item sm={7}>
          <iframe width="95%" height="575px" src="https://public.tableau.com/views/theriseofthegirlboss/Dashboard4?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true&:showVizHome=no&:embed=true"></iframe>
          </Grid>
        </Grid>
    </div>

    </div>
  );
}

export default Tableau;
