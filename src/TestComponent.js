import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import {GridList, GridTile} from 'material-ui/GridList';
import Checkbox from 'material-ui/Checkbox';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class TestComponent extends React.Component{

    render(){

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
            }
            
        };

        const tilesData = [];

        for( var i = 0; i < 100; i++){
            
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

        return(
            <div style={styles.root}>
                <AppBar title="TODO List">
                    <FlatButton label="Secondary" style={styles.flatButton} />
                </AppBar>
                {listComponent()}
            </div>
        );
    }
}

export default TestComponent;