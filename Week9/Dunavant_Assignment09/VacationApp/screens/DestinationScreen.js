import { View, FlatList, Modal, Text, Image, Button } from "react-native";
import { useState } from "react";
import { DESTINATIONS } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";

export default function DestinationScreen({ route }) {
  const [selected, setSelected] = useState(null);

  const countryId = route.params.countryId;

  const filtered = DESTINATIONS.filter(
    (item) => item.countryId === countryId
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DestinationItem item={item} onPress={() => setSelected(item)} />
        )}
      />

      <Modal
        visible={!!selected}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setSelected(null)}
      >
        {selected && (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{ uri: selected.imageUrl }}
              style={{ width: 300, height: 200 }}
            />
            <Text>{selected.name}</Text>
            <Text>{selected.description}</Text>
            <Button title="Close" onPress={() => setSelected(null)} />
          </View>
        )}
      </Modal>
    </View>
  );
}