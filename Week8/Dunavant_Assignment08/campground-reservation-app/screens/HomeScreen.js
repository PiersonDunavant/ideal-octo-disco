import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
ImageBackground,
TouchableOpacity,
ScrollView
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";

import Title from "../components/Title";
import ReserveButton from "../components/ReserveButton";

export default function HomeScreen() {

// Set default dates
const today = new Date();

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
tomorrow.setHours(11, 0, 0);   // checkout 11 AM

today.setHours(15, 0, 0);      // checkin 3 PM

const [checkIn, setCheckIn] = useState(today);
const [checkOut, setCheckOut] = useState(tomorrow);

const [showCheckIn, setShowCheckIn] = useState(false);
const [showCheckOut, setShowCheckOut] = useState(false);

const [guests, setGuests] = useState(1);
const [sites, setSites] = useState(1);

const [reservation, setReservation] = useState(null);

function reserveNow() {

setReservation({
checkIn,
checkOut,
guests,
sites
});

}

return (

<ImageBackground
source={require("../assets/images/campground.png")}
style={styles.background}
>

<View style={styles.overlay}>

<ScrollView>

<Title text="Pine Ridge Campground" />

<TouchableOpacity onPress={() => setShowCheckIn(true)}>
<Text style={styles.selector}>
Check In: {checkIn.toLocaleString()}
</Text>
</TouchableOpacity>

{showCheckIn && (
<DateTimePicker
value={checkIn}
mode="datetime"
display="default"
onChange={(event, selectedDate) => {
setShowCheckIn(false);
if (selectedDate) setCheckIn(selectedDate);
}}
/>
)}

<TouchableOpacity onPress={() => setShowCheckOut(true)}>
<Text style={styles.selector}>
Check Out: {checkOut.toLocaleString()}
</Text>
</TouchableOpacity>

{showCheckOut && (
<DateTimePicker
value={checkOut}
mode="datetime"
display="default"
onChange={(event, selectedDate) => {
setShowCheckOut(false);
if (selectedDate) setCheckOut(selectedDate);
}}
/>
)}

<Text style={styles.label}>
Number of Guests
</Text>

<RNPickerSelect
onValueChange={(value) => setGuests(value)}
items={[
{ label: "1", value: 1 },
{ label: "2", value: 2 },
{ label: "3", value: 3 },
{ label: "4", value: 4 },
{ label: "5", value: 5 },
{ label: "6", value: 6 },
{ label: "7", value: 7 },
{ label: "8", value: 8 },
{ label: "9", value: 9 },
{ label: "10", value: 10 },
{ label: "11", value: 11 },
{ label: "12", value: 12 },
{ label: "13", value: 13 },
{ label: "14", value: 14 },
{ label: "15", value: 15 }
]}
/>

<Text style={styles.label}>
Number of Campsites
</Text>

<RNPickerSelect
onValueChange={(value) => setSites(value)}
items={[
{ label: "1", value: 1 },
{ label: "2", value: 2 },
{ label: "3", value: 3 },
{ label: "4", value: 4 },
{ label: "5", value: 5 }
]}
/>

<ReserveButton onPress={reserveNow} />

{reservation && (

<View style={styles.results}>

<Text style={styles.resultText}>
Check In: {reservation.checkIn.toLocaleString()}
</Text>

<Text style={styles.resultText}>
Check Out: {reservation.checkOut.toLocaleString()}
</Text>

<Text style={styles.resultText}>
Guests: {reservation.guests}
</Text>

<Text style={styles.resultText}>
Campsites: {reservation.sites}
</Text>

</View>

)}

</ScrollView>

</View>

</ImageBackground>

);

}

const styles = StyleSheet.create({

background: {
flex: 1
},

overlay: {
flex: 1,
backgroundColor: "rgba(0,0,0,0.6)",
padding: 25
},

selector: {
color: "white",
fontSize: 18,
marginVertical: 10
},

label: {
color: "white",
marginTop: 15
},

results: {
marginTop: 25
},

resultText: {
color: "white",
fontSize: 16
}

});