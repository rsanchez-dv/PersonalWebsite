<template>
  <section id="cd-timeline" class="cd-container">
     <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-movie"></div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Union Bank</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-desktop" aria-hidden="true"></i>
            Front-End Developer
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            March 2020 - March 2021
          </span>
        </div>
        <p>Colaborated with the Risk Department on gathering requirements and implementing solutions on SharePoint.</p>
        <ul class="content-skills">
          <li>SharePoint</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Nintex</li>
          <li>SQL</li>
        </ul>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-picture"></div>
      <div class="cd-timeline-content">
        <h2>Talent Path Consulting</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-desktop" aria-hidden="true"></i>
            Jr. Full Stack Engineer
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            June 2019 - Present
          </span>
        </div>
        <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
        <ul class="content-skills">
          <li>React</li>
          <li>Node.js / Express</li>
          <li>PostgreSQL</li>
          <li>Amazon Web Services</li>
        </ul>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-movie"></div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Web Solutions and Such - Freelance</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-desktop" aria-hidden="true"></i>
            Jr. Full Stack Engineer
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            Sept 2018 - May 2019
          </span>
        </div>
        <p>Designing, coding, and modifying websites for independent clients for their needs.</p>
        <ul class="content-skills">
          <li>Vue.js</li>
          <li>BootStrap</li>
          <li>Node.js / Express</li>
          <li>MySQL</li>
          <li>Netlify / Heroku</li>
        </ul>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-picture"></div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>California State University - Long Beach</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            BS - Computer Sci.
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            Jan 2016 - May 2018
          </span>
        </div>
        <p>Completed California State University, Long Beach with a Bachelors of Science in Computer Science</p>
        <ul class="content-skills">
          <li>Java</li>
          <li>C#</li>
          <li>JavaScript</li>
          <li>MySQL / SQL Server</li>
          <li>Python</li>
        </ul>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-location"></div>
      <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>El Camino College - MESA</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-chalkboard-teacher" aria-hidden="true"></i>
            CS Tutor
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            Jan 2015 - Dec 2015
          </span>
        </div>
        <p>Offered tutoring services on either a one-on-one basis or group sessions of eight or more.</p>
        <ul class="content-skills">
          <li>C++</li>
          <li>Java</li>
          <li>Web Dev Fundamentals</li>
          <li>Linux</li>
        </ul>
      </div>
      <!-- cd-timeline-content -->
    </div>
    <!-- cd-timeline-block -->

    <div class="cd-timeline-block">
      <div class="cd-timeline-img cd-location"></div>

      <div class="cd-timeline-content">
        <h2>El Camino Community College</h2>
        <div class="timeline-content-info">
          <span class="timeline-content-info-title">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            AS - Computer Sci.
          </span>
          <span class="timeline-content-info-date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            Jan 2011 - Dec 2015
          </span>
        </div>
        <p>Completed El Camino Community with an Associates in Mathematics and Computer Science</p>
        <ul class="content-skills">
          <li>C++</li>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Data Structures</li>
        </ul>
      </div>
      <!-- cd-timeline-content -->
    </div>
  </section>
  <!-- cd-timeline -->
</template>

<script>
/* eslint-disable  */
export default {
  name: "Timeline",
  components: {}
};
</script>

<style scoped>
html,
body {
  background-color: #222c32;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
}

.cd-container {
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 10%;
  border-radius: 2px;
}

.cd-container::after {
  content: "";
  display: table;
  clear: both;
}

/* -------------------------------- 

Main components 

-------------------------------- */
#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}

#cd-timeline::before {
  content: "";
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 4px;
  background: #7e57c2;
}

@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }

  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}
.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}

.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline-block:first-child {
  margin-top: 0;
}

.cd-timeline-block:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }

  .cd-timeline-block:first-child {
    margin-top: 0;
  }

  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}
.cd-timeline-img {
  position: absolute;
  top: 8px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #7e57c2, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-img {
  background: #673ab7;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 30px;
    height: 30px;
    left: 50%;
    margin-left: -15px;
    margin-top: 15px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}
.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  margin-right: 30px;
  background: #333c42;
  border-radius: 2px;
  padding: 1em;
}
.cd-timeline-content .timeline-content-info {
  background: #2b343a;
  padding: 5px 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.08);
  border-radius: 2px;
}
.cd-timeline-content .timeline-content-info i {
  margin-right: 5px;
}
.cd-timeline-content .timeline-content-info .timeline-content-info-title,
.cd-timeline-content .timeline-content-info .timeline-content-info-date {
  width: calc(50% - 2px);
  display: inline-block;
}
@media (max-width: 500px) {
  .cd-timeline-content .timeline-content-info .timeline-content-info-title,
  .cd-timeline-content .timeline-content-info .timeline-content-info-date {
    display: block;
    width: 100%;
  }
}
.cd-timeline-content .content-skills {
  font-size: 12px;
  padding: 0;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cd-timeline-content .content-skills li {
  background: #40484d;
  border-radius: 2px;
  display: inline-block;
  padding: 2px 10px;
  color: rgba(255, 255, 255, 0.7);
  margin: 3px 2px;
  text-align: center;
  flex-grow: 1;
}

.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline-content h2 {
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0;
  margin-bottom: 5px;
}

.cd-timeline-content p,
.cd-timeline-content .cd-date {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-size: 0.8125rem;
}

.cd-timeline-content .cd-date {
  display: inline-block;
}

.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}

.cd-timeline-content::before {
  content: "";
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #333c42;
}

@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }

  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }

  .cd-timeline-content .cd-read-more,
  .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    color: white;
    margin-left: 0;
    padding: 1.6em;
    width: 36%;
    margin: 0 5%;
  }

  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #333c42;
  }

  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }

  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }

  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #333c42;
  }

  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }

  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
}
</style>
