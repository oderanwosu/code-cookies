import { Redirect, router } from "expo-router";
import { Text } from "react-native";

export default function Page(){
  return (<Redirect href={'/home'}/>)
}