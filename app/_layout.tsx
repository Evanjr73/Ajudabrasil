// import { Stack } from "expo-router";
// import { View } from "react-native-reanimated/lib/typescript/Animated";

// export default function RootLayout() {
//   return (
//     <Stack >
//      <Stack.Screen name="index" options={{title:"home"}}/>
//     </Stack>
//   );
// }


import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Slot></Slot>
  );
}
