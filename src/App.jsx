import NavBar from "./components/NavBar"
import MainRoutes from "./routes/MainRoute"
const App = () => {
  return (
    <div className="bg-[#1a1a1a] flex items-center flex-col min-w-screen min-h-screen px-15 pt-5 box-border">
        <NavBar />
        <MainRoutes />
    </div>
  )
}

export default App