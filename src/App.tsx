import MainRoutes from "./routes/routes"
import "./index.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {

  return (
    <>
      <MainRoutes />
    </>
  )
}

export default App
