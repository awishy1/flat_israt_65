
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const courses = [
    {
      id:1,
      name:'rose 1'
    },
    {
      id:2,
      name: 'lilly 2'
    },
    {
      id:3,
      name: 'tulip 3'
    },
    {
      id: 4,
      name: 'orchid 4'
    },
    {
      id: 5,
      name: 'poppy 5'
    },
    {
      id: 6,
      name: 'sunflower 6'
    },
    {
      id: 7,
      name: 'lotus 7'
    },
    {
      id: 8,
      name: 'black rose 8'
    },
    {
      id: 9,
      name: 'dahlia 9'
    }
  ]
  const onecourse = ({item})=>(
    <View style= {styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  )

  const listHeader = () => 
  {
    return <Text style={styles.headerText}>israt flat list</Text>
  }

  const itemSeparator = () => {
    return <View style={styles.separator}/>
  
  }
  
  return (
    <SafeAreaView>
     <FlatList
     ListHeaderComponentStyle={styles.listHeader}
     ListHeaderComponent={listHeader}
     data={courses}
     renderItem= {onecourse}
     ItemSeparatorComponent = { itemSeparator }
     ListEmptyComponent = {<Text>This is a flat list</Text>}
    
     />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  
  {
    
    listHeader:{
      marginTop: 100,
 height: 55,
 alignItems: 'center',

 justifyContent: 'center',
 
    },
    headerText:{
      fontWeight: '600',
      fontSize: 26,
      color: 'black',
      
    },
    item:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 13,
      backgroundColor:"white",
      margin:10
      
    },
    name:{
      fontWeight: '600',
      fontSize: 25,
      marginLeft: 13,
      color:"blue"
      
  
    },
 separator: {
  color: '#000000',
  height:1,
  width: '100%',
  backgroundColor: '#ccc'
 }
});