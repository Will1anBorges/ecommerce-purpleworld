import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  .logo{
    position: absolute ;
    top: 8%;
    left: 8%;
    
  }

  .bannerImg1{
    width: 50%;
    height: 325px;
  }

  .bannerImg2{
    width: 50%;
    height: 325px;
  }

  .bannerImg3{
    width: 50%;
    height: 325px; 
  }

  .bannerImg4{
    width: 50%;
    height: 325px; 
  }
  
  .backImg{
    width: 100%;
    height: 370px;
    position: relative;
    top: -25px;
    z-index: 0;
    /* opacity: ; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
    
  .welcome {
    margin-top: -30%;
    margin-left: -15%;
    z-index: 1;
    
    font-family: 'Gorditas';
    font-size: 50px;

    color: #A06CD5;
  
}


  h3{
    margin-left: -25%;
    margin-top: 2%;
    font-family: 'Gorditas';
    font-size: 25px;
    text-align: center;
    z-index: 1;

    color: #A06CD5;
    
}
  
  h2{
    margin-right: 1%;
    font-family: 'Gorditas';
    font-size: 35px;

    color: #42258f;
}

.footerLogo{
    padding-top: 0.9%;
    margin: 0% 4%;
    
}

.icon:hover {
  filter:drop-shadow(0px 0px 3px #5e60ce)
  }
  
.container-carousel{
  max-width: 100%;
}

.carousel{
  height: 395px;
  max-width: 85%;
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
  display: none;
}
}

.carousel-banner{
  margin-top: 88px;
  /* overflow-x: hidden; */
  scroll-behavior: smooth;
  animation: sliding 20s infinite;
  height: 325px;
  z-index: 1;

  &:hover {
    animation-play-state: paused;
  }

  ::-webkit-scrollbar {
  display: none;
}
}

.btns{
  width: 95%;
}

@keyframes pulse {
  0% {
    transform: scale(0.98);
  }
  
  50% {
    transform: scale(1.2);
  }
  
  100% {
    transform: scale(0.98);
  }
}

@keyframes sliding {
  25% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-50%);
  }
  60% {
    transform: translateX(-50%);
  }
  65% {
    transform: translateX(-100%);
  }
  95% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.buttons-direc{
  animation: pulse 2s infinite;
}

.btn-conheca{
  animation: pulse 4s infinite;
}

`
