
import './Waves.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import banner from './images/rise-of-the-girl-boss.png'
import firstwave from './images/firstwave.png'
import thirdwave from './images/thirdwave.png'
import secondwave from './images/secondwave.png'
import fourthwave from './images/fourthwave.png'

function Waves() {
  return (
    <section>
    {/* <img src={waves} width="100%" height="100%" /> */}
    <section className="hero-img">
      <div>
      
      <img src={banner} height="100%" width="auto" className="banner" />
      
      
        {/* <div className="center boxc">
        <h1 className="title-1 mrg0-TB black-700 fw-700">THE RISE OF THE GIRL BOSS</h1>
        <p className="body-1 black-700 fw-600">Explore Women's journey of feminism from generations past and present</p>
        </div> */}
      </div>
      <p className="banner-caption">
      <figcaption>Women's liberation movement in Washington, DC, August 26, 1970. Don Carl Steffen/Gamma-Rapho/Getty Images</figcaption>
      </p>
    </section>
    </section>
  )
}

function FirstWaveDesc(){
    return (
      <section className="first-wave-img">
      <div className="center">
        <div className="center">
        <img src={firstwave} style={{width: '60%'}} />
       {/* <h1 className="title-1 fw-700 mrg8-B mrg0-T">The Four Waves Of Feminism</h1>
       <h2 className="title fw-700 mrg8-B mrg0-T">The First Wave of Feminism</h2>
       <p className="title fw-700 mrg0-TB">1890 - 1960</p> */}
       </div>
       <p className="banner-caption">
       <figcaption>Harris and Ewing Collection/Library of Congress, Washington, D.C. (neg. no. LC-H261-8200)</figcaption>
       </p>
      </div>
      {/* <img src={sufrageMoment} width="100%" height="100%" /> */}
      </section>
    )
}

function FirstWave() {
  return (

    <section>
      <div className="boxcss">
      <h3 className="title-h2 mrg16-LR mrg0-T">
                      The First Wave of Feminism (1890 - 1960)
                      </h3>
      
        <Grid container spacing={2}>
          <Grid item sm={5}>
          
                <section>
                    <div className="mrg0-TB">
                     
                      <p className="body-2 pd16-LR">
                    The first wave of feminism took place in the late 19<sup>th</sup> and early 20<sup>th</sup> centuries 
                    and was dominated by the women’s suffrage movement.
                    The participation of women in World War I proved to the people of United States that women deserved 
                    equal rights and representation. 
                    In 1920, due to the work of suffragists like Susan B. Anthony and Carrie Chapman Catt, 
                    the 19th Amendment was passed and American women finally earned the right to vote.
                    </p>

                    <p className="body-2 pd16-LR">The visualization shows the trends of the overall increase of participation of women in the labor force from 1890 to 1960, indicating the impact & importance of these movements to help shape the future and the present.
                    </p>
                    </div>
                  
                </section>
                
          </Grid>
          <Grid item sm={7}>
          <iframe  frameBorder="0" marginHeight="0" marginWidth="0" allowtransparency={true} allowFullScreen={true} className="tableauViz" src="https://public.tableau.com/views/theriseofthegirlboss/first-wave?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"></iframe> 
          </Grid>
        </Grid>
        </div>
    </section>
    
  );
}

export default FirstWave;

function SecondWaveDesc(){
  return (
    <section className="second-wave-img">
    <div className="center">
      {/* <div className="center boxs">
     <h2 className="title fw-700 mrg8-B mrg0-T">The Second Wave of Feminism</h2>
     <p className="title fw-700 mrg0-TB">1960 - 1990</p>
     </div> */}
     <img src={secondwave} style={{position:'absolute',left:'0',bottom : '20px', filter: 'none', width: '40%'}} />
    </div>
    <p className="banner-caption">
       <figcaption>A 1977 protest in New York City for safe and legal abortions. (Peter Keegan/Stringer/Hulton Archive/Getty Images)
       </figcaption>
       </p>
    {/* <img src={sufrageMoment} width="100%" height="100%" /> */}
    </section>
  )
}

function SecondWave() {
  return (

    <section>
      <div className="boxcss">
      <h3 className="title-h2 mrg16-LR mrg0-T">The Second Wave of Feminism (1960 - 1990)</h3>
        <Grid container spacing={2}>
          <Grid item sm={5}>
          {/* <h3 className="heading-1 mrg16-LR mrg0-T">The Second Wave of Feminism</h3> */}
                  
                  {/* <p className="body-1 pd16-B pd16-LR">
                  <strong> The Second Wave of Feminism</strong>
                  </p> */}
                  <p className="body-2 pd16-LR">
                  The second wave began in the 1960s and continued into the 90s also referred as <strong>Women’s Liberation</strong>. 
                  The Equal Rights Amendment, which sought legal equality for women and banned discrimination on the basis of 
                  sex, was passed by Congress in 1972. 
                  One year later, feminists celebrated the Supreme Court decision in Roe v. Wade, 
                  the landmark ruling that guaranteed a <strong>woman’s right to choose an abortion</strong>.
                </p>
          </Grid>
          <Grid item sm={7}>
          <iframe  frameBorder="0" marginHeight="0" marginWidth="0" allowtransparency="true" allowFullScreen={true} className="tableauViz" src="https://public.tableau.com/views/theriseofthegirlboss/second-wave?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"></iframe> 
          </Grid>
        </Grid>
        
      </div>
    </section>
    
  );
}

