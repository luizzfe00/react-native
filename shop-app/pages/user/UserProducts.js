import React from 'react';
import { FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import colors from '../../styles/colors';
import ProductItem from '../../components/shop/ProductItem';
import * as productActions from '../../store/actions/product';

const UserProducts = (props) => {
  const dispatch = useDispatch();
  const userProducts = useSelector((state) => state.products.userProducts);

  const editHandler = (id) => {
    props.navigation.navigate('EditProduct', { id });
  }

  return (
    <FlatList
      data={userProducts}
      renderItem={(data) => (
        <ProductItem 
          product={data.item} 
          onSelect={() => editHandler(data.item.id)}
        >
          <Button 
            title="Edit" 
            onPress={() => editHandler(data.item.id)} 
          />
          <Button 
            title="Delete" 
            onPress={() => dispatch(productActions.deleteProduct(data.item.id))} 
            color="red"
          />
        </ProductItem>
      )}
    />
  );
};

UserProducts.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Products',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => navData.navigation.navigate('EditProduct')}
        />
      </HeaderButtons>
    )
  }
}

export default UserProducts;
