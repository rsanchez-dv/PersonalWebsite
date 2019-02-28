<template>
  <div id="bg-color">
    <div class="container text-center sectionPadding">
    <span class="sectionTitle">Education</span>
    <p class="sectionSubTitle">The long difficult path to becoming who I am today as a software developer. </p>
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
        description: 'Got my Bachlores in Computer SCience'
      },
      {
        from: new Date(2016, 0),
        title: 'California State University - Long Beach',
        description: 'Got my Bachlores in Computer SCience'
      },
      {
        from: new Date(2015, 11),
        title: 'El Camino Community College',
        location: 'Torrance, California',
        description: 'Finished'
      },
      {
        from: new Date(2011, 0),
        title: 'El Camino Community College',
        location: 'Torrance, California',
        description: 'Started'
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 768px){
      #bg-color{
          background-color: #2b3033;
          height: 100%;
          color:white;
      }
  }
  @media screen and (min-width:769px){
      #bg-color{
          background-color: #2b3033;
          color:white;
      }
  }
  @media screen and (max-width: 768px){
    .timeline{
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      display:flex;
    }
  }
  @media screen and (min-width: 769px){
    .timeline{
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      display: inline-block;
      padding: 50px;
    }
  }
</style>
