<template>
  <div class="container">
    <h1>Dream House Financing - A Categorical Machine Learning Project</h1>
    <img src="https://personalwebsiteimages.s3.us-west-1.amazonaws.com/images/ProjectImages/merlin/decisionTree.png" fluid-grow alt="A decision tree">
    <br>
    <br>
    <div class="center">
      <b-row>
        <b-col class="labelStyle">Timeline:</b-col>
        <b-col class="labelData">July 2021</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Project Type:</b-col>
        <b-col class="labelData">Talent Path Training</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">My Role:</b-col>
        <b-col class="labelData">Main Developer</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Tools:</b-col>
        <b-col class="labelData">Jupyter Notebook</b-col>
      </b-row>
      <b-row>
        <b-col class="labelStyle">Skills:</b-col>
        <b-col class="labelData">Python Developement, Pandas, Seaborn, Numpy, Scikit Learn</b-col>
      </b-row>
      <br>
      <b-row class="center">
        <a href="https://github.com/rsanchez-dv/ML_Training_Project">Click here for more about this project</a><i class="fa fa-link"
          aria-hidden="true"></i>
      </b-row>
    </div>
    <div>
      <h2>Context</h2>
      <span class="subTitle">Whats all this about?</span>
      <p>Dream Housing Finance is in a dire need to automate their loan application decisioning. Company wants to implement a machine learning solution to automate
        the loan loan eligibility process based on customer details provided while filing the online application and give instant feedback.
      </p>
    </div>
    <div>
      <h2>Solution</h2>
      <span class="subTitle">Deliverables</span>
      <p>There needs to be a machine learning model that would give us an accurate response to a customer's loan application.
      </p>
    </div>
    <div>
      <h2>Initial Analysis</h2>
      <span class="subTitle">Whats all this about?</span>
      <p>Dream House Financing provided a data set that contained aprox. 614 rows of data and 13 features. 
         
      </p>
      <img src="https://personalwebsiteimages.s3.us-west-1.amazonaws.com/images/ProjectImages/merlin/originalDataSample.PNG" alt="Sports, Running, Lifting, and hiking.">
      
    </div>
    <div>
      <h2>Data Preprocessing</h2>
      <span class="subTitle">Whats all this about?</span>
      <p>TODO
      </p>
    </div>
    <div>
      <h2>Model Training</h2>
      <span class="subTitle">Whats all this about?</span>
      <p>TODO
      </p>
    </div>
    <div>
      <h2>Conclusion</h2>
      <span class="subTitle">Whats all this about?</span>
      <p>TODO
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoanEligibility',
  components: {}
}
</script>

<style scoped>
.cameraImage {
  width: 50%;
}

h1 {
  text-align: center;
  padding-top: 1em;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
}

figcaption {
  font-style: italic;
  padding-top: 10px;
  padding-bottom: 10px;
}

.labelStyle {
  font-weight: bold;
}

.labelData {
  font-weight: 100;
  color: grey;
}

.center {
  margin: auto;
  width: 50%;
}

a {
  text-align: center;
  color: black;
}

i {
  color: grey;
}

p {
  padding-left: 5em;
  padding-right: 2em;
}

.subTitle {
  color: grey;
  font-style: italic;
}
</style>
