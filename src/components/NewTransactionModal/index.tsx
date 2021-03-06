import { FormEvent, useState } from 'react';

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

import * as S from './styles';

interface NewTransactionModalProps {
  isOpenNewTransactionModal: boolean;
  handleCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({
  isOpenNewTransactionModal, 
  handleCloseNewTransactionModal,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value, 
      category,
      type
    };

    api.post('/transactions', data)
      .then(response => console.log(response))
      .catch(err => console.log('[ERR POST TRANSACTIONS]', err));
  }
  
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

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
         placeholder="Título"
         value={title}
         onChange={(event) => setTitle(event.target.value)}
        />

        <input
        type="number"
         placeholder="Valor"
         value={value}
         onChange={(event) => setValue(Number(event.target.value))}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
         placeholder="Categoria"
         value={category}
         onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </S.Container>
    </Modal>
  );
}