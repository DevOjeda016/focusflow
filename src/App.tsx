import Banner from "./componets/Banner";
import Nav from "./componets/Nav";
const App = () => {
  return (
    <div className="bg-background py-12 px-6">
      <div className="w-full flex flex-col items-center gap-7">
        <Banner />
        <Nav />
      </div>
    </div>
  );
};

export default App;
