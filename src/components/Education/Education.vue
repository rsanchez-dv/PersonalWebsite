<template>
  <div class="darkBackground screenHeight">
    <div class="container text-center">
    <span class="sectionTitle">Education</span>
    <p class="sectionSubTitle">A brief timeline on my educational journey.  </p>
        <Timeline class="timeline center"
          :timeline-items="dataTimeline"
          :message-when-no-items="messageWhenNoItems"
          :unique-year="true"
          order="desc"
    />
  </div>
  </div>
</template>

<script>
import Timeline from 'timeline-vuejs'

export default {
  name: 'Education',
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: 'There isnt anything',
    dataTimeline: [
      {
        from: new Date(2018, 4),
        title: 'California State University - Long Beach',
        description: 'Completed - B.S in Computer Science'
      },
      {
        from: new Date(2016, 0),
        title: 'California State University - Long Beach',
        date: 'January 2016 - May 2018',
        description: 'Transfered in'
      },
      {
        from: new Date(2015, 11),
        title: 'El Camino Community College',
        location: 'Torrance, California',
        description: 'Completed - A.S in Computer Science and Mathematics'
      },
      {
        from: new Date(2011, 0),
        title: 'El Camino Community College',
        location: 'Torrance, California',
        description: 'Started attending'
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .screenHeight{
    height:100%;
  }
  @media screen and (max-width: 768px){
    .timeline{
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display:flex;
    }
  }
  @media screen and (min-width: 425px){
    .timeline{
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      display: inline-block;
      padding: 50px;
    }
  }
  @media screen and (min-width:2560px){
    .screenHeight{
      height:100vh;
    }
  }
</style>
