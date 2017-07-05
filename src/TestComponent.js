import React from 'react';
import AppBar from 'material-ui/AppBar';

import {GridList, GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';


import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

function addAppBarTap(){
    console.log('addAppBarTap');
    alert('addAppBarTap');
};


class TestComponent extends React.Component{

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    

    render(){

        const addItemAction = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                overflowY: 'auto',
                height : 500,
                width : '100%',
                marginTop: 2
            },
            flatButton : {
                margin: 12
            }, gridTile : {
                backgroundColor : '#cccccc'
            }, paper : {
                margin: 20,
                display: 'inline-block',
            }, contentAdd : {
                marginLeft: -28,
                zIndex : 100,
                position: 'absolute',
                marginTop : 380,
            }
            
        };

        const tilesData = [];

        for( var i = 0; i < 30; i++){
            
            tilesData.push({
                  id : i
                , title : 'title' + i
                , contents : 'contents' + i
            });
        }

        const gridComponent = () => (
            <GridList
                cellHeight={50}
                style={styles.gridList}
                cols={1}>
                {tilesData.map((tile) => (
                    <GridTile key={tile.id} style={styles.gridTile}>
                        <Checkbox
                            label={tile.title}
                            style={styles.checkbox}
                        />
                    </GridTile>
                ))}
            </GridList>
        );

        const listItemSubMenu = () => (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Send feedback" />
                    <Divider />
                    <MenuItem primaryText="Settings" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
            </IconMenu>
        );

        const listComponent = () => (
            <div style={styles.gridList}>
                <List>
                    <Subheader>TODO List</Subheader>
                    <div style={{textAlign : 'center'}}>
                        <FloatingActionButton style={styles.contentAdd} zDepth={2}>
                            <ContentAdd/>
                        </FloatingActionButton>
                    </div>  
                    {tilesData.map((item) => (
                        <ListItem
                            key={item.id} 
                            primaryText={item.title}
                            leftCheckbox={<Checkbox/>}
                            nestedItems={[
                                <ListItem key={1} rightIconButton={listItemSubMenu()}>
                                    <div>{item.contents}aa<br/>{item.contents}</div>
                                </ListItem>
                            ]}
                            />
                    ))}
                </List>
                <Divider />
            </div>
        );

        const addItemButton = () => (
            <FlatButton 
                label="Add" 
                onTouchTap={this.handleOpen}
            />
        );

        const addItemDialog = () => (
            <div>                
                <Dialog
                title="+ What do you want to do ?"
                actions={addItemAction}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
                >
                <TextField 
                    hintText="오늘은 꼭~ React 마스터!!"
                    fullWidth={true}
                />
                <TextField 
                    hintText="아침먹고 공부! 점심먹고 공부! 저녁먹고 공부! 자기전에 공부!"
                    fullWidth={true}
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                />
                </Dialog>
            </div>
        );

        return(
            <div style={styles.root}>
                <AppBar 
                    title="TODO List" 
                    iconElementLeft={<div/>}
                    iconElementRight={addItemButton()}
                />
                {listComponent()}
                {addItemDialog()}
            </div>
        );
    }
}

export default TestComponent;