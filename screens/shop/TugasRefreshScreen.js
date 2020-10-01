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
class TugasRefreshScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoading : false,
            page:1
        }
    }

    componentDidMount(){
      this.getData()
    }

    getData = () => {
        let apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=" + this.state.page
        this.setState({
            isLoading: true
        })
        fetch(apiUrl).then(res => res.json().then(
            res => {
                this.setState({items: res})
            }
        ).finally(() => this.setState({isLoading: false, page: this.state.page + 1})))
    }

    renderRow = ({item, index}) => {
        return (
            <View>
                <Text>
                    {item.title}
                </Text>
            </View>
        )
    }


    

    render() {
        let {items, isLoading} = this.state
        return (
            <View style={{flex: 1,marginTop:60}}>
                <FlatList
                data = {this.state.items}
                renderItem = {this.renderRow}
                keyExtractor = {(i, k) => k.toString()}
                refreshing= {isLoading}
                onRefresh= {this.getData}
                />
            </View>
        );
    }
}

TugasRefreshScreen.navigationOptions = navData => {
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

export default TugasRefreshScreen;
