import { Tabs } from 'antd'
import React from 'react'
import TabItem from '../TabItem'


export default function Game() {
    return (
        <div className='game-tab'>
            
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Lucky number" key="1">
                    <TabItem />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Lucky PP" key="2">
                  sdfdf
                </Tabs.TabPane>
                <Tabs.TabPane tab="Lucky Bull" key="3">
                   sfdfsdf
                </Tabs.TabPane>
            </Tabs>

 
        </div>
    )
}
