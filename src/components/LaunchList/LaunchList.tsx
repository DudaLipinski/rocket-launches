/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react'
import { LaunchListQuery } from '../../generated/graphql'

import { RocketOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
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

const LaunchList = ({ data, handleIdChange }: Props) => {
  const [collapsed, setCollapsed] = useState(true)

  const subItems = data.launches?.map((launch, i) =>
    getItem(
      `${launch?.mission_name} ${launch?.launch_year}`,
      `${i}-${launch?.flight_number}`
    )
  )

  const items: MenuItem[] = [
    getItem('Launches', 'sub1', <RocketOutlined />, subItems),
  ]

  const onClick = (e: any) => {
    const flightNumber = e.key.split('-')
    handleIdChange(flightNumber[1])
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

export default LaunchList
