import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.styled";
import content from "../src/content";
import Card from "./components/Card";
import Footer from "./components/Footer";
import NewUser from "./components/UserList";
import NewTodos from "./TodoList";

/*import Header from "./components/reduxProj/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/reduxProj/ProductListing";
import ProductDetails from "./components/reduxProj/ProductDetails";
import "./App.css"; */

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#033",
  },
  mobile: "768px",
};

function App() {
  return (
    <div>
      {/*   <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router> */}

      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header />
          <Container>
            {content.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Container>
          <Footer />
        </>
      </ThemeProvider>

      {/* <NewUser />
      <NewTodos /> */}
    </div>
  );
}

export default App;
