import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Input, ButtonSearch} from './styles';

interface IProps {
  onClick(): void;
  onChange(text: string): void;
  defaultValue?: string;
}

export default function Searchbar({
  onClick,
  onChange,
  defaultValue = '',
}: IProps) {
  return (
    <Container>
      <Input
        placeholder="Search"
        onChangeText={onChange}
        defaultValue={defaultValue}
      />
      <ButtonSearch onPress={onClick}>
        <Icon name="search" color="#fff" size={18} />
      </ButtonSearch>
    </Container>
  );
}
