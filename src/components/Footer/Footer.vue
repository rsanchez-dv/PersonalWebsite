<template>
<div>
  <footer class="footer-distributed">
    <div class="footer-right">
      <a href="https://github.com/Zyxel-1"><i class="fab fa-github-square"></i></a>
      <a href="https://www.linkedin.com/in/robertosanchez92/"><i class="fab fa-linkedin"></i></a>
      <a href="mailto:rsanchez92@live.com?Subject=Hello%20again" target="_top"><i class="fas fa-envelope-square"></i></a>
      <a href="#"><i class="fab fa-twitter-square"></i></a>
    </div>
    <div class="footer-left">
      <p>Roberto Sanchez &copy; 2018</p>
    </div>
  </footer>
</div>
</template>
<script>
</script>

<style scoped>
.footer-distributed {
background-color: #292c2f;
box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
box-sizing: border-box;
width: 100%;
text-align: left;
font: normal 16px sans-serif;
bottom: 0;
padding: 45px 50px;
margin-top: 0px;
}

.footer-distributed .footer-left p {
color: #8f9296;
font-size: 14px;
margin: 0;
padding-top: 20px;
}
/* Footer links */
.footer-distributed p.footer-links {
font-size: 18px;
font-weight: bold;
color: #ffffff;
margin: 0 0 10px;
padding: 0;
}

.footer-distributed p.footer-links a {
display: inline-block;
line-height: 1.8;
text-decoration: none;
color: inherit;
}

.footer-distributed .footer-right {
float: right;
margin-top: 6px;
max-width: 180px;
}

.footer-distributed .footer-right a {
display: inline-block;
width: 35px;
height: 35px;
background-color: #33383b;
border-radius: 2px;
font-size: 20px;
color: #ffffff;
text-align: center;
line-height: 35px;
margin-left: 3px;
}
/* If you don't want the footer to be responsive, remove these media queries */
@media (max-width: 600px) {
.footer-distributed .footer-left,
.footer-distributed .footer-right {
text-align: center;
}
.footer-distributed .footer-right {
float: none;
margin: 0 auto 20px;
}
.footer-distributed .footer-left p.footer-links {
line-height: 1.8;
}
}
</style>
