import React, { useCallback, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as productActions from '../../store/actions/product';

const initialState = {
  title: '',
  imageUrl: '',
  price: '',
  description: '',
}

const EditProduct = (props) => {
  const dispatch = useDispatch();
  const id = props.navigation.getParam('id');
  const selectedProduct = useSelector((state) =>
    state.products.userProducts.find((product) => product.id === id));

  const [data, setData] = useState(selectedProduct || initialState)

  const submitHandler = useCallback(() => {
    if (selectedProduct) {
      dispatch(productActions.editProduct(id, data))
    } else {
      dispatch(productActions.createProduct(data))
    }
  }, []);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler })
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput  
            style={StyleSheet.input} 
            value={data.title} 
            onChangeText={(text) => setData({ ...data, title: text })} 
            autoCapitalize="sentences"
            autoCorrect
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput 
            style={StyleSheet.input} 
            value={data.imageUrl} 
            onChangeText={(text) => setData({ ...data, imageUrl: text })} 
          />
        </View>
        {!selectedProduct && (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput 
              style={StyleSheet.input} 
              value={data.price} 
              onChangeText={(text) => setData({ ...data, price: text })} 
              keyboardType="decimal-pad"
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={StyleSheet.input} value={data.description} onChangeText={(text) => setData({ ...data, description: text })} />
        </View>
      </View>
    </ScrollView>
  )
}

EditProduct.navigationOptions = (navData) => {
  const id = navData.navigation.getParam('id');
  const onSubmit = navData.navigation.getParam('submit');

  return {
    headerTitle: id ? 'Edit Product' : 'Create Product',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
          onPress={onSubmit}
        />
      </HeaderButtons>
    )
  }
}

export default EditProduct

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
  },
  formControl: {
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  // input: {
  //   paddingVertical: 2,
  //   paddingHorizontal: 8,
    
  // },
})
