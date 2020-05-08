export const fetchRestaurants = {
    query: `
        query {
          restaurants{
              _id
              name
              place_id
              address
              photo
              lat
              lng
              rating
              menu{
                _id
                name
                description
                photo
                price
                type
              }
              category{
                name
                key
              }
          }
        }
      `
  };


