import { Stack } from 'expo-router';

export default function MainLayout(){
  return(
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(auth)/signup/page"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(panel)/home/page"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(panel)/profile/page"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(panel)/project/page"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(panel)/newProject/page"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(panel)/projectsUser/page"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(panel)/search/page"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}