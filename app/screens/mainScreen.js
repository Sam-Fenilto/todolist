import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Task from "../components/task";

function mainScreen(props) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            {/*Todays Task*/}
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's List</Text>
                <View style={styles.items}>
                    {/** This Is Where The Task Will Be */}
                    <Task />
                    <Task />
                    <Task />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#e8eaed",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: "bold",
    },
    items: {
        marginTop: 50,
    },
});

export default mainScreen;
