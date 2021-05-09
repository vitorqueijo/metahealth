import React from "react";
import  { Text, StyleSheet } from "react-native";


const HeaderText = (props) => 
{
    return (
        <Text style={styles.baseText}>
            <Text style={styles.titleText}>
                {props.titleText}
            </Text>
            <Text numberOfLines={20}>{props.bodyText}</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    titleText: {
        color: "#ffffff",
        textAlign: "left",
        fontFamMain: 'space-grotesk, sans-serif',
        fontFamMono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New" monospace',
        lineHtMain: '1.5',
        lineHtMono: '1'
    },
    baseText: {
        color: "#D296D2",
        textAlign: "center",
        fontFamMain: 'space-grotesk, sans-serif',
        fontFamMono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New" monospace',
        lineHtMain: '2.5',
        lineHtMono: '1.5'
    }
});

export default HeaderText();