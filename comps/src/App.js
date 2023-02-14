import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "fsa",
      label: "Can i use react?",
      content: "yes i can",
    },
    {
      id: "gas",
      label: "Can i use javascript?",
      content: "yes i can",
    },
    {
      id: "fah",
      label: "Can i use css?",
      content: "ill use tailwind instead",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
