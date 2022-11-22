import { Breadcrumb } from 'antd'
import { Content } from 'antd/lib/layout/layout'

function Home() {
  return (
    <Content style={{ margin: '0 16px', minHeight: '90vh' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <h1>Select a launch in the left side</h1>
      </div>
    </Content>
  )
}

export default Home
