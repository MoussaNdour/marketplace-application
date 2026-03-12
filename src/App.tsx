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
import RegisterForm from './pages/RegistrationForm';
import SearchResultPage from './pages/SearchResult';
import ProviderProfilePreviewPage from './pages/providerprofilepreview';
import ProvidersByService from './pages/ProvidersByService';
import ProposalsByService from './pages/proposalsbyservice';
import ProviderLayout from './pages/layout/ProviderLayout';
import DashboardOverview from './pages/provider/dashboardoverview';
import ServicesCatalogPage from './pages/provider/servicescatagalog';
import RequestsPage from './pages/provider/requestspages';
import ReviewFeedPage from './pages/provider/reviewfeedpage';


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
                    <Route path="/search" element={<SearchResultPage searchData=''/>} />

                    <Route path="/providers/:id" element={<ProviderProfilePreviewPage/>} />
                    <Route path="/services/:id/providers" element={<ProvidersByService/>} />
                    <Route path="/services/:id/proposals" element={<ProposalsByService/>} />
                    
                </Route>
                <Route element={<EmptyLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterForm/>}/>
                    <Route path="/provider/dashboard/overview" element={<ProviderLayout children={<DashboardOverview/>}/>}/>
                    <Route path="/provider/dashboard/servicescatalog" element={<ProviderLayout children={<ServicesCatalogPage/>}/>}/>
                    <Route path="/provider/dashboard/requests" element={<ProviderLayout children={<RequestsPage/>}/>}/>
                    <Route path="/provider/dashboard/reviewfeed" element={<ProviderLayout children={<ReviewFeedPage/>}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>


    )
}

export default App;