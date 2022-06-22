import React from 'react';
import {
  MaterialCommunityIcons, MaterialIcons, Fontisto, SimpleLineIcons, Entypo, Ionicons,
} from '@expo/vector-icons';

export const screen1Data = [
  {
    id: '1',
    fullName: 'Change password',
    Icon: (
      <MaterialCommunityIcons
        name="form-textbox-password"
        size={25}
        p="6"
      />
    ),
  },
  {
    id: '2',
    fullName: 'General',
    Icon: (
      <MaterialIcons name="account-balance" size={25} p="6" />
    ),
  },
  {
    id: '3',
    fullName: 'Manage Accounts',
    Icon: (
      <MaterialCommunityIcons
        name="account-cog"
        size={25}
        p="6"
      />
    ),
  },
  {
    id: '4',
    fullName: 'Language',
    language: 'English',
    Icon: <Fontisto name="language" size={25} p="6" />,
  },
  {
    id: '5',
    fullName: 'Linked Accounts',
    Icon: (
      <MaterialCommunityIcons
        name="target-account"
        size={25}
        p="6"
      />
    ),
  },
  {
    id: '6',
    fullName: 'Disable Accounts',
    Icon: (
      <MaterialCommunityIcons
        name="account-off-outline"
        size={25}
        p="6"
      />
    ),
  },
];

// Screen3data
export const screen3Data = [
  {
    id: '1',
    fullName: 'Contacts',
    Icon: (
      <SimpleLineIcons
        name="user"
        size={25}
        p="6"
      />
    ),
  },
  {
    id: '2',
    fullName: 'Groups',
    Icon: (
      <Entypo name="users" size={25} p="6" />
    ),
  },
  {
    id: '3',
    fullName: 'Notification',
    Icon: (
      <MaterialIcons
        name="notifications"
        size={30}
        p="6"
      />
    ),
  },
  {
    id: '4',
    fullName: 'Order',
    language: 'English',
    Icon: <Entypo name="shopping-bag" size={25} p="6" />,
  },
  {
    id: '5',
    fullName: 'Settings',
    Icon: (
      <Ionicons
        name="settings"
        size={25}
        p="6"
      />
    ),
  },
  {
    id: '6',
    fullName: 'Privacy policies',
    Icon: (
      <MaterialIcons
        name="privacy-tip"
        size={25}
        p="6"
      />
    ),
  },
  {
    id: '7',
    fullName: 'Refer and Earn',
    Icon: (
      <Entypo
        name="share"
        size={25}
        p="6"
      />
    ),
  },
];

// order timeline data
export const timeline = [{
  title: 'Order Placed',
  info: 'We have received your order on 28-May-2021.5:38 pm',
  time: '5:38 pm',
  isChecked: true,
},
{
  title: 'Order Packed',
  info: 'Seller has processed your order on 29th. Your item has been picked up by courier partner on 30 May-2021.5:38 pm',
  isChecked: true,
  time: '5:38 pm',
},
{
  title: 'Shipped',
  info: 'Your item has been picked up not yet shipped.',
  isChecked: false,
},
{
  title: 'Out For Delivery',
  info: 'Your order is out for delivery.',
  isChecked: false,
  isLast: true,
},
];

export const screen4data = [{
  id: '1',
  companyName: 'Company Name',
  investment: 'Investment',
  currentValue: 'Current Value',
  returns: 'Returns',
}, {
  id: '2',
  companyName: 'Aditya Birla Sun Life Flexi Cap- Fund',
  investment: '$50,000',
  currentValue: '$4,351.50',
  returns: '14%',
}, {
  id: '3',
  companyName: 'Aditya Birla Sun Life Flexi Cap- Fund',
  investment: '$50,000',
  currentValue: '$4,351.50',
  returns: '14%',
}, {
  id: '4',
  companyName: 'Aditya Birla Sun Life Flexi Cap- Fund',
  investment: '$50,000',
  currentValue: '$4,351.50',
  returns: '14%',
}, {
  id: '5',
  companyName: 'Aditya Birla Sun Life Flexi Cap- Fund',
  investment: '$50,000',
  currentValue: '$4,351.50',
  returns: '14%',
}];
