/* eslint quotes: 0 */
import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import SearchHeader from 'react-native-search-header';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 36,
        backgroundColor: '#0097a7'
    },
    header: {
        flexDirection: `row`,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 56,
        padding: 6,
        backgroundColor: '#00bcd4'
    },
    label: {
        flexGrow: 1,
        fontSize: 18,
        fontWeight: `600`,
        textAlign: `right`,
        paddingRight: 50,
        marginVertical: 8,
        paddingVertical: 3,
        color: `#f5fcff`,
        backgroundColor: `transparent`
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    }
});

class Example1 extends Component {
    constructor (props) {
        super(props);
        this.searchHeader = null;
    }
    render () {
        const component = this;
        const {
            navigation
        } = component.props;
        return (
            <View style = { styles.container }>
                <StatusBar barStyle = 'light-content' />
                <View style = { styles.status }/>
                <View style = { styles.header }>
                    <Text style = { styles.label } > Example 1 </Text>
                    <Button
                        title = 'Search'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.show()}
                    />
                    <Button
                        title = 'Next'
                        color = '#f5fcff'
                        onPress = {() => navigation.navigate(`example2`)}
                    />
                </View>
                <SearchHeader
                    ref = {(searchHeader) => {
                        component.searchHeader = searchHeader;
                    }}
                    placeholder = 'Search...'
                    placeholderColor = 'gray'
                    autoFocus = { true }
                    visibleInitially = { false }
                    persistent = { false }
                    enableSuggestion = { true }
                    entryAnimation = 'from-right-side'
                    topOffset = { 36 }
                    iconColor = 'gray'
                    iconImageComponents = {[{
                        name: `hide`,
                        customStyle: {
                            tintColor: 'red'
                        }
                    }]}
                    onClear = {() => {
                        console.log(`CLEAR`);
                    }}
                    onGetAutocompletions = {async (text) => {
                        if (text) {
                            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                method: `get`
                            });
                            const data = await response.json();
                            return data[1];
                        } else { // eslint-disable-line
                            return [];
                        }
                    }}
                    onEnteringSearch = {(event) => {
                        console.log(event.nativeEvent.text);
                    }}
                    onSearch = {(event) => {
                        console.log(event.nativeEvent.text);
                    }}
                    style = {{
                        header: {
                            height: 56,
                            backgroundColor: `#fdfdfd`
                        }
                    }}
                />
                <View style = { styles.button }>
                    <Button
                        title = 'Show'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.show()}
                    />
                </View>
                <View style = { styles.button }>
                    <Button
                        title = 'Hide'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.hide()}
                    />
                </View>
                <View style = { styles.button }>
                    <Button
                        title = 'Clear'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.clear()}
                    />
                </View>
                <View style = { styles.button }>
                    <Button
                        title = 'Clear'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.clear()}
                    />
                </View>
                <View style = { styles.button }>
                    <Button
                        title = 'Next'
                        color = '#f5fcff'
                        onPress = {() => navigation.navigate(`example2`)}
                    />
                </View>
            </View>
        );
    }
}

class Example2 extends Component {
    constructor (props) {
        super(props);
        this.searchHeader = null;
    }
    render () {
        const component = this;
        const {
            navigation
        } = component.props;
        return (
            <View style = { styles.container }>
                <StatusBar barStyle = 'light-content' />
                <View style = { styles.status }/>
                <View style = { styles.header }>
                    <Button
                        title = 'Prev'
                        color = '#f5fcff'
                        onPress = {() => navigation.goBack()}
                    />
                    <Text style = { styles.label } > Example 2 </Text>
                    <Button
                        title = 'Search'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.show()}
                    />
                </View>
                <SearchHeader
                    ref = {(searchHeader) => {
                        component.searchHeader = searchHeader;
                    }}
                    placeholder = 'Search...'
                    placeholderColor = 'gray'
                    dropShadowed = { false }
                    autoFocus = { true }
                    visibleInitially = { true }
                    persistent = { false }
                    enableSuggestion = { true }
                    entryAnimation = 'from-left-side'
                    topOffset = { 36 }
                    iconColor = 'gray'
                    iconImageComponents = {[{
                        name: `hide`,
                        customStyle: {
                            tintColor: 'red'
                        }
                    }]}
                    onClear = {() => {
                        console.log(`CLEAR`);
                    }}
                    onGetAutocompletions = {async (text) => {
                        if (text) {
                            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                method: `get`
                            });
                            const data = await response.json();
                            return data[1];
                        } else { // eslint-disable-line
                            return [];
                        }
                    }}
                    onEnteringSearch = {(event) => {
                        console.log(event.nativeEvent.text);
                    }}
                    onSearch = {(event) => {
                        console.log(event.nativeEvent.text);
                    }}
                    style = {{
                        header: {
                            height: 48,
                            backgroundColor: `#fdfdfd`
                        },
                        input: {
                            borderRadius: 4,
                            backgroundColor: `#b2c9d4`
                        }
                        // suggestion: {
                        //     backgroundColor: `red`
                        // }
                    }}
                />
                <View style = { styles.button }>
                    <Button
                        title = 'Show'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.show()}
                    />
                </View>
                <View style = { styles.button }>
                    <Button
                        title = 'Hide'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.hide()}
                    />
                </View>
                <View style = { styles.button }>
                    <Button
                        title = 'Clear'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.clear()}
                    />
                </View>
                <View style = { styles.button }>
                    <Button
                        title = 'Clear'
                        color = '#f5fcff'
                        onPress = {() => component.searchHeader.clear()}
                    />
                </View>
                <View style = { styles.button }>
                    <Button
                        title = 'Prev'
                        color = '#f5fcff'
                        onPress = {() => navigation.goBack()}
                    />
                </View>
            </View>
        );
    }
}


const ExampleStackNavigator = createStackNavigator({
    example1: {
        screen: ({
            navigation
        }) => {
            return (
                <Example1 navigation = { navigation }/>
            );
        },
        navigationOptions: () => {
            return {
                header: {
                    visible: true
                }
            };
        }
    },
    example2: {
        screen: ({
            navigation
        }) => {
            return (
                <Example2 navigation = { navigation }/>
            );
        },
        navigationOptions: () => {
            return {
                header: {
                    visible: true
                }
            };
        }
    }
}, {
    initialRouteName: `example1`,
    mode: `card`,
    headerMode: `none`,
    cardStyle: {
        backgroundColor: `transparent`
    }
});

const AppContainer = createAppContainer(ExampleStackNavigator);

export default class Demo extends Component {
    constructor (props) {
        super(props);

        this.refCache = {
            searchHeader1: null,
            searchHeader2: null
        };
    }
    render () {
        const component = this;
        return (
            <AppContainer
                screenProps = {{
                    component
                }}
            />
        );
    }
}
