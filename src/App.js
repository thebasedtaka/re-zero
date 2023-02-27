import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <div>
        <Sidebar />
      </div>
      <Route className="col-span-5" path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/">
        <DropdownPage />
      </Route>
      <Route path="/buttons">
        <ButtonPage />
      </Route>
    </div>
  );
}

export default App;
