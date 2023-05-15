import { ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import Features from "./Features";
import client from "../sanity";

const Featuredcol = ({ navigation }) => {
  const [featuredall, setfeaturedall] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"] {
          ...,
         restaurants[]->{
           ...,
           dishes[]->,
           type->{
             name
           }
         }
       }`
      )
      .then((data) => {
        setfeaturedall(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View>
    { featuredall.length != 0 ?<View>
      {featuredall?.map((category) => {
        return (
          <Features
            key={category?._id}
            id={category?._id}
            title={category?.name}
            desc={category?.short_desc}
            navigation={navigation}
          />
        );
      })}
      </View>:
      <View className="items-center justify-center h-screen -top-32">
      <ActivityIndicator size="large" color="#00ff00" />
    </View>}
    </View>
  );
};

export default Featuredcol;
