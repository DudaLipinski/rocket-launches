import { useState } from 'react'
import { LaunchListQuery } from '../../generated/graphql'
import {
  RocketOutlined,
  HomeOutlined,
  CalendarOutlined,
} from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

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

export interface OwnProps {
  handleIdChange: (newId: number) => void
}

interface Props extends OwnProps {
  data: LaunchListQuery
}

interface LaunchesGroupedByYear {
  [launchYear: number]: LaunchListQuery['launches']
}

const SideMenu = ({ data }: Props) => {
  const [collapsed, setCollapsed] = useState(true)
  const navigate = useNavigate()

  const launchesGroupedByYear = data.launches?.reduce<LaunchesGroupedByYear>(
    function (acc, currentLaunch) {
      if (!currentLaunch || !currentLaunch.launch_year) {
        return acc
      }

      const { launch_year } = currentLaunch

      if (!acc[launch_year]) {
        acc[launch_year] = []
      }

      acc[launch_year]?.push(currentLaunch)

      return acc
    },
    {}
  )

  const arrLaunchesGroupedByYear = Object.entries(
    launchesGroupedByYear ? launchesGroupedByYear : 0
  )

  const subItemsByYear = arrLaunchesGroupedByYear.map((launchesByYear) => {
    const arrLaunches: LaunchListQuery['launches'] = Object.values(
      launchesByYear[1]
    )

    const launchItem = arrLaunches.map((launch) => {
      return getItem(
        launch?.mission_name,
        `launches/${launch?.flight_number}/${launch?.mission_name}`
      )
    })

    return getItem(
      launchesByYear[0],
      launchesByYear[0],
      <CalendarOutlined />,
      launchItem
    )
  })

  const items: MenuItem[] = [
    getItem('Home', 'home', <HomeOutlined />),
    getItem('Launches', 'launches', <RocketOutlined />, subItemsByYear),
  ]

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }

  return (
    <Sider>
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
