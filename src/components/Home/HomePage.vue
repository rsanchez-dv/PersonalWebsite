<template>
  <div>
      <landing-page/>
      <AboutMe/>
      <Experience/>
      <Education/>
      <Footer/>
  </div>
</template>
<script>
import LandingPage from '@/components/Home/LandingPage'
import AboutMe from '@/components/AboutMe/AboutMe'
import Experience from '@/components/Experience/Experience'
import Education from '@/components/Education/Education'
import Skills from '@/components/Skills/Skills'
import Projects from '@/components/Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default {
  name: 'HomePage',
  components: {
    LandingPage,
    AboutMe,
    Experience,
    Education,
    Skills,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style >
/*
  SectionSubTitle: Styles the subtitle
*/
.sectionSubTitle{
  padding-top: 1em;
  padding-bottom: 2em;
  font-size: 1.5em;
  font-family:  'Roboto', sans-serif;
}
/*
    SectionTitle: Styles the section headers.
*/
.sectionTitle{
  font-size: 3em;
  font-family:  'Roboto', sans-serif;
}
/*
    sectionPadding: Offers padding on each section so that the text will be close to center.
*/
.sectionPadding{
  padding:3em;

}
/*
    Controls the background color for each section
*/
.lightBackground{
  background-color: white;
  color:#2b3033;

}
.darkBackground{
  background-color: #2b3033;
  color:white;

}
/*
    Sets the height of each section for screen size.
*/
.screenHeight{
  height: 100vh;
  padding-top:5em;
  padding-bottom: 5em;
}

</style>
