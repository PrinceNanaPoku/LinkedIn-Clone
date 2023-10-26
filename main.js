import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';


const navBar =(
<nav>
  <h1>website</h1>
  <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
);
ReactDom.render(navBar, document.getElementById("root"));

const page = (
  <div>
    <h1>Page</h1>
    <p>Write</p>
    <p>Read</p>
    <p>Color</p>
  </div>
);

ReactDom.render(
  page,
  document.getElementById('root')
);


const firstReactPage = (
  <div>
    <img src="./react-logo.png" width = "20px" />
    <h1>Fun facts about React</h1>
    <p>It is a hireable skills</p>
    <p>It is maintained by highly skilled people</p>
  </div>
);
ReactDom.render(
  firstReactPage,
  document.getElementById('root')
);


function Page() {
  return(
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
  )
};



ReactDom.render(
  <Page />, 
  document.getElementById('root')
);