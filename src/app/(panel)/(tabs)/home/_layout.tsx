import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@/constants/colors";

export default function Layout() {
    return (
      <Tabs 
        screenOptions={{ 
          tabBarActiveTintColor: colors.white, 
          tabBarStyle: { 
            backgroundColor: colors.gray, 
            borderTopWidth: 1, 
            borderTopColor: 
            colors.grayLight 
          } 
        }}
      >
        <Tabs.Screen
          name="page"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="home" color={color} size={size} />
              }
              return <Ionicons name="home-outline" color={color} size={size} />
            }
          }}
        />

        <Tabs.Screen
          name="projectsUser"
          options={{
            title: 'Projetos',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="list" color={color} size={size} />
              }
              return <Ionicons name="list-outline" color={color} size={size} />
            }
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: 'Buscar',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="search" color={color} size={size} />
              }
              return <Ionicons name="search-outline" color={color} size={size} />
            }
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <Ionicons name="person" color={color} size={size} />
              }
              return <Ionicons name="person-outline" color={color} size={size} />
            }
          }}
        />
      </Tabs>
    );
  }