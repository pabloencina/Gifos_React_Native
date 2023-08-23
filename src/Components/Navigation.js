import createBottomTabNavigator from "@react-navigation/bottom-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//screens

import Home from "./Home-Inicio/Home";
import CardGift from "./CardGifs/CardGifs";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [category, setCategory] = useState("");
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={
          <Home
            fontRoboto={fontRoboto}
            fontMontserrat={fontMontserrat}
            setCategory={setCategory}
          />
        }
      />
      <Tab.Screen
        name="Gifos"
        component={<CardGift fontRoboto={fontRoboto} category={category} />}
      />
    </Tab.Navigator>
  );
}

export default function Navigation({
  fontRoboto = { fontRoboto },
  fontMontserrat = { fontMontserrat },
  setCategory = { setCategory },
  category = { category },
}) {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
