import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';

const Orders = (props) => {
  const orders = useSelector((state) => state.orders.orders)
  return (
    <FlatList
      data={orders}
      renderItem={(data) => (
        <OrderItem order={data.item} />
      )}
    />
  );
};

Orders.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  }
}

export default Orders;
