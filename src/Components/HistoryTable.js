import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { GetHistory } from '../GameLogic/helpers';

const TableComponent = () => {
    const [data, setData] = useState([]);
    const [top, setTop] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const sortedData = (await GetHistory()).sort((a, b) => a.number - b.number);
            const slicedDataTop = sortedData.slice(0, 3);
            const slicedData = sortedData.slice(0, 10);
            setData(slicedData);
            setTop(slicedDataTop)
        } catch (error) {
            console.error('Wystąpił błąd podczas pobierania danych:', error);
        }
    };

    return (
        <>
            <Text style={styles.title}>TOP 3</Text>
            <View style={styles.container}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>NickName</Text>
                    <Text style={styles.tableHeader}>Word</Text>
                    <Text style={styles.tableHeader}>number of tries</Text>
                </View>
                {top.map((item, index) => (
                    <View style={styles.tableRow} key={index}>
                        <Text style={styles.tableCell}>{item.who}</Text>
                        <Text style={styles.tableCell}>{item.word}</Text>
                        <Text style={styles.tableCell}>{item.number}</Text>
                    </View>
                ))}
            </View>
            <Text style={styles.title}>Ranking</Text>
            <View style={styles.container}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>NickName</Text>
                    <Text style={styles.tableHeader}>Word</Text>
                    <Text style={styles.tableHeader}>number of tries</Text>
                </View>
                <ScrollView>
                {data.map((item, index) => (
                     
                    <View style={styles.tableRow} key={index}>
                        <Text style={styles.tableCell}>{item.who}</Text>
                        <Text style={styles.tableCell}>{item.word}</Text>
                        <Text style={styles.tableCell}>{item.number}</Text>
                    </View>
                   
                ))}
                 </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5FCFF',
    },
    tableRow: {
        backgroundColor: '#C0C0C0',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        marginBottom: 8,
    },
    tableHeader: {

        fontWeight: 'bold',
        fontSize: 16,
    },
    tableCell: {
        paddingLeft: 10,
        width: "25%",
        fontSize: 16,
    },
});

export default TableComponent;
