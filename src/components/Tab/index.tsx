import React, {useCallback} from 'react';
import {Container, Button} from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface IProps {
  state: any;
  navigation: any;
}

export default function Tab({state, navigation}: IProps) {
  return (
    <Container>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;

        const dataTab: any = {
          icon: 'home',
        };

        if (route.name === 'Search') {
          dataTab.icon = 'search';
        }

        if (route.name === 'Categories') {
          dataTab.icon = 'grid';
        }

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const onPress = useCallback(() => {
          navigation.navigate(route.name);
        }, [route]);

        return (
          <Button onPress={onPress} key={index}>
            <Icon
              name={dataTab.icon}
              color={isFocused ? '#FFB849' : '#B2B9C2'}
              size={26}
            />
          </Button>
        );
      })}
    </Container>
  );
}
