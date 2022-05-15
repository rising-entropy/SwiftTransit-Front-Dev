import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import UserLogin from './Login/UserLogin';
import UserSignup from './Signup/UserSignup';
import ConductorLogin from './Login/ConductorLogin';
import AdminLogin from './Login/AdminLogin';
import CreateConductor from './Main/CreateConductor';
import UserDashboard from './Main/UserDashboard';
import AdminDashboard from './Main/AdminDashboard';
import ConductorDashboard from './Main/ConductorDashboard';
import SyncTable from './Main/AdminTable'
import CustAdminDashboard from './Main/CustomerData'
import ScannerApp from './Main/Components/scanner';
import CondAdminDashboard from './Main/ConductorData';
import BusTravels from './Main/BusTravels';
import AllBusTravels from './Main/AllBusTravels';
import ParticularTravel from './Main/ParticularTravel';
import Generator from './Main/Components/Generator';
import WithRoot from './Landing/Home'

import BookTicketWallet from './Main/BookTicketWallet'
import BookTicketCash from './Main/BookTicketCash'
import BookTicketSMS from './Main/BookTicketSMS'

import BookPassWallet from './Main/BookPassWallet'
import BookPassCash from './Main/BookPassCash'
import BookPassSMS from './Main/BookPassSMS'

import UserScanCash from './Main/UserScanCash'
import UserScanWallet from './Main/UserScanWallet'

import VerifySmartTicket from './Main/VerifySmartTicket';
import VerifySMSTicket from './Main/VerifySMSTicket';
import AllUserTickets from './Main/AllUserTickets';
import BusData from './Main/BusData';


//import Main from './Main/Landing';
function App() {
    
  return (
      <div>
        <Router>
          <div>
            <Routes>
            <Route exact path="/" element={<WithRoot/>} />
              <Route exact path="/conductor-login" element={<ConductorLogin/>} />
              <Route exact path="/user-login" element={<UserLogin/>} />
              <Route exact path="/admin-login" element={<AdminLogin/>} />
              <Route exact path="/user-signup" element={<UserSignup/>} />
              <Route exact path="/create-conductor" element={<CreateConductor/>} />
              <Route exact path="/user-dashboard" element={<UserDashboard/>} />
              <Route exact path="/admin-dashboard" element={<AdminDashboard/>} />
              <Route exact path="/conductor-dashboard" element={<ConductorDashboard/>} />
              <Route exact path="/customer-data" element={<CustAdminDashboard/>} />
              <Route exact path="/conductor-data" element={<CondAdminDashboard/>} />
              <Route exact path="/admin-table" element={<SyncTable/>} />
              <Route exact path="/scanner" element={<ScannerApp/>} />
              <Route exact path="/generator" element={<Generator/>} />
              <Route exact path="/bus-travels" element={<BusTravels/>} />
              <Route exact path="/bus-travel/:id" element={<ParticularTravel/>} />
              <Route exact path="/all-bus-travels" element={<AllBusTravels/>} />
              <Route exact path="/bus-travel/:id/book-ticket-wallet" element={<BookTicketWallet/>} />
              <Route exact path="/bus-travel/:id/book-ticket-sms" element={<BookTicketSMS/>} />
              <Route exact path="/bus-travel/:id/book-ticket-cash" element={<BookTicketCash/>} />
              <Route exact path="/bus-travel/:id/book-pass-wallet" element={<BookPassWallet/>} />
              <Route exact path="/bus-travel/:id/book-pass-sms" element={<BookPassSMS/>} />
              <Route exact path="/bus-travel/:id/book-pass-cash" element={<BookPassCash/>} />

              <Route exact path="/user/scan-cash" element={<UserScanCash/>} />
              <Route exact path="/user/scan-wallet" element={<UserScanWallet/>} />

              <Route exact path="/bus-travel/:id/verify-sms-ticket" element={<VerifySMSTicket/>} />
              <Route exact path="/bus-travel/:id/verify-smart-ticket" element={<VerifySmartTicket/>} />

              <Route exact path="/user/all-user-tickets" element={<AllUserTickets/>} />

              <Route exact path="/buses/all" element={<BusData/>} />

            </Routes>
            
          </div>
      </Router>
      </div>
  );
}

export default App;
