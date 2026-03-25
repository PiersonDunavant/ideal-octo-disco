import { View, Text, Image, Pressable } from "react-native";

export default function DestinationItem({ item, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
        <View>
          <Text>{item.name}</Text>
          <Text>Cost: ${item.cost}</Text>
          <Text>Year: {item.year}</Text>
          <Text>Rating: {item.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}