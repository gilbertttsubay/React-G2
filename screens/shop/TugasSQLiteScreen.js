import React, { useState, useEffect, useCallback, Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet, RefreshControl
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import * as productsActions from '../../store/actions/products';
import Colors from '../../constants/Colors';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

import SQlite from 'react-native-sqlite-storage'
import { Container, Header, Title, Content, Body} from 'native-base';

let db;
class TugasSQLiteScreen extends Component {
    constructor(props) {
        super(props);
        var SQLite = require('react-native-sqlite-storage');
       var db = SQLite.openDatabase({
            name:'users.db',
            createFromLocation:1},
            this.successToOpenDB,
            this.failToOpenDB
        )
    }

    // successToOpenDB(){
    //     alert('success')

    // }

    // failToOpenDB(err){
    //     console.log(err)
    // }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>

                <Content>
                    <Text>This is content</Text>
                </Content>
            </Container>
        );
    }
}

TugasSQLiteScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Tugas React Native',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default TugasSQLiteScreen;
