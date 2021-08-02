import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpenNewTransactionModal: boolean;
  handleCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({
  isOpenNewTransactionModal, 
  handleCloseNewTransactionModal,
}: NewTransactionModalProps) {
  return (
    <Modal
    isOpen={isOpenNewTransactionModal}
    onRequestClose={handleCloseNewTransactionModal}
    >
      <h2>Modal de transações</h2>
    </Modal>
  );
}