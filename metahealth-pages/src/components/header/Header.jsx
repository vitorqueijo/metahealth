import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";


const HeaderText = (title, subtitle) => 
{
    const [titleText, setTitle] = useState(title);
    const bodyText = useState(subtitle);

    return 
    (
        <Text style={styles.baseText}>
            <Text style={styles.titleText}>
                {"\n"}
            </Text>
            <Text numberOfLines={20}>{bodyText}</Text>
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