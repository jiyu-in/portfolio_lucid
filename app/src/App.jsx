import styled  from 'styled-components';
import './App.css'
import ParallaxSection from './component/ParallaxSection'
import BgObject from './component/BgObject'

const Root = styled.div`
    position: relative;
    /* width: 100vw; */
    height: 100vh;
    /* overflow: hidden; */
`;
const BgBox = styled.div`
    position: fixed;
    left:40px;
    top:40px;
    width: calc(100vw - 80px);
    height: calc(100vh - 80px);
    background-color: #E9D8B8;
    border:2px solid #5E3235;
    border-radius: 40px;
    z-index: -1;
    &::after{
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-size: 20px 20px;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.33) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.33) 1px, transparent 1px);
      mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    }
`;


function App() {
  
  return (
    <Root>
      <BgBox/>
      {/* <BgObject/> */}
      <ParallaxSection/>
    </Root>
  )
}

export default App
