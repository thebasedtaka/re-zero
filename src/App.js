import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App(params) {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const renders = await searchImages(term);
    setImages(renders);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
