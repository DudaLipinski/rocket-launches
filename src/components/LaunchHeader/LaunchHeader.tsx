import styled from 'styled-components'
import { Layout, Input } from 'antd'
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

function LaunchHeader() {
  const onSearch = (value: string) => console.log(value)

  return (
    <Header className="site-layout-background" style={{ padding: '0 15px' }}>
      <Wrapper>
        <Search
          style={{ width: 300 }}
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          loading={false}
        />
      </Wrapper>
    </Header>
  )
}

export default LaunchHeader
