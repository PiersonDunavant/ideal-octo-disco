import { View, Text, Pressable } from "react-native";

export default function CountryTile({ title, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={{ backgroundColor: color, margin: 10, padding: 30 }}>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
}