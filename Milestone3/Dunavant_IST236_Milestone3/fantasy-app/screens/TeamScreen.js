// Displays user's drafted team
import React, { useState } from 'react';

// Import components
import { View, Text, FlatList, Button, Modal } from 'react-native';

// TeamScreen receives team + setTeam for removing players
export default function TeamScreen({ team, setTeam }) {

  // Track selected player index
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Control modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // Main container with forest green background
    <View style={{ flex:1, padding:20, backgroundColor:'#228B22' }}>

      {/* Title */}
      <Text style={{ 
        fontSize:24, 
        fontWeight:'bold', 
        marginBottom:20, 
        color:'white' 
      }}>
        My Team
      </Text>

      {/* Display team list */}
      <FlatList
        data={team}
        keyExtractor={(item, index) => index.toString()}

        renderItem={({ item, index }) => (
          <View style={{
            padding:15,
            backgroundColor:'white',   // FIXED (was green)
            marginBottom:15,
            borderRadius:8
          }}>

            {/* Player name */}
            <Text style={{ marginBottom:10 }}>
              {item.name}
            </Text>

            {/* Open confirmation modal */}
            <Button
              title="Remove Player"
              onPress={() => {
                setSelectedIndex(index);
                setModalVisible(true);
              }}
            />

          </View>
        )}
      />

      {/* MODAL FOR CONFIRMATION */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'rgba(0,0,0,0.5)'
        }}>

          <View style={{
            backgroundColor:'white',
            padding:20,
            borderRadius:10,
            width:'80%'
          }}>

            <Text style={{ marginBottom:15 }}>
              Are you sure you want to remove this player?
            </Text>

            {/* Confirm remove */}
            <Button
              title="Yes, Remove"
              onPress={() => {
                const updatedTeam = team.filter((_, i) => i !== selectedIndex);
                setTeam(updatedTeam);
                setModalVisible(false);
              }}
            />

            {/* Cancel */}
            <Button
              title="Cancel"
              onPress={() => setModalVisible(false)}
            />

          </View>
        </View>
      </Modal>

    </View>
  );
}