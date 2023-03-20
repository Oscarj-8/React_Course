import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Pizza", "French fries", "baked potatoes"];

const MealsProvider = ({ children }) => {
  const [meals] = React.useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
