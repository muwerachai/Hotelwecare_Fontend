import { Routes, Route } from "react-router-dom";
import EmailLoginModal from "../components/Modal/EmailLoginModal";
import LoginRegisterModal from "../components/Modal/LoginRegisterModal";
import PhoneAuthModal from "../components/Modal/PhoneAuthModal";
import RegisterModal from "../components/Modal/RegisterModal";
import PrivacyTypeContainer from "../feature/create-host/PrivacyTypeContainer";
import PropertyTypeContainer from "../feature/create-host/PropertyTypeContainer";
import TypeGroupContainer from "../feature/create-host/TypeGroupContainer";
import ReserveComponent from "../components/Modal/ReserveComponent";
import AuthLayout from "../layout/auth/AuthLayout";
import HomeLayout from "../layout/auth/HomeLayout";
import MainContainer from "../layout/container/MainContainer";
import AccountPage from "../pages/AccountPage";
import BecomeHostPage from "../pages/BecomeHostPage";
import ConfirmPaymentPage from "../pages/ConfirmPaymentPage";
import CreateHostPage from "../pages/CreateHostPage";

import HomePage from "../pages/HomePage";
import RoomPage from "../pages/RoomPage";
import WhitelistPage from "../pages/WhitelistPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/account/:id" element={<AccountPage />} />
          <Route path="/whitelist/:id" element={<WhitelistPage />} />
          <Route path="/confirmPayment/:id" element={<ConfirmPaymentPage />} />
          <Route path="/rooms/:id" element={<RoomPage />} />
          <Route path="/login" element={<LoginRegisterModal />}></Route>
          <Route path="/becomeHosting" element={<BecomeHostPage />}></Route>
          {/* <Route path='/loginEmail' element={<EmailLoginModal />}></Route>
          <Route path="/register" element={<RegisterModal />}></Route>
          <Route path="/phoneAuth" element={<PhoneAuthModal />}></Route>
          <Route path="/reserve" element={<ReserveComponent />}></Route>*/}
        </Route>
      </Routes>
    </>
  );
}
export default Router;
