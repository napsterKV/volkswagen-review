import MainBlock from './components/MainBlock/MainBlock';
import TopBlock from './components/TopBlock/TopBlock';
import MiddleBlock from './components/MiddleBlock/MiddleBlock';
import './App.css';
import GalleryBlock from './components/GalleryBlock/GalleryBlock';
import "slick-carousel/slick/slick.css";
import  "./slick-theme.css";
import  "yet-another-react-lightbox/styles.css";
 

function App() {
  return <main>
    <MainBlock></MainBlock>
    <TopBlock></TopBlock>
    <MiddleBlock></MiddleBlock>
    <GalleryBlock></GalleryBlock>
    <footer className='footer'>
      <div className='container'>
         2023 © 
    </div>
    </footer> 
  </main>
}


export default App;
