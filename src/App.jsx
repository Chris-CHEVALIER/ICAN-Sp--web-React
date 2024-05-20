import { AppleOutlined } from '@ant-design/icons'
import './App.css'
import Restaurant from './components/Restaurant'
import { Button } from 'antd'

export default function App () {
  return (
    <div>
      <Restaurant />
      <Button
        type='primary'
        target='_blank'
        href='https://ant.design/docs/react/introduce'
        icon={<AppleOutlined />}
      >
        Ant Design
      </Button>
    </div>
  )
}
