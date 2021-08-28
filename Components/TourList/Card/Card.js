import React from "react";
import { View } from "react-native";
import Content from "./Content/CardContent";

// Information Props
const Name = "Fantomele Galatiului";
const Time = "8h";
const Group = "9";
const Location = "Galati";

// Card Backgrounds
const Background1 = { uri: "https://go4booking.net/uploads/cms/images/1572624564_2.jpg" };
const Background2 = { uri: "https://all.accor.ro/userfiles/galatioras_1602661176_1260x560_tt_80.jpg" };
const Background3 = { uri: "https://www.expat.com/upload/guide/1563428489-galati-news_item_slider-t1563428489.jpg" };
const Background4 = { uri: "https://apdmgalati.ro/wp-content/uploads/2020/12/ArtHeart-APDMports-0563-scaled.jpg" };
const Background5 = { uri: "https://ugalmat.ugal.ro/old-site/Galati,%20Romania/04a.jpg" };

// Function Component
const Card = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Content name={Name} time={Time} group={Group} location={Location} background={Background1} />
      <Content name={Name} time={Time} group={Group} location={Location} background={Background2} />
      <Content name={Name} time={Time} group={Group} location={Location} background={Background3} />
      <Content name={Name} time={Time} group={Group} location={Location} background={Background4} />
      <Content name={Name} time={Time} group={Group} location={Location} background={Background5} />
    </View>
  );
};

export default Card;
