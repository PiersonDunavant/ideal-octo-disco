// Displays players and allows drafting
import React from 'react';

// Import components
import { View, Text, FlatList, Button } from 'react-native';

export default function PlayersScreen({ team, setTeam }) {

  // Sample player data
  const players = [
    { name: 'LeBron James' },
    { name: 'Steph Curry' },
    { name: 'Kevin Durant' }
  ];

  return (
    // Main container with forest green theme
    <View style={{ 
      flex:1, 
      padding:20, 
      backgroundColor:'#228B22' 
    }}>

      {/* Screen title */}
      <Text style={{ 
        fontSize:24, 
        fontWeight:'bold', 
        marginBottom:20, 
        color:'white' 
      }}>
        Players
      </Text>

      {/* Player list */}
      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}

        renderItem={({ item }) => {

          // Check if player is already on team
          const alreadyOnTeam = team.some(p => p.name === item.name);

          return (
            <View style={{
              padding:15,
              backgroundColor:'white',
              marginBottom:15,
              borderRadius:8
            }}>

              {/* Player name */}
              <Text style={{ marginBottom:10 }}>
                {item.name}
              </Text>

              {/* Draft button */}
              <Button
                title={alreadyOnTeam ? "Already Drafted" : "Draft Player"}
                disabled={alreadyOnTeam}
                onPress={() => {

                  // Add player to team
                  setTeam([...team, item]);

                  // Show confirmation
                  alert("Player added to team");
                }}
              />

            </View>
          );
        }}
      />
    </View>
  );
}