import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Blogs from "./Components/Blogs";
import Newsletter from "./Components/Newsletter";
import MyFooter from "./Components/MyFooter";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Blogs />
      <Newsletter />
      <MyFooter />
    </div>
  );
}

export default App;
