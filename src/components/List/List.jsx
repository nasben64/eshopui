import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     img2: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     title: "Fashion",
  //     isNew: true,
  //     oldPrice: 120,
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.unsplash.com/photo-1613784320918-0f45d025478b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80",
  //     img2: "https://images.unsplash.com/photo-1616994488535-d6ede04af436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
  //     title: "coats",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 15,
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.unsplash.com/photo-1549575810-b9b7abc51d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     img2: "https://images.unsplash.com/photo-1561932850-f13404855e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80",
  //     title: "Skirt",
  //     oldPrice: 34,
  //     price: 30,
  //   },
  //   {
  //     id: 4,
  //     img: "https://images.unsplash.com/photo-1569520254493-8edfdeaa8fae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     img2: "https://images.unsplash.com/photo-1607611439230-fcbf50e42f7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     title: "Hat",
  //     oldPrice: 15,
  //     price: 11,
  //   },
  // ];

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
