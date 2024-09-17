import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offeres = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" />
      {/* main cover */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      {/* offered menu items */}
      <MenuCategory items={offeres} />
      {/* dessert menu items */}
      <MenuCategory items={desserts} title="dessert" coverImg={dessertImg} />
      <MenuCategory items={pizzas} title="pizza" coverImg={pizzaImg} />
      <MenuCategory items={salads} title="salad" coverImg={saladImg} />
      <MenuCategory items={soups} title="soup" coverImg={soupImage} />
    </div>
  );
};

export default Menu;
