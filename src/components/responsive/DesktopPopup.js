import React from 'react'
import { Link } from 'react-router-dom'

import ArrowRightImage from '../../images/icon-arrow-right.svg'

import {
   Image,
   Menu,
   Responsive,
   Segment,
   Visibility,
   List,
   Button,
   Loader,
   Popup
} from 'semantic-ui-react'

import LogoImage from '../../images/wallet.png'
import HelpImage from '../../images/icon-help.svg'
import AccountGreyImage from '../../images/icon-account-grey.svg'
import ArrowDownImage from '../../images/icon-arrow-down.svg'
import ContactsGreyImage from '../../images/icon-contacts-grey.svg'
import AuthorizedGreyImage from '../../images/icon-authorized-grey.svg'
import LogoutImage from '../../images/icon-logout.svg'
import ActivityImage from '../../images/icon-activity.svg'
import RecentImage from '../../images/icon-recent.svg'
import SendImage from '../../images/icon-send.svg'

import styled from 'styled-components'

const CustomPopup = styled(Popup)`
   &&& {
      padding: 0px;
      right: 12px !important;
      top: 50px !important;

      .account-dropdown {
         width: 290px;
         min-height: 100px;
         background-color: #f8f8f8;

         padding: 20px;

         .item {
            color: #999999;
         }

         .submenu {
            margin: -20px;
            padding: 20px;
            background: #fff;

            .icon {
               width: 20px;
            }
            .content {
               line-height: 26px;
               padding-left: 10px;
            }
            .item {
               margin: 4px 0;
            }
         }

         .switch-account {
            margin-top: 40px;
            margin-bottom: 0px;
         }

         &-scroll {
            max-height: 226px;
            overflow-y: auto;
            width: 270px;
            margin-top: 0px;

            > .item {
               width: 250px;
               margin: 0px;
               padding: 0px;

               :hover {
                  text-decoration: underline;
               }
               ::before {
                  display: none;
               }
               ::after {
                  display: none;
               }
            }
         }

         h6 {
            padding-bottom: 6px;
         }
         .account-title {
            height: 40px;
            line-height: 40px;
            color: #4a4f54;
            font-weight: 500;
            border-bottom: 2px solid #e6e6e6;
            letter-spacing: normal;

            text-overflow: ellipsis;
            overflow: hidden;
         }
         button {
            width: 100%;
            border-radius: 30px;
            background: #fff;
            color: #6ad1e3;

            :hover {
               background: #6ad1e3;
               color: #fff;
            }
         }
      }

      :hover {
         .account-dropdown {
            display: block;
         }
      }
   }
`

const DesktopPopup = ({
   account,
   handleSelectAccount,
   redirectCreateAccount
}) => (
   <CustomPopup
      trigger={
         <Menu.Menu position='right' className=''>
            <Menu.Item className='devider' />
            <Menu.Item className='account-img'>
               <Image src={AccountGreyImage} />
            </Menu.Item>
            <Menu.Item className='account-name'>
               {account.loader || !account.accountId ? (
                  <Loader active inline size='mini' />
               ) : (
                  `@${account.accountId}`
               )}
            </Menu.Item>
            <Menu.Item className='account-tokens'>
               {account.loader || !account.accountId ? (
                  <Loader active inline size='mini' />
               ) : (
                  account.amount
               )}
               <span className='near'>Ⓝ</span>
            </Menu.Item>
            <Menu.Item className='account-arrow'>
               <Image src={ArrowDownImage} />
            </Menu.Item>
         </Menu.Menu>
      }
      hoverable
      position='right center'
   >
      <Segment basic className='account-dropdown'>
         <List className='submenu'>
            <List.Item>
               <List.Icon as={Image} src={AccountGreyImage} />
               <List.Content as={Link} to='/profile'>
                  Profile
               </List.Content>
            </List.Item>
            <List.Item>
               <List.Icon as={Image} src={ContactsGreyImage} />
               <List.Content as={Link} to='/contacts'>
                  Contacts
               </List.Content>
            </List.Item>
            <List.Item>
               <List.Icon as={Image} src={AuthorizedGreyImage} />
               <List.Content as={Link} to='authorized-apps'>
                  Authorized Apps
               </List.Content>
            </List.Item>
            <List.Item>
               <List.Icon as={Image} src={LogoutImage} />
               <List.Content as={Link} to='/logout'>
                  Logout
               </List.Content>
            </List.Item>
         </List>
         <List className='switch-account'>
            <List.Item as='h6'>SWITCH ACCOUNT</List.Item>
         </List>
         <List className='account-dropdown-scroll'>
            {account.accounts &&
               Object.keys(account.accounts)
                  .filter(a => a !== account.accountId)
                  .map((account, i) => (
                     <List.Item
                        as='a'
                        key={`mf-${i}`}
                        onClick={() => handleSelectAccount(account)}
                        className='account-title'
                     >
                        @{account}
                     </List.Item>
                  ))}
         </List>
         <Button onClick={redirectCreateAccount}>CREATE NEW ACCOUNT</Button>
      </Segment>
   </CustomPopup>
)

export default DesktopPopup
