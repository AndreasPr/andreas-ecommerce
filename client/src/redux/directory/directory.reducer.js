const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/VMLkWZZ/main-hats.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/9snvvqj/main-jackets.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/HHQBbDJ/main-sneakers.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/khHbHzT/main-women.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/QFY2hLn/main-men.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ] 
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default directoryReducer;