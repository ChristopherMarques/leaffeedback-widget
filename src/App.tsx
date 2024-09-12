import "./App.css";
import EmbedableFeedback from "@/components/EmbedableFeedback";

function App() {
  return (
    <>
      <EmbedableFeedback
        position="bottom-right"
        primaryColor="#000"
        companyName="My Company"
      />
    </>
  );
}

export default App;
