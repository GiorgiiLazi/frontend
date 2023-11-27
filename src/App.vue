<template>

  <div class="container">
    <div class="frontend-text">
      <h1>Welcome to the</h1>
      <h1>Frontend Quiz!</h1>
      <br>
      <h5>Pick a subject to get started</h5>
    </div>

    <nav class="router-nav">
      <router-link to="/javascript">JavaScript</router-link>
      <router-link to="/css">CSS</router-link>
      <router-link to="/html">HTML</router-link>
    </nav>
    
  </div>
  
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bitter&family=Oswald:wght@200;300;400;500;600;700&display=swap');

body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

nav a.router-link-exact-active {
  color: blue;
  text-decoration:underlinel
}

.container{
  background-color:antiquewhite;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content:space-around;
  align-items: center;
}
.frontend-text{
  text-align: center;
  font-family: Bitter;
}
.router-nav{
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: Abril Fatface
}
.router-nav *{
  margin: 20px 0px;
  padding: 20px 10px;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: mediumturquoise;
  width: 200px;
  border-radius: 40px;
}
.router-nav *:hover{
  background-color: rgba(0,0,0,0.4);
  color: white;
}
</style>
