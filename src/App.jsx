import Questionnaire from "./components/Questionnaire";
import Credentials from "./components/Credentials";

import Header from "./components/Header";

function App() {
  return (
    <div className="flex z-50 h-screen flex-col overflow-hidden">
      <div className="subset z-10 absolute h-screen w-screen"></div>
      <Header />
      <Questionnaire />
      <Credentials />
    </div>
  );
}

export default App;
