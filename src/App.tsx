import Banner from "./componets/Banner";
import Nav from "./componets/Nav";
import { Plus } from "lucide-react";

const App = () => {
  return (
    <div className="bg-background py-12 px-6">
      <div className="w-full flex flex-col items-center gap-7">
        <Banner />
        <Nav />
      </div>
      <button className="fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-all hover:scale-110 z-50">
        <Plus size={24} />
      </button>
    </div>
  );
};

export default App;
