import React, {Component} from 'react';
import Footer from '../../components/Footer/';
import {NavigationDrawer} from 'react-md/lib/NavigationDrawers/index';
import {FontIcon, SelectField} from 'react-md/lib/index';
import {Menu, MenuButton} from 'react-md/lib/Menus/index';
import {ListItem} from 'react-md/lib/Lists/index';
import {IndexLink, Link} from 'react-router';
import PropTypes from 'prop-types';

const TITLES = ['ESTCube-2', 'Testcube-2'];
const titleMenu = (
    <SelectField
        key="titleMenu"
        id="titles"
        menuItems={TITLES}
        defaultValue={TITLES[0]}
    />
);

const mb = <MenuButton
    id="button-menu"
    label="AOS in 00:34"

    raised
    className="menu-example aos"
    position={Menu.Positions.BELOW}

>
    <ListItem primaryText="AOS in 00:34" secondaryText="Tartu GS"/>
    <ListItem primaryText="AOS in 00:45" secondaryText="Tõravere GS"/>
    <ListItem primaryText="AOS in 2:45" secondaryText="Ventspils"/>
    <ListItem primaryText="AOS in 83:11" secondaryText="Tartu GS"/>

</MenuButton>;

function isActive(to, path) {
    return to === path;
}

class Full extends Component {
    render() {
        const {
            location: {pathname},
            children,
        } = this.props;

        return (
            <NavigationDrawer
                // defaultVisible={true}
                mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                toolbarActions={[mb]}
                toolbarTitleMenu={titleMenu}

                defaultVisible={false}
                navItems={[{
                    component: IndexLink,
                    to: '/',
                    active: isActive('/', pathname),
                    primaryText: 'Dashboard',
                    leftIcon: <FontIcon>home</FontIcon>,
                }, {
                    component: Link,
                    to: '/com',
                    active: isActive('/com', pathname),
                    primaryText: 'Page 1',
                    leftIcon: <FontIcon>bookmark</FontIcon>,
                }, {
                    component: Link,
                    to: '/terminal',
                    active: isActive('/terminal', pathname),
                    primaryText: 'Page 2',
                    leftIcon: <FontIcon>donut_large</FontIcon>,
                }]}
            >
                {children ? React.cloneElement(children, {key: pathname}) : null}
                <Footer/>
            </NavigationDrawer>
        );
    }
}

Full.propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
};

export default Full;
