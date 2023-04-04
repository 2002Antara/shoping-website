// import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./screens/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <h1>Ecommerce App</h1>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductDetails} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
