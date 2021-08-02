import { useState } from "react";
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isOpenNewTransactionModal, setIsOpenNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsOpenNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsOpenNewTransactionModal(false);
  }

  return (
    <>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isOpenNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Modal de transações</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

