import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Toggle from './components/toggle/toggle';
import Modal from './components/modal/modal';
import Tab from './components/tab/tab';
import Tag from './components/tag/tag';
import AutoComplete from './components/auto_complete/autoComplete';
import ClickToEdit from './components/click_to_edit/clickToEdit';

function App() {
  return (
    <BrowserRouter basename="/wanted_pre_onboarding">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Toggle />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/tag" element={<Tag />} />
        <Route path="/auto_complete" element={<AutoComplete />} />
        <Route path="/click_to_edit" element={<ClickToEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
