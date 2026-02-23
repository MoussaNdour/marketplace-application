import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Providers from "./pages/Providers";
import About from "./pages/About";
import MainLayout from "./pages/layout/MainLayout";
import EmptyLayout from "./pages/layout/EmptyLayout";
import ProtectedRoute from "./pages/layout/ProtectedRoute";
import AskingService from "./pages/AskingService";
import ServicesProposals from "./pages/ServicesProposals";
import RegisterForm from './components/RegistrationForm';
import SearchResultPage from './pages/SearchResult';
import ProviderProfilePreviewPage from './pages/providerprofilepreview';
import ProvidersByService from './pages/ProvidersByService';
import ProposalsByService from './pages/proposalsbyservice';


const App = () => {

    return(

        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/providers" element={<Providers />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/askService" element={<ProtectedRoute children={<AskingService/>} />} />
                    <Route path={"/servicesproposals"} element={<ServicesProposals />} />
                    <Route path="/search/:searchData" element={<SearchResultPage/>} />
                    <Route path="/providers/:id" element={<ProviderProfilePreviewPage/>} />
                    <Route path="/services/:id/providers" element={<ProvidersByService/>} />
                    <Route path="/services/:id/proposals" element={<ProposalsByService/>} />
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