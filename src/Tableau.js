
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
     {/* <div className="boxcss">
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
                  The second wave of feminism is often accused of being elitist and ignoring groups such as 
                  women of colour and transgender women, instead, focusing on white, middle class, cisgender women. 
                  Third wave feminists questioned the beliefs of their predecessors and began to apply feminist theory 
                  to a wider variety of women, who had not been previously included in feminist activity.
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
                
          </Grid>
          <Grid item sm={7}>
          <iframe  frameBorder="0" marginHeight="0" marginWidth="0" allowtransparency="true" allowFullScreen={true} className="tableauViz" src="https://public.tableau.com/views/theriseofthegirlboss/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"></iframe> 
          </Grid>
        </Grid>
        
      </div> */}

    {/* <div className="boxcss">
      <Grid container spacing={2}>
          <Grid item sm={5}>
          <h3 className="heading-1 mrg16-LR mrg0-T"> Women in Employment In Different Occupations</h3>
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
    </div> */}

    {/* <div className="boxcss">
      <Grid container spacing={2}>
          <Grid item sm={5}>
          <h3 className="heading-1 mrg16-LR mrg0-T">Gender Gap Index</h3>
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
          </Grid>
          <Grid item sm={7}>
          <iframe  frameBorder="0" marginHeight="0" marginWidth="0" allowtransparency="true" allowFullScreen={true} className="tableauViz" src="https://public.tableau.com/views/theriseofthegirlboss/Dashboard4?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true&:showVizHome=no&:embed=true"></iframe>
          </Grid>
        </Grid>
    </div> */}

    </div>
  );
}

export default Tableau;
