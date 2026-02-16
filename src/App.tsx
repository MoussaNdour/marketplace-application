import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Providers from "./pages/Providers";
import About from "./pages/About";
import HowItWork from "./pages/HowItWork";
import MainLayout from "./pages/layout/MainLayout";
import EmptyLayout from "./pages/layout/EmptyLayout";
import ProtectedRoute from "./pages/layout/ProtectedRoute";
import AskingService from "./pages/AskingService";
import ServicesProposals from "./pages/ServicesProposals";
import RegisterForm from './components/RegistrationForm';


const App = () => {

    return(

        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/providers" element={<Providers />} />
                    <Route path="/howitwork" element={<HowItWork />} />
                    <Route path="/about" element={<ProtectedRoute>
                        <About/>
                    </ProtectedRoute>} />
                    <Route path="/askService" element={<ProtectedRoute children={<AskingService/>} />} />
                    <Route path={"/servicesproposals"} element={<ServicesProposals />} />
                </Route>

                <Route element={<EmptyLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>


    )
}

export default App;