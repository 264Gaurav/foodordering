export const filterRestaurant = (searchText, allRestaurants) => {
    const filteredData = allRestaurants.filter((restaurant) => {
      return (
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    return filteredData;
};