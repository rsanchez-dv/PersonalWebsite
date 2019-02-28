<template>
  <div>
      <landing-page/>
      <AboutMe/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
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
.sectionSubTitle{
  padding-top: 1em;
  padding-bottom: 2em;
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
</style>
