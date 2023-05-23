import { StyleSheet, Text, View ,Button , StatusBar} from 'react-native';
import TableComponent from '../Components/HistoryTable';

const styles = StyleSheet.create({
    container: {
     fontSize:20,
     padding:6
    },
    
    
  });
const HistoryPage = ({navigator}) =>{
    return(
    <>
    <TableComponent></TableComponent>
    </>)
}


export default HistoryPage;