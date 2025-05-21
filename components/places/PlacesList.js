import { FlatList, StyleSheet } from "react-native";

const PlacesList = ({ places }) => {
  return <FlatList data={places} keyExtractor={(item) => item.id} />;
};

export default PlacesList;

const styles = StyleSheet.create({});
