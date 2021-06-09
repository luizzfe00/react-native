export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  }
}

export const createProduct = (data) => {
  return {
    type: CREATE_PRODUCT,
    product: {
      title: data.title,
      imageUrl: data.imageUrl,
      price: +data.price,
      description: data.description,
    }
  }
}

export const editProduct = (id, data) => {
  return {
    type: UPDATE_PRODUCT,
    id,
    product: {
      title: data.title,
      imageUrl: data.imageUrl,
      description: data.description,
    }
  }
}