export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (items, total) => {
  return {
    type: ADD_ORDER,
    data: {
      items, 
      total
    }
  }
}