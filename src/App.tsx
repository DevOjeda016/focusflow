import Banner from "./componets/Banner";
import Nav from "./componets/Nav";
import ModalForm from "./componets/ModalForm";

const App = () => {
  return (
    <div className="bg-background py-12 px-6 min-h-screen">
      <div className="w-full flex flex-col items-center gap-7">
        <Banner />
        <Nav />
      </div>
      <ModalForm />
    </div>
  );
};

export default App;
