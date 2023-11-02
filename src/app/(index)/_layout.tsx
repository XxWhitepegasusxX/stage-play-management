import CustomHeader from "@/src/components/CustomHeader";
import { Stack, useNavigation } from "expo-router";

export default function StackRoutesLayout() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{
          header: () => <CustomHeader title="Minhas peças"/>,
        }}/>
        <Stack.Screen name="details" options={{
          header: () => <CustomHeader title="A pequena sereia"/>,
        }}/>
        <Stack.Screen name="[slug]" options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="addPlay" options={{
          header: () => <CustomHeader isSecondary title="Adicionar peça"/>,
        }}/>
      </Stack>
  );
}
