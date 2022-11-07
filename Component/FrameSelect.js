import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FrameSelect() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItem: "center",
        paddingVertical: 70,
        backgroundColor: "#edebeb"
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "row",
          marginVertical: 30,
          height:"50%",
          backgroundColor: "#edebeb"
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cam", {
              frame: 0,
            });
          }}
          style={{width:"50%"}}
        >
          <Image
            style={{marginHorizontal:"5%",maxWidth:"90%", maxHeight:"100%"}}
            source={require("../img/frame1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cam", {
              frame: 1,
            });
          }}
          style={{width:"50%"}}
        >
          <Image
            style={{marginHorizontal:"5%",maxWidth:"90%", maxHeight:"100%"}}
            source={require("../img/frame2.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "row",
          marginVertical: 30,
          height:"50%",
          backgroundColor: "#edebeb"
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cam", {
              frame: 2,
            });
          }}
          style={{width:"50%"}}
        >
          <Image
            style={{marginHorizontal:"5%",maxWidth:"90%", maxHeight:"100%"}}
            source={require("../img/frame3.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cam", {
              frame: 3,
            });
          }}
          style={{width:"50%"}}
        >
          <Image
            style={{marginHorizontal:"5%",maxWidth:"90%", maxHeight:"100%"}}
            source={require("../img/frame4.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}