import Country from "../models/Country";
import Destination from "../models/Destination";

export const COUNTRIES = [
  new Country("c1", "USA", "#f5428d"),
  new Country("c2", "France", "#f54242"),
  new Country("c3", "Japan", "#f5a442"),
  new Country("c4", "Italy", "#f5d142"),
  new Country("c5", "Brazil", "#368dff"),
  new Country("c6", "Australia", "#41d95d"),
  new Country("c7", "Canada", "#9eecff"),
  new Country("c8", "Spain", "#b9ffb0"),
  new Country("c9", "Mexico", "#ffc7ff"),
  new Country("c10", "Germany", "#47fced"),
];

export const DESTINATIONS = [
  new Destination("d1","c1","New York",1500,1624,4.7,"Big city","https://images.unsplash.com/photo-1549924231-f129b911e442"),
  new Destination("d2","c1","Los Angeles",1300,1781,4.5,"Hollywood","https://images.unsplash.com/photo-1505761671935-60b3a7427bad"),

  new Destination("d3","c2","Paris",2000,508,4.9,"Eiffel Tower","https://images.unsplash.com/photo-1502602898657-3e91760cbb34"),
  new Destination("d4","c2","Nice",1800,350,4.6,"Beach city","https://images.unsplash.com/photo-1507525428034-b723cf961d3e"),

  new Destination("d5","c3","Tokyo",2200,1603,4.8,"Modern city","https://images.unsplash.com/photo-1549692520-acc6669e2f0c"),
  new Destination("d6","c3","Kyoto",1900,794,4.7,"Historic temples","https://images.unsplash.com/photo-1526481280690-906a0f11a13c"),

  new Destination("d7","c4","Rome",2100,-753,4.8,"Ancient city","https://images.unsplash.com/photo-1526481280690-906a0f11a13c"),
  new Destination("d8","c4","Venice",2000,421,4.7,"Canals","https://images.unsplash.com/photo-1505761671935-60b3a7427bad"),

  new Destination("d9","c5","Rio",1700,1565,4.6,"Carnival","https://images.unsplash.com/photo-1507525428034-b723cf961d3e"),
  new Destination("d10","c5","Sao Paulo",1600,1554,4.4,"Large city","https://images.unsplash.com/photo-1549924231-f129b911e442"),

  new Destination("d11","c6","Sydney",2300,1788,4.9,"Opera House","https://images.unsplash.com/photo-1505761671935-60b3a7427bad"),
  new Destination("d12","c6","Melbourne",2200,1835,4.8,"Culture","https://images.unsplash.com/photo-1549692520-acc6669e2f0c"),

  new Destination("d13","c7","Toronto",1800,1793,4.6,"CN Tower","https://images.unsplash.com/photo-1549924231-f129b911e442"),
  new Destination("d14","c7","Vancouver",2000,1886,4.7,"Mountains","https://images.unsplash.com/photo-1507525428034-b723cf961d3e"),

  new Destination("d15","c8","Madrid",1900,860,4.7,"Capital","https://images.unsplash.com/photo-1549692520-acc6669e2f0c"),
  new Destination("d16","c8","Barcelona",2100,15,4.8,"Beach + city","https://images.unsplash.com/photo-1505761671935-60b3a7427bad"),

  new Destination("d17","c9","Cancun",1600,1970,4.7,"Resort","https://images.unsplash.com/photo-1507525428034-b723cf961d3e"),
  new Destination("d18","c9","Mexico City",1500,1325,4.5,"Historic","https://images.unsplash.com/photo-1549924231-f129b911e442"),

  new Destination("d19","c10","Berlin",2000,1237,4.6,"History","https://images.unsplash.com/photo-1549692520-acc6669e2f0c"),
  new Destination("d20","c10","Munich",2100,1158,4.7,"Oktoberfest","https://images.unsplash.com/photo-1505761671935-60b3a7427bad"),
];