/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react'
import { LaunchListQuery } from '../../generated/graphql'

import { RocketOutlined, HomeOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Sider } = Layout

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

type MenuItem = Required<MenuProps>['items'][number]
export interface OwnProps {
  handleIdChange: (newId: number) => void
}

interface Props extends OwnProps {
  data: LaunchListQuery
}

const SideMenu = ({ data, handleIdChange }: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  const subItems = data.launches?.map((launch, i) =>
    getItem(
      `${launch?.mission_name} ${launch?.launch_year}`,
      `${i}-${launch?.flight_number}`
    )
  )

  const items: MenuItem[] = [
    getItem('Home', 'home', <HomeOutlined />),
    getItem('Launches', 'launches', <RocketOutlined />, subItems),
  ]

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'home') {
      navigate('/')
      return
    }

    const flightNumber = e.key.split('-')
    const id = Number(flightNumber[1])
    handleIdChange(id)
    navigate(`launches/${id}`)
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        onClick={onClick}
      />
    </Sider>
  )
}

export default SideMenu
