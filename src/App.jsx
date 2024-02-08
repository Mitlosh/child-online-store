import AppRouter from './routers/AppRouter'
import { Provider } from "react-redux";
import store from "./redux/store/store";
import './styles/main.scss'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App
