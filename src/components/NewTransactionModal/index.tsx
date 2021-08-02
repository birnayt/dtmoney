import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import * as S from './styles';

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
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
       type="button" 
       onClick={handleCloseNewTransactionModal} 
       className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container>
        <h2>Cadastrar transação</h2>

        <input
         placeholder="Título"
        />

        <input
         placeholder="Valor"
        />

        <S.TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button
            type="button"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </S.TransactionTypeContainer>

        <input
         placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </S.Container>
    </Modal>
  );
}