import { Tabs, useNavigation } from "expo-router";
import CustomHeader from "../components/CustomHeader";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function TabsRoutesLayout() {
  const navigation = useNavigation();
  return (
      <Tabs>
        <Tabs.Screen name="(index)" options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => <FontAwesome5 name="theater-masks" size={size} color={color} />,
          tabBarLabel: 'Peças',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarActiveTintColor: 'green',
        }}/>
        <Tabs.Screen name="calendar" options={{
          header: () => <CustomHeader title="Calendário de eventos"/>,
          headerShown: true,
          tabBarIcon: ({size, color}) => <Ionicons name="calendar-outline" size={size} color={color}/>,
          tabBarLabel: 'Calendário',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarActiveTintColor: 'green',
        }}/>
        <Tabs.Screen name="settings" options={{
          header: () => <CustomHeader title="Configurações"/>,
          headerShown: true,
          tabBarIcon: ({size, color}) => <Ionicons name="settings-outline" size={size} color={color}/>,
          tabBarLabel: 'Configurações',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarActiveTintColor: 'green',
        }}/>
      </Tabs>
  );
}
