import React, {Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput
} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};
export default class CreateStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
            previewImage: "image_1",
            dropdownHeight: 40
        };
    }
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        if (!this.state.fontsLoaded) {
            return <AppLoading />;
        } else {
            let preview_images = {
                image_1: require("../assets/story_image_1.png"),
                image_2: require("../assets/story_image_2.png"),
                image_3: require("../assets/story_image_3.png"),
                image_4: require("../assets/story_image_4.png"),
                image_5: require("../assets/story_image_5.png")
            };
}
    }
}
return(
    <View style={styles.container}>
       <SafeAreaView style={styles.droidSafeArea} />
       <View style={styles.appTitle}>
       <View style={styles.appIcon}>
        <Image source={require("../assets/logo.png")}
            style={styles.iconImage}>
        </Image>
        </View>
        <View style={styles.appTitleTextContainer}>
        <Text style={styles.appTitleText}>Novo Post</Text>
        </View>
       </View>
       <View style={styles.fieldsContainer}>
        <ScrollView>
            <Image source={preview_images[this.state.previewImage]}
                style={styles.previewImage}>
            </Image>
            <View style={{height: RFValue(this.state.dropdownHeight)}}>
                <DropDownPicker
                items={[
                    {label:"Image_1", value:"Image_1"},
                    {label:"Image_2", value:"Image_2"},
                    {label:"Image_3", value:"Image_3"},
                    {label:"Image_4", value:"Image_4"},
                    {label:"Image_5", value:"Image_5"},
                    {label:"Image_6", value:"Image_6"},
                    {label:"Image_7", value:"Image_7"}
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                    height: 40,
                    borderRadius:20,
                    marginBottom: 10
                }}
                onOpen={() =>{
                    this.setState({dropdownHeight: 170});
                }}
                onClose={() =>{
                    this.setState({dropdownHeight: 40});
                }}
                style={{backgroundColor:"transparent"}}
                itemStyle={{
                    justifyContent: "flex-start"
                }}
                dropDownstyle={{backgroundColor:"#2a2a2a"}}
                labelStyle={{
                    color: "white"
                }}
                arrowStyle={{
                    color: "white"
                }}
                onChangeItem={item =>
                this.setState({
                    previewImage: item.value
                })
                }
                />
                 <View style={styles.submitButton}>
                <Button
                  onPress={() => this.addPost()}
                  title="Submit"
                  color="#841584"
                />
              </View>
            </View>
            <TextInput
            style={styles.inputFont}
            onChangeText={caption => this.setState({caption})}
            placeholder={"Legenda"}
            placeholderTextColor="white"
            />
        </ScrollView>
       </View>
       <View style={{flex: 0.08}} />
    </View>
);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c",
    },
    droidSafeArea: {
      marginTop:
        Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row",
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center",
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans",
    },
    fieldsContainer: {
      flex: 0.85,
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain",
    },
    inputFont: {
      height: RFValue(40),
      marginTop: RFValue(40),
      borderColor: "white",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "white",
      fontFamily: "Bubblegum-Sans",
    },
    inputFontExtra: {
      marginTop: RFValue(15),
    },
    inputTextBig: {
      textAlignVertical: "top",
      padding: RFValue(5),
    },
    submitButton: {
      marginTop: RFValue(20),
      alignItems: "center",
      justifyContent: "center"
    }
  });