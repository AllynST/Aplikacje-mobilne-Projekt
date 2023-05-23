import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { GetHistory, TopThreeAvg } from '../GameLogic/helpers';
import styles, { colorPalette } from '../sharedStyles'

const TableComponent = () => {
    const [data, setData] = useState([]);
    const [top, setTop] = useState([]);
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const sortedData = (await GetHistory()).sort((a, b) => b.tries - a.tries);            
            
            setTop(TopThreeAvg(sortedData))
            const slicedData = sortedData.slice(0, 10);
            setData(slicedData);
            
        } catch (error) {
            console.error('Wystąpił błąd podczas pobierania danych:', error);
        }
    };

    return (
        <View style={[styles.backgroundColor,{flex:1,justifyContent:'center'}]}>
            <Text style={localStyles.title}>TOP 3</Text>
            <View style={localStyles.container}>
                <View style={localStyles.tableRow}>
                    <Text style={localStyles.tableHeader}>NickName</Text>                   
                    <Text style={localStyles.tableHeader}>Average win</Text>
                </View>
                {top.map((item, index) => (
                    <View style={localStyles.tableRow} key={index}>
                        <Text style={localStyles.tableCell}>{item[0]}</Text>                       
                        <Text style={localStyles.tableCell}>{item[1]}</Text>
                    </View>
                ))}
            </View>
            <Text style={localStyles.title}>Last games</Text>
            <View style={localStyles.container}>
                <View style={localStyles.tableRow}>
                    <Text style={localStyles.tableHeader}>NickName</Text>
                    <Text style={localStyles.tableHeader}>Word</Text>
                    <Text style={localStyles.tableHeader}>Tries</Text>
                </View>
                <ScrollView>
                {data.map((item, index) => (
                     
                    <View style={localStyles.tableRow} key={index}>
                        <Text style={localStyles.tableCell}>{item.name}</Text>
                        <Text style={localStyles.tableCell}>{item.word}</Text>
                        <Text style={localStyles.tableCell}>{item.tries}</Text>
                    </View>
                   
                ))}
                 </ScrollView>
            </View>
        </View>
    );
};

const localStyles = StyleSheet.create({
    title: {
        color:colorPalette.white,
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        padding: 16,
        
    },
    tableRow: {
        borderRadius:5,
        backgroundColor:colorPalette.white,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginBottom: 8,
    },
    tableHeader: {
        flex:1,
        textAlign:'center',
        padding:10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    tableCell: {
        flex:1,
        fontWeight:400,
        textAlign:'center',            
        fontSize: 16,
    },
});

export default TableComponent;