function ThirdWaveDesc(){
  return (
    <section className="third-wave-img">
    <div className="center">
      {/* <div className="center boxs">
     <h2 className="title fw-700 mrg8-B mrg0-T">The Third Wave of Feminism</h2>
     <p className="title fw-700 mrg0-TB">1990 - 2010(?)</p>
     </div> */}
     <img src={thirdwave} style={{position:'absolute',left:'0',bottom : '20px', filter: 'none', width: '40%'}} />
    </div>
    <p className="banner-caption">
       <figcaption>
       The Slut Walk protest in Toronto © Anton Bielousov/Wikipedia
       </figcaption>
       </p>
    {/* <img src={sufrageMoment} width="100%" height="100%" /> */}
    </section>
  )
}

function ThirdWave() {
  return (

    <section>
      <div className="boxcss">
      <h3 className="title-h2 mrg16-LR mrg0-T">The Third Wave of Feminism (1990 - 2010?)</h3>

        <Grid container spacing={2}>
          <Grid item sm={5}>
                  <p className="body-2 pd16-LR">
                  The second wave of feminism is often accused of being elitist and ignoring groups such as 
                  women of colour and transgender women, instead, focusing on white, middle class, cisgender women. 
                  Third wave feminists questioned the beliefs of their predecessors and began to apply feminist theory 
                  to a wider variety of women, who had not been previously included in feminist activity.
                  </p>
                  <p className="body-2 pd16-LR">
                 The third wave began in the mid-90s and was thus informed by post-colonial and post-modern thinking. 
                  Pink floor expressed the new position in the third wave of feminism when she said that it’s possible to 
                  have a push-up bra and a brain at the same time. 
                  Women’s expectations of future employment changed. Women began to see themselves going on to college, 
                  working through their marriages and even attending graduate school. 
                  Most women however were still secondary earners, and worked in ”pink-collar jobs”.
                  Nevertheless, Labor force participation by women still grew significantly.
                  
                  {/* The Third Wave of feminism was greatly focused on reproductive rights for women. Feminists advocated for a woman’s right to make her own choices about her body and stated that it was a basic right to have access to birth control and abortion. */}


                </p>
          </Grid>
          <Grid item sm={7}>
          <iframe  frameBorder="0" marginHeight="0" marginWidth="0" allowtransparency="true" allowFullScreen={true} className="tableauViz" src="https://public.tableau.com/views/theriseofthegirlboss/third-wave?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"></iframe> 
          </Grid>
        </Grid>
        
      </div>
    </section>
    
  );
}

function FourthWaveDesc(){
  return (
    <section className="fourth-wave-img">
    <div className="center">
     <img src={fourthwave} style={{position:'absolute',left:'0',bottom : '20px', filter: 'none', width: '40%'}} />
    </div>
    <p className="banner-caption">
       <figcaption>
       People protest sexual assault and harassment at the #MeToo March in Hollywood on Nov. 12, 2017
       </figcaption>
       </p>
    </section>
  )
}

function FourthWave() {
  return (

    <section>
      <div className="boxcss">
      <h3 className="title-h2 mrg16-LR mrg0-T">The Fourth Wave of Feminism</h3>
        <Grid container spacing={2}>
          <Grid item sm={5}>
                  <p className="body-2 pd16-LR">
                  The fourth wave of feminism is still a captivating silhouette. 
                  Beginning in the 1970s women began to flood colleges and grad schools. 
                  They began to enter profession like medicine, law, dental and business.
                   More women were going to college and expected to be employed at the age of 35, 
                   as opposed to past generations that only worked intermittently due to marriage and childbirth.
                    They were able to define themselves prior to a serious relationship.

                </p>
                <p className="body-2 pd16-LR">
                Over the past few years, as #MeToo and Time’s Up pick up momentum, 
                the Women’s March floods Washington with pussy hats every year, 
                and a record number of women prepare to run for office, 
                it’s beginning to seem that the long-heralded fourth wave might actually be here.
                <br/>
                <br/>
                While a lot of media coverage of #MeToo describes it as a movement dominated by 
                third-wave feminism, it actually seems to be centered in a movement that lacks the characteristic diffusion of the third wave. It feels different.
                </p>
          </Grid>
          <Grid item sm={7}>
          <iframe  frameBorder="0" marginHeight="0" marginWidth="0" allowtransparency="true" allowFullScreen={true} className="tableauViz" src="https://public.tableau.com/views/theriseofthegirlboss/fourth-wave?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true"></iframe> 
          </Grid>
        </Grid>
        
      </div>
    </section>
    
  );
}


export {
  ThirdWave,
  SecondWave,
  FourthWave,
  FirstWaveDesc,
  SecondWaveDesc,
  ThirdWaveDesc,
  FourthWaveDesc,
  Waves
}