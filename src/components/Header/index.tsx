import logoImg from '../../assets/logo.svg';

import * as S from './styles';

interface HeaderProps {
  handleOpenNewTransactionModal: () => void;
}

export function Header({ handleOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  )
}