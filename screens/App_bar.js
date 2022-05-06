import { View, Text ,Image} from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name='bars' size={30} color="black" />;

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function App_bar() {
  const hello =()=>{
    console.log("hello");
  }
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (

    <Appbar.Header style={styles.bottom}>
    <Appbar.Action icon={ require('../images/bar2.png') } size={17} onPress={hello}  />
    {/* <Appbar.Content style={{ backgroundColor:"yellow"}} title="Title" subtitle="Subtitle" /> */}
    <Image
    source={require('../images/logo.png')}
    resizeMode='center'
    height={"5%"}
    />
    <Appbar.Action icon="magnify" onPress={_handleSearch} />
    <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
  </Appbar.Header>
    // <Appbar.Header >
      
          
    //   <Appbar.Action icon={ require('../images/bar2.png') } size={17} onPress={hello}  />
        
    //     <Appbar.Action icon="magnify" onPress={hello} />
    //     <Appbar.Action icon={MORE_ICON} onPress={hello} />
    // </Appbar.Header>
    
    
  )
}

const styles = StyleSheet.create({
    bottom: {
      
      backgroundColor:'black',
      paddingVertical:15 ,
      flexDirection:'row',
      justifyContent:'space-between'
    }
  });