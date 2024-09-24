import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 style={{ color: "GrayText" }}>Resorts Lite</h1>
      <hr />
      <div className="container">
        <Card
          location="Indonesia"
          name="Gili Air Hotel"
          image="src\assets\1.jpg"
          price="$589"
          rating="4.8"
        />
        <Card
          location="Seychelles"
          name="Hilton Resort"
          image="src\assets\2.jpg"
          price="$629"
          rating="4.2"
        />
        <Card
          location="US Virgin Islands"
          name="Goa Resort"
          image="src\assets\3.jpg"
          price="$485"
          rating="3.5"
        />
        <Card
          location="Bahamas"
          name="Kuredu Resort"
          image="src\assets\4.jpg"
          price="$729"
          rating="4.1"
        />
        <Card
          location="Mauritius"
          name="Trou D'eau Douce"
          image="src\assets\5.jpg"
          price="$877"
          rating="4.9"
        />
        <Card
          location="Bermuda"
          name="Staniel Cay Hotel"
          image="src\assets\6.jpg"
          price="$365"
          rating="3.2"
        />
      </div>
    </>
  );
}

export default App;
