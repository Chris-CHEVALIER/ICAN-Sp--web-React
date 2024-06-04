import { AppleOutlined } from '@ant-design/icons'
import './App.css'
import Restaurant from './components/Restaurant'
import { Button } from 'antd'
import HomeButton from './components/HomeButton'
import Home from './components/Home'

export default function App () {
  return (
    <div>
      <Home />
      <Restaurant />
      <HomeButton
        color='dodgerblue'
        myStyle={{ fontSize: '25px', color: 'black' }}
      >
        Cliquez-moi {<AppleOutlined />}
      </HomeButton>
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
