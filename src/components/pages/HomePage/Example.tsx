import { View, Text, ScrollView } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  TabsProvider,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import CardItem from "./CardItem";
const cardItems = [
  { name: "Dev Stack", lastText: "Hey there tell", time: "5:27 PM" },
  { name: "Balram", lastText: "Not doing anything", time: "Yesterday" },
  { name: "Test", lastText: "Hey there", time: "Yesterday" },

  { name: "Test 2", lastText: "Not doing anything", time: "Yesterday" },

  { name: "Test 3", lastText: "Here we go", time: "Yesterday" },
  { name: "Test 4", lastText: "Lets go somewhere", time: "Yesterday" },
  { name: "Test5", lastText: "Hey there", time: "Yesterday" },

  { name: "Test 6", lastText: "Not doing anything", time: "Yesterday" },
  { name: "Test 7", lastText: "Here we go", time: "Yesterday" },
];

function Example() {
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: "#008069",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Appbar.BackAction
          onPress={() => {}}
          style={{
            width: 0,
          }}
        />
        <Appbar.Content
          title="WhatsApp"
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
          titleStyle={{
            color: "#fff",
            fontSize: 20,
            // fontFamily: "Roboto",
            fontWeight: "700",
          }}
        />
        <Appbar.Action icon="magnify" iconColor="#fff" onPress={() => {}} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {}}
          iconColor="#fff"
        />
      </Appbar.Header>
      <TabsProvider
        defaultIndex={0}
        // onChangeIndex={handleChangeIndex} optional
      >
        <Tabs
          uppercase={false} // true/false | default=true (on material v2) | labels are uppercase
          // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
          // iconPosition // leading, top | default=leading
          style={{ backgroundColor: "#008069" }} // works the same as AppBar in react-native-paper
          // dark={false} // works the same as AppBar in react-native-paper
          // theme={} // works the same as AppBar in react-native-paper
          // mode="scrollable" // fixed, scrollable | default=fixed
          // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
          // disableSwipe={false} // (default=false) disable swipe to left/right gestures

          tabLabelStyle={{
            color: "#fff",
            fontSize: 14,
            // fontFamily: "Roboto",
            fontWeight: "700",
            borderBottomColor: "#fff",
          }}
        >
          <TabScreen icon="camera" label="">
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="CHATS" badge={33}>
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="STATUS">
            <View style={{ backgroundColor: "black", flex: 1 }} />
          </TabScreen>
          <TabScreen
            label="CALLS"
            // icon="bag-suitcase"
            // optional props
            // badge={true} // only show indicator
            // badge="text"
            // badge={1}
            // onPressIn={() => {
            //   console.log('onPressIn explore');
            // }}
            // onPress={() => {
            //   console.log('onPress explore');
            // }}
          >
            <View style={{ backgroundColor: "red", flex: 1 }} />
          </TabScreen>
        </Tabs>
      </TabsProvider>
      <ScrollView>
        {cardItems.map((item) => (
          <CardItem {...item} />
        ))}
      </ScrollView>
    </View>
  );
}

function ExploreWitHookExamples() {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{ flex: 1 }}>
      <Title>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button>
    </View>
  );
}

export default Example;
