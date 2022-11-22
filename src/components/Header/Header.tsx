import styled from 'styled-components'
import { Layout, Input } from 'antd'
import { QUERY_LAUNCH_LIST } from './query'
import { Spin } from 'antd'

import { useLazyQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
const { Search } = Input
const { Header } = Layout

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: inherit;
  height: inherit;
`

export interface Props {
  handleIdChange: (newId: number) => void
}

function HeaderTop({ handleIdChange }: Props) {
  const [getLaunches, { loading }] = useLazyQuery(QUERY_LAUNCH_LIST)
  const navigate = useNavigate()

  const onSearch = (value: string) => {
    getLaunches().then((res) => {
      if (loading) return <Spin />

      const launchFound = res.data?.launches?.find(
        (launch: { mission_name: string }) =>
          launch?.mission_name?.toLowerCase() === value.toLowerCase()
      )

      const id = launchFound?.flight_number

      if (id) {
        handleIdChange(id)
        navigate(`launches/${id}`)
      } else {
        alert('Mission not found')
      }
    })
  }

  return (
    <Header className="site-layout-background" style={{ padding: '0 15px' }}>
      <Wrapper>
        <Search
          style={{ width: 250 }}
          placeholder="Mission name"
          enterButton="Search"
          size="middle"
          onSearch={onSearch}
          loading={false}
        />
      </Wrapper>
    </Header>
  )
}

export default HeaderTop
