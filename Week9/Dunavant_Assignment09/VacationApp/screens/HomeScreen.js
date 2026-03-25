import { View, FlatList, StyleSheet } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryTile from "../components/CountryTile";

export default function HomeScreen({ navigation }) {

  function renderCountry(itemData) {
    return (
      <CountryTile
        title={itemData.item.name}
        color={itemData.item.color}
        onPress={() =>
          navigation.navigate("Destinations", {
            countryId: itemData.item.id,
          })
        }
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={COUNTRIES}
        renderItem={renderCountry}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});