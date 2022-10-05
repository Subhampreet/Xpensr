import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";


// function App() {
//   return (
//     <div className="App">
      
//       <Home />
//       <Footer />
//     </div>
//   );
// }
function App(){
  return(
    <div>
    <Header />
    <Home />
    <div>Footer</div>
    </div>
   

  );
  
  
}


export default App;
